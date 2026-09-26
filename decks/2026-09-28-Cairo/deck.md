---
title: "Why One Manuscript Needs All The Others"
subtitle: "The Case for a Unified Arabic Corpus"
event: "Cairo · 28 September 2026"
author: "Maxim Romanov"
affiliation: "The Evolution of Islamic Societies (c. 600–1600 CE), Universität Hamburg"
date: "September 28, 2026"
description: ""
unlisted: true   # built and reachable by its address, but not shown in the list; remove when ready
logos:
  - img/logo-dfg.png
  - img/logo-uhh.png
  - img/logo-eis1600.png
---

<!-- K2 -->
--- title

<!-- N0 -->
--- text
# How do we know what a word means?

<div class="ayn2">
<div class="row">
<div class="ph"><span class="ctx">ما لا</span><b>عين</b><span class="ctx">رأت ولا أذن سمعت</span></div>
<div class="gl"><span class="rd"><b>ʿayn</b><br>eye</span><span class="tx">“What no eye has seen and no ear has heard.”<span class="src">Ṣaḥīḥ al-Buḫārī, no. 3244</span></span></div>
</div>
<div class="row">
<div class="ph"><span class="ctx">فيها</span><b>عين</b><span class="ctx">جارية</span></div>
<div class="gl"><span class="rd"><b>ʿayn</b><br>spring</span><span class="tx">“In it is a flowing spring.”<span class="src">Qurʾān 88:12</span></span></div>
</div>
<div class="row">
<div class="ph"><span class="ctx">فبعث</span><b><span class="w0">عين</span><span class="w1">عينا</span></b><span class="ctx">له من جهينة … فأتاه بخبر القوم</span></div>
<div class="gl"><span class="rd"><b>ʿayn</b><br>scout, spy</span><span class="tx">“He sent a scout of his from Juhaynaŧ … and the man brought him news of the people.”<span class="src">al-Ṭabarī, Jāmiʿ al-bayān, on Q 8:7</span></span></div>
</div>
<div class="row">
<div class="ph"><span class="ctx">ثم</span><b>عين</b><span class="ctx">له السلطان محمد خان … كل يوم ثمانين درهما</span></div>
<div class="gl"><span class="rd"><b>ʿayyana</b><br>assigned</span><span class="tx">“Sultan Meḥmed Ḫān then assigned him … eighty dirhams a day.”<span class="src">Ṭāšköprüzāde, al-Šaqāʾiq al-nuʿmāniyyaŧ, p. 94</span></span></div>
</div>
<span class="step sw-ctx"></span><span class="step sw-gl"></span>
</div>

<p class="bottom punch ayn-punch">We know it from what surrounds it.</p>

<!-- N3 -->
--- text
# The same answer at every scale

<div class="chain">
<div class="box"><span class="num">١</span><span class="name">A word</span><span class="desc">is read from the words around it</span></div>
<div class="box"><span class="num">٢</span><span class="name">A term</span><span class="desc">is understood from the corpus across time: when it appears, who uses it</span></div>
<div class="box"><span class="num">٣</span><span class="name">A book</span><span class="desc">is known by the other books: what it reuses, what type of text it is</span></div>
<div class="box hi"><span class="num">٤</span><span class="name">A tradition</span><span class="desc">is periodized by how its language and its topics change</span></div>
</div>

<p class="bottom punch">No manuscript can be read alone.<br>Every text needs all the others.</p>

<!-- K3 -->
--- full contain
![Cover of Digital Humanities for Arabic and Islamic Studies beside the publisher’s page](img/brill-page.png)

<!-- K4 -->
--- text
# What’s in the book?

**Three Chapters**

1. A Pitch for the DH
2. Digital Avatars and Metaobjects
3. Computational Inquiries

<p class="callout" style="margin-top:1em">In short, this book asks: <em>What does it mean for our field when the entire library becomes a vademecum—something that, quite literally, “goes with me” everywhere? What new possibilities and responsibilities does this transformation bring?</em></p>

<!-- S1 -->
--- section
<p class="kicker">The instrument</p>
# A corpus in time
<p>OpenITI: the Arabic written tradition as a chronological distribution</p>

<!-- K11 -->
--- text
# The Library That Arrived Unexpected

<div class="stats">
<div class="stat"><b>8,600+</b><span>classical Arabic texts</span></div>
<div class="stat"><b>1 billion+</b><span>words in the corpus</span></div>
<div class="stat"><b>1,300+</b><span>years of written Arabic</span></div>
</div>

<p style="text-align:center;font-style:italic;color:var(--muted);margin-top:1.2em">A treasure without a map. A library without a methodology.<br>A field that found itself unprepared.</p>

<p class="bottom punch">What do we do when the entire library becomes a <span style="font-style:normal">vademecum</span>?!</p>

<!-- K12 -->
--- text
# OpenITI, v. 2023.1.8 — “clean”

<div class="indent">
<p>Our final subcorpus, based on version 2023.1.8, consisting solely of “clean” unique texts written up to 1400/1980:</p>
<ul class="plain">
<li>– 2,783 unique authors (156 fewer than in the set above, or 94.69%)</li>
<li>– 7,058 unique texts (−407 fewer, or 94.55%)</li>
<li>– 927.37 million tokens before cleaning</li>
<li>– 868.81 million tokens after removal of most paraeditorial material and remaining “unclean” (93.68% of the uncleaned set)</li>
</ul>
</div>

<!-- K13 -->
--- figure
![Chronological distribution of the volume of the OpenITI subcorpus](img/fig-2-31-chronological-volume.png)

<!-- K14 -->
--- text steps
# But a corpus is also a historical source

<ul class="indent">
<li>Survival bias — what reached us</li>
<li>Editorial / digitization bias — what modern scholars chose to publish</li>
<li>Uneven genre and chronological coverage</li>
</ul>

<p class="bottom punch">Source criticism begins with the instrument.</p>

<!-- K15 -->
--- figure
![Density plots of books by century in three libraries and the Hadiyyat al-ʿārifīn](img/fig-1-10-density-libraries.png)

<!-- K16 -->
--- figure
![Share of series total by century: Hadiyyat al-ʿārifīn, major libraries, and OpenITI unique texts](img/openiti-mirrors-libraries.png)

<!-- S2 -->
--- section
<p class="kicker">Case 1</p>
# A term in time
<p>When did <em>al-kutub al-sittaŧ</em> come to be?</p>

<!-- K24 -->
--- figure
![Google Books Ngram Viewer: telegraph, telephone, television](img/google-ngram-viewer.png)

<!-- K25 -->
--- text
# Case Study 1: Tracing Term Usage

<div class="indent small" style="max-width:36em">
<p><strong>2.1 &nbsp; <em>From “The Devil’s Delusions” to Ḥadīṯ Studies</em></strong><br>
Now that we have a general sense of how the OpenITI NgramReader works, let’s consider a more complex inquiry, this time into terminology central to the study of Ḥadīṯ. In the early 2000s, I made my first attempt at writing a PhD thesis at the Institute of Oriental Manuscripts of the Russian Academy of Sciences in my hometown of St. Petersburg. My dissertation focused on a close reading of “The Devil’s Delusions” (<em>Talbīs Iblīs</em>) by Ibn al-Jawzī (d. 597/1201), the renowned historian, traditionist, and—perhaps most importantly—Ḥanbalī preacher (<em>wāʿiẓ</em>) of Baġdād.</p>
<p><strong>2.2 &nbsp; <em>Proposition 1: The Chronology of Transmission Terms</em></strong><br>
<strong>2.3 &nbsp; <em>Proposition 2: The Decline of</em> Isnāds</strong><br>
<strong>2.4 &nbsp; <em>Proposition 3: The Canonization of</em> Ḥadīṯ <em>Collections</em></strong></p>
</div>

<!-- K26 -->
--- figure caption="ADHFAIS Appendix 1: NgramReader, 2025 (OpenITI, release 2023.1.7). Relative frequencies of anbaʾa-nā, aḫbara-nā, and ḥaddaṯa-nā, with LOESS smoothing."
![NgramReader: relative frequencies of three transmission terms over time](img/fig-13-ngram-transmission.png)

<!-- K27 -->
--- figure
![Transmission terms in the first four centuries of Islam](img/fig-14-transmission-terms.png)

<!-- K28 -->
--- figure
![All transmission terms aggregated](img/fig-15-transmission-aggregated.png)

<!-- K29 -->
--- figure
![Full transmission terms compared with their abbreviations](img/fig-17-full-vs-abbreviated.png)

<!-- K30 -->
--- figure
![Mentions of al-kutub al-sittat over time](img/fig-18-kutub-sitta.png)

<!-- K31 -->
--- figure
![Authors mentioning al-kutub al-sittat by century and region](img/fig-19-authors-by-region.png)

<!-- S3 -->
--- section
<p class="kicker">Case 2</p>
# A book among books
<p>Text reuse and the modeling of text types</p>

<!-- G19 -->
--- text
# A Story and Its Versions: Ṯimār al-qulūb of al-Ṯaʿālibī (d. 429/1038)

<p class="ar" dir="rtl">ومنهم عبد الله بن خازم السلمى والى خراسان لعبد الله بن الزبير ومن عجيب أمره أنه كان نهاية فى الشجاعة والنجدة وكان يخاف الفأر أشد مخافة فبينما هو ذات يوم عند عبيد الله بن زياد إذ أدخل عليه جرذا أبيض فتعجب منه فقال لعبد الله يا أبا صالح هل رأيت أعجب من هذا وإذا عبد الله قد تضاءل كأنه فرخ وأصفر كأنه جرادة فقال عبيد الله أبو صالح يعصى الرحمن ويتهاون بالسلطان ويقبض على الثعبان ويمشى إلى الأسد الورد ويلقى الرماح بوجهه والسيوف بيده وقد اعتراه من جرذ ما ترون أشهد أن الله على كل شيء قدير</p>
- Among them was Abd Allãh b. Ḫāzim al-Sulamī, the governor of Ḫurāsān for Abd Allãh b. al-Zubayr. What was remarkable about him was that he was extremely brave and resourceful, yet he was terrified of mice. One day, while he was with ʿUbayd Allãh b. Ziyād, a white rat was brought before him and he was astonished. ʿUbayd Allãh said to ʿAbd Allãh, ‘O Abū Ṣāliḥ, have you ever seen anything more astonishing than this?’ And there was Abd Allãh, who had shrunk as if he were a chick and turned yellow as if he were a male locust. ʿUbayd Allãh then said, “Abū Ṣaliḥ disobeys the Merciful, takes lightly the authority, seizes the snake, walks toward the blooming lion, faces spears with his face and swords with his hands, and yet, he is overcome by a rat as you see. I testify that Allãh is capable of everything.

<!-- G20 -->
--- split w-35-65 vcenter

<div class="small" markdown="1">

- Among them was Abd Allãh b. Ḫāzim al-Sulamī, the governor of Ḫurāsān for Abd Allãh b. al-Zubayr. What was remarkable about him was that he was extremely brave and resourceful, yet he was terrified of mice. One day, while he was with ʿUbayd Allãh b. Ziyād, a white rat was brought before him and he was astonished. ʿUbayd Allãh said to ʿAbd Allãh, ‘O Abū Ṣāliḥ, have you ever seen anything more astonishing than this?’ And there was Abd Allãh, who had shrunk as if he were a chick and turned yellow as if he were a male locust. ʿUbayd Allãh then said, “Abū Ṣaliḥ disobeys the Merciful, takes lightly the authority, seizes the snake, walks toward the blooming lion, faces spears with his face and swords with his hands, and yet, he is overcome by a rat as you see. I testify that Allãh is capable of everything.

</div>

|||

![](img/057675d523.png)

<!-- G21 -->
--- figure

![](img/4914026269.png)

<!-- G22 -->
--- figure

![](img/a1f44cf8ba.png)

<!-- G23 -->
--- figure

![](img/95bac7cb74.png)

<!-- G25 -->
--- figure

![](img/9bd39b4ca3.png)

<!-- G26 -->
--- figure

![](img/348f9c0157.png)

<!-- G27 -->
--- figure

![](img/2b69b32cac.png)

<!-- G29 -->
--- figure

![](img/46b7ded308.png)

<!-- G30 -->
--- figure

![](img/45bf9c2eae.png)

<!-- G31 -->
--- figure

![](img/42e2bb6436.png)

<!-- G32 -->
--- figure

![](img/60377618ed.png)

<!-- K33 -->
--- text
# Case Study 2. Modeling Textual Typology

<ol class="small" style="max-width:37em">
<li><code>[B]</code> Biographical type (<em>tarājim</em>): mostly collections of biographies</li>
<li><code>[E]</code> Exegetical type: interpretations of the Qurʾān (<em>tafsīr</em>)</li>
<li><code>[G]</code> Graeco-Arabic (“Greek-esque”) type (<em>yūnāniyyāt</em>): translations from Greek and works on the development of Greek philosophy in Arabic (<em>falsafat</em>, predominantly Aristotelian)</li>
<li><code>[H]</code> Historical type (<em>tawārīḫ</em>): mainly chronicles</li>
<li><code>[F]</code> Legal type (<em>fiqh</em>): a broad variety of legal texts</li>
<li><code>[L]</code> Linguistic type: a broad variety of grammatical, rhetorical, and lexicographical texts (<em>balāġat</em>, <em>naḥw</em>, <em>maʿājim luġawiyyat</em>)</li>
<li><code>[M]</code> Medical type (<em>ṭibb</em>): mainly texts on Galenic medicine</li>
<li><code>[P]</code> Poetic type (<em>šiʿr</em>): mainly collections of poetry (<em>dīwān</em>s)</li>
<li><code>[K]</code> “Scholastic-theological” type: works of <em>kalām</em></li>
<li><code>[Ḥ]</code> Tradition-based type: collections of <em>ḥadīṯ</em></li>
</ol>

<!-- K34 -->
--- figure frame
![Table 9: classification of 81 texts from altafsir.com](img/table-9-altafsir.png)

<!-- K35 -->
--- figure
# Rolling Typological Assessment
![Rolling typological assessment of Talbīs Iblīs](img/fig-26-rolling-assessment.png)

<!-- K36 -->
--- figure
# Majmūʿāt Case
![Rolling assessment of an artificial majmūʿat](img/fig-27-majmua.png)

<!-- S4 -->
--- section
<p class="kicker">Case 3</p>
# A language and a tradition in time
<p>Periodization from how language and topics change</p>

<!-- K38 -->
--- text
# Case Study 3. Charting Linguistic Evolution

<ul class="small" style="max-width:36em">
<li>The <strong>pre-classical period</strong> lasts from the appearance of Islam until the end of the Umayyad period (c. 1–132/622–750).</li>
<li>The <strong>classical period</strong> corresponds roughly to the ʿAbbāsid period (132–656/750–1258).</li>
<li>The <strong>postclassical period</strong> encompasses the reign of the Mamlūks (648–923/1250–1517) and most of that of the Ottomans.</li>
<li>The <strong>modern period</strong> (from Napoleon’s invasion of Egypt in 1213/1798), extending to the present day.</li>
</ul>

<!-- K39 -->
--- split w-60-40
# Case Study 3. Charting Linguistic Evolution

<ul class="plain" style="color:var(--muted)">
<li>Preclassical &nbsp; c. 622–750</li>
<li>Classical &nbsp; 750–1258</li>
<li>Postclassical &nbsp; 1258–1798</li>
<li>Modern &nbsp; 1798–</li>
</ul>

<div class="pills">
<div class="pill"><b>Preclassical</b>600–750</div>
<div class="pill"><b>Classical</b>750–1258</div>
<div class="pill"><b>Postclassical</b>1258–1798</div>
<div class="pill"><b>Modern</b>1798–</div>
</div>

<p class="punch" style="text-align:center;margin-top:1em">Where do these lines come from?</p>

|||

<div class="callout" style="margin-top:1.5em">
<p class="small" style="margin:0 0 .6em"><em>Geschichte der arabischen Litteratur</em>, 5 vols. (1896–1943)</p>
<p class="small" style="margin:0 0 .6em"><em>Cambridge History of Arabic Literature</em>, 6 vols. (1983–2006)</p>
<p class="small" style="margin:0"><em>Encyclopedia of Arabic Language and Linguistics</em> (Brill)</p>
</div>

<!-- K40 -->
--- text
# A model the field built impressionistically

<div class="indent">
<p>Periodization is unavoidable:<br>
<span class="indent" style="display:block;font-style:italic;color:var(--muted)">It organizes research, explanation, teaching.<br>It is a major historian’s tool.</span></p>
<p>But the architecture of the standard scheme was never systematically derived from the written tradition as a whole.</p>
</div>

<p class="bottom punch">What if we ask the written tradition itself?</p>

<!-- K41 -->
--- text steps
# The obvious casualty: the Mamluk centuries

<div class="indent">
<p><strong>c. 1250–1517</strong>: one of the busiest periods of Arabic textual production</p>
<p>Yet usually absorbed into a vast “postclassical” period, often called the “<em>Period of Decadence</em>”</p>
<p>The category hides distinctiveness instead of explaining it</p>
</div>

<p class="bottom punch">Does the corpus itself see a coherent middle period?</p>

<!-- K42 -->
--- section light
<p class="kicker">Two witnesses</p>
# First witness: Corpus

<!-- K43 -->
--- figure
![Chronological distribution of the volume of the OpenITI subcorpus](img/fig-2-31-chronological-volume.png)

<!-- K44 -->
--- text steps
# Two lenses on change

<div class="indent">
<p><strong>Keywords</strong> (TF–IDF): <em class="muted">what texts are about</em><br>
<strong>Style</strong> (MFV): <em class="muted">how texts are written</em></p>
<ul>
<li><strong>Hundreds of parameter combinations</strong></li>
<li><strong>3,000 random samples (MFV)</strong></li>
<li><strong>72,000 dendrograms » 48 consensus trees</strong></li>
</ul>
<p>Do not trust a tree. Ask what survives across trees.</p>
</div>

<div class="pills bottom" style="width:14em;margin-left:auto">
<div class="pill"><b>Content</b><em>keywords / TF–IDF</em></div>
<div class="pill on"><b>Style</b><em>most frequent vocabulary</em></div>
</div>

<!-- K45 -->
--- split w-35-65 vcenter
# Style

<p class="big muted" style="font-style:italic">stylometry</p>
<ul class="small" style="font-style:italic">
<li>distributions of frequencies of most frequent words (function words) are unique to individual:</li>
</ul>
<ul class="small" style="font-style:italic;list-style:disc">
<li><strong class="accent">authors</strong></li>
<li>periods</li>
</ul>

|||

![Unrooted dendrogram of authors’ writings clustered by stylometric distance](img/dendrogram-authors.png)

<!-- K46 -->
--- split w-35-65 vcenter
# Style

<p class="big muted" style="font-style:italic">stylometry</p>
<ul class="small" style="font-style:italic">
<li>distributions of frequencies of most frequent words (function words) are unique to individual:</li>
</ul>
<ul class="small" style="font-style:italic;list-style:disc">
<li>authors</li>
<li><strong class="accent">periods</strong></li>
</ul>
<p class="small" style="margin-top:1em"><strong>Jurjī Zaydān’s writings</strong><br>(1) 1891–1902 · (2) 1903–1905 · (3) 1906–1914</p>

|||

![Dendrogram of Jurjī Zaydān’s writings in three periods](img/dendrogram-zaydan.png)

<!-- K47 -->
--- figure caption="A single dendrogram of 50-lunar-year samples of the corpus, colored by macroperiod. Hijrī dates!"
![A single dendrogram of corpus samples by 50-year interval](img/dendrogram-single.png)

<!-- K48 -->
--- figure caption="72,000 dendrograms: hundreds of parameter combinations over 3,000 random samples."
![Grids of small dendrograms](img/dendrograms-72000-a.png)
![Grids of small dendrograms](img/dendrograms-72000-b.png)

<!-- K49 -->
--- figure caption="Summary stripe diagrams: what survives across the trees."
![Summary stripe diagrams, stylometric tests](img/stripes-a.png)
![Summary stripe diagrams, keyword tests](img/stripes-b.png)

<!-- K50 -->
--- text
# Major periods

<ul class="indent">
<li>The early macroperiod (622–1200)</li>
<li>The middle macroperiod (1200–1540)</li>
<li>The late macroperiod (1540–1980)</li>
</ul>

<div class="indent small" style="margin-top:1.2em">
<p><strong>Results of majority of 72,000 dendrograms:</strong></p>
<p class="indent tiny">3,000 stylometric samples (1,500 discrete; 1,500 overlapping)<br>12 distance metrics, 2 major clustering algorithms;<br>48 tf-idf keyword tests.</p>
</div>

<!-- K51 -->
--- text steps
# The middle macroperiod (c. 1200–1540)

<ul class="indent">
<li><em>Thematic profiles</em> isolate it as a distinct period</li>
<li><em>Stylometric profiles</em> often attach it to the early macroperiod</li>
<li>The language evolves slower than the written tradition: new distinct themes, but older language</li>
</ul>

<p class="bottom punch">Two clocks: themes shift faster than language.</p>

<!-- K52 -->
--- text
# A different macrohistory of the written tradition

<ul class="plain indent">
<li>Early: c. 622–1200</li>
<li>Middle: c. 1200–1540</li>
<li>Late: c. 1540–1980</li>
<li>Boundaries are transition zones, not event dates</li>
</ul>

<div class="pills timeline" style="max-width:32em;margin:1.5em auto 0">
<div class="pill"><b>Early</b>c. 622–1200</div>
<div class="pill on"><b>Middle</b>c. 1200–1540</div>
<div class="pill"><b>Late</b>c. 1540–1980</div>
</div>

<!-- K53 -->
--- section light
<p class="kicker">Two witnesses</p>
# Second witness: Bio-Bibliographical Collection

<!-- K54 -->
--- text
# Second witness: 8,800 authors

<div class="indent">
<p>Ismāʿīl Bāšā al-Baġdādī (d. 1338/1919)</p>
<p class="indent"><em>Hadiyyat al-ʿārifīn</em><br><em>c. 8,800 authors; 40,000+ titles</em><br>A bio-bibliographical model of the tradition</p>
<p><strong>Independent of the corpus experiments</strong></p>
</div>

<div class="stats bottom" style="width:15em;margin-left:auto">
<div class="stat red"><b>8,800</b><span>authors</span></div>
<div class="stat paper"><b>40,000+</b><span>titles</span></div>
</div>

<!-- K55 -->
--- figure
# c. 600–1200: an Iraqi-Iranian world
![Map of the Islamic world with the flows of scholars in the early macroperiod, centred on Iraq and Iran](img/map-early.png)
<div class="stat red" style="position:absolute;right:24px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">&gt; 80% Iraq + Iran</b></div>

<!-- K56 -->
--- figure caption="Annual production by region in the early macroperiod: Iraq (al-ʿIrāq) and the Iranian provinces."
# c. 600–1200: an Iraqi-Iranian world
![Charts of annual production for Iraq and the Iranian provinces](img/chart-early.png)
<div class="stat red" style="position:absolute;right:24px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">&gt; 80% Iraq + Iran</b></div>

<!-- K57 -->
--- figure
# c. 1200–1540: a Syrian-Egyptian world
![Map of the Islamic world with the flows of scholars in the middle macroperiod, centred on Egypt and Syria](img/map-middle.png)
<div class="stat red" style="position:absolute;right:24px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">&gt; 55% Egypt + Syria</b></div>

<!-- K58 -->
--- figure caption="Annual production by region in the middle macroperiod: Syria (al-Šām) and Egypt (Miṣr)."
# c. 1200–1540: a Syrian-Egyptian world
![Charts of annual production for Syria and Egypt](img/chart-middle.png)
<div class="stat red" style="position:absolute;right:24px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">&gt; 55% Egypt + Syria</b></div>

<!-- K59 -->
--- figure
# After c. 1540–1900: a new polycentric geography
![Map of the Islamic world with the flows of scholars in the late macroperiod, with Anatolia and India prominent](img/map-late.png)
<div class="stat red" style="position:absolute;left:80px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">≈ 30% Anatolia</b></div>

<!-- K60 -->
--- figure caption="Annual production by region in the late macroperiod: India (Hind) and Anatolia (al-Rūm)."
# After c. 1540–1900: a new polycentric geography
![Charts of annual production for India and Anatolia](img/chart-late.png)
<div class="stat red" style="position:absolute;left:80px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">≈ 30% Anatolia</b></div>

<!-- K61 -->
--- text steps
# Two transitions: <strong>1200–1300</strong> and 1500–1600

<ul class="indent">
<li>Westward movement from Iraq and Iran begins before the Mongol conquest</li>
<li>Andalusi scholars move east as Christian expansion advances in Iberia</li>
</ul>

<div class="callout red bottom"><strong>Baghdad’s fall occurs inside an already-moving geography</strong></div>

<!-- K62 -->
--- figure
# Patterns: Great Cities of Islam
![Number of biographies per 20 years for Baghdad, natives and visitors, with the Mongol sack of 656/1258 marked](img/baghdad-biographies.png)

<!-- K63 -->
--- figure
# Two transitions: <strong>1200–1300</strong> and 1500–1600
![Map of the first major transition, with movements from Iraq and Iran westward and from al-Andalus eastward](img/map-transition-1.png)

<!-- K64 -->
--- text
# Two transitions: 1200–1300 and <strong>1500–1600</strong>

<ul class="indent">
<li>The rise of the Ottoman Empire marks the emergence of a Turco-Arabic world under Ottoman control</li>
<li>and the parallel development of an Indo-Iranian sphere.</li>
</ul>

<!-- K65 -->
--- figure
# Two transitions: 1200–1300 and <strong>1500–1600</strong>
![Map of the second major transition, with flows toward Anatolia and India](img/map-transition-2.png)

<!-- K66 -->
--- text
# Two independent witnesses

<div class="indent">
<p><strong>CORPUS of TEXTS</strong><br><span class="muted">lexical/thematic and stylometric change</span></p>
<p style="margin-top:1em"><strong>REGISTER of AUTHORS</strong><br><span class="muted">cultural geography over time</span></p>
</div>

<p class="bottom punch">Different biases. Different assumptions. Similar macro-boundaries.</p>

<!-- K67 -->
--- text steps
# Three long cultural regimes (macroperiods)

<ol class="indent">
<li>The early Iraqi-Iranian &nbsp;·&nbsp; <em>c. 622–1200</em></li>
<li>The middle Syrian-Egyptian &nbsp;·&nbsp; <em>c. 1200–1540</em></li>
<li>The late Turco-Indian &nbsp;·&nbsp; <em>c. 1540–1980</em></li>
</ol>

<p class="indent small" style="font-style:italic;margin-top:1.2em">(with discernable sub-periods inside each)</p>

<!-- K68 -->
--- figure frame
![Table 3.34: books by region in the early, middle, and late macroperiods](img/table-3-34-regions.png)

<!-- K69 -->
--- text steps
# Periods are also places

<ul class="indent">
<li><strong>Traditional periodization</strong> assumes universality</li>
<li><strong>Computational periodization</strong> demonstrates that <em>language and textual production are aligned in time with changing cultural geography</em> *</li>
</ul>

<p class="punch" style="text-align:center;margin-top:1.2em">Each period gets not just a name, but also a map.</p>

<p class="bottom tiny" style="text-align:right">(* to be redone on the EIS1600 data: 600,000 bios &gt; c. 130,000 individuals)</p>

<!-- K70 -->
--- text steps
# What changes if we accept this model?

<ul class="indent">
<li>The Mamluk centuries become a coherent middle period, <em>not the beginning of decline</em></li>
<li><strong>1258</strong> is recontextualized as an event within a longer transition (1200–1300)</li>
<li><strong>c. 1540</strong> emerges as a major structural break (essentially, the end of the Mamluk period)</li>
<li>Chronology &amp; geography become part of the same explanation</li>
</ul>

<!-- K71 -->
--- full contain
![Cover of Digital Humanities for Arabic and Islamic Studies beside the publisher’s page](img/brill-page-2.png)

<!-- K72 -->
--- text
# Afterword: <em>farḍ al-kifāyaŧ</em>

<p class="indent small" style="max-width:36em">A communal duty in Islamic law: if enough members of a community fulfill it, the rest are absolved. If all neglect it, the entire community is accountable.</p>

<div class="indent" style="margin-top:1.2em;font-style:italic;color:var(--muted)">
<p>No one else will digitize our texts.</p>
<p>No one will create our corpora.</p>
<p>No one will develop methods for our research questions.</p>
<p class="accent" style="font-weight:600">This is our responsibility, and ours alone.</p>
</div>

<!-- K73 -->
--- split w-35-65 no-strip
![Cover of Digital Humanities for Arabic and Islamic Studies](img/book-cover.png)

|||

<p class="kicker">In short, this book asks:</p>
<p class="big" style="font-style:italic">«What does it mean for our field when the entire library becomes a <span style="font-style:normal">vademecum</span> — something that, quite literally, “goes with me” everywhere?»</p>

<div class="twocol small" style="grid-template-columns:1fr 1fr 1fr;gap:.75em;margin-top:.75em">
<div><h3 style="font-size:0.70em;font-style:normal;border-top:2px solid var(--red);padding-top:.35em">Chapter 1</h3><p>Why we should even bother—a question that remains at the heart of every discussion about the digital.</p></div>
<div><h3 style="font-size:0.70em;font-style:normal;border-top:2px solid var(--red);padding-top:.35em">Chapter 2</h3><p>How we might go about harnessing the new digital opportunities within the field.</p></div>
<div><h3 style="font-size:0.70em;font-style:normal;border-top:2px solid var(--red);padding-top:.35em">Chapter 3</h3><p>What we can expect to accomplish:<br>1) trace term usage<br>2) model textual typology<br>3) chart linguistic evolution</p></div>
</div>

<p class="small" style="margin-top:.75em">Altogether, the book proposes a vision of digital humanities relevant to the field of <strong>Arabic and Islamic studies</strong>. It argues that this venture is not about cheating, but about keeping up with the rest of the world and ensuring that the future of the field remains in our own hands.</p>
