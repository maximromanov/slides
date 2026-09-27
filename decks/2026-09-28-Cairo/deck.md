---
title: "Why One Manuscript Needs All The Others"
subtitle: "The Case for a Unified Arabic Corpus"
event: "Unlocking Arabic Manuscripts: The Potential of Digital Humanities for Egypt’s Collections"
author: "Maxim Romanov"
affiliation: "The Evolution of Islamic Societies (c. 600–1600 CE), Universität Hamburg"
date: "September 27–28, 2026 · Cairo"
description: ""
host_logos:
  - img/logo-fu-berlin.png
  - img/logo-iars.png
  - img/logo-ffo.png
  - img/logo-daad-cosimena.png
logos:
  - img/logo-dfg.png
  - img/logo-uhh.png
  - img/logo-eis1600.png
---

<!-- K2 -->
--- title

<!-- QR -->
--- split w-45-55 vcenter

![](img/qr-companion-ar.png)

|||

<div lang="ar" dir="rtl" style="text-align:right">
<h1 lang="ar" style="font-family:var(--f-ar); font-weight:700; font-size:1.35em">دليل المحاضرة بالعربية</h1>
<p class="ar" style="font-size:1.1em; line-height:1.7; margin:0 0 .9em">ملخّصٌ مفصّل للمحاضرة بالعربية، مع شرحٍ موجز لكل شريحة.<br>امسحوا الرمز لقراءته.</p>
<p class="small" lang="en" dir="ltr" style="text-align:right; white-space:nowrap; font-family:var(--f-text)"><a href="https://maximromanov.github.io/slides/2026-09-28-Cairo/companion-ar.html" target="_blank" rel="noopener">maximromanov.github.io/slides/<br>2026-09-28-Cairo/companion-ar.html</a></p>
</div>

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
# The same framing at every scale

<div class="chain">
<div class="box"><span class="num">١</span><span class="name">A word</span><span class="desc">is understood through the words around it: its company restricts its meaning</span></div>
<div class="box"><span class="num">٢</span><span class="name">A term</span><span class="desc">is understood through the corpus: when does it appear across time and space? who uses it? and who doesn’t?</span></div>
<div class="box"><span class="num">٣</span><span class="name">A book</span><span class="desc">is understood through other books: what other books it builds on? how does it fit among the rest?</span></div>
<div class="box hi"><span class="num">٤</span><span class="name">A tradition</span><span class="desc">is understood through the geographical and chronological layers of books: how does its language change? how do its topics shift?</span></div>
</div>

<!-- K3 -->
--- section light
<p class="kicker">The instrument</p>
# A Proxy to the Arabic Written Tradition
<p>OpenITI as a chronological and geographical representation</p>

<!-- K11 -->
--- text
# OpenITI <span class="small" style="font-weight:400"><a href="https://github.com/OpenITI">github.com/OpenITI</a></span>

<div class="stats">
<div class="stat"><b>8,700+</b><span>titles</span></div>
<div class="stat"><b>3,300+</b><span>authors</span></div>
<div class="stat"><b>2.4 billion</b><span>words, all versions</span></div>
</div>

<p class="small" style="text-align:center;color:var(--muted);margin-top:1.6em">Nigst, Lorenz, Maxim Romanov, Sarah Bowen Savant, Masoumeh Seydi, and Peter Verkinderen. <em>OpenITI: A Machine-Readable Corpus of Islamicate Texts, Primary Version.</em> Version 2025.1.9. Zenodo, 2026. <a href="https://doi.org/10.5281/zenodo.18613982">doi.org/10.5281/zenodo.18613982</a></p>

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
--- figure
![The same chronological distribution, with the smallest period circled: even the thinnest slice, 1200–1300 AH, just 14 million clean words, is enough for many purposes](img/fig-2-31-chronological-volume-highlight.png)

<!-- K14b -->
--- section light
<p class="kicker">Case 1</p>
# A term in time
<p>When did <em>al-kutub al-sittaŧ</em> come to be?</p>

<!-- K24 -->
--- text steps
# Case 1: <em>al-kutub al-sittaŧ</em> (<span class="ar" lang="ar" dir="rtl">الكتب الستة</span>)

<div class="indent small" style="max-width:36em">
<p>In “The Devil’s Delusions” (<em>Talbīs Iblīs</em>), Ibn al-Jawzī (d. 597/1201) uses lots of <i>ḥadīṯ</i>s:</p>
<br>
<p><em><strong>- &nbsp; No <i>isnād</i>s for</strong>: Muslim, al-Buḫārī, and Abū Dāwūd</em></p>
<br>
<p><em><strong>- &nbsp; Full <i>isnād</i>s for</strong>: al-Tirmiḏī, Ibn Mājah, and al-Nasāʾī</em></p>
</div>

<br>
<br>

<p class="bottom punch">No notion of <em>al-kutub al-sittaŧ</em> in the end of the 6th/12th century in Baġdād.</p>


<!-- K26 -->
--- figure
![Google Books Ngram Viewer: telegraph, telephone, television](img/google-ngram-viewer.png)

<!-- K25 -->
--- figure
![Mentions of al-kutub al-sittat over time](img/fig-18-kutub-sitta.png)

<!-- K31 -->
--- figure
![Authors mentioning al-kutub al-sittat by century and region](img/fig-19-authors-by-region.png)

<!-- S3 -->
--- section light
<p class="kicker">Case 2</p>
# A book among books
<p>Text reuse and the modeling of text types</p>

<!-- G19 -->
--- section light
<p class="kicker">Case 2a</p>
# Text Reuse
<p>By tracing at scale how later texts reuse earlier texts we can understand how each book fits into the tradition and how all the books form a network of interconnections</p>

<!-- G19b -->
--- split w-25-75 vcenter

<div class="tiny" markdown="1">

- Among them was Abd Allãh b. Ḫāzim al-Sulamī, the governor of Ḫurāsān for Abd Allãh b. al-Zubayr. What was remarkable about him was that he was extremely brave and resourceful, yet he was terrified of mice. One day, while he was with ʿUbayd Allãh b. Ziyād, a white rat was brought before him and he was astonished. ʿUbayd Allãh said to ʿAbd Allãh, ‘O Abū Ṣāliḥ, have you ever seen anything more astonishing than this?’ And there was Abd Allãh, who had shrunk as if he were a chick and turned yellow as if he were a male locust. ʿUbayd Allãh then said, “Abū Ṣaliḥ disobeys the Merciful, takes lightly the authority, seizes the snake, walks toward the blooming lion, faces spears with his face and swords with his hands, and yet, he is overcome by a rat as you see. I testify that Allãh is capable of everything.

</div>

|||

![](img/057675d523.png)

<!-- G21 -->
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

<!-- G21b -->
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
--- section light
<p class="kicker">Case 2b</p>
# Modeling Textual Typology
<p>By modeling major textual types, we can identify types of unknown books and understand the structural composition of the complex books</p>

<!-- G29b -->
--- text
# Case 2b. Modeling Textual Typology

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
--- text

# Testing the model: exegetical type (*tafsīr*)

![](img/table-9-altafsir.png)

<!-- K35 -->
--- text

# The eight exceptions

<ul class="indent small" style="max-width:44em">
<li><em>Mafātīḥ al-ġayb</em> by Faḫr al-dīn al-Rāzī (d. 606/1210) → classified <code>[K]</code> scholastic-theological: it is in fact a major work of <em>kalām</em>, and samples from it were used to train the <code>[K]</code> type</li>
<li><em>Ġarīb al-Qurʾān</em> by Abū Bakr al-Sijistānī (d. 330/942) → classified <code>[L]</code> linguistic (still 26% exegetical signal): closer to a dictionary than to a traditional <em>tafsīr</em></li>
<li>Six early ḥadīṯ-based interpretations — by Mujāhid b. Jabr, ʿAbd al-Razzāq al-Ṣanʿānī, Ibn Ḥakam al-Ḥibarī, al-Nasāʾī, al-Ṭabarī, and Furāt al-Kūfī — classified <code>[Ḥ]</code> Tradition-based: composed mainly of ḥadīṯ reports, so hardly a real mistake; three still carry a strong exegetical signal (28%, 42%, 49%)</li>
</ul>

<p class="bottom punch">73 of 81 texts (90.1%) landed correctly on the first pass; every exception is explicable.</p>

<!-- K35b -->
--- text

# Rolling Assessment: al-Šāfiʿī’s <i>Kitāb al-Umm</i>

![Typological profile of al-Šāfiʿī's Umm across its length: the legal type dominates almost the whole book](img/0204Shafici.Umm.png)

<p>Rolling typological assessment of <i>Kitāb al-Umm</i> of al-Šāfiʿī (d. 204/820) a single dominant type — [F] legal — running almost unbroken from beginning to end.</p>

<!-- G29c -->
--- text

# Rolling Assessment: Ibn al-Jawzī’s <i>Talbīs Iblīs</i>

![](img/fig-26-rolling-assessment_lite.png)

<p>Rolling typological assessment of <i>Talbīs Iblīs</i> of Ibn al-Jawzī (d. 597/1201) shows that individual chapters (separated by vertical black lines) usually contain text reflecting specific types.</p>

<!-- K36 -->
--- text
# Majmūʿāt Case

<p class="indent"><strong>Value for manuscripts:</strong></p>
<ol class="indent">
<li>When HTR starts working, we will need a mechanism to assess HTR-ed texts automatically: we can potentially identify type, author, exact text</li>
<li>Particularly valuable for <em>majmūʿāt</em> — the most numerous kind of manuscripts, the most difficult to read and analyze</li>
</ol>

<!-- S4 -->
--- section light
<p class="kicker">Case 3</p>
# A Tradition
<p>language change and topic shifts through chronological layers of books</p>


<!-- K39 -->
--- split w-60-40
# Case 3. Periodization

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

<p class="punch" style="text-align:center;margin-top:1em">Where do these boundaries come from? What if we ask the corpus?</p>

|||

<div class="callout" style="margin-top:1.5em">
<p class="small" style="margin:0 0 .6em"><em>Geschichte der arabischen Litteratur</em>, 5 vols. (1896–1943)</p>
<p class="small" style="margin:0 0 .6em"><em>Cambridge History of Arabic Literature</em>, 6 vols. (1983–2006)</p>
<p class="small" style="margin:0"><em>Encyclopedia of Arabic Language and Linguistics</em> (Brill)</p>
</div>


<!-- K42 -->
--- section light
<p class="kicker">Two witnesses</p>
# First witness: Corpus

<!-- K43 -->
--- figure
![Chronological distribution of the volume of the OpenITI subcorpus](img/fig-2-31-chronological-volume.png)

<!-- K44 -->
--- text 
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
--- split w-25-75 vcenter tight
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
--- split w-25-75 vcenter tight
# Style

<p class="big muted" style="font-style:italic">stylometry</p>
<ul class="small" style="font-style:italic">
<li>distributions of frequencies of most frequent words (function words) are unique to individual:</li>
</ul>
<ul class="small" style="font-style:italic;list-style:disc">
<li>authors</li>
<li><strong class="accent">periods</strong></li>
</ul>
<p class="small" style="margin-top:1em"><strong>Jurjī Zaydān’s writings</strong><br>(1) 1891–1902<br> (2) 1903–1905<br> (3) 1906–1914</p>

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
--- text 
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
# Second witness:<br> Bio-Bibliographical Collection

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
--- text
# c. 600–1200: an Iraqi-Iranian world
![Map of the Islamic world with the flows of scholars in the early macroperiod, centred on Iraq and Iran](img/map-early.png)
<div class="stat red" style="position:absolute;right:24px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">&gt; 80% Iraq + Iran</b></div>


<!-- K57 -->
--- text
# c. 1200–1540: a Syrian-Egyptian world
![Map of the Islamic world with the flows of scholars in the middle macroperiod, centred on Egypt and Syria](img/map-middle.png)
<div class="stat red" style="position:absolute;right:24px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">&gt; 55% Egypt + Syria</b></div>


<!-- K59 -->
--- text
# c. 1540–1900: a new polycentric geography
![Map of the Islamic world with the flows of scholars in the late macroperiod, with Anatolia and India prominent](img/map-late.png)
<div class="stat red" style="position:absolute;right:24px;bottom:18px;min-width:0;padding:14px 28px"><b style="font-size:36px">≈ 30%  Anatolia</b></div>


<!-- K63 -->
--- text
# Two transitions: <strong>1200–1300</strong> and 1500–1600
![Map of the first major transition, with movements from Iraq and Iran westward and from al-Andalus eastward](img/map-transition-1.png)

<!-- K65 -->
--- text
# Two transitions: 1200–1300 and <strong>1500–1600</strong>
![Map of the second major transition, with flows toward Anatolia and India](img/map-transition-2.png)

<!-- K66 -->
--- text
# Two independent witnesses

<div class="indent">
<p><strong>CORPUS of TEXTS</strong><br><span class="muted">lexical/thematic and stylometric change</span></p>
<p style="margin-top:1em"><strong>REGISTER of AUTHORS</strong><br><span class="muted">cultural geography over time</span></p>
</div>

<p class="bottom punch">Different biases. Different assumptions.<br> Similar macro-boundaries.</p>

<!-- K67 -->
--- text
# Three long cultural regimes (macroperiods)

<ol class="indent">
<li>The early Iraqi-Iranian &nbsp;·&nbsp; <em>c. 622–1200</em></li>
<li>The middle Syrian-Egyptian &nbsp;·&nbsp; <em>c. 1200–1540</em></li>
<li>The late Turco-Indian &nbsp;·&nbsp; <em>c. 1540–1980</em></li>
</ol>

<p class="indent small" style="font-style:italic;margin-top:1.2em">(with discernable sub-periods inside each)</p>

<!-- K69 -->
--- text
# Periods are also places

<ul class="indent">
<li><strong>Traditional periodization</strong> assumes universality</li>
<li><strong>Corpus-driven, computational periodization</strong> demonstrates that <em>language and textual production are aligned in time with changing cultural geography</em></li>
</ul>

<p class="punch" style="text-align:center;margin-top:1.2em">Each period gets not just a name, but also a map.</p>

<!-- K70 -->
--- text
# What changes if we accept this model?

<ul class="indent">
<li>The Mamluk centuries become a coherent middle period, <em>not the beginning of decline</em></li>

<li><strong>c. 1540</strong> emerges as a major structural break (essentially, the end of the Mamluk period); not 1258, the fall of Baġdād and of the ʿAbbāsids</li>

<li>Chronology <i>&amp;</i> geography become part of the same explanation</li>
</ul>

--- section light
<p class="kicker">The instrument, again</p>
# Back to the Corpus

<p>Three case studies later — what can this instrument actually tell us?</p>

<!-- K70b -->
--- text
# But a corpus is also a historical source

<ul class="indent">
<li>Survival bias — what reached us</li>
<li>Editorial / digitization bias — what modern scholars chose to publish</li>
<li>Uneven genre and chronological coverage</li>
<li>Varying representation of different communities</li>
</ul>

<p class="bottom punch">Source criticism begins with the instrument.</p>

<!-- K15 -->
--- figure
![Density plots of books by century in three libraries and the Hadiyyat al-ʿārifīn](img/fig-1-10-density-libraries.png)

<!-- K16 -->
--- figure
![Share of series total by century: Hadiyyat al-ʿārifīn, major libraries, and OpenITI unique texts](img/openiti-mirrors-libraries.png)

<!-- S2 -->
--- quote
<span style="color: var(--red); font-style: italic;">No text can be read alone.<br>Every text needs all the others.</span>

<!-- S2 -->
--- quote
<span style="color: var(--red); font-style: italic;">No manuscript can be read alone.<br>Every manuscript needs all the others.</span>

<!-- K73 -->
--- split w-35-65 no-strip
![Cover of Digital Humanities for Arabic and Islamic Studies](img/book-cover.png)

|||

<p class="kicker">In short, this book asks:</p>
<p class="big" style="font-style:italic">«What does it mean for our field when the entire library becomes a <span style="font-style:normal">vademecum</span> — something that, quite literally, “goes with me” everywhere?»</p>

<div class="twocol small" style="grid-template-columns:1fr 1fr 1fr;--tc-gap:.75em;gap:.75em;margin-top:.75em">
<div><h3 style="font-size:0.70em;font-style:normal;border-top:2px solid var(--red);padding-top:.35em">Chapter 1</h3><p>Why we should even bother—a question that remains at the heart of every discussion about the digital.</p></div>
<div><h3 style="font-size:0.70em;font-style:normal;border-top:2px solid var(--red);padding-top:.35em">Chapter 2</h3><p>How we might go about harnessing the new digital opportunities within the field.</p></div>
<div><h3 style="font-size:0.70em;font-style:normal;border-top:2px solid var(--red);padding-top:.35em">Chapter 3</h3><p>What we can expect to accomplish:<br>1) trace term usage<br>2) model textual typology<br>3) chart linguistic evolution</p></div>
</div>

<p class="small" style="margin-top:.75em">Altogether, the book proposes a vision of digital humanities relevant to the field of <strong>Arabic and Islamic studies</strong>. It argues that this venture is not about cheating, but about keeping up with the rest of the world and ensuring that the future of the field remains in our own hands.</p>
