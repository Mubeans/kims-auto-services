/* ==========================================================================
   Kim's Auto Services — site behaviour
   Progressive enhancement only. Every page is complete without this file.
   ========================================================================== */
(function () {
  'use strict';

  /* ----------------------------------------------------------------------
     Published schedule.
     Source: Yelp, Birdeye and directory listings for this business, which
     agree on Mon-Fri 8:00-18:00, Sat 9:00-15:00, Sun closed.
     Minutes from midnight. null = closed that day.
     If the owner confirms different hours, change this AND the <table>
     rows in index.html and visit.html.
     ---------------------------------------------------------------------- */
  var SCHEDULE = [
    null,            /* 0 Sunday    — closed */
    [480, 1080],     /* 1 Monday    — 8:00 AM to 6:00 PM */
    [480, 1080],     /* 2 Tuesday */
    [480, 1080],     /* 3 Wednesday */
    [480, 1080],     /* 4 Thursday */
    [480, 1080],     /* 5 Friday */
    [540, 900]       /* 6 Saturday  — 9:00 AM to 3:00 PM */
  ];

  var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var TZ = 'America/Chicago';

  /* ----------------------------------------------------------------------
     Shop-local time. Falls back to the visitor's own clock if the browser
     has no IANA time-zone data.
     ---------------------------------------------------------------------- */
  function shopNow() {
    var now = new Date();
    try {
      var p = new Intl.DateTimeFormat('en-US', {
        timeZone: TZ, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
      }).formatToParts(now);
      var get = function (t) {
        for (var i = 0; i < p.length; i++) { if (p[i].type === t) return p[i].value; }
        return null;
      };
      var wd = DAYS.indexOf(get('weekday'));
      var hh = parseInt(get('hour'), 10);
      var mm = parseInt(get('minute'), 10);
      if (wd < 0 || isNaN(hh) || isNaN(mm)) throw new Error('parse');
      if (hh === 24) hh = 0;
      return { day: wd, mins: hh * 60 + mm, exact: true };
    } catch (e) {
      return { day: now.getDay(), mins: now.getHours() * 60 + now.getMinutes(), exact: false };
    }
  }

  function clock(mins) {
    var h = Math.floor(mins / 60);
    var m = mins % 60;
    var ampm = h >= 12 ? 'PM' : 'AM';
    var h12 = h % 12; if (h12 === 0) h12 = 12;
    return h12 + ':' + (m < 10 ? '0' : '') + m + ' ' + ampm;
  }

  /* Next day (and its opening minute) that the shop is open. */
  function nextOpen(fromDay) {
    for (var i = 1; i <= 7; i++) {
      var d = (fromDay + i) % 7;
      if (SCHEDULE[d]) return { day: d, mins: SCHEDULE[d][0] };
    }
    return null;
  }

  function renderStatus() {
    var pills = document.querySelectorAll('[data-status]');
    if (!pills.length) return;

    var t = shopNow();
    var today = SCHEDULE[t.day];
    var state, text;

    if (today && t.mins >= today[0] && t.mins < today[1]) {
      state = 'open';
      text = 'Open now · Closes ' + clock(today[1]);
    } else if (today && t.mins < today[0]) {
      state = 'closed';
      text = 'Closed · Opens ' + clock(today[0]);
    } else {
      var n = nextOpen(t.day);
      state = 'closed';
      text = n ? 'Closed · Opens ' + DAYS[n.day] + ' ' + clock(n.mins) : 'Closed';
    }

    for (var i = 0; i < pills.length; i++) {
      var pill = pills[i];
      var label = pill.querySelector('[data-status-text]');
      if (label) label.textContent = text;
      pill.setAttribute('data-state', state);
      pill.removeAttribute('hidden');
      pill.setAttribute('title',
        'Based on hours published in third-party business listings, in the shop’s local time. Call to confirm.');
    }

    /* Highlight today's row in every hours table. */
    var tables = document.querySelectorAll('[data-hours]');
    for (var j = 0; j < tables.length; j++) {
      var rows = tables[j].querySelectorAll('tr[data-day]');
      for (var k = 0; k < rows.length; k++) {
        if (parseInt(rows[k].getAttribute('data-day'), 10) === t.day) {
          rows[k].setAttribute('data-today', '');
        } else {
          rows[k].removeAttribute('data-today');
        }
      }
    }
  }

  /* ----------------------------------------------------------------------
     Mobile navigation drawer
     ---------------------------------------------------------------------- */
  function initMenu() {
    var btn = document.querySelector('[data-menu]');
    var nav = document.getElementById('nav');
    if (!btn || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    btn.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        btn.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) setOpen(false);
    });

    setOpen(false);
  }

  /* ----------------------------------------------------------------------
     Scroll reveal — one short fade-and-rise, skipped under reduced motion
     ---------------------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add('is-in');
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    for (var j = 0; j < items.length; j++) io.observe(items[j]);
  }

  /* ---------------------------------------------------------------------- */
  function start() {
    initMenu();
    initReveal();
    renderStatus();
    setInterval(renderStatus, 60000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
