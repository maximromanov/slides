---
title: "Modeling the Social History of the Islamic World (c. 600–1600) from 600,000 Biographies"
event: "Lecture · Universität Hamburg · ESA West 221"
author: "Maxim Romanov"
affiliation: "Universität Hamburg · EIS1600"
date: "November 25, 2026 · 10:15–11:45"
unlisted: true
description: "A lecture on modeling the social history of the Islamic world from Arabic biographical collections."
logos:
  - img/logo-dfg.png
  - img/logo-uhh.png
  - img/logo-eis1600.png
---

<!-- reuse 2025-12-09-vienna:1 -->
--- full
![](img/2025-12-09-vienna--8e42f82a39.jpg)

<div class="overlay bl">“Any sufficiently advanced technology is indistinguishable from magic.” — Arthur C. Clarke</div>

--- title
Notes:
Modeling the Social History of the Islamic World (c. 600–1600) from 600,000 Biographies.

--- agenda max=44
# Structure

<i>History</i>: Vastness of Islamic Tradition
<i>Historiography</i>: “Golden Sample” Case Study
<i>Method</i>: Generative LLMs as assistants

Notes:
Three parts: history, historiography, and method.

--- text nofit
<!-- src: 2025-12-09-vienna:3 -->
# [EIS1600]<br> Evolution of Islamic Societies (c. 600-1600):<br> Algorithmic Analysis into Social History

<div style="text-align:center"><img src="img/2025-12-09-vienna--f24d4270cd.png" alt="" style="height:560px"></div>

--- text bkc nofit
<style>
.slide.bkc.current{display:flex;flex-direction:column;justify-content:center}
.bk{display:grid;grid-template-columns:470px 1fr;gap:80px;align-items:start;margin-top:10px}
.bk.two{grid-template-columns:700px 1fr;gap:60px}
.bk .cv img{width:470px;height:auto;display:block;box-shadow:0 10px 30px rgba(0,0,0,.18);border:1px solid rgba(0,0,0,.08)}
.bk .cv.pair{display:flex;gap:24px}
.bk .cv.pair img{width:338px}
.bk .yr{font-family:var(--f-mono);font-size:20px;letter-spacing:.16em;text-transform:uppercase;color:var(--red);margin:0 0 14px}
.bk .ttl{font-family:var(--f-head);font-weight:700;font-size:50px;line-height:1.12;color:var(--ink);margin:0;text-wrap:balance}
.bk .ttl small{display:block;font-weight:400;font-size:.62em;line-height:1.25;margin-top:8px;color:var(--ink)}
.bk .who{font-family:var(--f-text);font-size:32px;color:var(--ink);margin:18px 0 4px}
.bk .who.sm{font-size:25px;line-height:1.35}
.bk .pub{font-family:var(--f-ui);font-size:23px;color:var(--muted);margin:0}
.bk .pub i{font-style:italic}
.bk .facts{font-family:var(--f-text);font-size:31px;line-height:1.35;margin:34px 0 0;padding:0;list-style:none}
.bk .facts li{padding:10px 0;border-top:1px solid rgba(0,0,0,.12)}
.bk .facts li:last-child{border-bottom:1px solid rgba(0,0,0,.12)}
.bk .big{font-family:var(--f-head);font-weight:700;font-size:96px;line-height:1;color:var(--red);letter-spacing:-.02em}
.bk .big small{font-family:var(--f-ui);font-weight:400;font-size:26px;letter-spacing:0;color:var(--muted);margin-left:16px;vertical-align:middle}
.bk .take{font-family:var(--f-head);font-size:38px;line-height:1.25;color:var(--red);margin-top:30px;text-wrap:balance}
.found{margin-top:34px;padding:18px 26px;border-left:6px solid var(--red);background:#F7F6F2;font-family:var(--f-ui);font-size:24px;line-height:1.35;color:var(--ink)}
.found b{font-family:var(--f-mono);font-size:18px;letter-spacing:.14em;text-transform:uppercase;color:var(--red);font-weight:400;display:block;margin-bottom:4px}
.yrs{position:absolute;right:64px;top:44px;display:flex;gap:10px}
.yrs span{font-family:var(--f-mono);font-size:18px;letter-spacing:.12em;color:var(--muted);border:1px solid rgba(0,0,0,.18);border-radius:3px;padding:4px 12px}
.yrs span.on{color:#fff;background:var(--red);border-color:var(--red)}
</style>
<!-- slides 5 and 6 combined -->
<div class="bk">
<div class="cv"><img src="img/2026-11-16-dh-books-soa--romanov-2026-cover.png" alt="Cover of Digital Humanities for Arabic and Islamic Studies: A Proposition for the Field by Maxim Romanov (Brill, 2026)"></div>
<div>

<p class="yr">2026 · a proposition for the field</p>
<p class="ttl">Digital Humanities for Arabic and Islamic Studies: A Proposition for the Field</p>
<p class="who">Maxim Romanov</p>
<p class="pub">Handbook of Oriental Studies 199 · Leiden: Brill, 2026 · doi.org/10.1163/9789004760530</p>
<ul class="facts">
<li><b>Chapter 1:</b> Why we should even bother—a question that remains at the heart of every discussion about the digital.</li>
<li><b>Chapter 2:</b> How we might go about harnessing the new digital opportunities within the field.</li>
<li><b>Chapter 3:</b> What we can expect to accomplish: 1) trace term usage; 2) model textual typology; 3) chart linguistic evolution.</li>
</ul>
<p class="take" style="font-size:36px;font-style:italic">«What does it mean for our field when the entire library becomes a <span style="font-style:normal">vademecum</span> — something that, quite literally, “goes with me” everywhere?»</p>
</div>
</div>

--- section light partdiv
<style>
.slide.section.light.partdiv .pnum{font-family:var(--f-head);font-weight:700;font-size:240px;line-height:1;color:var(--red);margin:22px 0 4px;letter-spacing:-.02em}
.slide.partdiv h1{font-size:96px}
.slide.section.light.partdiv .kicker{margin-bottom:0;font-size:22px;letter-spacing:.3em}
</style>
<p class="kicker">Part</p>
<p class="pnum">1</p>
# Vastness of Islamic Tradition
<p>History</p>

--- text max=44
<!-- src: 2026-11-18-madrid:17 -->
# OpenITI <span class="small" style="font-weight:400"><a href="https://github.com/OpenITI">github.com/OpenITI</a></span>

<div class="stats">
<div class="stat"><b>8,700+</b><span>titles</span></div>
<div class="stat"><b>3,300+</b><span>authors</span></div>
<div class="stat"><b>2.4 billion</b><span>words, all versions</span></div>
</div>

<p class="small" style="text-align:center;color:var(--muted);margin-top:1.6em">Nigst, Lorenz, Maxim Romanov, Sarah Bowen Savant, Masoumeh Seydi, and Peter Verkinderen. <em>OpenITI: A Machine-Readable Corpus of Islamicate Texts, Primary Version.</em> Version 2025.1.9. Zenodo, 2026. <a href="https://doi.org/10.5281/zenodo.18613982">doi.org/10.5281/zenodo.18613982</a></p>

<!-- reuse 2025-12-09-vienna:7 -->
--- text
# OpenITI Corpus

1. Machine-readable texts;
2. *mARkdown* annotation scheme (flavors: OpenITI, EIS1600);
3. Machine-readable URIs and structure allows us to focus on:
    <ol type="a">
    <li><b>URI</b>: specific language (for now, mostly Arabic; Persian is growing);</li>
    <li><b>URI</b>: specific authors;</li>
    <li><b>URI</b>: different editions (versions) of a specific text;</li>
    <li><b>URI</b>: chronological periods;</li>
    <li><i>metadata:</i> religious communities — Sunnī, 12 Shīʿī, Zaydī, Ibāḍī, plus large subcommunities in Sunnī Islam (legal schools, Ṣūfīs, Salafīs, etc.);</li>
    <li><i>provisionally</i>: different types/“genres” (<i>computationally modelled</i>);</li>
    <li><i>nearest future (in šāʾa allãh)</i>: geographical regions;</li>
    </ol>

<!-- reuse 2025-12-09-vienna:8 -->
--- text
# How much is 1.05 billion tokens?

- equivalent to an English corpus of about 1.34 billion tokens (English translations are 15-23% longer than Arabic originals)
- ***Word Count per Book***: assuming each book contains about 90,000 words (300 words per page and 300 pages per book).
- ***Total Books Equivalent***: approximately 14,889 books.
- ***Library Size***: roughly 50 bookshelves (*ca. 300 books per shelf*).
- ***Physical Dimensions***: about 50 meters of shelf space (*1 meter per shelf*).

<div style="border:3px solid var(--red);padding:.1em .4em;margin-top:.2em" markdown="1">

- ***In Bibles***: approximately 1,711 copies of the Bible.
- ***In Qurʾāns***: about 17,403 copies of the Qurʾān.

</div>

--- figure
<!-- src: 2026-11-18-madrid:19 -->
![Chronological distribution of the volume of the OpenITI subcorpus](img/2026-11-18-madrid--2026-09-28-Cairo--fig-2-31-chronological-volume.png)

--- text max=44
<!-- src: 2026-11-18-madrid:56 -->
# EIS1600: biographies linked across collections

<div class="stats">
<div class="stat"><b>604,000</b><span>biographical records</span></div>
<div class="stat red"><b>≈140,000</b><span>identified individuals</span></div>
<div class="stat paper"><b>285</b><span>biographical collections</span></div>
</div>

- Approximately **104,000 individuals with explicit dates, geographies, and social profiles** (based on *nisbaŧ*s)
- Compare recorded lives across collections, regions, and periods

<p class="small muted" style="text-align:center">EIS1600 team · current project figures, November 2026</p>


<!-- reuse 2025-12-09-vienna:11 -->
--- text
# Arabic Biographical Collections

- **One of the major “genres” in Arabic written tradition;**
- **Structure**:
    - chronological, generational, alphabetical;
- **Coverage**:
    - professional, religious, regional groups; everyone (later);
- **Biographies**: well-structured short texts:
    - onomastic section; birth [date *&*] place; teachers, students, contribution, miscellaneous facts, death date *&* place, reaction of the community

<!-- from hamburg-lecture -->

--- text nm2 nofit

# Richness of Onomastics

<p class="nmtext all">ʿAbd al-Raḥmãn b. ʿAlī b. Muḥammad b. ʿUbayd Allãh b. ʿAbd Allãh b. Ḥamādá b. Muḥammad b. Jaʿfar b. ʿAbd Allãh b. al-Qāsim b. al-Naḍar b. al-Qāsim b. Muḥammad b. ʿAbd Allãh b. ʿAbd al-Raḥmãn b. al-Qāsim b. Muḥammad b. Abī Bakr al-Ṣiddīq <em>(may God be pleased with him!)</em> al-Qurašī al-Taymī al-Bakrī al-Baġdādī al-Ḥāfiẓ al-Mufassir al-Ḥanbalī al-Wāʿiẓ al-Ṣaffār, Jamāl al-Dīn, Abū al-Faraj, known as Ibn al-Jawzī (d. 597/1201 CE)</p>

<!-- reuse 2025-12-09-vienna:12 -->

--- text nm2 nofit
<style>
.slide.nm2 .nmtext{font-size:40px;line-height:1.5;color:#cbc6bc;margin:0}
.slide.nm2 > h1 ~ .nmtext,.slide.nmg > h1 ~ table{margin-top:auto;margin-bottom:auto}
.slide.nm2 .nmtext.all{color:var(--ink)}
.slide.nm2 .nmtext .k{color:var(--ink)}
.slide.nm2 .nmtext .r{color:var(--red)}
.slide.nm2 h1 em,.slide.nmg h1 em{color:var(--red)}
.slide.nmg table{font-size:34px;font-family:var(--f-text);width:100%}
.slide.nmg td{padding:.18em .5em;border-bottom:1px solid var(--rule-soft)}
.slide.nmg td:first-child{font-weight:400;white-space:nowrap}
.slide.nmg .r{color:var(--red)}
.slide.nmg .cat{color:var(--red);font-style:italic}
</style>
<!-- src: 2026-09-11-mainz-teaching:19 (rebuilt as text) -->
# Traditional Arabic Name: <em>1. Lineage (<i>nasab</i> <span class="ar" lang="ar" dir="rtl" style="font-size:1em;line-height:1">نسب</span>)</em>

<p class="nmtext">ʿAbd al-Raḥmãn <span class="r">b.</span> <span class="k">ʿAlī</span> <span class="r">b.</span> <span class="k">Muḥammad</span> <span class="r">b.</span> <span class="k">ʿUbayd Allãh</span> <span class="r">b.</span> <span class="k">ʿAbd Allãh</span> <span class="r">b.</span> <span class="k">Ḥamādá</span> <span class="r">b.</span> <span class="k">Muḥammad</span> <span class="r">b.</span> <span class="k">Jaʿfar</span> <span class="r">b.</span> <span class="k">ʿAbd Allãh</span> <span class="r">b.</span> <span class="k">al-Qāsim</span> <span class="r">b.</span> <span class="k">al-Naḍar</span> <span class="r">b.</span> <span class="k">al-Qāsim</span> <span class="r">b.</span> <span class="k">Muḥammad</span> <span class="r">b.</span> <span class="k">ʿAbd Allãh</span> <span class="r">b.</span> <span class="k">ʿAbd al-Raḥmãn</span> <span class="r">b.</span> <span class="k">al-Qāsim</span> <span class="r">b.</span> <span class="k">Muḥammad</span> <span class="r">b.</span> <span class="k">Abī</span> <span class="k">Bakr</span> <span class="k">al-Ṣiddīq</span> <em>(may God be pleased with him!)</em> al-Qurašī al-Taymī al-Bakrī al-Baġdādī al-Ḥāfiẓ al-Mufassir al-Ḥanbalī al-Wāʿiẓ al-Ṣaffār, Jamāl al-Dīn, Abū al-Faraj, known as Ibn al-Jawzī (d. 597/1201 CE)</p>

Notes:
The lineage (nasab): the chain of “son of” (b.) links back to the ancestors.

--- text nm2 nofit
<!-- src: 2026-09-11-mainz-teaching:20 (rebuilt as text) -->
# Traditional Arabic Name: <em>2. Given name (<i>ism</i> <span class="ar" lang="ar" dir="rtl" style="font-size:1em;line-height:1">اسم</span>)</em>

<p class="nmtext"><span class="k">ʿAbd al-Raḥmãn</span> b. ʿAlī b. Muḥammad b. ʿUbayd Allãh b. ʿAbd Allãh b. Ḥamādá b. Muḥammad b. Jaʿfar b. ʿAbd Allãh b. al-Qāsim b. al-Naḍar b. al-Qāsim b. Muḥammad b. ʿAbd Allãh b. ʿAbd al-Raḥmãn b. al-Qāsim b. Muḥammad b. Abī Bakr al-Ṣiddīq <em>(may God be pleased with him!)</em> al-Qurašī al-Taymī al-Bakrī al-Baġdādī al-Ḥāfiẓ al-Mufassir al-Ḥanbalī al-Wāʿiẓ al-Ṣaffār, Jamāl al-Dīn, Abū al-Faraj, known as Ibn al-Jawzī (d. 597/1201 CE)</p>

Notes:
The given name (ism): ʿAbd al-Raḥmãn.

--- text nm2 nofit
<!-- src: 2026-09-11-mainz-teaching:21 (rebuilt as text) -->
# Traditional Arabic Name: <em>3. “Father of …” (<i>kunyaŧ</i> <span class="ar" lang="ar" dir="rtl" style="font-size:1em;line-height:1">كنية</span>)</em>

<p class="nmtext">ʿAbd al-Raḥmãn b. ʿAlī b. Muḥammad b. ʿUbayd Allãh b. ʿAbd Allãh b. Ḥamādá b. Muḥammad b. Jaʿfar b. ʿAbd Allãh b. al-Qāsim b. al-Naḍar b. al-Qāsim b. Muḥammad b. ʿAbd Allãh b. ʿAbd al-Raḥmãn b. al-Qāsim b. Muḥammad b. <span class="r">Abī</span> <span class="k">Bakr</span> al-Ṣiddīq <em>(may God be pleased with him!)</em> al-Qurašī al-Taymī al-Bakrī al-Baġdādī al-Ḥāfiẓ al-Mufassir al-Ḥanbalī al-Wāʿiẓ al-Ṣaffār, Jamāl al-Dīn, <span class="r">Abū</span> <span class="k">al-Faraj</span>, known as Ibn al-Jawzī (d. 597/1201 CE)</p>

Notes:
The kunyaŧ, “father of …”: Abū al-Faraj; and in the nasab, Abī Bakr.

--- text nm2 nofit
<!-- src: 2026-09-11-mainz-teaching:22 (rebuilt as text) -->
# Traditional Arabic Name: <em>4. Title, nickname (<i>laqab</i> <span class="ar" lang="ar" dir="rtl" style="font-size:1em;line-height:1">لقب</span>)</em>

<p class="nmtext">ʿAbd al-Raḥmãn b. ʿAlī b. Muḥammad b. ʿUbayd Allãh b. ʿAbd Allãh b. Ḥamādá b. Muḥammad b. Jaʿfar b. ʿAbd Allãh b. al-Qāsim b. al-Naḍar b. al-Qāsim b. Muḥammad b. ʿAbd Allãh b. ʿAbd al-Raḥmãn b. al-Qāsim b. Muḥammad b. Abī Bakr al-Ṣiddīq <em>(may God be pleased with him!)</em> al-Qurašī al-Taymī al-Bakrī al-Baġdādī al-Ḥāfiẓ al-Mufassir al-Ḥanbalī al-Wāʿiẓ al-Ṣaffār, <span class="k">Jamāl</span> <span class="r">al-Dīn</span>, Abū al-Faraj, known as Ibn al-Jawzī (d. 597/1201 CE)</p>

Notes:
The laqab, an honorific title: Jamāl al-Dīn.

--- text nm2 nofit
<!-- src: 2026-09-11-mainz-teaching:23 (rebuilt as text) -->
# Traditional Arabic Name: <em>5. “Byname” (<i>šuhraŧ</i> <span class="ar" lang="ar" dir="rtl" style="font-size:1em;line-height:1">شهرة</span>)</em>

<p class="nmtext">ʿAbd al-Raḥmãn b. ʿAlī b. Muḥammad b. ʿUbayd Allãh b. ʿAbd Allãh b. Ḥamādá b. Muḥammad b. Jaʿfar b. ʿAbd Allãh b. al-Qāsim b. al-Naḍar b. al-Qāsim b. Muḥammad b. ʿAbd Allãh b. ʿAbd al-Raḥmãn b. al-Qāsim b. Muḥammad b. Abī Bakr al-Ṣiddīq <em>(may God be pleased with him!)</em> al-Qurašī al-Taymī al-Bakrī al-Baġdādī al-Ḥāfiẓ al-Mufassir al-Ḥanbalī al-Wāʿiẓ al-Ṣaffār, Jamāl al-Dīn, Abū al-Faraj, known as <span class="k">Ibn al-Jawzī</span> (d. 597/1201 CE)</p>

Notes:
The šuhraŧ, the name by which he is known: Ibn al-Jawzī.

--- text nm2 nofit
<!-- src: 2026-09-11-mainz-teaching:24 (rebuilt as text) -->
# Traditional Arabic Name: <em>6. Descriptors (<i>nisbaŧ</i> <span class="ar" lang="ar" dir="rtl" style="font-size:1em;line-height:1">نسبة</span>)</em>

<p class="nmtext">ʿAbd al-Raḥmãn b. ʿAlī b. Muḥammad b. ʿUbayd Allãh b. ʿAbd Allãh b. Ḥamādá b. Muḥammad b. Jaʿfar b. ʿAbd Allãh b. al-Qāsim b. al-Naḍar b. al-Qāsim b. Muḥammad b. ʿAbd Allãh b. ʿAbd al-Raḥmãn b. al-Qāsim b. Muḥammad b. Abī Bakr al-Ṣiddīq <em>(may God be pleased with him!)</em> <span class="k">al-Quraš</span><span class="r">ī</span> <span class="k">al-Taym</span><span class="r">ī</span> <span class="k">al-Bakr</span><span class="r">ī</span> <span class="k">al-Baġdād</span><span class="r">ī</span> <span class="k">al-Ḥāfiẓ</span> <span class="k">al-Mufassir</span> <span class="k">al-Ḥanbal</span><span class="r">ī</span> <span class="k">al-Wāʿiẓ</span> <span class="k">al-Ṣaffār</span>, Jamāl al-Dīn, Abū al-Faraj, known as Ibn al-Jawzī (d. 597/1201 CE)</p>

Notes:
The nisbaŧ-s, descriptors: tribe, descent, city, specializations, legal school.

--- text nmg nofit
<!-- src: 2026-09-11-mainz-teaching:25 (rebuilt as text) -->
# Traditional Arabic Name: <em>Descriptors (<i>nisbaŧ</i> <span class="ar" lang="ar" dir="rtl" style="font-size:1em;line-height:1">نسبة</span>)</em>

<table><tr><td>al-Quraš<span class="r">ī</span></td><td><em>of the tribe of</em> Qurayš (<span class="cat">tribal</span>)</td></tr><tr><td>al-Taym<span class="r">ī</span></td><td><em>of the clan of</em> Taym (<span class="cat">tribal</span>)</td></tr><tr><td>al-Bakr<span class="r">ī</span></td><td><em>of descent from</em> Abū Bakr al-Ṣiddīq (<span class="cat">ancestral</span>)</td></tr><tr><td>al-Baġdād<span class="r">ī</span></td><td><em>of the city of</em> Baġdād (<span class="cat">geographical</span>)</td></tr><tr><td>al-Ḥāfiẓ</td><td>“Preserver”, master of <i>ḥadīṯ</i> (<span class="cat">religious specialization</span>)</td></tr><tr><td>al-Mufassir</td><td>exegete of the Qurʾān (<span class="cat">religious specialization</span>)</td></tr><tr><td>al-Ḥanbal<span class="r">ī</span></td><td>jurist of the Ḥanbalī legal school (<span class="cat">religious affiliation</span>)</td></tr><tr><td>al-Wāʿiẓ</td><td>public preacher (<span class="cat">religious specialization</span>)</td></tr><tr><td>al-Ṣaffār</td><td>coppersmith (<span class="cat">occupational, familial</span>)</td></tr><tr><td>al-Jawz<span class="r">ī</span></td><td>“of the man with the nut tree” (<span class="cat">ancestral</span>)</td></tr></table>

Notes:
What the nisbaŧ-s tell us: tribal, ancestral, geographical, religious specialization and affiliation. This is the kind of information we extract from hundreds of thousands of names.

--- figure
# Biographical Collections: a typical biography
![](img/2025-12-09-vienna--8c4fef8fe4.png)

--- text
# al-Ḏahabī and his <i>Tārīḫ al-islām</i>

<div class="indent">
<p>Šams al-dīn al-Ḏahabī (d. 748/1348): historian, ḥadīṯ scholar, biographer.</p>
<p><em>Tārīḫ al-islām</em> — a universal chronicle-cum-biographical collection covering seven centuries of Islamic history (1–700 AH / 622–1301 CE), organized decade by decade.</p>
<ul>
<li>c. 30,000 biographies</li>
<li>c. 3 million words</li>
<li>Two modern editions: 50 vols. (Tadmurī) and 16 vols. (Maʿrūf)</li>
</ul>
<p class="small" style="margin-top:1em">Built largely from earlier sources — an ideal test case for text-reuse detection at scale.</p>
</div>

<!-- reuse 2025-12-09-vienna:27 -->
--- text max=40
# Biographies into Data Points

1. **Dates** → graphs
2. **Places** (explicit toponyms or toponymic *nisbaŧ*s) → maps
3. **Places** + **Dates** → chronological maps
4. **Social markers** (*nisbaŧ*s) + **Dates** → social graphs
5. **Social markers** (*nisbaŧ*s) + **Dates** + **Places** → social chronological maps
6. **Places of individuals** + **Dates** → geographical networks of connections

Notes:
Three kinds of information that we take from every biography: dates become graphs, places become maps, and social markers become both.

--- figure
# Patterns: Geography of the Islamic World - Geographical Texts
![](img/2024-11-08-tuebingen--fb167b6c89.png)

--- figure
# Patterns: Geography of the Islamic World - Biographical Texts
![](img/2024-11-08-tuebingen--a9b569fdd4.png)

<!-- reuse 2024-11-08-tuebingen:68 -->

--- figure
# Patterns: Great Cities of Islam - Early
![](img/2024-11-08-tuebingen--a3a819edad.png)

<!-- reuse 2024-11-08-tuebingen:94 -->

--- figure
# Patterns: Great Cities of Islam - Early
![](img/2024-11-08-tuebingen--de8aba0827.png)

<!-- reuse 2024-11-08-tuebingen:95 -->

--- figure
# Patterns: Great Cities of Islam - Early
![](img/2024-11-08-tuebingen--3ade5cb0c5.png)

<!-- reuse 2024-11-08-tuebingen:96 -->

--- figure
# Patterns: Great Cities of Islam - Early
![](img/2024-11-08-tuebingen--ad111b4708.png)

<!-- reuse 2024-11-08-tuebingen:97 -->

--- figure title="Patterns: Great Cities of Islam - Middle"
![](img/2024-11-08-tuebingen--slide-097.png)

<!-- reuse 2024-11-08-tuebingen:98 -->

--- figure title="Patterns: Great Cities of Islam - Middle"
![](img/2024-11-08-tuebingen--slide-098.png)

<!-- reuse 2024-11-08-tuebingen:99 -->

--- figure title="Patterns: Great Cities of Islam - Middle"
![](img/2024-11-08-tuebingen--slide-099.png)

<!-- reuse 2024-11-08-tuebingen:100 -->

--- figure title="Patterns: Great Cities of Islam - Middle"
![](img/2024-11-08-tuebingen--slide-100.png)

<!-- reuse 2024-11-08-tuebingen:101 -->

--- figure title="Patterns: Great Cities of Islam - Late"
![](img/2024-11-08-tuebingen--slide-101.png)

<!-- reuse 2024-11-08-tuebingen:102 -->

--- figure title="Patterns: Great Cities of Islam - Late"
![](img/2024-11-08-tuebingen--slide-102.png)

<!-- reuse 2024-11-08-tuebingen:103 -->

--- figure title="Patterns: Great Cities of Islam - Late"
![](img/2024-11-08-tuebingen--slide-103.png)

--- figure
# Patterns: Regional Representations / Floruits (?)
![](img/2024-11-08-tuebingen--02e9e113d1.png)

<!-- reuse 2024-11-08-tuebingen:70 -->

--- figure
# Patterns: Regional Representations / Floruits (?)
![](img/2024-11-08-tuebingen--ed6e018602.png)

--- figure
# Patterns: Connections
![](img/2025-12-09-vienna--5682e1624e.png)

<!-- reuse 2025-12-09-vienna:15 -->
--- figure
# Patterns: Connections
![](img/2025-12-09-vienna--5b8ee1bd02.png)

<!-- reuse 2025-12-09-vienna:16 -->
--- figure
# Patterns: Connections
![](img/2025-12-09-vienna--3941693bb3.png)

<!-- reuse 2025-12-09-vienna:17 -->
--- figure
# Patterns: Connections
![](img/2025-12-09-vienna--6af4d1cf97.png)

<!-- reuse 2025-12-09-vienna:18 -->
--- figure
# Patterns: Connections
![](img/2025-12-09-vienna--ebad4acbd1.png)

<!-- reuse 2025-12-09-vienna:19 -->
--- figure
# Patterns: Connections
![](img/2025-12-09-vienna--4dffae50f5.png)

<!-- reuse 2025-12-09-vienna:20 -->
--- figure
# Patterns: Connections
![](img/2025-12-09-vienna--af71b03b4c.png)

<!-- reuse 2025-12-09-vienna:21 -->
--- figure
# Patterns: Connections in the 6th century AH
![](img/2025-12-09-vienna--9c8ec3d9a1.png)

<!-- reuse 2025-12-09-vienna:22 -->
--- figure
# Patterns: Connections in the 6th century AH
![](img/2025-12-09-vienna--9c8ec3d9a1-regions.png)

<!-- reuse 2026-09-22-fub-keynote:62 -->
--- text
# Relevance?

1. Prominence of cities and regions (modeled from cities);
2. Connectednes of cities and regions (modeled from cities);
3. Social transformations and composition of Islamic elites;
4. Development of professional and religious groups;
5. General and particular views of mobility;
6. Broad variety of problems that can be modeled from this data (demographical questions, family structures, onomastic questions, various historical phenomena)

<p class="indent"><b><i>your imagination is the limit!</i></b></p>

<!-- reuse 2025-12-09-vienna:24 -->
--- section light partdiv
<p class="kicker">Part</p>
<p class="pnum">2</p>
# “Golden Sample” Case Study
<p>Historiography</p>

<!-- reuse 2025-12-09-vienna:25 -->
--- text
# *Historiographical Issues*

1. Hundreds of BIO Collections > Thousands of duplicate BIOs
2. Problem: Convert BIO > Persons
3. Solutions:
    <ol type="a">
    <li><b>KITAB</b>: Text Reuse Detection</li>
    <li><b>EIS1600</b>: Same Biography Identification with different computational methods, further enhanced with latest LLMs</li>
    </ol>

<!-- reuse 2026-09-28-Cairo:18 -->
--- text
# al-Ḏahabī and his <i>Tārīḫ al-islām</i>

<div class="indent">
<p>Šams al-dīn al-Ḏahabī (d. 748/1348): historian, ḥadīṯ scholar, biographer.</p>
<p><em>Tārīḫ al-islām</em> — a universal chronicle-cum-biographical collection covering seven centuries of Islamic history (1–700 AH / 622–1301 CE), organized decade by decade.</p>
<ul>
<li>c. 30,000 biographies</li>
<li>c. 3 million words</li>
<li>Two modern editions: 50 vols. (Tadmurī) and 16 vols. (Maʿrūf)</li>
</ul>
<p class="small" style="margin-top:1em">Built largely from earlier sources — an ideal test case for text-reuse detection at scale.</p>
</div>

<!-- reuse 2025-12-09-vienna:27 -->
--- text
# *How does one write a 50-volume book in 14th-century Damascus?*

1. How to assess authors’ methodology?
2. Which works did they use as their sources?
3. How did they select biographies? What were their criteria?
4. How did he modify those biographies? What did he add? What did he drop?

<!-- reuse 2026-09-28-Cairo:17 -->
--- split w-25-75 vcenter
<div class="tiny" markdown="1">

- Among them was Abd Allãh b. Ḫāzim al-Sulamī, the governor of Ḫurāsān for Abd Allãh b. al-Zubayr. What was remarkable about him was that he was extremely brave and resourceful, yet he was terrified of mice. One day, while he was with ʿUbayd Allãh b. Ziyād, a white rat was brought before him and he was astonished. ʿUbayd Allãh said to ʿAbd Allãh, ‘O Abū Ṣāliḥ, have you ever seen anything more astonishing than this?’ And there was Abd Allãh, who had shrunk as if he were a chick and turned yellow as if he were a male locust. ʿUbayd Allãh then said, “Abū Ṣaliḥ disobeys the Merciful, takes lightly the authority, seizes the snake, walks toward the blooming lion, faces spears with his face and swords with his hands, and yet, he is overcome by a rat as you see. I testify that Allãh is capable of everything.

</div>

|||

![](img/2026-09-28-Cairo--057675d523.png)

<!-- reuse 2025-12-09-vienna:29 -->
--- figure
# *KITAB: Text Reuse Detection — quite successful…*
![](img/2025-12-09-vienna--7640fb55ba-crop.png)

<!-- reuse 2026-09-28-Cairo:19 -->
--- figure
![](img/2026-09-28-Cairo--4914026269.png)

<!-- reuse 2026-09-28-Cairo:20 -->
--- figure
![](img/2026-09-28-Cairo--a1f44cf8ba.png)

<!-- reuse 2026-09-28-Cairo:21 -->
--- figure
![](img/2026-09-28-Cairo--95bac7cb74.png)

<!-- reuse 2026-09-28-Cairo:22 -->
--- figure
![](img/2026-09-28-Cairo--9bd39b4ca3.png)

<!-- reuse 2026-09-28-Cairo:23 -->
--- figure
![](img/2026-09-28-Cairo--348f9c0157.png)

<!-- reuse 2025-12-09-vienna:31 -->
--- figure
![](img/2025-12-09-vienna--slide-031.png)

<!-- reuse 2025-12-09-vienna:32 -->
--- text
# *EIS1600 ML Method*

1. Pregenerate possible matches (ngram overlap)
2. Review these pairs > create ground truth
3. Train a series of models, to identify the best performing one experimentally

<!-- reuse 2025-12-09-vienna:33 -->
--- figure
# EIS1600 ML Method: Same-Person Annotation Tool
![](img/2025-12-09-vienna--a087ca64af.png)

<!-- reuse 2025-12-09-vienna:34 -->
--- figure
![](img/2025-12-09-vienna--slide-034.png)

Notes:
Similarity Metrics:
TF-IDF with cosine similarity (Unigrams, Bigrams)
Ngrams Overlap (Jaccard, Dice)
Ent_overlap Entities Overlap
Length_rate = max(l1, l2)/min(l1, l2)

<!-- reuse 2025-12-09-vienna:35 -->
--- text
# *EIS1600 ML Method*

<ol>
<li>Pregenerate possible matches (ngram overlap)</li>
<li>Review these pairs > create ground truth</li>
<li>Train a series of models, to identify the best performing one experimentally</li>
</ol>
<ol start="4" style="border:3px solid var(--red);border-radius:.6em;padding:.2em .4em .2em 2em">
<li>Results: <i>good-ish, but:</i>
<ol type="a">
<li>Not as good, when applied to new data</li>
<li>Difficult to determining the cut-off threshold</li>
<li>Differences in length of biographies create most problems</li>
</ol></li>
</ol>

<!-- reuse 2025-12-09-vienna:36 -->
--- text
# *EIS1600 ML Method + ChatGPT*

1. We generate possible matches with B25 (*pyserini* for *python*)
2. We pull 350 top matches for each biography
    <ul class="small" style="list-style:circle">
    <li>In most cases the number of matches is significantly smaller; 350 is the maximum possible number of duplicates (the number of texts in the EIS1600 subcorpus; technically 350-1);</li>
    <li>Reduces the number of 186 billion pairs (610,000 squared) to 143 million pairs (theoretically);</li>
    <li>Remove “matches” within the same text > 79 million pairs;</li>
    <li>For al-Ḏahabī’s sample > only about 29,000 pairs;</li>
    </ul>
3. “Crowd-sourcing” with ChatGPT (gpt4o-mini) with a prompt to compare pairs, reply ‘yes’ or ‘no’ and give the confidence of evaluation if the answer is ‘yes’; return results in a specific format to simplify post-processing;
4. Accuracy assessment (on human annotated data): 96% — disagreement on 124 pairs of 2,092; review: there are mistakes on both Team Machine and Team Human

<!-- reuse 2025-12-09-vienna:37 -->
--- figure
![](img/2025-12-09-vienna--slide-037.png)

<!-- reuse 2025-12-09-vienna:38 -->
--- text
# *Understanding the historian*

1. How did he choose biographies? (Take 1)
2. How did he change them?
3. Did he make biographees look better, worse, or kept them the same?
4. Why he omitted “obvious” candidates?
5. How did he choose biographies? (Take 2)

<!-- reuse 2025-12-09-vienna:39 -->
--- figure
![](img/2025-12-09-vienna--slide-039.png)

<!-- reuse 2025-12-09-vienna:40 -->
--- figure
![](img/2025-12-09-vienna--slide-040.png)

<!-- reuse 2025-12-09-vienna:41 -->
--- figure
# *2. How did he change them?*
![](img/2025-12-09-vienna--c1ed737278.png)

<!-- reuse 2025-12-09-vienna:42 -->
--- text
# *2. How did he change them?*

1. al-Ḏahabī picked longer biographies more frequently than shorter ones
2. ***Method***: length comparison

<!-- reuse 2025-12-09-vienna:43 -->
--- text
# *2. How did he change them?*

1. al-Ḏahabī adjusted some wording very consistently
    <ul style="list-style:circle">
    <li>“From the people of Grenada” > “Grenadian”;</li>
    <li>Simplification of Abū-names;</li>
    <li>Dropping references to al-Mašriq (the core lands of the Islamic world);</li>
    <li>Overall reduction in verbosity, omission of details</li>
    <li>Omission of lesser known individuals</li>
    </ul>
2. ***Method***: ngram matching

<!-- reuse 2025-12-09-vienna:44 -->
--- text
# *3. Did he make them better or worse?*

1. How did the sentiment in biographies change?
    <ul style="list-style:circle">
    <li>al-Ḏahabī’s biographies are:
    <ol type="i"><li>more positive?</li><li>more negative?</li><li>the same?</li></ol></li>
    </ul>
2. ***Method***: sentiment assessment with ChatGPT

<!-- reuse 2025-12-09-vienna:45 -->
--- figure
# *3. Did he make them better or worse?*
![](img/2025-12-09-vienna--573133d64e.png)

<!-- reuse 2025-12-09-vienna:46 -->
--- figure
![](img/2025-12-09-vienna--slide-046.png)

<!-- reuse 2025-12-09-vienna:47 -->
--- figure
# *3. Did he make them better or worse?*
![](img/2025-12-09-vienna--800528ccb6.png)

<!-- reuse 2025-12-09-vienna:48 -->
--- text
# *4. Why he omitted “obvious” candidates?*

1. *Preference for longer biographies?*
2. From the longest biographies in his sources, he omitted biographies of individuals:
    <ul style="list-style:circle">
    <li>whose reputations was less solid</li>
    <li>whose achievements were less significant</li>
    <li>whose biographies has less details.</li>
    </ul>
3. ***Method***: ChatGPT assessment

<!-- reuse 2025-12-09-vienna:49 -->
--- text
# *5. How did he choose biographies? (Take 2)*

1. Did disciplinary profile play any role in his selection?
    <ul style="list-style:circle">
    <li>ChatGPT identified disciplinary profiles</li>
    <li>We then compare how the distribution of profiles changed in his sample</li>
    </ul>
2. ***Method***: ChatGPT Assessment + statistics comparison

<!-- reuse 2025-12-09-vienna:50 -->
--- figure
![](img/2025-12-09-vienna--slide-050.png)

<!-- reuse 2025-12-09-vienna:51 -->
--- figure
# *5. How did he choose biographies? (Take 2)*
![](img/2025-12-09-vienna--cd100f99f2-crop.png)

<!-- reuse 2025-12-09-vienna:52 -->
--- text
# *5. How did he choose biographies? (Take 2)*

<div class="indent" style="color:var(--muted)" markdown="1">

The *null hypothesis*: al-Ḏahabī’s selection is purely random.

- p-value test quantifies the probability of obtaining the observed result if the null hypothesis were true.
- p-value < 0.05 (5%), the observed result is not random.
- p-value for our simulated data is 0.000228, or 0.0228%

In humanese, this means that out of all al-Ḏahabīs across 1,000,000 parallel universes, only 228 arrived at a sample that was more representative than the selection of our al-Ḏahabī.

***In statistical terms, his selection was deliberate and methodical.***

</div>

--- text max=40
<!-- src: 2026-11-18-madrid:57 -->
<!-- text from 2025-12-09-vienna:53; figures from the Golden Sample, Table 1.1 -->
# al-Ḏahabī and his Andalusian sources

<p style="margin-bottom:.6em">al-Ḏahabī took <strong>2,109 of 6,782</strong> (31%) biographies from the three Andalusian collections by Ibn al-Faraḍī, Ibn Baškuwāl, and Ibn al-Abbār. Altogether, his <em>Tārīḫ al-islām</em> amassed 30,000 biographies</p>

- did not select only longest biographies (not only the elite);
- optimized biographies, without tarnishing or embellishment;
- aimed at simplification and unification of the language;
- shortened them:
    - 24-38% reduction per biography
    - Cutting just 4 words from each biography saves 120,000 words: three copies of “The Ring of the Dove” of Ibn Ḥazm (d. 456/1064).

Notes:
al-Ḏahabī took 2,109 of the 6,782 biographies (about 31%, almost a third) in the three Andalusian collections: Ibn al-Faraḍī, Ibn Baškuwāl, and Ibn al-Abbār (Golden Sample, Table 1.1). Conclusions from the Golden Sample study, as presented in Vienna, December 2025.

--- text max=40
<!-- src: 2026-11-18-madrid:58 -->
<!-- text from 2025-12-09-vienna:54 -->
# al-Ḏahabī and his Andalusian sources

- seems to have “dehumanized” people:
    - simplification of the language improves retrievability
- genuinely tried to represent al-Andalus in his *History*
    - by preserving the distribution of “disciplinary” profiles (comparable % of jurists, grammarians, etc.);
    - by preserving chronological distribution: his data follows the overall curve of al-Andalus;

Notes:
Conclusions from the Golden Sample study, continued (Vienna, December 2025).

<!-- reuse 2025-12-09-vienna:55 -->
--- full
![](img/2025-12-09-vienna--f14eff1179.jpg)

<!-- reuse 2025-12-09-vienna:56 -->
--- section light partdiv
<p class="kicker">Part</p>
<p class="pnum">3</p>
# Generative LLMs as assistants
<p>Method</p>

<!-- reuse 2026-06-09-csic-ai-workshop:6 -->
--- text irony nofit
<!-- src: 2026-09-11-mainz-teaching:9 (rebuilt as text) -->
<style>
.slide.irony .ir{display:grid;grid-template-columns:800px 1fr;gap:56px;margin:auto 0;align-items:stretch}
.slide.irony .ir > img{width:800px;height:793px;object-fit:cover;border-radius:4px;display:block;margin:0}
.slide.irony .cards{display:flex;flex-direction:column;gap:32px}
.slide.irony .card{flex:1;display:flex;flex-direction:column;justify-content:center;padding:28px 36px;border-radius:4px;background:var(--panel);border:1px solid var(--rule)}
.slide.irony .card.now{background:var(--red-wash);border:1px solid var(--red-soft);border-left:8px solid var(--red)}
.slide.irony .card p{font-size:31px;line-height:1.35;margin:0 0 .5em}
.slide.irony .card p:last-child{margin-bottom:0}
.slide.irony .card .kicker{font-size:20px;margin:0 0 .9em}
.slide.irony .card .by{text-align:right;font-size:25px;color:var(--muted)}
.slide.irony .card .red{color:var(--red)}
</style>
# The irony of new media

<div class="ir">
<img src="img/2026-09-11-mainz-teaching--plato.jpg" alt="Socrates speaking to a silent scroll, with the Acropolis behind">
<div class="cards">
<div class="card"><p class="kicker">The classical critique of books</p><p><em>“If anyone asks them anything, they remain most solemnly silent.”</em></p><p class="by">Plato, <em>Phaedrus</em> 275d</p><p>Writing was once suspect; today written texts are our scholarly gold standard.</p></div>
<div class="card now"><p class="kicker">The modern parallel</p><p><strong>Now, knowledge from LLMs is suspect…</strong></p><p class="red"><strong>…yet LLMs bring dialogue back to reading.</strong></p><p>The ultimate irony: technology restores the interactive conversation Plato feared was lost.</p></div>
</div>
</div>

Notes:
There is a certain historical irony here. In the Phaedrus, writing itself appears as an inferior technology of knowledge because a written text cannot answer back. More than two millennia later, we have made written scholarship the gold standard of academic knowledge. And now we are instinctively suspicious of another new medium. What interests me pedagogically about LLMs is that they unexpectedly restore one feature Socrates thought writing had lost: dialogue.

--- text
# What an LLM is (*humanistically speaking*)

- A system that produces fluent text — including text that looks like reasoning, and sometimes is
- Not a database, not a person, not a finished reasoner
- Treat outputs as well-formed drafts that need your judgment to become reliable
- Unusually good at form, unevenly good at content

<!-- reuse 2026-06-09-csic-ai-workshop:8 -->
--- text
# LLMs are catalysts — catalysts need substrate (1)

- A catalyst accelerates a reaction that is already possible
- It does not create the reaction from nothing
- LLMs work the same way: they accelerate the work you can already do, in fields where you can judge the output
- I can use an LLM to read Arabic faster — I have the training to catch its mistakes
- I cannot use an LLM to read Chinese historical texts reliably — I have no substrate to check it against

<!-- reuse 2025-12-09-vienna:57 -->
--- text
# LLMs are *research assistants*, not *cheating devices*

- ***Designing***:
    - start with a question about your research problem;
    - arrive at detailed working methodological solutions;
- ***Implementing***:
    - break the complex matter into simpler steps;
    - write research code; design intefraces;
    - [https://eis1600.github.io/MFBFA/](https://eis1600.github.io/MFBFA/)
- ***Evaluating***:
    - critically assess your results — let it criticize everything

<!-- reuse 2025-12-09-vienna:58 -->
--- full
![](img/2025-12-09-vienna--3043250a1f.jpg)

<div class="overlay tl" style="font-size:64px"><b>Questions?</b></div>
