// <source lang="JavaScript">

if (typeof(wikEd) == 'undefined') { window.wikEd = {}; }

// version info
wikEd.programVersion = '0.9.97a';
wikEd.programDate    = 'November 29, 2010';

/*

Program description:

wikEd is a full-featured Wikipedia-integrated advanced text editor for regular to advanced wiki users.
wikEd features syntax highlighting with code check and reference and template folding,
on-page Show preview and Show changes, and advanced search and replace functions.
wikEd works under all web browsers except Internet Explorer and Opera.
The code has to be saved as UTF-8 in your editor to preserve Unicode characters like ♥ (heart symbol)

Greasemonkey metadata:

// ==UserScript==
// @name        wikEd
// @namespace   http://en.wikipedia.org/wiki/User:Cacycle/
// @description A full-featured in-browser editor for Wikipedia and other MediaWiki edit pages
// @include     *
// @exclude
// @homepage    http://en.wikipedia.org/wiki/User:Cacycle/wikEd
// @source      http://en.wikipedia.org/wiki/User:Cacycle/wikEd.js
// @author      Cacycle (http://en.wikipedia.org/wiki/User:Cacycle)
// @license     Released into the public domain
// ==/UserScript==

Installation:

PLEASE DO NOT COPY THE WHOLE PROGRAM in order to get the frequent updates and bug fixes and to save disk space!
See http://en.wikipedia.org/wiki/User:Cacycle/wikEd for installation instructions

*/


//
// start of user configurable variables
//

//
// wikEd.InitGlobalsConfigs: initialize user configurable variables
//

wikEd.InitGlobalConfigs = function() {

// user readable texts, copy changes to http://en.wikipedia.org/wiki/User:Cacycle/wikEd_international_en.js, also defined in wikEdDiff.js
	if (typeof(wikEd.config.text) == 'undefined') { wikEd.config.text = {}; }

// wikEd.InitText: define built-in user interface texts
	wikEd.InitText = function() {
		wikEd.InitObject(wikEd.config.text, {

// logo
			'wikEdLogo alt':               'wikEd',
			'wikEdLogo title':             'wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click to disable',
			'wikEdLogo error alt':         'wikEd error',
			'wikEdLogo error title':       'Loading error - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click to disable',
			'wikEdLogo browser alt':       '(wikEd)',
			'wikEdLogo browser title':     'Browser not supported - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo incompatible alt':  '(wikEd)',
			'wikEdLogo incompatible title': 'Incompatible script or gadget: {wikEdParameter} - wikEd {wikEdProgramVersion} ({wikEdProgramDate})',
			'wikEdLogo disabled alt':      '(wikEd)',
			'wikEdLogo disabled title':    'Disabled - wikEd {wikEdProgramVersion} ({wikEdProgramDate}) Click to enable',
			'wikEdLogo testVersion alt':   'wikEd_dev',
			'wikEdLogo testVersion title': 'wikEd_dev (unstable test version) {wikEdProgramVersion} ({wikEdProgramDate}) Click to disable',

// top jumper
			'wikEdScrollToEdit4 alt':      'Scroll to edit',
			'wikEdScrollToEdit4 title':    'Scroll to edit field',

// button bar grip titles
			'wikEdGripFormat title':       'Formatting buttons (click to hide or show)',
			'wikEdGripTextify title':      'Textify and wikify buttons (click to hide or show)',
			'wikEdGripCustom1 title':      'Custom buttons (click to hide or show)',
			'wikEdGripFind title':         'Find buttons (click to hide or show)',
			'wikEdGripFix title':          'Fixing buttons (click to hide or show)',
			'wikEdGripCustom2 title':      'Custom buttons (click to hide or show)',
			'wikEdGripControl title':      'wikEd control buttons (click to hide or show)',

// formatting buttons, top row
			'wikEdUndo alt':               'Undo',
			'wikEdUndo title':             'Undo',
			'wikEdRedo alt':               'Redo',
			'wikEdRedo title':             'Redo',
			'wikEdBold alt':               'Bold',
			'wikEdBold title':             'Bold text',
			'wikEdItalic alt':             'Italic',
			'wikEdItalic title':           'Italic text',
			'wikEdUnderline alt':          'Underline',
			'wikEdUnderline title':        'Underline text',
			'wikEdStrikethrough alt':      'Strikethrough',
			'wikEdStrikethrough title':    'Strikethrough text',
			'wikEdNowiki alt':             'Nowiki',
			'wikEdNowiki title':           'Nowiki markup text',
			'wikEdSuperscript alt':        'Superscript',
			'wikEdSuperscript title':      'Superscript text',
			'wikEdSubscript alt':          'Subscript',
			'wikEdSubscript title':        'Subscript text',
			'wikEdRef alt':                'Ref',
			'wikEdRef title':              'In-text reference (shift-click: named tag)',
			'wikEdCase alt':               'Case',
			'wikEdCase title':             'Toggle between lowercase, uppercase first, and uppercase',
			'wikEdSort alt':               'Sort',
			'wikEdSort title':             'Sort lines alphabetically',
			'wikEdRedirect alt':           'Redirect',
			'wikEdRedirect title':         'Create redirect, deletes whole text',
			'wikEdUndoAll alt':            'Undo all',
			'wikEdUndoAll title':          'Undo all changes',
			'wikEdRedoAll alt':            'Redo all',
			'wikEdRedoAll title':          'Redo all changes',

// formatting buttons, bottom row
			'wikEdWikiLink alt':           'Link',
			'wikEdWikiLink title':         'Wiki link',
			'wikEdWebLink alt':            'Weblink',
			'wikEdWebLink title':          'External weblink',
			'wikEdHeading alt':            'Heading',
			'wikEdHeading title':          'Increase heading levels (shift-click: decrease)',
			'wikEdBulletList alt':         'Bullet list',
			'wikEdBulletList title':       'Increase bulleted list level (shift-click: decrease)',
			'wikEdNumberList alt':         'Number list',
			'wikEdNumberList title':       'Increase numbered list level (shift-click: decrease)',
			'wikEdIndentList alt':         'Indent list',
			'wikEdIndentList title':       'Increase indention (shift-click: decrease)',
			'wikEdDefinitionList alt':     'Def list',
			'wikEdDefinitionList title':   'Definition list',
			'wikEdImage alt':              'Image',
			'wikEdImage title':            'Image',
			'wikEdTable alt':              'Table',
			'wikEdTable title':            'Table',
			'wikEdReferences alt':         'References',
			'wikEdReferences title':       'References location (shift-click: References section)',

// textify buttons
			'wikEdWikify alt':             'Wikify',
			'wikEdWikify title':           'Convert pasted content to wiki code, update highlighting',
			'wikEdTextify alt':            'Textify',
			'wikEdTextify title':          'Convert pasted content to plain text, update highlighting (shift-click: forced highlighting)',

// find and replace buttons, top row
			'wikEdFindAll alt':            'Find all',
			'wikEdFindAll title':          'Find all matches',
			'wikEdFindPrev alt':           'Find prev',
			'wikEdFindPrev title':         'Find previous match',
			'wikEdFindSelect title':       'Select a previous search or jump to a heading',
			'wikEdFindNext alt':           'Find next',
			'wikEdFindNext title':         'Find next match (shift-click: get selection)',
			'wikEdJumpPrev alt':           'Selected prev',
			'wikEdJumpPrev title':         'Find the selected text backwards',
			'wikEdJumpNext alt':           'Selected next',
			'wikEdJumpNext title':         'Find the selected text forwards',

// find and replace buttons, bottom row
			'wikEdReplaceAll alt':         'Replace all',
			'wikEdReplaceAll title':       'Replace all matches in whole text or selection',
			'wikEdReplacePrev alt':        'Replace prev',
			'wikEdReplacePrev title':      'Replace previous match',
			'wikEdReplaceSelect title':    'Select a previous replacement',
			'wikEdReplaceNext alt':        'Replace next (shift-click: get selection)',
			'wikEdReplaceNext title':      'Replace next match',
			'wikEdCaseSensitive alt':      'Case sensitive',
			'wikEdCaseSensitive title':    'Search is case sensitive',
			'wikEdRegExp alt':             'RegExp',
			'wikEdRegExp title':           'Search field is a regular expression',
			'wikEdFindAhead alt':          'Find ahead',
			'wikEdFindAhead title':        'Find ahead as you type (case-insensitive non-regexp search)',

// fix buttons, top row
			'wikEdFixBasic alt':           'Fix basic',
			'wikEdFixBasic title':         'Fix blanks and empty lines, also done by other fixing functions',
			'wikEdFixHtml alt':            'Fix html',
			'wikEdFixHtml title':          'Fix html to wikicode',
			'wikEdFixCaps alt':            'Fix caps',
			'wikEdFixCaps title':          'Fix caps in headers and lists',
			'wikEdFixUnicode alt':         'Fix Unicode',
			'wikEdFixUnicode title':       'Fix Unicode character representations',
			'wikEdFixAll alt':             'Fix all',
			'wikEdFixAll title':           'Fix basic, html, capitalization, and Unicode',
			'wikEdFixRedirect alt':        'Fix redirects',
			'wikEdFixRedirect title':      'Fix redirects',

// fix buttons, bottom row
			'wikEdFixDashes alt':          'Fix dashes',
			'wikEdFixDashes title':        'Fix dashes',
			'wikEdFixPunct alt':           'Fix punctuation',
			'wikEdFixPunct title':         'Fix spaces before punctuation',
			'wikEdFixMath alt':            'Fix math',
			'wikEdFixMath title':          'Fix math',
			'wikEdFixChem alt':            'Fix chem',
			'wikEdFixChem title':          'Fix chemical formulas',
			'wikEdFixUnits alt':           'Fix units',
			'wikEdFixUnits title':         'Fix units',
			'wikEdFixRegExTypo alt':       'Fix typos',
			'wikEdFixRegExTypo title':     'Fix typos using the AutoWikiBrowser RegExTypoFixer rules',

// wikEd control buttons, top row
			'wikEdRefHide alt':            '[REF, TEMPL]',
			'wikEdRefHide title':          'Toggle [REF] and [TEMPL] hiding',
			'wikEdRefButtonTooltip':       'Click to display hidden reference',
			'wikEdTemplButtonTooltip':     'Click to display hidden template',
			'wikEdCharEntityButtonTooltip': 'Click to display hidden character entity',
			'wikEdRefButtonShowTooltip':   'Click to hide reference',
			'wikEdTemplButtonShowTooltip': 'Click to hide template',
			'wikEdCharEntityButtonShowTooltip': 'Click to hide character entity',
			'wikEdTextZoom alt':           'Text zoom',
			'wikEdTextZoom title':         'Text zoom cycling (shift-click: reverse)',
			'wikEdClearHistory alt':       'Clear history',
			'wikEdClearHistory title':     'Clear the find, replace, and summary history',
			'wikEdScrollToPreview alt':    'Scroll to preview',
			'wikEdScrollToPreview title':  'Scroll to preview field',
			'wikEdScrollToEdit alt':       'Scroll to edit',
			'wikEdScrollToEdit title':     'Scroll to edit field',

// wikEd control buttons, bottom row
			'wikEdUseWikEd alt':           'Use wikEd',
			'wikEdUseWikEd title':         'Toggle between classic text area and wikEd',
			'wikEdHighlightSyntax alt':    'Syntax',
			'wikEdHighlightSyntax title':  'Toggle automatic syntax highlighting',
			'wikEdSource alt':             'Source',
			'wikEdCloseToolbar title':     'Close the standard non-wikEd toolbar',
			'wikEdCloseToolbar alt':       'Close toolbar',
			'wikEdSource title':           'Show the source code for testing purposes',
			'wikEdUsing alt':              'Using',
			'wikEdUsing title':            'Automatically add \'\'…using wikEd\'\' to summaries',
			'wikEdDiff alt':               'wikEdDiff',
			'wikEdDiff title':             'Toggle automatic improved diff view',
			'wikEdFullScreen alt':         'Fullscreen',
			'wikEdFullScreen title':       'Toggle the fullscreen mode',
			'wikEdTableMode alt':          'Table mode',
			'wikEdTableMode title':        'Toggle table edit mode',

// summary buttons
			'wikEdClearSummary alt':       'Clear summary',
			'wikEdClearSummary title':     'Clear the summary field',
			'wikEdSummarySelect title':    'Select a previous summary',
			'wikEdPresetSummary': [
				'/*  */ ', 'copyedit', 'reply', 'article created', 'intro rewrite',
				'linkfix', 'fixing typos', 'removing linkspam', 'reverting test',
				'reverting vandalism', 'formatting source text', '{wikEdUsing}'
			],
			'wikEdSummaryUsing':           '…using [[en:User:Cacycle/wikEd|wikEd]]',

// button title acceskey
			'alt-shift':                   'alt-shift-',

// submit buttons
			'wikEdLocalPreviewImg alt':    'Preview below',
			'wikEdLocalPreview title':     'Show preview below',
			'wikEdLocalDiffImg alt':       'Changes below',
			'wikEdLocalDiff title':        'Show current changes below',
			'wikEdHelpPageLink':           ' | <a href="{wikEdHomeBaseUrl}wiki/User:Cacycle/wikEd_help" target="helpwindow">wikEd help</a>', // use full link without {wikEdHomeBaseUrl} if the page is not on the English Wikipedia

// preview and changes buttons, top
			'wikEdClose alt':              'Close',
			'wikEdClose title':            'Close preview box',
			'wikEdClose2 alt':             'Close',
			'wikEdClose2 title':           'Close preview box',
			'wikEdScrollToPreview2 alt':   'Scroll to preview',
			'wikEdScrollToPreview2 title': 'Scroll to preview field',
			'wikEdScrollToEdit2 alt':      'Scroll to edit',
			'wikEdScrollToEdit2 title':    'Scroll to edit field',

// preview and changes buttons, bottom
			'wikEdScrollToPreview3 alt':   'Scroll to preview',
			'wikEdScrollToPreview3 title': 'Scroll to preview field',
			'wikEdScrollToEdit3 alt':      'Scroll to edit',
			'wikEdScrollToEdit3 title':    'Scroll to edit field',

// preview field
			'wikEdPreviewLoading':         '...',
			'diffNotLoaded':               'Error: Local diff script not installed.',

// formatting functions
			'image filename':              'filename',
			'image width':                 'width',
			'table caption':               'caption',
			'table heading':               'heading',
			'table cell':                  'cell',
			'redirect article link':       'article link',

// fixing functions
			'External links':              'External links',
			'See also':                    'See also',
			'References':                  'References',

// language specific wiki code
			'wikicode Image':              'Image',
			'wikicode File':               'File',
			'wikicode Category':           'Category',
			'wikicode Template':           'Template',
			'wikEdReferencesSection':      '\n== References ==\n\n<references />\n',
			'talk page':                   'talk',
			'history page':                'history',
			'talk namespace':              'Talk',
			'talk namespace suffix':       '_talk', //// in French it is a prefix (Discussion_Utilisateur)

// hiding buttons
			'hideRef':                     'REF',
			'hideTempl':                   'TEMPL',

// shortened button texts
			'shortenedPreview':            'Preview',
			'shortenedChanges':            'Changes',

// follow link popup
			'followLink':                  '(ctrl-click)',
			'followLinkMac':               '(cmd-click)',

// error message popups
			'wikEdTableModeError':         'The table wikicode contains errors',

// auto updating
			'wikEdGreasemonkeyAutoUpdate': 'wikEd Update:\n\nA new version of the GreaseMonkey script "wikEd" is available.\n\n\nIt will be downloaded from:\n\n{updateURL}',

// highlighting popups
			'hyphenDash':                  'Standard hyphen',
			'figureDash':                  'Figure dash',
			'enDash':                      'En dash',
			'emDash':                      'Em dash',
			'barDash':                     'Horizontal bar',
			'minusDash':                   'Minus sign',
			'softHyphen':                  'Soft hyphen',
			'tab':                         'Tab',
			'enSpace':                     'En space',
			'emSpace':                     'Em space',
			'thinSpace':                   'Thin space',
			'ideographicSpace':            'Ideographic space',

// highlighting
			'wikEdSignature3':             'Sign with username only',
			'wikEdSignature4':             'Sign with user name and date',
			'wikEdSignature5':             'Sign with date only',

// highlighting errors
			'wikEdErrorHtmlUnknown':       'Unsupported HTML tag',
			'wikEdErrorBoldItalic':        'Invalid bold / italic',
			'wikEdErrorWrongClose':        'Close tag does not match',
			'wikEdErrorNoOpen':            'Close tag has no match',
			'wikEdErrorNoHandler':         'No handler',
			'wikEdErrorNoClose':           'Open tag has no match',
			'wikEdErrorNewline':           'Open tag closed by new line',
			'wikEdErrorTemplHeading':      'Headings in templates are ignored',
			'wikEdErrorTemplParam':        'Template/parameter tags do not match',
			'wikEdErrorTemplParamAmbig':   'Template/parameter tags are ambiguous',
			'wikEdErrorCodeInLinkName':    'Wikicode in link name',
			'wikEdErrorCodeInTemplName':   'Wikicode in template name',
			'wikEdErrorCodeInParamName':   'Wikicode in template parameter name',

// highlighting image preview
			'wikEdFilePreview':            'Image preview',

// location search string functions
			'iconPage':                    'All icons and images used by wikEd. Save page as <i>web page, complete</i> to download all files into one folder.<br><br>'

		}, wikEd.config.showMissingTranslations);
	};

// define built-in user interface texts
	wikEd.InitText();

// use local copies of images for testing (set to true in local copy of edit page), also defined in wikEdDiff.js
	if (typeof(wikEd.config.useLocalImages) == 'undefined') { wikEd.config.useLocalImages = false; }

// path to local images for testing, also defined in wikEdDiff.js
	if (typeof(wikEd.config.imagePathLocal) == 'undefined') { wikEd.config.imagePathLocal = 'file:///D:/wikEd/images/'; }

// path to images, also defined in wikEdDiff.js
	if (typeof(wikEd.config.imagePath) == 'undefined') { wikEd.config.imagePath = 'http://upload.wikimedia.org/wikipedia/commons/'; }

// image filenames, also defined in wikEdDiff.js
	if (typeof(wikEd.config.image) == 'undefined') { wikEd.config.image = {}; }

// wikEd.InitImages: define built-in image URLs
	wikEd.InitImages = function() {
		wikEd.InitImage(wikEd.config.image, {
			'barDash':             '5/52/WikEd_bar_dash.png',
			'bold':                '5/59/WikEd_bold.png',
			'browser':             '0/07/WikEd_disabled.png',
			'bulletList':          '6/62/WikEd_bullet_list.png',
			'case':                'a/aa/WikEd_case.png',
			'caseSensitive':       '0/0d/WikEd_case_sensitive.png',
			'clearHistory':        'c/c8/WikEd_clear_history.png',
			'clearSummary':        '2/2c/WikEd_clear_summary.png',
			'close':               '9/97/WikEd_close.png',
			'closeToolbar':        '1/1d/WikEd_close_toolbar.png',
			'ctrl':                '1/10/WikEd_ctrl.png',
			'definitionList':      'f/f5/WikEd_definition_list.png',
			'diff':                'd/db/WikEd_diff.png',
			'disabled':            '0/07/WikEd_disabled.png',
			'dummy':               'c/c5/WikEd_dummy.png',
			'emDash':              '5/58/WikEd_em_dash.png',
			'emSpace':             '3/3a/WikEd_em_space.png',
			'enDash':              'f/fc/WikEd_en_dash.png',
			'enSpace':             '0/04/WikEd_en_space.png',
			'error':               '3/3e/WikEd_error.png',
			'figureDash':          '2/25/WikEd_figure_dash.png',
			'findAhead':           '3/34/WikEd_find_ahead.png',
			'findAll':             '7/75/WikEd_find_all.png',
			'findNext':            'a/ad/WikEd_find_next.png',
			'findPrev':            'f/f5/WikEd_find_prev.png',
			'fixAll':              '8/86/WikEd_fix_all.png',
			'fixBasic':            '3/30/WikEd_fix_basic.png',
			'fixCaps':             '0/00/WikEd_fix_caps.png',
			'fixUnicode':          'd/d4/WikEd_fix_unicode.png',
			'fixRedirect':         'f/f8/WikEd_fix_redirect.png',
			'fixChem':             'e/e7/WikEd_fix_chem.png',
			'fixDash':             'e/e5/WikEd_fix_dash.png',
			'fixHtml':             '0/05/WikEd_fix_html.png',
			'fixMath':             '3/3f/WikEd_fix_math.png',
			'fixPunct':            'd/db/WikEd_fix_punct.png',
			'fixRegExTypo':        '9/94/WikEd_fix_reg-ex-typo.png',
			'fixUnits':            '6/69/WikEd_fix_units.png',
			'textZoom':            '7/71/WikEd_font_size.png',
			'fullScreen':          'd/d3/WikEd_fullscreen.png',
			'getFind':             '9/96/WikEd_get_selection.png',
			'grip':                'a/ad/WikEd_grip.png',
			'heading':             '0/07/WikEd_heading.png',
			'highlightSyntax':     '6/67/WikEd_syntax.png',
			'ideographicSpace':    'c/c6/WikEd_ideographic_space.png',
			'image':               '3/37/WikEd_image.png',
			'incompatible':        '3/3e/WikEd_error.png',
			'indentList':          '7/7a/WikEd_indent_list.png',
			'italic':              'd/d4/WikEd_italic.png',
			'jumpNext':            '5/54/WikEd_jump_next.png',
			'logo':                '6/67/WikEd_logo.png',
			'minusDash':           'b/ba/WikEd_minus_dash.png',
			'noFile':              '8/88/WikEd_no_file.png',
			'nowiki':              '5/5a/WikEd_nowiki.png',
			'numberList':          '3/3b/WikEd_number_list.png',
			'jumpPrev':            'c/c7/WikEd_jump_prev.png',
			'preview':             '3/31/WikEd_preview.png',
			'redirect':            'f/fa/WikEd_redirect.png',
			'redo':                'd/d7/WikEd_redo.png',
			'ref':                 'b/ba/WikEd_ref.png',
			'refHide':             '0/0b/WikEd_ref_hide.png',
			'references':          '6/66/WikEd_references.png',
			'redoAll':             '2/2d/WikEd_redo_all.png',
			'resizeGrip':          'e/e1/WikEd_resize_grip.png',
			'regExp':              '6/6a/WikEd_regexp.png',
			'replaceAll':          '2/2a/WikEd_replace_all.png',
			'replaceNext':         'b/b0/WikEd_replace_next.png',
			'replacePrev':         'a/a1/WikEd_replace_prev.png',
			'scrollToEdit':        '1/13/WikEd_align_top.png',
			'scrollToPreview':     '3/37/WikEd_align_preview.png',
			'scrollToEditDown':    'a/a8/WikEd_align_down.png',
			'scrollToPreviewDown': '5/58/WikEd_align_preview_down.png',
			'softHyphen':          'c/c7/WikEd_soft_hyphen.png',
			'sort':                '7/7c/WikEd_sort.png',
			'source':              '0/02/WikEd_source.png',
			'strikethrough':       '0/06/WikEd_strikethrough.png',
			'subscript':           '9/9e/WikEd_subscript.png',
			'superscript':         'b/bf/WikEd_superscript.png',
			'tab':                 'e/e7/WikEd_tab.png',
			'table':               'b/bd/WikEd_table.png',
			'tableMode':           'e/ee/WikEd_table_edit.png',
			'tableBG':             '8/8a/WikEd_unknown.png',
			'testVersion':         '3/3e/WikEd_error.png',
			'textify':             'c/cd/WikEd_textify.png',
			'thinSpace':           '5/56/WikEd_thin_space.png',
			'underline':           '2/21/WikEd_underline.png',
			'undo':                'e/e6/WikEd_undo.png',
			'undoAll':             '0/08/WikEd_undo_all.png',
			'unknown':             '8/8a/WikEd_unknown.png',
			'useWikEd':            '6/67/WikEd_logo.png',
			'using':               'e/e0/WikEd_using.png',
			'webLink':             '1/16/WikEd_weblink.png',
			'wikEdDiff':           'c/c6/WikEdDiff.png',
			'wikify':              '9/9f/WikEd_wikify.png',
			'wikiLink':            '2/21/WikEd_wikilink.png'
		});
	};

// edit-frame css rules
	if (typeof(wikEd.config.frameCSS) == 'undefined') { wikEd.config.frameCSS = {}; }

// wikEd.InitFrameCSS: define built-in edit frame css
	wikEd.InitFrameCSS = function() {
		wikEd.InitObject(wikEd.config.frameCSS, {

// frame
			'.wikEdFrameHtml':      'height: 100%; width: 100%; padding: 0; margin: 0; background: transparent; background-image: url({wikEdImage:resizeGrip}); background-attachment: fixed; background-position: right bottom; background-repeat: no-repeat;',
			'.wikEdFrameBodyPlain': 'height: auto; min-height: 100%; width: auto; background: transparent; margin: 0; padding: 0; padding-left: 0.25em; overflow: auto; font-family: monospace;',

			'.wikEdFrameBodySyntax': 'height: auto; min-height: 100%; width: auto; background: transparent; margin: 0; padding: 0; padding-left: 0.25em; overflow: auto; font-family: monospace; text-shadow: white -1px -1px 0, white -1px 0 0, white -1px 1px 0, white 0 -1px 0, white 0 1px 0, white 1px -1px 0, white 1px 0 0, white 1px 1px 0;',

			'.wikEdFrameBodyNewbie': 'height: auto; min-height: 100%; width: auto; background: transparent; margin: 0; padding: 0; padding-left: 0.25em; overflow: auto; font-family: monospace;',

// reselection / scroll to selection
			'.wikEdScrollLineHeight': 'position: absolute;',

// syntax highlighting
			'.wikEdError':          'background-image: url({wikEdImage:unknown}); color: black; font-weight: normal; font-style: normal; text-decoration: none; text-shadow: white -1px -1px 0, white -1px 0 0, white -1px 1px 0, white 0 -1px 0, white 0 1px 0, white 1px -1px 0, white 1px 0 0, white 1px 1px 0;',
			'.wikEdHighlightError': 'color: black; background: #faa;',

			'.wikEdHtml':           'background: #e8e8e8; text-shadow: none;',
			'.wikEdHtmlTag':        'color: #777;',
			'.wikEdHtmlTagButtons': 'color: #777;',
			'.wikEdHtmlUnknown':    'background-image: url({wikEdImage:unknown}); color: black; font-weight: normal; font-style: normal; text-shadow: white -1px -1px 0, white -1px 0 0, white -1px 1px 0, white 0 -1px 0, white 0 1px 0, white 1px -1px 0, white 1px 0 0, white 1px 1px 0;',
			'.wikEdParsingNote':    'border: 1px outset #fcc; padding: 0 0.5em 0 0.5em; margin: 0 0.25em 0 0.25em;  color: black; background: #fcc; text-shadow: none; font-weight: normal; font-size: smaller; font-style: normal; text-decoration: none; font-family: sans-serif;',

			'.wikEdSubscript':      'position: relative; top: 0.3em;',
			'.wikEdSuperscript':    'position: relative; top: -0.3em;',
			'.wikEdBold':           'font-weight: bold;',
			'.wikEdItalic':         'font-style: italic;',

			'.wikEdComment':        'background: #fff0d0; text-shadow: none; color: black; font-weight: normal; font-style: normal; text-decoration: none;',
			'.wikEdKeep':           '',
			'.wikEdDel':            'text-decoration: line-through;',
			'.wikEdIns':            'text-decoration: underline;',

			'.wikEdPre':            'background: #e8e8e8; text-shadow: none;',
			'.wikEdMath':           'background: #e8e8e8; text-shadow: none;',
			'.wikEdNowiki':         'background: #e8e8e8; text-shadow: none;',

// horizontal rule
			'.wikEdHr':             'background: #666; text-shadow: none; color: #ffffff;',

// wiki code
			'.wikEdWiki':           'color: #777;',
			'.wikEdRedir':          'color: #c00; font-weight: bold;',
			'.wikEdSignature':      'color: #f00; font-weight: bold;',
			'.wikEdMagic':          'color: #666; font-weight: bold; background: #e8e8e8; text-shadow: none;',
			'.wikEdParserFunct':    'color: #f00;',

// headings
			'.wikEdFrameBodySyntax .wikEdHeading': 'color: #000; font-weight: bold;',
			'.wikEdFrameBodySyntax .wikEdHeadingWP': 'color: #000; font-weight: bold; background: #e8e8e8; text-shadow: none;',
			'.wikEdFrameBodyNewbie .wikEdHeading':
					'color: #000; font-weight: bold; color: #000; background: #eee; padding: 0 0.25em; border: 1px solid #ddd; font-size: larger; line-height: 1.5; text-shadow: white -1px -1px 0; ',
			'.wikEdFrameBodyNewbie .wikEdHeadingWP':
					'color: #000; font-weight: bold; color: #000; background: #ddd; padding: 0 0.25em; border: 1px solid #ccc; font-size: larger; line-height: 1.5; text-shadow: #eee -1px -1px 0; ',

// tables
			'.wikEdTable':          'color: #000; background: #e8e8e8; text-shadow: none;',
			'.wikEdTableTag':       'color: #777;',

// list
			'.wikEdList':           'color: #000; background: #e8e8e8; text-shadow: none;',
			'.wikEdListTag':        'font-weight: bold; font-family: monospace; vertical-align: text-bottom;',

// space-pre
			'.wikEdSpace':          'color: #000; background: #e8e8e8; text-shadow: none;',
			'.wikEdSpaceTag':       'background: #e8e8e8; text-shadow: none;',

// links
			'.wikEdLinkTag':        'color: #777;',

// wiki links
			'.wikEdLink':           '',
			'.wikEdLinkCrossNs':    'background: #ddd; text-shadow: none;',
			'.wikEdLinkInter':      'color: #000; background: #ddd; text-shadow: none;',
			'.wikEdLinkNs':         'color: #000; background: #ddd; text-shadow: none;',
			'.wikEdLinkName':       'color: #00e; font-weight: bold;',
			'.wikEdLinkTarget':     'color: #00e;',
			'.wikEdLinkText':       'color: #00e; font-weight: bold;',
			'.wikEdPMID':           'color: #00e;',
			'.wikEdISBN':           'color: #00e;',
			'.wikEdLinkInter span': 'font-weight: normal;',
			'span.wikEdLinkText:hover': 'text-decoration: underline;',
			'span.wikEdLinkName:hover': 'text-decoration: underline;',
			'span.wikEdPMID:hover': 'text-decoration: underline;',
			'span.wikEdISBN:hover': 'text-decoration: underline;',

// external links
			'.wikEdURL':            '',
			'.wikEdURLName':        'color: #00e; font-weight: bold;',
			'.wikEdURLTarget':      'color: #00e;',
			'.wikEdURLText':        'color: #00e; font-weight: bold;',
			'span.wikEdURLName:hover': 'text-decoration: underline;',
			'span.wikEdURLText:hover': 'text-decoration: underline;',

// images
			'.wikEdFile':           'background: rgb(213, 255, 176); background: rgba(199, 255, 149, 0.75); text-shadow: none;',
			'.wikEdFrameBodyNewbie .wikEdFile':
					'background: rgb(213, 255, 176); padding: 0.25em; margin-right: 0.25em; display: inline-block; border: 1px solid #082; margin: 1px;',
			'.wikEdFileTag':        'color: #444;',
			'.wikEdFileName':       'color: #00e;',
			'.wikEdFileParam':      'color: #666;',
			'.wikEdFileCaption':    'color: #000;',
			'.wikEdFilePreview':    'border: 1px solid #c0ffa0; background: rgb(192, 192, 192) no-repeat 50% 50%; background: rgba(192, 192, 192, 0.75); text-shadow: none; position: absolute; right: 0; margin: 0.1em 0.25em; z-index: -1; border: none; padding: 1px; display: block;',
			'.wikEdFrameBodyNewbie .wikEdFilePreview':
					'position: static; float: right; clear: both; background: transparent; padding: 0; ',

// categories
			'.wikEdCat':            'background: #ccc; text-shadow: none;',
			'.wikEdCatName':        'color: #00e;',
			'.wikEdCat .wikEdLinkInter': 'color: #000; background: #aaa; text-shadow: none;',
			'.wikEdCat .wikEdLinkNs': 'color: #000; background: #ccc; text-shadow: none;',
			'.wikEdCat .wikEdLinkText': 'color: #000; font-weight: normal;',
			'.wikEdCat span.wikEdLinkText:hover': 'text-decoration: none;',

// refs
			'.wikEdFrameBodySyntax .wikEdRefContainer': 'display: none;',

			'.wikEdRefContainer':   'position: relative; top: 1em;',
			'.wikEdRefContainer button': 'padding: 0.1em; position: relative; top: -1em;',

			'.wikEdRefButton':      'border: 1px solid; border-color: #e8e8e8 #444 #444 #e8e8e8; background: #d8d4d0; text-shadow: none;',
			'.wikEdRefButtonShow':  'border: 1px solid; border-color: #000 #e8e8e8 #e8e8e8 #000; background: #c8c4c0; text-shadow: none;',
			'.wikEdRef, .wikEdRefShow': 'background: #e8e8e8; text-shadow: none; color: #666;',

			'.wikEdReferences':     'background: #eee; text-shadow: none;',
			'.wikEdReferencesTag':  'color: #444;',
			'.wikEdFrameBodyNewbie .wikEdReferences':
					'background: #eee; padding: 0.25em; display: inline-block; border: 1px solid black; vertical-align: middle;',
			'.wikEdRefList':        'background: #eee; text-shadow: none;',
			'.wikEdFrameBodyNewbie .wikEdRefList':
					'background: #e8e8e8; padding: 0.25em; display: inline-block; border: 1px solid black; vertical-align: middle;',
			'.wikEdRefName':        'color: #000;',

// templates
			'.wikEdFrameBodySyntax .wikEdTemplContainer':  'display: none;',
			'.wikEdTemplContainer': 'position: relative; top: 1em;',
			'.wikEdTemplContainer button': 'padding: 0.1em; position: relative; top: -1em;',
			'.wikEdTemplButton':     'border: 1px solid; border-color: #e8e8e8 #444 #444 #e8e8e8; background: #d8d4d0; text-shadow: none;',
			'.wikEdTemplButtonShow': 'border: 1px solid; border-color: #000 #e8e8e8 #e8e8e8 #000; background: #c8c4c0; text-shadow: none;',

			'.wikEdTempl, .wikEdTemplShow': 'background: #e8e8e8; text-shadow: none; color: #666;',
			'.wikEdTemplNs, .wikEdTemplNsShow': 'background: #ccc; text-shadow: none;',

			'.wikEdTemplTag':       'color: #777;',
			'.wikEdTemplName':      'color: #509;',
			'.wikEdTemplParam':     '',
			'.wikEdTemplMod':       'color: #f00; font-weight: bold;',

			'.wikEdParam':          'background: #e8e8e8; text-shadow: none;',
			'.wikEdParamName':      'color: #900;',
			'.wikEdParamDefault':   'color: #000;',

// character entities
			'.wikEdFrameBodySyntax .wikEdCharEntityContainer':  'display: none;',

			'.wikEdCharEntityContainer': 'position: relative; right: -0.25em;',

			'.wikEdCharEntityContainer button':
					'padding: 0; color: #000; font-weight: normal; font-family: monospace; position: relative; right: 0.25em; ',

			'.wikEdCharEntityButton':
					'border: 1px solid; border-color: #e8e8e8 #444 #444 #e8e8e8; background: #d8d4d0; border-color: rgba(255, 255, 255, 0.75) rgba(64, 64, 64, 0.5) rgba(64, 64, 64, 0.5) rgba(255, 255, 255, 0.75); background: rgba(192, 192, 192, 0.3); text-shadow: none;',

			'.wikEdCharEntityButtonShow':
					'border: 1px solid; border-color: #000 #e8e8e8 #e8e8e8 #000; background: #c8c4c0; border-color: rgba(64, 64, 64, 0.5) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.75) rgba(64, 64, 64, 0.5); background: rgba(192, 192, 192, 0.3); text-shadow: none;',

			'.wikEdCharEntity, .wikEdCharEntityShow':
					'color: #000; background: #e8e8e8; text-shadow: none;',

// links in references and templates
			'.wikEdFrameBodySyntax .wikEdRef .wikEdURLName,  .wikEdFrameBodySyntax .wikEdTempl .wikEdURLName,  .wikEdFrameBodySyntax .wikEdRef .wikEdURLTarget,  .wikEdFrameBodySyntax .wikEdTempl .wikEdURLTarget,  .wikEdFrameBodySyntax .wikEdRef .wikEdURLText,  .wikEdFrameBodySyntax .wikEdTempl .wikEdURLText':  'color: #66f; font-weight: normal;',
			'.wikEdFrameBodySyntax .wikEdRef .wikEdLinkName, .wikEdFrameBodySyntax .wikEdTempl .wikEdLinkName, .wikEdFrameBodySyntax .wikEdRef .wikEdLinkTarget, .wikEdFrameBodySyntax .wikEdTempl .wikEdLinkTarget, .wikEdFrameBodySyntax .wikEdRef .wikEdLinkText, .wikEdFrameBodySyntax .wikEdTempl .wikEdLinkText': 'color: #66f; font-weight: normal;',

// wikEd.frameBodyNewbie ref and template hiding
			'.wikEdFrameBodyNewbie .wikEdRefContainer + .wikEdRef, .wikEdFrameBodyNewbie .wikEdTemplContainer + .wikEdTempl, .wikEdFrameBodyNewbie .wikEdTemplContainer .wikEdTemplNs, .wikEdFrameBodyNewbie wikEd.refContainer + .wikEdRefShow, .wikEdFrameBodyNewbie .wikEdTemplContainer + .wikEdTemplShow, .wikEdFrameBodyNewbie .wikEdTemplContainer +  .wikEdTemplNsShow':
					'display: none; color: #000; background: #f8f8f8; font-weight: normal; border: 1px solid; border-color: #444 #ccc #ccc #444; padding: 1em 0.25em 1em 0.25em; position: relative;',

			'.wikEdFrameBodyNewbie .wikEdRefButton:before, .wikEdFrameBodyNewbie .wikEdTemplButton:before, .wikEdFrameBodyNewbie .wikEdRefButtonShow:before, .wikEdFrameBodyNewbie .wikEdTemplButtonShow:before':
					'line-height: 0.75em; font-size: 65%; color: #000; font-family: sans-serif;',

			'.wikEdRefButton:before, .wikEdTemplButton:before, .wikEdRefButtonShow:before, .wikEdTemplButtonShow:before':
					'line-height: 0.75em; font-size: 65%; color: #000; font-family: sans-serif;',

			'.wikEdCharEntityButton:before, .wikEdCharEntityButtonShow:before':
					'',

			'.wikEdFrameBodyNewbie .wikEdRefButton:before, .wikEdFrameBodyNewbie .wikEdRefButtonShow:before':
					'content: "{wikEdText:hideRef}"',

			'.wikEdFrameBodyNewbie .wikEdCharEntity, .wikEdFrameBodyNewbie .wikEdCharEntityShow':
					'display: none; color: #000; border: 1px solid; border-color: #444 #ccc #ccc #444; background: #f8f8f8; border-color: rgba(64, 64, 64, 0.5) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.75) rgba(64, 64, 64, 0.5); background: rgba(192, 192, 192, 0.3); font-weight: normal;position: relative;',

			'.wikEdFrameBodyNewbie .wikEdTemplButton:before, .wikEdFrameBodyNewbie .wikEdTemplButtonShow:before':
					'content: "{wikEdText:hideTempl}";',

// table edit
			'.wikEdTableEdit':      'border: solid black; border-width: 1px 1px 0 0; background: red; text-shadow: none; background-image: url({wikEdImage:tableBG}); border-collapse: separate; border-spacing: 0;',
			'.wikEdTableEdit td':   'border: solid black; border-width: 0 0 1px 1px; background: white; text-shadow: none;',
			'.wikEdTableEdit th':   'border: solid black; border-width: 0 0 1px 1px; background: lightgrey; text-shadow: none; font-weight: bold;',
			'.wikEdTableEdit tr':   'background: lightgrey; text-shadow: none; font-weight: bold;',
			'.wikEdTableEdit caption': 'background: lightgrey; text-shadow: none; font-weight: normal;',////

// insert wikicode here
			'.wikEdInsertHere':     'background: orange; text-shadow: none; font-style: italic;',

// colors
			'.wikEdColorsLight':    'color: black; text-shadow: none;',
			'.wikEdColorsDark':     'color: white; text-shadow: none;',

// dashes
			'.wikEdFigureDash':     'background-image: url({wikEdImage:figureDash}); background-position: top right; background-repeat: no-repeat;',
			'.wikEdEmDash':         'background-image: url({wikEdImage:emDash}); background-position: top left; background-repeat: no-repeat;',
			'.wikEdEnDash':         'background-image: url({wikEdImage:enDash}); background-position: top left; background-repeat: no-repeat;',
			'.wikEdBarDash':        'background-image: url({wikEdImage:barDash}); background-position: top left; background-repeat: no-repeat;',
			'.wikEdMinusDash':      'background-image: url({wikEdImage:minusDash}); background-position: top left; background-repeat: no-repeat;',
			'.wikEdSoftHyphen':     'background-image: url({wikEdImage:softHyphen}); background-position: top left; background-repeat: no-repeat;',
			'.wikEdSoftHyphen:before': 'content: \'\xa0\'',
			'.wikEdHyphenDash':     '',

// dashes, invisibles, control chars, and strange spaces
			'.wikEdTab':            'white-space: pre; background-image: url({wikEdImage:tab}); background-position: bottom right; background-repeat: no-repeat;',
			'.wikEdTabPlain':       'white-space: pre;',
			'.wikEdCtrl':           'white-space: pre; background-image: url({wikEdImage:ctrl}); background-position: center center; background-repeat: no-repeat; margin: 0 1px;',
			'.wikEdCtrl:before':    'content: \'\xa0\'',

			'.wikEdEmSpace':        'background-image: url({wikEdImage:emSpace}); background-position: bottom left; background-repeat: no-repeat; margin: 0 1px; padding: 0 3px;',
			'.wikEdEnSpace':        'background-image: url({wikEdImage:enSpace}); background-position: bottom left; background-repeat: no-repeat; margin: 0 1px; padding: 0 3px;',
			'.wikEdThinSpace':      'background-image: url({wikEdImage:thinSpace}); background-position: bottom left; background-repeat: no-repeat; margin: 0 1px; padding: 0 3px;',
			'.wikEdIdeographicSpace': 'background-image: url({wikEdImage:ideographicSpace}); background-position: bottom left; background-repeat: no-repeat; margin: 0 1px; padding: 0 3px;'
		});
	};

// main window css rules
	if (typeof(wikEd.config.mainCSS) == 'undefined') { wikEd.config.mainCSS = {}; }

// wikEd.InitMainCSS: define built-in main window css
	wikEd.InitMainCSS = function() {
		wikEd.InitObject(wikEd.config.mainCSS, {

// logo
			'.wikEdLogoList':              'list-style-type: none;',
			'.wikEdLogo':                  'margin-left: 0.5em;',
			'.wikEdLogoFallBack':          'margin: 0.25em 0 0.25em 0.5em; float: right;'
		});
	};

// main window css rules for edit pages only
	if (typeof(wikEd.config.mainEditCSS) == 'undefined') { wikEd.config.mainEditCSS = {}; }

// wikEd.InitMainEditCSS: define built-in main window css for edit pages only
	wikEd.InitMainEditCSS = function() {
		wikEd.InitObject(wikEd.config.mainEditCSS, {

// combo input box
			'.wikEdCombo':                 'font-size: smaller; padding-left: 0.1em; padding-right: 0.1em; margin: 0 0.1em 0 0.1em; height: 1.6em; vertical-align: bottom;',

// wikEd button areas

// button bar margins
			'.wikEdButtonBarFormat':       'margin: 0 8px 3px 1px; float: left;',
			'.wikEdButtonBarTextify':      'margin: 0 8px 3px 1px; float: left;',
			'.wikEdButtonBarCustom1':      'margin: 0 8px 3px 1px; float: left;',
			'.wikEdButtonBarFind':         'margin: 0 8px 3px 1px; float: left;',
			'.wikEdButtonBarFix':          'margin: 0 8px 3px 1px; float: left;',
			'.wikEdButtonBarCustom2':      'margin: 0 8px 3px 1px; float: left;',
			'.wikEdButtonBarControl':      'margin: 0 1px 3px 0; float: right;',
			'.wikEdButtonBarPreview':      'margin: 0 0 0.15em 0.6em; float: right;',
			'.wikEdButtonBarPreviewFull':  'margin: -0.2em 0 0 0.6em; float: right;',
			'.wikEdButtonBarPreview2':     'margin: 0.2em 0 0.4em 0; float: right;',
			'.wikEdButtonBarJump':         'margin: 0 0 0 0.6em; float: right;',

// button bar inner wrapper: border (hidden: invisible)
			'.wikEdButtonBarInnerWrapperVisible':   'border: 1px solid; border-color: #e0e0e0 #808080 #808080 #e0e0e0;',
			'.wikEdButtonBarInnerWrapperHidden':    '',

// button bar grip wrapper: invisible (hidden: border)
			'.wikEdButtonBarGripWrapperVisible':    'float: left;',
			'.wikEdButtonBarGripWrapperHidden':     'float: left; border: 1px solid; border-color: #e0e0e0 #808080 #808080 #e0e0e0;',

// button bar buttons wrapper: invisible (hidden: border)
			'.wikEdButtonBarButtonsWrapperVisible': 'float: left; background: #d4d0cc; ',
			'.wikEdButtonBarButtonsWrapperHidden':  'float: left; background: #d4d0cc; border: 1px solid; border-color: #e0e0e0 #808080 #808080 #e0e0e0; z-index: 4;',

// button bar grip
			'.wikEdButtonBarGrip':         'background: #d4d0cc; padding: 0; background-image: url({wikEdImage:grip}); background-repeat: repeat-y; cursor: pointer;',

// button bar buttons
			'.wikEdButtonsFormat':         'background: #d4d0cc; padding: 2px 2px 0 0px;',
			'.wikEdButtonsTextify':        'background: #d4d0cc; padding: 2px 2px 0 0px;',
			'.wikEdButtonsCustom1':        'background: #d4d0cc; padding: 2px 2px 0 0px;',
			'.wikEdButtonsFind':           'background: #d4d0cc; padding: 0px 2px 0 0px;',
			'.wikEdButtonsFix':            'background: #d4d0cc; padding: 2px 2px 0 0px;',
			'.wikEdButtonsCustom2':        'background: #d4d0cc; padding: 2px 2px 0 0px;',
			'.wikEdButtonsControl':        'background: #d4d0cc; padding: 2px 2px 0 1px;',

			'.wikEdButtonsPreview':        'background: #d4d0cc; padding: 2px; border: 1px solid; border-color: #e0e0e0 #808080 #808080 #e0e0e0;',
			'.wikEdButtonsPreviewFull':    'background: #d4d0cc; padding: 2px; border: 1px solid; border-color: #e0e0e0 #808080 #808080 #e0e0e0;',
			'.wikEdButtonsPreview2':       'background: #d4d0cc; padding: 2px; border: 1px solid; border-color: #e0e0e0 #808080 #808080 #e0e0e0;',
			'.wikEdButtonsJump':           'background: #d4d0cc; padding: 2px; border: 1px solid; border-color: #e0e0e0 #808080 #808080 #e0e0e0;',

// wikEd buttons (!important for devmo skin)
			'.wikEdButton':                'vertical-align: text-top; font-size: small; text-decoration: underline; margin: 1px 2px; padding: 0; background: #d4d0cc; border: 1px #d4d0cc solid !important; cursor: pointer;',
			'.wikEdButton:hover':          'background: #e4e0dd; border: 1px outset !important; cursor: pointer;',
			'.wikEdButton:active':         'background: #e4e0dc; border: 1px inset !important;  cursor: pointer;',
			'.wikEdButtonSolo':            'vertical-align: text-top; font-size: small; text-decoration: underline; margin: 1px 2px; padding: 0; background: #d4d0cc; border: 1px #d4d0cc solid !important; cursor: pointer;',
			'.wikEdButtonSolo:hover':      'background: #e4e0dd; border: 1px outset !important; cursor: pointer;',
			'.wikEdButtonChecked':         'vertical-align: text-top; font-size: small; text-decoration: none; margin: 1px 2px; padding: 0; background: #ccc8c3; border: 1px solid !important; border-color: black white white black !important; cursor: pointer;',
			'.wikEdButtonUnchecked':       'vertical-align: text-top; font-size: small; text-decoration: none; margin: 1px 2px; padding: 0; background: #ddd8d3; border: 1px solid !important; border-color: white black black white !important; cursor: pointer;',
			'.wikEdButtonPressed':         'vertical-align: text-top; font-size: small; text-decoration: none; margin: 1px 2px; padding: 0; background: #ccc8c3; border: 1px solid !important; border-color: black white white black !important; cursor: wait;',
			'.wikEdButtonInactive':        'vertical-align: text-top; font-size: small; text-decoration: underline; margin: 1px 2px; padding: 0; background: #c0c0c0; border: 1px #b0b0b0 solid !important; cursor: not-allowed',
			'.wikEdLocalPreview':          'vertical-align: top; margin: 0 0.33em 0 0.15em; padding: 0;',
			'.wikEdLocalDiff':             'vertical-align: top; margin: 0 0.33em 0 0.15em; padding: 0;',
			'input#wpDiff, input#wpPreview': 'margin-right: 0;', // monobook fix
			'.wikEdButtonDummy':           'vertical-align: text-top; margin: 1px 2px; padding: 1px; background: #d4d0cc;',

// preview box
			'.wikEdPreviewBoxOuter':       'clear: both; margin: 0; border-width: 1px; border-style: solid; border-color: #808080 #d0d0d0 #d0d0d0 #808080;',
			'.wikEdPreviewBox':            'background: #faf8f6; padding: 5px; border-width: 1px; border-style: solid; border-color: #404040 #ffffff #ffffff #404040;',
			'.wikEdPreviewRefs':           'margin-top: 1.5em; padding-top: 1em;border-top: 1px solid #a0a0a0;',
			'.wikEdPreviewDiffError':      'padding: 0.5em; font-weight: bold; color: red; text-align: center;',

// find field
			'.wikEdFindComboInput':        'position: relative; padding: 0; margin: 0 0.2em; white-space: nowrap; top: 0; vertical-align: bottom;',
			'#wikEdFindText':              'vertical-align: 0%; font-family: monospace; padding: 0; margin: 0; position: absolute; z-index: 2; -moz-box-sizing: content-box; left: 0; top: 1px; height: 14px; width: 170px;',
			'#wikEdFindSelect':            'vertical-align: 0%; font-family: monospace; padding: 0; margin: 0; position: relative; z-index: 1; -moz-box-sizing: content-box; left: 0; top: 0px; height: 18px; border: none;',

// replace field
			'.wikEdReplaceComboInput':     'position: relative; padding: 0; margin: 0 0.2em; white-space: nowrap; top: 0; vertical-align: bottom;',
			'#wikEdReplaceText':           'vertical-align: 0%; font-family: monospace; padding: 0; margin: 0; position: absolute; z-index: 2; -moz-box-sizing: content-box; left: 0; top: 1px; height: 14px; width: 170px;',
			'#wikEdReplaceSelect':         'vertical-align: 0%; font-family: monospace; padding: 0; margin: 0; position: relative; z-index: 1; -moz-box-sizing: content-box; left: 0; top: 0px; height: 18px; border: none; ',

// summary field
			'.wikEdSummaryComboInput':     'position: relative; padding: 0; margin: 0 0 0 0.1em; white-space: nowrap; top: 0; vertical-align: text-bottom;',
			'.wikEdSummaryText':           'vertical-align: 0%; padding: 0; margin: 0; position: absolute; z-index: 2; -moz-box-sizing: content-box; left: 0; top: 0px; height: 18px; width: auto;',
			'.wikEdSummarySelect':         'vertical-align: 0%; padding: 0; margin: 0; position: relative; z-index: 1; -moz-box-sizing: content-box; left: 0; top: 1px; height: 21px; border: none;',

// space around submit buttons
			'.editButtons':                '',

// frame (frame container border will be removed if textarea has none; frame must not have a border)
			'.wikEdFrameOuter':            'float: left; width: auto; border: 1px solid; border-color: #808080 #d0d0d0 #d0d0d0 #808080;',
			'.wikEdFrameInner':            'float: left; width: auto; background: white; border: 1px solid; border-color: #404040 #ffffff #ffffff #404040;',
			'.wikEdFrame':                 'border: 0;',

// summary
			'.wikEdSummaryWrapper':        'margin: 0 0 0.4em 0; width: 100%',
			'.wikEdSummaryWrapperTop':     'margin: 0.1em 0 0.4em 0; width: 100%',
			'#wpSummaryLabel':             'margin: 0 0.2em 0 0;',
			'.editOptions':                'position: relative; top: 0.1em;',
			'.wikEdClearSummaryForm':      'display: inline;',
			'.wikEdClearSummary':          'vertical-align: middle; margin: 0 0.1em 0 0.5em; padding: 0 0 0.2em 0;',

// input wrapper
			'.wikEdInputWrapper':          'z-index: 100; clear: both; margin-top: 0.5em;',
			'.wikEdInputWrapperFull':      'position: fixed; top: 0; left: 0; right: 0; padding: 4px; background: white; z-index: 100;',

// other wrappers
			'.wikEdEditorWrapper':         '',
			'.wikEdToolbarWrapper':        'margin: 0 0 0.25em 0;',
			'.wikEdButtonBarWrapper':      '',
			'.wikEdCaptchaWrapper':        '',
			'.wikEdDebugWrapper':          'clear: both; margin: 0 0 0.25em 0;',
			'.wikEdEditWrapper':           'clear: both;',
			'.wikEdTextareaWrapper':       '',
			'.wikEdFrameWrapper':          '',
			'.wikEdConsoleWrapper':        'clear: both; padding-top: 0.25em;',
			'.wikEdButtonsWrapper':        '',
			'.wikEdSummaryInputWrapper':   'display: inline; white-space: nowrap;',
			'.wikEdSubmitWrapper':         '',
			'.wikEdSubmitButtonsWrapper':  'float: left;',
			'.wikEdEditOptionsWrapper':    'float: left; margin-right: 1em;',
			'.wikEdEditHelp':              'float: left: display: inline-block; white-space: nowrap;',
			'.wikEdLocalPrevWrapper':      'margin: 0.5em 0 0 0;',
			'.wikEdInsertWrapper':         '',

// various
			'.wikEdEditOptions':           'display: inline-block; white-space: nowrap; vertical-align: text-top;',
			'.wikEdEditOptions LABEL':     'vertical-align: text-bottom;',
			'#editpage-specialchars':      'clear: both;',

// wDiff
			'.wDiffParagraph:before':      'content: "¶";'
		});
	};

// buttons (id, class, popup title, image src, width, height, alt text, click code)
	if (typeof(wikEd.config.button) == 'undefined') { wikEd.config.button = {}; }

// wikEd.InitButton: define built-in buttons (id, class, popup title, image src, width, height, alt text, click handler code were obj is the button element)
	wikEd.InitButton = function() {
		wikEd.InitObject(wikEd.config.button, {

// workaround for mozilla 3.0 bug 441087: objId = obj.id; eventShiftKey = event.shiftKey;

// format top
			 1: ['wikEdUndo',             'wikEdButtonInactive',  wikEd.config.text['wikEdUndo title'],             wikEd.config.image['undo'],                '16', '16', wikEd.config.text['wikEdUndo alt'],             'wikEd.EditButton(obj, objId);' ],
			 2: ['wikEdRedo',             'wikEdButtonInactive',  wikEd.config.text['wikEdRedo title'],             wikEd.config.image['redo'],                '16', '16', wikEd.config.text['wikEdRedo alt'],             'wikEd.EditButton(obj, objId);' ],
			 3: ['wikEdBold',             'wikEdButton',          wikEd.config.text['wikEdBold title'],             wikEd.config.image['bold'],                '16', '16', wikEd.config.text['wikEdBold alt'],             'wikEd.EditButton(obj, objId);' ],
			 4: ['wikEdItalic',           'wikEdButton',          wikEd.config.text['wikEdItalic title'],           wikEd.config.image['italic'],              '16', '16', wikEd.config.text['wikEdItalic alt'],           'wikEd.EditButton(obj, objId);' ],
			 5: ['wikEdUnderline',        'wikEdButton',          wikEd.config.text['wikEdUnderline title'],        wikEd.config.image['underline'],           '16', '16', wikEd.config.text['wikEdUnderline alt'],        'wikEd.EditButton(obj, objId);' ],
			 6: ['wikEdStrikethrough',    'wikEdButton',          wikEd.config.text['wikEdStrikethrough title'],    wikEd.config.image['strikethrough'],       '16', '16', wikEd.config.text['wikEdStrikethrough alt'],    'wikEd.EditButton(obj, objId);' ],
			 7: ['wikEdNowiki',           'wikEdButton',          wikEd.config.text['wikEdNowiki title'],           wikEd.config.image['nowiki'],              '16', '16', wikEd.config.text['wikEdNowiki alt'],           'wikEd.EditButton(obj, objId);' ],
			 8: ['wikEdSuperscript',      'wikEdButton',          wikEd.config.text['wikEdSuperscript title'],      wikEd.config.image['superscript'],         '16', '16', wikEd.config.text['wikEdSuperscript alt'],      'wikEd.EditButton(obj, objId);' ],
			 9: ['wikEdSubscript',        'wikEdButton',          wikEd.config.text['wikEdSubscript title'],        wikEd.config.image['subscript'],           '16', '16', wikEd.config.text['wikEdSubscript alt'],        'wikEd.EditButton(obj, objId);' ],
			10: ['wikEdRef',              'wikEdButton',          wikEd.config.text['wikEdRef title'],              wikEd.config.image['ref'],                 '16', '16', wikEd.config.text['wikEdRef alt'],              'if (!eventShiftKey) { wikEd.EditButton(obj, \'wikEdRef\'); } else { wikEd.EditButton(obj, \'wikEdRefNamed\'); }' ],
			12: ['wikEdCase',             'wikEdButton',          wikEd.config.text['wikEdCase title'],             wikEd.config.image['case'],                '16', '16', wikEd.config.text['wikEdCase alt'],             'wikEd.EditButton(obj, objId);' ],
			80: ['wikEdSort',             'wikEdButton',          wikEd.config.text['wikEdSort title'],             wikEd.config.image['sort'],                '16', '16', wikEd.config.text['wikEdSort alt'],             'wikEd.EditButton(obj, objId);' ],
			25: ['wikEdRedirect',         'wikEdButton',          wikEd.config.text['wikEdRedirect title'],         wikEd.config.image['redirect'],            '16', '16', wikEd.config.text['wikEdRedirect alt'],         'wikEd.EditButton(obj, objId);' ],
			13: ['wikEdUndoAll',          'wikEdButton',          wikEd.config.text['wikEdUndoAll title'],          wikEd.config.image['undoAll'],             '16', '16', wikEd.config.text['wikEdUndoAll alt'],          'wikEd.EditButton(obj, objId);' ],
			14: ['wikEdRedoAll',          'wikEdButtonInactive',  wikEd.config.text['wikEdRedoAll title'],          wikEd.config.image['redoAll'],             '16', '16', wikEd.config.text['wikEdRedoAll alt'],          'wikEd.EditButton(obj, objId);' ],

// format bottom
			15: ['wikEdWikiLink',         'wikEdButton',          wikEd.config.text['wikEdWikiLink title'],         wikEd.config.image['wikiLink'],            '16', '16', wikEd.config.text['wikEdWikiLink alt'],         'wikEd.EditButton(obj, objId);' ],
			16: ['wikEdWebLink',          'wikEdButton',          wikEd.config.text['wikEdWebLink title'],          wikEd.config.image['webLink'],             '16', '16', wikEd.config.text['wikEdWebLink alt'],          'wikEd.EditButton(obj, objId);' ],
			17: ['wikEdHeading',          'wikEdButton',          wikEd.config.text['wikEdHeading title'],          wikEd.config.image['heading'],             '16', '16', wikEd.config.text['wikEdHeading alt'],          'if (!eventShiftKey) { wikEd.EditButton(obj, \'wikEdIncreaseHeading\'); } else { wikEd.EditButton(obj, \'wikEdDecreaseHeading\'); }' ],
			19: ['wikEdBulletList',       'wikEdButton',          wikEd.config.text['wikEdBulletList title'],       wikEd.config.image['bulletList'],          '16', '16', wikEd.config.text['wikEdBulletList alt'],       'if (!eventShiftKey) { wikEd.EditButton(obj, \'wikEdIncreaseBulletList\'); } else { wikEd.EditButton(obj, \'wikEdDecreaseBulletList\'); }' ],
			20: ['wikEdNumberList',       'wikEdButton',          wikEd.config.text['wikEdNumberList title'],       wikEd.config.image['numberList'],          '16', '16', wikEd.config.text['wikEdNumberList alt'],       'if (!eventShiftKey) { wikEd.EditButton(obj, \'wikEdIncreaseNumberList\'); } else { wikEd.EditButton(obj, \'wikEdDecreaseNumberList\'); }' ],
			21: ['wikEdIndentList',       'wikEdButton',          wikEd.config.text['wikEdIndentList title'],       wikEd.config.image['indentList'],          '16', '16', wikEd.config.text['wikEdIndentList alt'],       'if (!eventShiftKey) { wikEd.EditButton(obj, \'wikEdIncreaseIndentList\'); } else { wikEd.EditButton(obj, \'wikEdDecreaseIndentList\'); }' ],
			22: ['wikEdDefinitionList',   'wikEdButton',          wikEd.config.text['wikEdDefinitionList title'],   wikEd.config.image['definitionList'],      '16', '16', wikEd.config.text['wikEdDefinitionList alt'],   'wikEd.EditButton(obj, objId);' ],
			23: ['wikEdImage',            'wikEdButton',          wikEd.config.text['wikEdImage title'],            wikEd.config.image['image'],               '16', '16', wikEd.config.text['wikEdImage alt'],            'wikEd.EditButton(obj, objId);' ],
			24: ['wikEdTable',            'wikEdButton',          wikEd.config.text['wikEdTable title'],            wikEd.config.image['table'],               '16', '16', wikEd.config.text['wikEdTable alt'],            'wikEd.EditButton(obj, objId);' ],
			11: ['wikEdReferences',       'wikEdButton',          wikEd.config.text['wikEdReferences title'],       wikEd.config.image['references'],          '16', '16', wikEd.config.text['wikEdReferences alt'],       'if (!eventShiftKey) { wikEd.EditButton(obj, objId); } else { wikEd.EditButton(obj, \'wikEdReferencesSection\'); }' ],

// wikify, textify
			26: ['wikEdWikify',           'wikEdButton',          wikEd.config.text['wikEdWikify title'],           wikEd.config.image['wikify'],              '16', '16', wikEd.config.text['wikEdWikify alt'],           'wikEd.EditButton(obj, objId);' ],
			27: ['wikEdTextify',          'wikEdButton',          wikEd.config.text['wikEdTextify title'],          wikEd.config.image['textify'],             '16', '16', wikEd.config.text['wikEdTextify alt'],          'if (eventShiftKey) { wikEd.EditButton(obj, objId, \'shift\'); } else { wikEd.EditButton(obj, objId); }' ],

// control top
			77: ['wikEdRefHide',          'wikEdButtonUnchecked', wikEd.config.text['wikEdRefHide title'],          wikEd.config.image['refHide'],             '16', '16', wikEd.config.text['wikEdRefHide alt'],          'wikEd.Button(obj, objId, true);' ],
			29: ['wikEdTextZoom',         'wikEdButton',          wikEd.config.text['wikEdTextZoom title'],         wikEd.config.image['textZoom'],            '16', '16', wikEd.config.text['wikEdTextZoom alt'],         'if (!eventShiftKey) { wikEd.Button(obj, \'wikEdTextZoomDown\'); } else { wikEd.Button(obj, \'wikEdTextZoomUp\'); }' ],
			30: ['wikEdClearHistory',     'wikEdButton',          wikEd.config.text['wikEdClearHistory title'],     wikEd.config.image['clearHistory'],        '16', '16', wikEd.config.text['wikEdClearHistory alt'],     'wikEd.Button(obj, objId);' ],
			31: ['wikEdScrollToPreview',  'wikEdButton',          wikEd.config.text['wikEdScrollToPreview title'],  wikEd.config.image['scrollToPreviewDown'], '16', '16', wikEd.config.text['wikEdScrollToPreview alt'],  'wikEd.Button(obj, objId);' ],
			32: ['wikEdScrollToEdit',     'wikEdButton',          wikEd.config.text['wikEdScrollToEdit title'],     wikEd.config.image['scrollToEditDown'],    '16', '16', wikEd.config.text['wikEdScrollToEdit alt'],     'wikEd.Button(obj, objId);' ],

// control bottom
			33: ['wikEdUseWikEd',         'wikEdButtonChecked',   wikEd.config.text['wikEdUseWikEd title'],         wikEd.config.image['useWikEd'],            '16', '16', wikEd.config.text['wikEdUseWikEd alt'],         'wikEd.Button(obj, objId, true);' ],
			34: ['wikEdHighlightSyntax',  'wikEdButtonUnchecked', wikEd.config.text['wikEdHighlightSyntax title'],  wikEd.config.image['highlightSyntax'],     '16', '16', wikEd.config.text['wikEdHighlightSyntax alt'],  'wikEd.Button(obj, objId, true);' ],
			35: ['wikEdSource',           'wikEdButton',          wikEd.config.text['wikEdSource title'],           wikEd.config.image['source'],              '16', '16', wikEd.config.text['wikEdSource alt'],           'wikEd.EditButton(obj, objId);' ],
			75: ['wikEdCloseToolbar',     'wikEdButtonUnchecked', wikEd.config.text['wikEdCloseToolbar title'],     wikEd.config.image['closeToolbar'],        '16', '16', wikEd.config.text['wikEdCloseToolbar alt'],     'wikEd.Button(obj, objId, true);' ],
			36: ['wikEdUsing',            'wikEdButtonUnchecked', wikEd.config.text['wikEdUsing title'],            wikEd.config.image['using'],               '16', '16', wikEd.config.text['wikEdUsing alt'],            'wikEd.Button(obj, objId, true);' ],
			37: ['wikEdFullScreen',       'wikEdButtonUnchecked', wikEd.config.text['wikEdFullScreen title'],       wikEd.config.image['fullScreen'],          '16', '16', wikEd.config.text['wikEdFullScreen alt'],       'wikEd.Button(obj, objId, true);' ],
			79: ['wikEdTableMode',        'wikEdButtonUnchecked', wikEd.config.text['wikEdTableMode title'],        wikEd.config.image['tableMode'],           '16', '16', wikEd.config.text['wikEdTableMode alt'],        'wikEd.Button(obj, objId, true);' ],

// find top
			39: ['wikEdFindAll',          'wikEdButton',          wikEd.config.text['wikEdFindAll title'],          wikEd.config.image['findAll'],             '16', '16', wikEd.config.text['wikEdFindAll alt'],          'wikEd.EditButton(obj, objId);' ],
			40: ['wikEdFindPrev',         'wikEdButton',          wikEd.config.text['wikEdFindPrev title'],         wikEd.config.image['findPrev'],            '16', '16', wikEd.config.text['wikEdFindPrev alt'],         'wikEd.EditButton(obj, objId);' ],
			41: ['wikEdFindNext',         'wikEdButton',          wikEd.config.text['wikEdFindNext title'],         wikEd.config.image['findNext'],            '16', '16', wikEd.config.text['wikEdFindNext alt'],         'if (eventShiftKey) { wikEd.EditButton(obj, objId, \'shift\'); } else { wikEd.EditButton(obj, objId); }' ],
			43: ['wikEdJumpPrev',         'wikEdButton',          wikEd.config.text['wikEdJumpPrev title'],         wikEd.config.image['jumpPrev'],            '16', '16', wikEd.config.text['wikEdJumpPrev alt'],         'wikEd.EditButton(obj, objId);' ],
			44: ['wikEdJumpNext',         'wikEdButton',          wikEd.config.text['wikEdJumpNext title'],         wikEd.config.image['jumpNext'],            '16', '16', wikEd.config.text['wikEdJumpNext alt'],         'wikEd.EditButton(obj, objId);' ],

// find bottom
			46: ['wikEdReplaceAll',       'wikEdButton',          wikEd.config.text['wikEdReplaceAll title'],       wikEd.config.image['replaceAll'],          '16', '16', wikEd.config.text['wikEdReplaceAll alt'],       'wikEd.EditButton(obj, objId);' ],
			47: ['wikEdReplacePrev',      'wikEdButton',          wikEd.config.text['wikEdReplacePrev title'],      wikEd.config.image['replacePrev'],         '16', '16', wikEd.config.text['wikEdReplacePrev alt'],      'wikEd.EditButton(obj, objId);' ],
			48: ['wikEdReplaceNext',      'wikEdButton',          wikEd.config.text['wikEdReplaceNext title'],      wikEd.config.image['replaceNext'],         '16', '16', wikEd.config.text['wikEdReplaceNext alt'],      'if (eventShiftKey) { wikEd.EditButton(obj, objId, \'shift\'); } else { wikEd.EditButton(obj, objId); }' ],
			49: ['wikEdCaseSensitive',    'wikEdButtonUnchecked', wikEd.config.text['wikEdCaseSensitive title'],    wikEd.config.image['caseSensitive'],       '16', '16', wikEd.config.text['wikEdCaseSensitive alt'],    'wikEd.Button(obj, objId, true);' ],
			50: ['wikEdRegExp',           'wikEdButtonUnchecked', wikEd.config.text['wikEdRegExp title'],           wikEd.config.image['regExp'],              '16', '16', wikEd.config.text['wikEdRegExp alt'],           'wikEd.Button(obj, objId, true);' ],
			51: ['wikEdFindAhead',        'wikEdButtonUnchecked', wikEd.config.text['wikEdFindAhead title'],        wikEd.config.image['findAhead'],           '16', '16', wikEd.config.text['wikEdFindAhead alt'],        'wikEd.Button(obj, objId, true);' ],

// fix top
			52: ['wikEdFixBasic',         'wikEdButton',          wikEd.config.text['wikEdFixBasic title'],         wikEd.config.image['fixBasic'],            '16', '16', wikEd.config.text['wikEdFixBasic alt'],         'wikEd.EditButton(obj, objId);' ],
			53: ['wikEdFixHtml',          'wikEdButton',          wikEd.config.text['wikEdFixHtml title'],          wikEd.config.image['fixHtml'],             '16', '16', wikEd.config.text['wikEdFixHtml alt'],          'wikEd.EditButton(obj, objId);' ],
			54: ['wikEdFixCaps',          'wikEdButton',          wikEd.config.text['wikEdFixCaps title'],          wikEd.config.image['fixCaps'],             '16', '16', wikEd.config.text['wikEdFixCaps alt'],          'wikEd.EditButton(obj, objId);' ],
			55: ['wikEdFixUnicode',       'wikEdButton',          wikEd.config.text['wikEdFixUnicode title'],       wikEd.config.image['fixUnicode'],          '16', '16', wikEd.config.text['wikEdFixUnicode alt'],       'wikEd.EditButton(obj, objId);' ],
			81: ['wikEdFixRedirect',      'wikEdButton',          wikEd.config.text['wikEdFixRedirect title'],      wikEd.config.image['fixRedirect'],         '16', '16', wikEd.config.text['wikEdFixRedirect alt'],      'wikEd.EditButton(obj, objId);' ],
			56: ['wikEdFixAll',           'wikEdButton',          wikEd.config.text['wikEdFixAll title'],           wikEd.config.image['fixAll'],              '16', '16', wikEd.config.text['wikEdFixAll alt'],           'wikEd.EditButton(obj, objId);' ],
			57: ['wikEdFixRegExTypo',     'wikEdButton',          wikEd.config.text['wikEdFixRegExTypo title'],     wikEd.config.image['fixRegExTypo'],        '16', '16', wikEd.config.text['wikEdFixRegExTypo alt'],     'wikEd.EditButton(obj, objId);' ],

// fix bottom
			58: ['wikEdFixDashes',        'wikEdButton',          wikEd.config.text['wikEdFixDashes title'],        wikEd.config.image['fixDash'],             '16', '16', wikEd.config.text['wikEdFixDashes alt'],        'wikEd.EditButton(obj, objId);' ],
			59: ['wikEdFixPunct',         'wikEdButton',          wikEd.config.text['wikEdFixPunct title'],         wikEd.config.image['fixPunct'],            '16', '16', wikEd.config.text['wikEdFixPunct alt'],         'wikEd.EditButton(obj, objId);' ],
			60: ['wikEdFixMath',          'wikEdButton',          wikEd.config.text['wikEdFixMath title'],          wikEd.config.image['fixMath'],             '16', '16', wikEd.config.text['wikEdFixMath alt'],          'wikEd.EditButton(obj, objId);' ],
			61: ['wikEdFixChem',          'wikEdButton',          wikEd.config.text['wikEdFixChem title'],          wikEd.config.image['fixChem'],             '16', '16', wikEd.config.text['wikEdFixChem alt'],          'wikEd.EditButton(obj, objId);' ],
			62: ['wikEdFixUnits',         'wikEdButton',          wikEd.config.text['wikEdFixUnits title'],         wikEd.config.image['fixUnits'],            '16', '16', wikEd.config.text['wikEdFixUnits alt'],         'wikEd.EditButton(obj, objId);' ],

// preview top
			65: ['wikEdClose',            'wikEdButton',          wikEd.config.text['wikEdClose title'],            wikEd.config.image['close'],               '16', '16', wikEd.config.text['wikEdClose alt'],            'wikEd.Button(obj, objId);' ],
			66: ['wikEdScrollToPreview2', 'wikEdButton',          wikEd.config.text['wikEdScrollToPreview2 title'], wikEd.config.image['scrollToPreviewDown'], '16', '16', wikEd.config.text['wikEdScrollToPreview2 alt'], 'wikEd.Button(obj, objId);' ],
			67: ['wikEdScrollToEdit2',    'wikEdButton',          wikEd.config.text['wikEdScrollToEdit2 title'],    wikEd.config.image['scrollToEdit'],        '16', '16', wikEd.config.text['wikEdScrollToEdit2 alt'],    'wikEd.Button(obj, objId);' ],

// preview bottom
			70: ['wikEdClose2',           'wikEdButton',          wikEd.config.text['wikEdClose2 title'],           wikEd.config.image['close'],               '16', '16', wikEd.config.text['wikEdClose2 alt'],           'wikEd.Button(obj, objId);' ],
			71: ['wikEdScrollToPreview3', 'wikEdButton',          wikEd.config.text['wikEdScrollToPreview3 title'], wikEd.config.image['scrollToPreview'],     '16', '16', wikEd.config.text['wikEdScrollToPreview3 alt'], 'wikEd.Button(obj, objId);' ],
			72: ['wikEdScrollToEdit3',    'wikEdButton',          wikEd.config.text['wikEdScrollToEdit3 title'],    wikEd.config.image['scrollToEdit'],        '16', '16', wikEd.config.text['wikEdScrollToEdit3 alt'],    'wikEd.Button(obj, objId);' ],

// jump
			78: ['wikEdDiff',             'wikEdButtonUnchecked', wikEd.config.text['wikEdDiff title'],             wikEd.config.image['wikEdDiff'],           '16', '16', wikEd.config.text['wikEdDiff alt'],             'wikEd.Button(obj, objId, true);' ],
			74: ['wikEdScrollToEdit4',    'wikEdButtonSolo',      wikEd.config.text['wikEdScrollToEdit4 title'],    wikEd.config.image['scrollToEditDown'],    '16', '16', wikEd.config.text['wikEdScrollToEdit4 alt'],    'wikEd.Button(obj, objId);' ],

// dummy (empty placeholder)
			76: ['wikEdDummy',            'wikEdButtonDummy',     '',                                               wikEd.config.image['dummy'],               '16', '16', '',                                             '' ],

// wikEd.InitButton: define built-in buttons (id, class, popup title, image src, width, height, alt text, click handler code were obj is the button element)
			82: ['wikEdLocalPreview',     'wikEdLocalPreview',    wikEd.config.text['wikEdLocalPreview title'],     wikEd.config.image['preview'],             '16', '16', wikEd.config.text['wikEdLocalPreviewImg alt'],  'wikEd.Button(obj, objId);' ],
			83: ['wikEdLocalDiff',        'wikEdLocalDiff',       wikEd.config.text['wikEdLocalDiff title'],        wikEd.config.image['diff'],                '16', '16', wikEd.config.text['wikEdLocalDiffImg alt'],     'wikEd.Button(obj, objId);' ]
		});
	};

// button access keys
	if (typeof(wikEd.config.buttonKey) == 'undefined') { wikEd.config.buttonKey = {}; }

// wikEd.InitButtonKey: define accesskeys for edit buttons (wikEd button number: [key string, JS key code])
	wikEd.InitButtonKey = function() {
		wikEd.InitObject(wikEd.config.buttonKey, {
			26: ['b', 66], // wikify
			27: ['o', 79], // textify
			67: ['g', 71], // scrolltoedit2
			72: ['g', 71], // scrolltoedit3
			74: ['g', 71], // scrolltoedit4
			32: ['g', 71]  // scrolltoedit, overwrites previous wikEd buttons for same key
		});
	};

// button bars (id, class, button numbers)
	if (typeof(wikEd.config.buttonBar) == 'undefined') { wikEd.config.buttonBar = {}; }

// wikEd.InitButtonBar: define built-in button bars (id outer, class outer, id inner, class inner, height, grip title, button numbers)
	wikEd.InitButtonBar = function() {
		wikEd.InitObject(wikEd.config.buttonBar, {
			'format':    ['wikEdButtonBarFormat',    'wikEdButtonBarFormat',    'wikEdButtonsFormat',    'wikEdButtonsFormat',    44, wikEd.config.text['wikEdGripFormat title'],  [1,2,3,4,5,6,7,8,9,10,12,13,14,'br',15,16,17,19,20,21,22,23,24,11,80,25,76] ],
			'textify':   ['wikEdButtonBarTextify',   'wikEdButtonBarTextify',   'wikEdButtonsTextify',   'wikEdButtonsTextify',   44, wikEd.config.text['wikEdGripTextify title'], [26,'br',27] ],
			'custom1':   ['wikEdButtonBarCustom1',   'wikEdButtonBarCustom1',   'wikEdButtonsCustom1',   'wikEdButtonsCustom1',   44, wikEd.config.text['wikEdGripCustom1 title'], [ ] ],
			'find':      ['wikEdButtonBarFind',      'wikEdButtonBarFind',      'wikEdButtonsFind',      'wikEdButtonsFind',      44, wikEd.config.text['wikEdGripFind title'],    [39,40,'find',41,76,43,44,'br',46,47,'replace',48,49,50,51] ],
			'fix':       ['wikEdButtonBarFix',       'wikEdButtonBarFix',       'wikEdButtonsFix',       'wikEdButtonsFix',       44, wikEd.config.text['wikEdGripFix title'],     [52,53,54,55,56,81,'br',58,59,60,61,62,57] ],
			'custom2':   ['wikEdButtonBarCustom2',   'wikEdButtonBarCustom2',   'wikEdButtonsCustom2',   'wikEdButtonsCustom2',   44, wikEd.config.text['wikEdGripCustom2 title'], [ ] ],
			'control':   ['wikEdButtonBarControl',   'wikEdButtonBarControl',   'wikEdButtonsControl',   'wikEdButtonsControl',   44, wikEd.config.text['wikEdGripControl title'], [77,29,30,35,31,32,'br',33,34,79,75,36,78,37] ],
			'preview':   ['wikEdButtonBarPreview',   'wikEdButtonBarPreview',   'wikEdButtonsPreview',   'wikEdButtonsPreview',    0, null,                                [66,67,65] ],
			'preview2':  ['wikEdButtonBarPreview2',  'wikEdButtonBarPreview2',  'wikEdButtonsPreview2',  'wikEdButtonsPreview2',   0, null,                                [71,72,70] ],
			'jump':      ['wikEdButtonBarJump',      'wikEdButtonBarJump',      'wikEdButtonsJump',      'wikEdButtonsJump',       0, null,                                [74] ]
		});
	};

// history length for find, replace, and summary fields
	if (typeof(wikEd.config.historyLength) == 'undefined') { wikEd.config.historyLength = {}; }
	wikEd.InitHistoryLength = function() {
		wikEd.InitObject(wikEd.config.historyLength, {
			'find': 10,
			'replace': 10,
			'summary': 10
		});
	};

// presets for combo input fields dropdown options, {wikEdUsing} appends a link to this script
	if (typeof(wikEd.config.comboPresetOptions) == 'undefined') { wikEd.config.comboPresetOptions = {}; }
	if (typeof(wikEd.config.comboPresetOptions.summary) == 'undefined') { wikEd.config.comboPresetOptions.summary = wikEd.config.text.wikEdPresetSummary; }

// text for summary link to this script
	if (typeof(wikEd.config.summaryUsing) == 'undefined') { wikEd.config.summaryUsing = wikEd.config.text.wikEdSummaryUsing; }

// expiration time span for permanent cookies in seconds
	if (typeof(wikEd.config.cookieExpireSec) == 'undefined') { wikEd.config.cookieExpireSec = 1 * 30 * 24 * 60 * 60; }

// disable wikEd preset
	if (typeof(wikEd.config.disabledPreset) == 'undefined') { wikEd.config.disabledPreset = false; }

// find ahead as you type checkbox preset
	if (typeof(wikEd.config.findAheadSelected) == 'undefined') { wikEd.config.findAheadSelected = true; }

// highlight syntax preset
	if (typeof(wikEd.config.highlightSyntaxPreset) == 'undefined') { wikEd.config.highlightSyntaxPreset = true; }

// enable wikEd preset
	if (typeof(wikEd.config.useWikEdPreset) == 'undefined') { wikEd.config.useWikEdPreset = true; }

// add '...using wikEd' to summary preset
	if (typeof(wikEd.config.usingPreset) == 'undefined') { wikEd.config.usingPreset = false; }

// scroll to edit field on non-preview pages
	if (typeof(wikEd.config.scrollToEdit) == 'undefined') { wikEd.config.scrollToEdit = true; }

// focus the edit field on non-preview pages
	if (typeof(wikEd.config.focusEdit) == 'undefined') { wikEd.config.focusEdit = true; }

// wikEdDiff preset
	if (typeof(wikEd.config.diffPreset) == 'undefined') { wikEd.config.diffPreset = false; }

// fullscreen mode preset
	if (typeof(wikEd.config.fullScreenModePreset) == 'undefined') { wikEd.config.fullScreenModePreset = false; }

// show MediaWiki toolbar preset
	if (typeof(wikEd.config.closeToolbarPreset) == 'undefined') { wikEd.config.closeToolbarPreset = false; }

// hide ref tags preset
	if (typeof(wikEd.config.refHidePreset) == 'undefined') { wikEd.config.refHidePreset = false; }

// text size adjustment for edit window (percentage)
	if (typeof(wikEd.config.textSizeAdjust) == 'undefined') { wikEd.config.textSizeAdjust = 100; }

// remove invisible syntax highlighting comments after closing tag
	if (typeof(wikEd.config.removeHighlightComments) == 'undefined') { wikEd.config.removeHighlightComments = true; }

// show the text-to-source button for testing purposes
	if (typeof(wikEd.config.showSourceButton) == 'undefined') { wikEd.config.showSourceButton = false; }

// show the using-wikEd button
	if (typeof(wikEd.config.showUsingButton) == 'undefined') { wikEd.config.showUsingButton = false; }

// the wikEd help page link to be displayed after the editing help link, an empty string disables the link
	if (typeof(wikEd.config.helpPageLink) == 'undefined') { wikEd.config.helpPageLink = wikEd.config.text.wikEdHelpPageLink; }

// enable external diff script
	if (typeof(wikEd.config.loadDiffScript) == 'undefined') { wikEd.config.loadDiffScript = true; }

// enable external wikEdDiff script
	if (typeof(wikEd.config.loadDiff) == 'undefined') { wikEd.config.loadDiff = true; }

// enable external InstaView script
	if (typeof(wikEd.config.loadInstaView) == 'undefined') { wikEd.config.loadInstaView = true; }

// enable external IERange script
	if (typeof(wikEd.config.loadIERange) == 'undefined') { wikEd.config.loadIERange = true; }

// RegExTypoFix rules page, the address must have the exact same domain name as the used wiki
	if (typeof(wikEd.config.regExTypoFixURL) == 'undefined') { wikEd.config.regExTypoFixURL = wikEd.config.homeBaseUrl + 'w/index.php?title=Wikipedia:AutoWikiBrowser/Typos&action=raw'; }

// enable RegExTypoFix button (http://en.wikipedia.org/wiki/User:Mboverload/RegExTypoFix)
	if (typeof(wikEd.config.regExTypoFix) == 'undefined') { wikEd.config.regExTypoFix = false; }

// enable highlighting as links
	if (typeof(wikEd.config.followHighlightedLinks) == 'undefined') { wikEd.config.followHighlightedLinks = false; }

// skip the browser detection to run wikEd under IE and Opera
	if (typeof(wikEd.config.skipBrowserTest) == 'undefined') { wikEd.config.skipBrowserTest = false; }

// skip the script test that disables wikEd if certain scripts are present
	if (typeof(wikEd.config.skipScriptTest) == 'undefined') { wikEd.config.skipScriptTest = false; }

// skip the read-only detection
	if (typeof(wikEd.config.skipReadOnlyTest) == 'undefined') { wikEd.config.skipReadOnlyTest = false; }

// button access keys
	if (typeof(wikEd.config.incompatibleScripts) == 'undefined') { wikEd.config.incompatibleScripts = {}; }

// wikEd.InitIncompatibleScripts: disable wikEd if incompatible scripts are active
//  error message name: case insensitive regExp for script file name from URL w/o .js, use \\ for \
	wikEd.InitIncompatibleScripts = function() {
		wikEd.InitObject(wikEd.config.incompatibleScripts, {
			'CKEditor': '\\bckeditor',
			'FCKEditor': 'fckeditor',
			'less edit clutter': 'less.?edit.?clutter', // [[User:Magnus_Manske/less_edit_clutter.js]]
			'MagnusEditBox': 'MagnusEditBox' // less_edit_clutter gadget on fr
		});
	};

// set the button bar grip width in px
	if (typeof(wikEd.config.buttonBarGripWidth) == 'undefined') { wikEd.config.buttonBarGripWidth = 8; }

// enable local preview (Pilaf's InstaView)
	if (typeof(wikEd.config.useLocalPreview) == 'undefined') { wikEd.config.useLocalPreview = true; }

// allow ajax requests from local copy for testing, also defined in wikEdDiff.js
	if (typeof(wikEd.config.allowLocalAjax) == 'undefined') { wikEd.config.allowLocalAjax = false; }

// enable server preview (Ajax)
	if (typeof(wikEd.config.useAjaxPreview) == 'undefined') { wikEd.config.useAjaxPreview = true; }

// enable appending '<references/> for Ajax section previews
	if (typeof(wikEd.config.SectionPreviewRefs) == 'undefined') { wikEd.config.SectionPreviewRefs = true; }

// enable auto update (Ajax)
	if (typeof(wikEd.config.autoUpdate) == 'undefined') { wikEd.config.autoUpdate = true; }

// hours between update check (monobook.js)
	if (typeof(wikEd.config.autoUpdateHours) == 'undefined') { wikEd.config.autoUpdateHours = 20; }

// hours between update check (Greasemonkey)
	if (typeof(wikEd.config.autoUpdateHoursGM) == 'undefined') { wikEd.config.autoUpdateHoursGM = 40; }

// auto update: version url (Ajax)
	if (typeof(wikEd.config.autoUpdateUrl) == 'undefined') { wikEd.config.autoUpdateUrl = wikEd.config.homeBaseUrl + 'w/index.php?title=User:Cacycle/wikEd_current_version&action=raw&maxage=0'; }

// auto update: script url for Greasemonkey update
	if (typeof(wikEd.config.autoUpdateScriptUrl) == 'undefined') { wikEd.config.autoUpdateScriptUrl = wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Cacycle/wikEd.user.js'; }

// show complete unshortened article text for local diff, also defined in wikEdDiff.js
	if (typeof(wikEd.config.fullDiff) == 'undefined') { wikEd.config.fullDiff = false; }

// make links ctrl-clickable
	if (typeof(wikEd.config.linkify) == 'undefined') { wikEd.config.linkify = true; }

// absolute instead of relative linkify links, URL with "$1" as article name placeholder
	if (typeof(wikEd.config.linkifyArticlePath) == 'undefined') { wikEd.config.linkifyArticlePath = null; }

// hide refs and templates in newbie mode
	if (typeof(wikEd.config.hideContent) == 'undefined') { wikEd.config.hideContent = true; }

// wikify table parameters, replaces original table parameters with this string
	if (typeof(wikEd.config.wikifyTableParameters) == 'undefined') { wikEd.config.wikifyTableParameters = ''; }

// do not rearrange page elements
	if (typeof(wikEd.config.noRearrange) == 'undefined') { wikEd.config.noRearrange = false; }

// use French rules for fix punctuation
	if (typeof(wikEd.config.fixPunctFrench) == 'undefined') { wikEd.config.fixPunctFrench = false; }

// wikEd.config.setupHook, executed after wikEd has been set up, usage: wikEd.config.setupHook.push(YourFunction);
	if (typeof(wikEd.config.setupHook) == 'undefined') { wikEd.config.setupHook = []; }

// wikEd.config.onHook, executed after wikEd has been re-enabled by logo click, usage: wikEd.config.onHook.push(YourFunction);
	if (typeof(wikEd.config.onHook) == 'undefined') { wikEd.config.onHook = []; }

// wikEd.config.offHook, executed after wikEd has been disabled by logo click, usage: wikEd.config.offHook.push(YourFunction);
	if (typeof(wikEd.config.offHook) == 'undefined') { wikEd.config.offHook = []; }

// wikEd.config.textareaHook, executed after classic textarea has been enabled by user, usage: wikEd.config.textareaHook.push(YourFunction);
	if (typeof(wikEd.config.textareaHook) == 'undefined') { wikEd.config.textareaHook = []; }

// wikEd.config.frameHook, executed after wikEd edit frame has been enabled by user, usage: wikEd.config.frameHook.push(YourFunction);
	if (typeof(wikEd.config.frameHook) == 'undefined') { wikEd.config.frameHook = []; }

// wikEd.config.previewHook, executed after the local preview has been added to the page, usage: wikEd.config.previewHook.push(YourFunction);
	if (typeof(wikEd.config.previewHook) == 'undefined') { wikEd.config.previewHook = []; }

// wikEd.config.diffHook, executed after the local changes diff has been added to the page, usage: wikEd.config.diffHook.push(YourFunction);
	if (typeof(wikEd.config.dHook) == 'undefined') { wikEd.config.diffHook = []; }
	
// custom edit form id instead of 'editform'
	if (typeof(wikEd.config.customEditFormId) == 'undefined') { wikEd.config.customEditFormId = ''; }

// custom textarea id instead of 'wpTextbox1'
	if (typeof(wikEd.config.customTextAreaId) == 'undefined') { wikEd.config.customTextAreaId = ''; }

// custom save button id instead of 'wpSave'
	if (typeof(wikEd.config.customSaveButtonId) == 'undefined') { wikEd.config.customSaveButtonId = ''; }

// show table mode togle button
	if (typeof(wikEd.config.showTableModeButton) == 'undefined') { wikEd.config.showTableModeButton = false; }

// maximal time for syntax highlighting in ms
	if (typeof(wikEd.config.maxHighlightTime) == 'undefined') { wikEd.config.maxHighlightTime = 3000; }

// first char of article names is case sensitive (e.g. Wiktionary)
	if (typeof(wikEd.config.articlesCaseSensitive) == 'undefined') { wikEd.config.articlesCaseSensitive = false; }

// force immediate update if this version string is newer
	if (typeof(wikEd.config.forcedUpdate) == 'undefined') { wikEd.config.forcedUpdate = ''; }

// display highlighting error messages in text
	if (typeof(wikEd.config.highlightError) == 'undefined') { wikEd.config.highlightError = false; }

// display preview of files in text
	if (typeof(wikEd.config.filePreview) == 'undefined') { wikEd.config.filePreview = true; }

// file preview image size in pixels
	if (typeof(wikEd.config.filePreviewSize) == 'undefined') { wikEd.config.filePreviewSize = 75; }

// file preview image size in pixels
	if (typeof(wikEd.config.antiHighlightBleeding) == 'undefined') { wikEd.config.antiHighlightBleeding = true; }

// debug window maximal length in chars
	if (typeof(wikEd.config.debugMaxLength) == 'undefined') { wikEd.config.debugMaxLength = 50000; }

// debug display of DOM nodes: maximal length of innerHTML in chars
	if (typeof(wikEd.config.debugInnerHtmlLength) == 'undefined') { wikEd.config.debugInnerHtmlLength = 150; }

	return;
};

// user configurable variables needed during start up

// init config
if (typeof(wikEd.config) == 'undefined') { wikEd.config = {}; }

// wikEd code home base URL for https compatibility
if (typeof(wikEd.config.homeBaseUrlStandard) == 'undefined') { wikEd.config.homeBaseUrlStandard = 'http://en.wikipedia.org/'; }
if (typeof(wikEd.config.homeBaseUrlSecure) == 'undefined') { wikEd.config.homeBaseUrlSecure = 'https://secure.wikimedia.org/wikipedia/en/'; }

// set wikEd home base url depending on current page address: standard (http:) or secure (https:)
if (window.location.protocol == 'https:') {
	wikEd.config.homeBaseUrl = wikEd.config.homeBaseUrlSecure;
}
else {
	wikEd.config.homeBaseUrl = wikEd.config.homeBaseUrlStandard;
}

// diff script URL
if (typeof(wikEd.config.diffScriptSrc) == 'undefined') { wikEd.config.diffScriptSrc = wikEd.config.homeBaseUrl + 'w/index.php?title=User:Cacycle/diff.js&action=raw&ctype=text/javascript'; }

// wikEdDiff script URL, also defined in wikEdDiff.js
if (typeof(wikEd.config.diffSrc) == 'undefined') { wikEd.config.diffSrc = wikEd.config.homeBaseUrl + 'w/index.php?title=User:Cacycle/wikEdDiff.js&action=raw&ctype=text/javascript'; }

// InstaView script URL
if (typeof(wikEd.config.instaViewSrc) == 'undefined') { wikEd.config.instaViewSrc = wikEd.config.homeBaseUrl + 'w/index.php?title=User:Pilaf/include/instaview.js&action=raw&ctype=text/javascript'; }

// IERange script URL (MS IE compatibility library)
if (typeof(wikEd.config.IERangeSrc) == 'undefined') { wikEd.config.IERangeSrc = wikEd.config.homeBaseUrl + 'w/index.php?title=User:Cacycle/ierange.js&action=raw&ctype=text/javascript'; }

// wikEd-as-gadget detection, set to true if gadget script name is not MediaWiki:Gadget-wikEd.js
if (typeof(wikEd.config.gadget) == 'undefined') { wikEd.config.gadget = null; }

// duplicate edit warnings from the top of the page to above the edit window
if (typeof(wikEd.config.doCloneWarnings) == 'undefined') { wikEd.config.doCloneWarnings = true; }

// startup debugging
if (typeof(wikEd.config.debugStartUp) == 'undefined') { wikEd.config.debugStartUp = ''; }

// show missing translations
if (typeof(wikEd.config.showMissingTranslations) == 'undefined') { wikEd.config.showMissingTranslations = false; }

// content language default, also used for wikEd UI localization
if (typeof(wikEd.config.languageDefault) == 'undefined') { wikEd.config.languageDefault = ''; }

// load external translation
if (typeof(wikEd.config.loadTranslation) == 'undefined') { wikEd.config.loadTranslation = true; }

// translation javascript URLs
if (typeof(wikEd.config.translations) == 'undefined') { wikEd.config.translations = {}; }

// wikEd.InitTranslations: define translation javascript URLs ('': internal default)
wikEd.InitTranslations = function() {
	wikEd.InitObject(wikEd.config.translations, {
		'en':  '',
		'ar':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:ترجمان05/wikEd_international_ar.js',
		'zh-hans': wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Shibo77/wikEd_international_zh.js',
		'zh-hant': wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Quest_for_Truth/wikEd_international_zh-hant.js',
		'cs':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Sevela.p/wikEd_international_cs.js',
		'nl':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Jeronevw/wikEd_international_nl.js',
		'eo':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:ArnoLagrange/wikEd-eo.js',
		'fi':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Ejs-80/wikEd international fi.js',
		'fr':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Leag/wikEd-fr.js',
		'de':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Matthias_M./wikEd_international_de.js',
		'he':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:שמוליק/wikEd_international_he.js',
		'hu':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Csörföly D/wikEd-hu.js',
		'it':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Jalo/wikEd_international_it.js',
		'ja':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Hatukanezumi/wikEd_international_ja.js',
		'ko':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Ilovesabbath/wikEd_international_ko.js',
		'dsb': wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Michalwiki/wikEd_international_dsb.js',
		'ms':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Aviator/wikEd_international_ms.js',
		'no':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Dvyjones/wikEd_international_no.js',
		'nn':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Frokor/wikEd_international_nn.js',
		'pl':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Konradek/wikEd_international_pl.js',
		'pt':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Mosca/wikEd_international_pt.js',
		'ro':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Roamataa/wikEd_international_ro.js',
		'ru':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:IGW/wikEd_international_ru.js',
		'scn': wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Meloscn/wikEd_international_scn.js',
		'sk':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Helix84/wikEd_international_sk.js',
		'sl':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Eleassar/wikEd_international_sl.js',
		'es':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Axelei/wikEd_international_es.js',
		'sv':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Where_next_Columbus?/wikEd_international_sv.js',
		'tr':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Vito_Genovese/wikEd_international_tr.js',
		'hsb': wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Michalwiki/wikEd_international_hsb.js',
		'vi':  wikEd.config.homeBaseUrl + 'w/index.php?action=raw&ctype=text/javascript&title=User:Vinhtantran/wikEd_international_vi.js'
	});
};

// Mediawiki page and skin detection, logo placement
if (typeof(wikEd.config.MediaWikiSkinIds) == 'undefined') { wikEd.config.MediaWikiSkinIds = {}; }

// wikEd.InitMediaWikiSkinIds: define Mediawiki page and skin detection, logo placement
//   format: skin name: [ dom element to add logo to ('': top right), logo to this list or list contained in this parent element, rearrange page elements, [skin detection element id list] ],
wikEd.InitMediaWikiSkinIds = function() {
	wikEd.InitObject(wikEd.config.MediaWikiSkinIds, {

// monobook, also detects simple and myskin
		monobook:    [ 'p-personal', true, true, ['column-content', 'content', 'bodyContent', 'siteSub', 'contentSub', 'column-one', 'p-cactions'] ],

// vector (see https://bugzilla.wikimedia.org/show_bug.cgi?id=19527)
		vector_old:  [ 'personal', true, true, ['content', 'bodyContent', 'siteSub', 'contentSub', 'left-navigation', 'namespaces'] ],
		vector_new:  [ 'p-personal', true, true, ['content', 'bodyContent', 'siteSub', 'contentSub', 'left-navigation', 'p-namespaces', 'p-cactions'] ],

// citizendium.org
		pinkwich5:   [ 'p-personal', true, true, ['column-content', 'content', 'bodycontent', 'sitesub', 'contentSub', 'column-one', 'p-cactions'] ],

// other MediaWiki skins
		standard:    [ 'quickbar', false, true, ['content', 'topbar', 'article', 'footer', 'pagestats'] ],
		nostalgia:   [ 'topbar', false, true, ['content', 'specialpages', 'article', 'footer'] ],
		cologneblue: [ 'quickbar', false, true, ['content', 'topbar', 'sitetitle', 'sitesub', 'article', 'footer'] ],
		modern:      [ 'p-personal', true, true, ['mw_header', 'mw_main', 'mw_contentwrapper'] ],

// wikia.com
		monaco:      [ 'userData', false, false, ['background_strip', 'siteSub', 'contentSub', 'monaco_footer'] ],
		quartz:      [ 'welcome', false, true, ['articleWrapper', 'bodyContent', 'siteSub', 'contentSub', 'sidebar'] ],
		searchwikia: [ 'header-li-buttons', false, true, ['header', 'header-container', 'header-go-button', 'article-container', 'article', 'article-text'] ],

// custom skins developed on wiki.mozilla.org and developer.mozilla.org
		cavendish:   [ '', false, true, ['internal', 'container', 'header', 'contentTop', 'mBody', 'side', 'nav', 'siteSub', 'contentSub'] ],
		devmo:       [ 'personal', false, true, ['developer-mozilla-org', 'container', 'header', 'navigation', 'bar', 'page', 'sidebar', 'sidebarslideup', 'contentTop', 'siteSub', 'contentSub'] ],

// custom skins
		gumaxdd:     [ 'gumax-p-login', true, true, ['gumax-header', 'gumax-content-body'] ],

// custom MediaWiki identifier
		mediawiki:   [ '', false, false, ['mediawiki'] ]
	});
};

//
// end of user configurable variables
//


//
// wikEd.InitGlobals: initialize non-configurable variables
//

wikEd.InitGlobals = function() {

// global variables
	wikEd.turnedOn = false;
	wikEd.disabled = true;
	wikEd.uploadEdit = false;
	wikEd.viewDeleted = false;
	wikEd.language = '';
	wikEd.watchlistEdit = false;
	wikEd.debugOpen = false;
	wikEd.pageNamespace = null;

// history
	wikEd.fieldHist = [];
	wikEd.savedName = [];
	wikEd.inputElement = [];
	wikEd.selectElement = [];

	wikEd.checkMarker = [];
	wikEd.checkMarker[true] = '♦';
	wikEd.checkMarker[false] = '◊';

// undo all, redo all
	wikEd.origVersion = '';
	wikEd.lastVersion = null;

// global dom elements
	wikEd.logo = null;
	wikEd.logoList = null;

	wikEd.debug = null;
	wikEd.wikiEditor = null;
	wikEd.wikiEditorFrame = null;
	wikEd.wikiEditorTop = null;
	wikEd.wikiEditorBar = null;
	wikEd.wikiEditorBottom = null;
	wikEd.wikiEditorText = null;
	wikEd.textareaContainer = null;
	wikEd.toolbar = null;
	wikEd.frameInner = null;
	wikEd.frameOuter = null;
	wikEd.frame = null;
	wikEd.frameBody = null;
	wikEd.frameDocument = null;
	wikEd.frameWindow = null;

	wikEd.inputWrapper = null;
	wikEd.editorWrapper = null;
	wikEd.toolbarWrapper = null;
	wikEd.buttonBarWrapper = null;
	wikEd.captchaWrapper = null;
	wikEd.debugWrapper = null;
	wikEd.editWrapper = null;
	wikEd.textareaWrapper = null;
	wikEd.frameWrapper = null;
	wikEd.consoleWrapper = null;
	wikEd.buttonsWrapper = null;
	wikEd.summaryWrapper = null;
	wikEd.summaryInputWrapper = null;
	wikEd.editOptionsWrapper = null;
	wikEd.submitWrapper = null;
	wikEd.submitButtonsWrapper = null;
	wikEd.localPrevWrapper = null;
	wikEd.insertWrapper = null;

// edit form fields
	wikEd.editForm = null;
	wikEd.starttime
	wikEd.edittime = null;
	wikEd.editToken = null;
	wikEd.autoSummary
	wikEd.textarea = null;

	wikEd.buttonsWrapperWidth = {};
	wikEd.buttonBarFormat = null;
	wikEd.buttonBarTextify = null;
	wikEd.buttonBarCustom1 = null;
	wikEd.buttonBarFind = null;
	wikEd.buttonBarFix = null;
	wikEd.buttonBarCustom2 = null;
	wikEd.buttonBarControl = null;
	wikEd.buttonBarPreview = null;
	wikEd.buttonBarPreview2 = null;
	wikEd.buttonBarJump = null;
	wikEd.previewBox = null;
	wikEd.clearSummary = null;
	wikEd.clearSummaryImg = null;

	wikEd.caseSensitive = null;
	wikEd.regExp = null;
	wikEd.findAhead = null;
	wikEd.fixRegExTypo = null;

	wikEd.findText = null;
	wikEd.replaceText = null;
	wikEd.summaryText = null;
	wikEd.summarySelect = null;
	wikEd.summaryTextWidth = null;

	wikEd.editOptions = null;
	wikEd.editHelp = null;
	wikEd.saveButton = null;
	wikEd.previewButton = null;
	wikEd.lDiffButton = null;
	wikEd.diffPreviewButton = null;
	wikEd.summaryLabel = null;

	wikEd.highlightNamedHideButtonsStylesheet = null;

// frame resizing
	wikEd.resizeGripWidth = 16;
	wikEd.resizeGripHeight = 16;
	wikEd.resizeFramePageYStart = 0;
	wikEd.resizeFramePageXStart = 0;
	wikEd.resizeFrameOffsetHeight = 0;
	wikEd.resizeFrameOffsetWidth = 0;
	wikEd.resizeFrameMouseOverGrip = false;
	wikEd.resizeFrameActive = false;
	wikEd.frameHeight = '';
	wikEd.frameWidth = '';
	wikEd.textareaHeight = '';
	wikEd.textareaWidth = '';

// various
	wikEd.insertCounter = 0;
	wikEd.editButtonHandler = {};
	wikEd.textareaBorderHeight = 0;
	wikEd.frameBorderHeight = 0;
	wikEd.frameBorderWidth = 0;
	wikEd.textareaOffsetHeightInitial = 0;
	wikEd.clearSummaryWidth = null;
	wikEd.fullScreenMode = false;
	wikEd.addNewSection = null;
	wikEd.browserNotSupported = false;
	wikEd.frameScrollTop = null;
	wikEd.textareaUpdated = null;
	wikEd.previewIsAjax = null;
	wikEd.buttonKeyCode = [];
	wikEd.direction = null;
	wikEd.textSize = 0;
	wikEd.textSizeInit = 0;
	wikEd.previewPage = false;
	wikEd.clonedWarnings = false;
	wikEd.geSHiCSS = [];

// override site javascript functions
	wikEd.insertTagsOriginal = null;
	wikEd.insertAtCursorOriginal = null;

// wikEd settings
	wikEd.refHide = false;
	wikEd.using = false;
	wikEd.useWikEd = false;
	wikEd.closeToolbar = false;
	wikEd.highlightSyntax = false;
	wikEd.noSpellcheck = false;
	wikEd.diff = false;
	wikEd.tableMode = false;
	wikEd.cleanNodes = false;
	wikEd.readOnly = false;

// unicode fixing and char highlighting
	wikEd.supportedChars = null;
	wikEd.reservedChars = null;
	wikEd.specialChars = null;
	wikEd.problemChars = null;

	wikEd.charEntitiesByName = {};

	wikEd.controlCharHighlighting = null;
	wikEd.controlCharHighlightingStr = '';
	wikEd.charHighlighting = null;
	wikEd.charHighlightingStr = '';

	wikEd.letters = '';

// linkification and hiding
	wikEd.linkifyIdNo = 0;
	wikEd.linkifyArray = [];
	wikEd.referenceArray = [];
	wikEd.templateArray = [];
	wikEd.charEntityArray = [];

// RegExtypoFix rules
	wikEd.typoRulesFind = [];
	wikEd.typoRulesReplace = [];

// redirect fixing
	wikEd.redirectsCache = {};

// file preview
	wikEd.filePreviewCache = {};
	wikEd.filePreviewRequest = '';
	wikEd.filePreviewNo = 0;
	wikEd.filePreviewIds = [];

// debugging time measurement, usage: wikEd.debugTimer.push([1234, new Date]); wikEd.DebugTimer();
	wikEd.debugTimer = [];

// syntax highlighting
	wikEd.parseObj = {};

// MediaWiki file paths for use in regexps
	wikEd.server = '';
	wikEd.articlePath = '';
	wikEd.script = '';
	wikEd.scriptPath = '';
	wikEd.scriptName = '';
	wikEd.scriptURL = '';

// magic words and parser functions, see http://www.mediawiki.org/wiki/Help:Magic_words
// __MAGICWORDS__
	wikEd.magicWords = 'NOTOC|FORCETOC|TOC|NOEDITSECTION|NEWSECTIONLINK|NOGALLERY|HIDDENCAT|NOCONTENTCONVERT|NOCC|NOTITLECONVERT|NOTC|END|START|NOINDEX|INDEX|STATICREDIRECT';

// template, parser function, and parser variable modifiers {{modifier:...}}
// see http://meta.wikimedia.org/wiki/Help:Magic_words#Template_modifiers
	wikEd.templModifier = 'int|msg|msgnw|raw|subst';

// parser variables {{variable}}
	wikEd.parserVariables = 'CURRENTYEAR|CURRENTMONTH|CURRENTMONTHNAME|CURRENTMONTHNAMEGEN|CURRENTMONTHABBREV|CURRENTDAY|CURRENTDAY2|CURRENTDOW|CURRENTDAYNAME|CURRENTTIME|CURRENTHOUR|CURRENTWEEK|CURRENTTIMESTAMP|LOCALYEAR|LOCALMONTH|LOCALMONTHNAME|LOCALMONTHNAMEGEN|LOCALMONTHABBREV|LOCALDAY|LOCALDAY2|LOCALDOW|LOCALDAYNAME|LOCALTIME|LOCALHOUR|LOCALWEEK|LOCALTIMESTAMP|SITENAME|CURRENTVERSION|CONTENTLANGUAGE|REVISIONID|REVISIONDAY|REVISIONDAY2|REVISIONMONTH|REVISIONYEAR|REVISIONTIMESTAMP|SERVER|SERVERNAME|SCRIPTPATH|FULLPAGENAME|PAGENAME|BASEPAGENAME|SUBPAGENAME|SUBJECTPAGENAME|TALKPAGENAME|FULLPAGENAMEE|PAGENAMEE|BASEPAGENAMEE|SUBPAGENAMEE|SUBJECTPAGENAMEE|TALKPAGENAMEE|NAMESPACE|SUBJECTSPACE|ARTICLESPACE|TALKSPACE|NAMESPACEE|SUBJECTSPACEE|TALKSPACEE|DIRMARK|DIRECTIONMARK|PAGENAME|PAGENAMEE|ARTICLEPATH';

// parser variables {{variable:R}}
	wikEd.parserVariablesR = 'NUMBEROFPAGES|NUMBEROFARTICLES|NUMBEROFFILES|NUMBEROFEDITS|NUMBEROFUSERS|NUMBEROFADMINS|NUMBEROFVIEWS|NUMBEROFACTIVEUSERS|PROTECTIONLEVEL';

// parser functions {{FUNCTION:parameter|R}}
	wikEd.parserFunctionsR = 'NUMBERINGROUP|PAGESINNS|PAGESINNAMESPACE|PAGESINCATEGORY|PAGESINCAT|PAGESIZE|DEFAULTSORT|DISPLAYTITLE';

// parser functions {{function:param|param}}
	wikEd.parserFunctions = 'localurl|localurle|fullurl|filepath|fullurle|urlencode|urldecode|anchorencode|ns|lc|lcfirst|uc|ucfirst|formatnum|padleft|padright|padright|plural|grammar|gender|int';

// parser functions {{#function:param|param}}
	wikEd.parserFunctionsHash = 'language|special|tag|tag|expr|if|ifeq|ifexist|ifexpr|switch|time|timel|rel2abs|titleparts|iferror|iferror|special|tag|categorytree|formatdate';

// define leaf elements for wikEd.GetInnerHTML
	wikEd.leafElements = {
		'IMG':   true,
		'HR':    true,
		'BR':    true,
		'INPUT': true
	};

	return;
};

// variables needed during startup, might be called multiple times

// hash of loaded scripts, also defined in wikEdDiff.js
if (typeof(wikEd.externalScripts) == 'undefined') { wikEd.externalScripts = null; }
if (typeof(wikEd.externalScriptsString) == 'undefined') { wikEd.externalScriptsString = ''; }
if (typeof(wikEd.pageLoaded) == 'undefined') { wikEd.pageLoaded = false; }

// browser and os identificationr
if (typeof(wikEd.browserName) == 'undefined') { wikEd.browserName = ''; }
if (typeof(wikEd.browserFlavor) == 'undefined') { wikEd.browserFlavor = ''; }
if (typeof(wikEd.browserVersion) == 'undefined') { wikEd.browserVersion = 0; }
if (typeof(wikEd.msie) == 'undefined') { wikEd.msie = false; }
if (typeof(wikEd.mozilla) == 'undefined') { wikEd.mozilla = false; }
if (typeof(wikEd.opera) == 'undefined') { wikEd.opera = false; }
if (typeof(wikEd.safari) == 'undefined') { wikEd.safari = false; }
if (typeof(wikEd.webkit) == 'undefined') { wikEd.webkit = false; }
if (typeof(wikEd.chrome) == 'undefined') { wikEd.chrome = false; }
if (typeof(wikEd.greasemonkey) == 'undefined') { wikEd.greasemonkey = false; }
if (typeof(wikEd.testVersion) == 'undefined') { wikEd.testVersion = false; }
if (typeof(wikEd.platform) == 'undefined') { wikEd.platform = null; }

// global variables for Greasemonkey
if (typeof(wikEd.wikiGlobals) == 'undefined') { wikEd.wikiGlobals = {}; }
if (typeof(wikEd.text) == 'undefined') { wikEd.text = {}; }

// skins
if (typeof(wikEd.logoContainerId) == 'undefined') { wikEd.logoContainerId = ''; }
if (typeof(wikEd.rearrange) == 'undefined') { wikEd.rearrange = false; }
if (typeof(wikEd.logoToList) == 'undefined') { wikEd.logoToList = false; }
if (typeof(wikEd.skin) == 'undefined') { wikEd.skin = ''; }

// various
if (typeof(wikEd.gotGlobalsHook) == 'undefined') { wikEd.gotGlobalsHook = []; }
if (typeof(wikEd.getGlobalsCounter) == 'undefined') { wikEd.getGlobalsCounter = 0; }
if (typeof(wikEd.loadingTranslation) == 'undefined') { wikEd.loadingTranslation = false; }
if (typeof(wikEd.webStorage) == 'undefined') { wikEd.webStorage = false; }

// customization
if (typeof(wikEd.wikEdTextAdded) == 'undefined') { wikEd.wikEdTextAdded = false; }
if (typeof(wikEd.wikEdConfigAdded) == 'undefined') { wikEd.wikEdConfigAdded = false; }

// check for web storage availability, throws error in FF 3.6 with dom.storage.enabled=false, see bug 599479 (code copied to wikEdDiff.js)
if (typeof(wikEdTypeofLocalStorage) == 'undefined') {
	window.wikEdTypeofLocalStorage = '';
	setTimeout('window.wikEdTypeofLocalStorage = typeof(window.localStorage);', 0);
}

// global dom elements, also defined in wikEdDiff.js
if (typeof(wikEd.pageOrigin) == 'undefined') { wikEd.pageOrigin = ''; }
if (typeof(wikEd.head) == 'undefined') { wikEd.head = null; }

// also defined in wikEdDiff.js
if (typeof(wikEd.pageName) == 'undefined') { wikEd.pageName = null; }


//
// wikEd.InitObject: initialize object, keep pre-defined values (code copied to wikEdDiff.js)
//

wikEd.InitObject = function(target, source, showMissing) {

	if (typeof(target) == 'object') {
		for (var key in source) {
			if (typeof(target[key]) == 'undefined') {
				target[key] = source[key];

// show missing array entries
				if (showMissing == true)  {
					if (typeof(target[key]) == 'string') {
						wikEd.config.debugStartUp += '\t\t\t\'' + key + '\': \'' + target[key].replace(/\n/g, '\\n') + '\',\n';
					}
				}
			}
		}
	}
	return;
};


//
// wikEd.AddToObject: add or replace properties, replace existing values (code copied to wikEdDiff.js)
//

wikEd.AddToObject = function(target, source) {
	if (typeof(target) == 'object') {
		for (var key in source) {
			target[key] = source[key];
		}
	}
	return;
};


//
// wikEd.InitImage: initialize images, keep pre-defined values (code copied to wikEdDiff.js)
//

wikEd.InitImage = function(target, source) {

	for (var key in source) {
		if (typeof(target[key]) == 'undefined') {

// remove MediaWiki path prefixes and add local path
			if (wikEd.config.useLocalImages == true) {
				target[key] = wikEd.config.imagePathLocal + source[key].replace(/^[0-9a-f]+\/[0-9a-f]+\/()/, '');
			}

// add path
			else {
				target[key] = wikEd.config.imagePath + source[key];
			}
		}
	}
	return;
};


//
// wikEd.Startup: wikEd startup code, called during page load
//

wikEd.Startup = function() {

// redirect WED shortcut to wikEd.Debug(objectName, object, popup)
	window.WED = wikEd.Debug;

// MediaWiki pages always have their title set, filter out Greasemonkey running on created iframes
	if (document.title == '') {
		return;
	}

// check if wikEd has already started up
	if (document.getElementsByName('wikEdStartupFlag')[0] != null) {
		return;
	}

// define current window head
	wikEd.head = document.getElementsByTagName('head')[0];

// set startup flag
	var flag = document.createElement('meta');
	flag.setAttribute('name', 'wikEdStartupFlag');
	wikEd.head.appendChild(flag);

// get site of origin (window.location.href is about:blank if Firefox during page load)
	var origin = wikEd.head.baseURI;
	if (origin == null) {
		origin = window.location.toString();
	}
	wikEd.pageOrigin = origin.replace(/^((https?|file):\/\/[^\/?#]*)?.*$/, '$1');

// check browser and version
	var agentMatch = navigator.userAgent.match(/(Firefox|Netscape|SeaMonkey|IceWeasel|IceCat|Fennec|Minefield|BonEcho|GranParadiso|Shiretoko)\W+(\d+\.\d+)/i);
	if (agentMatch != null) {
		wikEd.browserName = 'Mozilla';
		wikEd.browserFlavor = agentMatch[1];
		wikEd.browserVersion = parseFloat(agentMatch[2]);
		wikEd.mozilla = true;
	}

// check for MSIE
	else {
		agentMatch = navigator.userAgent.match(/(MSIE)\W+(\d+\.\d+)/i);
		if (agentMatch != null) {
			wikEd.browserName = 'MSIE';
			wikEd.browserVersion = parseFloat(agentMatch[2]);
			wikEd.msie = true;
		}

// check for Opera
		else {
			agentMatch = navigator.userAgent.match(/(Opera)\W+(\d+\.\d+)/i);
			if (agentMatch != null) {
				wikEd.browserName = 'Opera';
				wikEd.browserVersion = parseFloat(agentMatch[2]);
				if (wikEd.browserVersion == 9.80) {
					var versionMatch = navigator.userAgent.match(/(Version)\W+(\d+\.\d+)/i);
					if (versionMatch != null) {
						wikEd.browserVersion = parseFloat(agentMatch[2]);
					}
				}
				wikEd.opera = true;
			}

// check for Google Chrome (AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.30 Safari/525.13)
			else {
				agentMatch = navigator.userAgent.match(/(Chrome)\W+(\d+\.\d+)/i);
				if (agentMatch != null) {
					wikEd.browserName = 'Chrome';
					wikEd.browserVersion = parseFloat(agentMatch[2]);
					wikEd.chrome = true;
				}

// check for Safari
				else {
					agentMatch = navigator.userAgent.match(/(Safari)\W+(\d+\.\d+)/i);
					if (agentMatch != null) {
						wikEd.browserName = 'Safari';
						wikEd.browserVersion = parseFloat(agentMatch[2]);
						wikEd.safari = true;
					}

// check for other WebKit
					else {
						agentMatch = navigator.userAgent.match(/(WebKit)(GTK\+)?\W+(\d+\.\d+)/i);
						if (agentMatch != null) {
							wikEd.browserName = 'WebKit';
							wikEd.browserVersion = parseFloat(agentMatch[3]);
							wikEd.webkit = true;
						}
					}
				}
			}
		}
	}

// check OS
	var os = navigator.platform.match(/^(win|mac|unix|linux)/i);
	if (os != null) {
		wikEd.platform = os[1].toLowerCase();
	}

// import customization (try now again after page load for user/skin.js)
	if ( (typeof(wikEdConfig) == 'object') && (wikEd.wikEdConfigAdded == false) ) {
		wikEd.AddToObject(wikEd.config, wikEdConfig);
		wikEd.wikEdConfigAdded = true;
	}
	if ( (typeof(wikEdText) == 'object') && (wikEd.wikEdTextAdded == false) ) {
		wikEd.AddToObject(wikEd.text, wikEdText);
		wikEd.wikEdTextAdded = true;
	}

// compatibility fixes for older customizations and wikEd-compatibilizations in other scripts
	window.wikEdUseWikEd = wikEd.useWikEd;
	window.WikEdUpdateTextarea = wikEd.UpdateTextarea;
	window.WikEdUpdateFrame = wikEd.UpdateFrame;
	window.WikEdGetText = wikEd.GetText;
	window.WikEdEditButton = wikEd.EditButton;

// check if this runs under Greasemonkey
	if (typeof(GM_getValue) == 'function') {
		wikEd.greasemonkey = true;
	}

// parse global-context (MediaWiki) variables into hash (for Greasemonkey)
	var globalNames = ['skin', 'wgServer', 'wgTitle', 'wgCanonicalNamespace', 'wgArticlePath', 'wgScript', 'wgScriptPath', 'wgUserName', 'wgCurRevisionId', 'wgContentLanguage', 'wgUserLanguage', 'wgEnableAPI', 'wgPageName', 'wgNamespaceIds', 'wgFormattedNamespaces', 'wgUseAutomaticEditSummaries', 'wikEdTypeofLocalStorage'];
	if (wikEd.greasemonkey == true) {
		globalNames.push('wikEdConfig', 'wikEdText');
	}

// copy custom config settings and text after values have arrived
	var gotGlobalsHook = [
		function() {
			if ( (typeof(wikEd.wikiGlobals.wikEdConfig) == 'object') && (wikEd.wikEdConfigAdded == false) ) {
				wikEd.AddToObject(wikEd.config, wikEd.wikiGlobals.wikEdConfig);
				wikEd.wikEdConfigAdded = true;
			}
			if ( (typeof(wikEd.wikiGlobals.wikEdText) == 'object') && (wikEd.wikEdTextAdded == false) ) {
				wikEd.AddToObject(wikEd.text, wikEd.wikiGlobals.wikEdText);
				wikEd.wikEdTextAdded = true;
			}
			return;
		}
	];

// and load translations when done
	if ( (wikEd.config.loadTranslation == true) && (wikEd.loadingTranslation == false) ) {
		gotGlobalsHook.push(wikEd.LoadTranslations);
	}

// set listener for GetGlobals messaging
	wikEd.AddEventListener(window, 'message', wikEd.GetGlobalsReceiver, false);

// parse globals (asynchronous)
	wikEd.GetGlobals(globalNames, gotGlobalsHook);

// schedule the setup routine; readyState interactive gives GM security error 
	if (document.readyState == 'complete') {
		wikEd.Setup();
	}

// with DOMContentLoaded event wikEd does not load for first (uncached) section edit
	else {
		wikEd.AddEventListener(window, 'load', wikEd.Setup, false);
	}

	return;
};


//
// wikEd.LoadTranslations: load external wikEd translation and language settings
//

wikEd.LoadTranslations = function() {

	if ( (wikEd.config.loadTranslation == true) && (wikEd.loadingTranslation == false) ) {
		var contentLang = wikEd.wikiGlobals.wgContentLanguage || '';
		var userLang = wikEd.wikiGlobals.wgUserLanguage || '';
		if ( (wikEd.config.languageDefault != '') || (userLang != '') || (contentLang != '') ) {

// simplified Chinese
			if (contentLang == 'zh') {
				contentLang = 'zh-hans';
			}
			if ( (userLang == 'zh') || (userLang == 'zh-cn') || (userLang == 'zh-sg') ) {
				userLang = 'zh-hans';
			}

// traditional Chinese
			else if ( (userLang == 'zh-hk') || (userLang == 'zh-tw') ) {
				userLang = 'zh-hant';
			}

			wikEd.InitTranslations();
			var scriptUrl = wikEd.config.translations[wikEd.config.languageDefault] || '';
			if (scriptUrl == '') {
				scriptUrl = wikEd.config.translations[userLang] || '';
				if (scriptUrl == '') {
					scriptUrl = wikEd.config.translations[contentLang] || '';
				}
			}
			if (scriptUrl != '') {
				wikEd.AppendScript(scriptUrl, function() {

// copy custom text after values have arrived
					var gotGlobalsHook = function() {
						wikEd.AddToObject(wikEd.text, wikEd.wikiGlobals.wikEdText);
						return;
					};

// parse globals (asynchronous)
					wikEd.GetGlobals(['wikEdText'], [gotGlobalsHook]);
					wikEd.loadingTranslation = true;
				});
			}
		}
	}
	return;
};


//
// wikEd.Setup: basic setup routine, scheduled after DOM or page load
//

wikEd.Setup = function() {

	wikEd.RemoveEventListener(document, 'DOMContentLoaded', wikEd.Setup, false);
	wikEd.RemoveEventListener(window, 'load', wikEd.Setup, false);

// check if wikEd has already set up
	if (document.getElementsByName('wikEdSetupFlag')[0] != null) {
		return;
	}

// set setup flag
	var flag = document.createElement('meta');
	flag.setAttribute('name', 'wikEdSetupFlag');
	wikEd.head.appendChild(flag);

// import customization (try later again after page load for user/skin.js)
	if ( (typeof(wikEdConfig) == 'object') && (wikEd.wikEdConfigAdded == false) ) {
		wikEd.AddToObject(wikEd.config, wikEdConfig);
		wikEd.wikEdConfigAdded = true;
	}
	if ( (typeof(wikEdText) == 'object') && (wikEd.wikEdTextAdded == false) ) {
		wikEd.AddToObject(wikEd.text, wikEdText);
		wikEd.wikEdTextAdded = true;
	}

// detect already loaded external scripts
	if (wikEd.externalScripts == null) {
		wikEd.externalScripts = [];
		var pageScripts = document.getElementsByTagName('script');
		for (var i = 0; i < pageScripts.length; i ++) {
			var scriptSrc = pageScripts[i].src;
			var nameMatch = scriptSrc.match(/\btitle=([^&]*)/);
			if (nameMatch == null) {
				nameMatch = scriptSrc.match(/\/([^\/]*?)($|\?)/);
			}
			if (nameMatch != null) {
				var scriptName = nameMatch[1];
				if (scriptName != '') {

// ignore other diff.js scripts
					if ( (scriptName == 'diff.js') && (scriptSrc != wikEd.config.diffScriptSrc) ) {
						continue;
					}
					wikEd.externalScripts[scriptName] = true;
					wikEd.externalScriptsString += scriptName + '\n';
				}
			}
		}
	}

// detect developer version
	if (wikEd.externalScripts['wikEd_dev.js'] == true) {
		wikEd.testVersion = true;
	}

// exit if executed as Greasemonkey script if wiki user script is available
	if (typeof(GM_getValue) == 'function') {
		if (wikEd.externalScripts['wikEd.js'] == true) {
			wikEd.greasemonkey = false;
			return;
		}
		else {
			wikEd.greasemonkey = true;
		}
	}

// redirect Greasemonkey debugging function to wikEd.Debug if run as a wiki user script
	else {
		window.GM_log = wikEd.Debug;
	}

// detect wikEd running as a gadget
	if (wikEd.config.gadget == null) {
		if (wikEd.externalScripts['MediaWiki:Gadget-wikEd.js'] == true) {
			wikEd.config.gadget = true;
		}
	}

// detect MediaWiki page and its skin
	wikEd.InitMediaWikiSkinIds();
	for (var skin in wikEd.config.MediaWikiSkinIds) {
		if (wikEd.config.MediaWikiSkinIds.hasOwnProperty(skin) == true) {
			var logoContainerId = wikEd.config.MediaWikiSkinIds[skin][0];
			var logoToList = wikEd.config.MediaWikiSkinIds[skin][1];
			var rearrange = wikEd.config.MediaWikiSkinIds[skin][2];
			var skinIds = wikEd.config.MediaWikiSkinIds[skin][3];
			for (var i = 0; i < skinIds.length; i ++) {
				if (document.getElementById(skinIds[i]) == null) {
					break;
				}
			}
			if (i == skinIds.length) {
				wikEd.logoContainerId = logoContainerId;
				wikEd.skin = skin;
				wikEd.rearrange = rearrange;
				wikEd.logoToList = logoToList;
				break;
			}
		}
	}

// not a MediaWiki page
	if (wikEd.skin == '') {
		return;
	}

// initialize user configurable variables
	wikEd.InitGlobalConfigs();

// import custom text and translations
	wikEd.AddToObject(wikEd.config.text, wikEd.text);

// do not rearrange page elements
	if (wikEd.config.noRearrange != false) {
		wikEd.rearrange = false;
	}

// initialize non-configurable variables
	wikEd.InitGlobals();

// check for updates
	wikEd.AutoUpdate();

// initialize images (needed here for logo)
	wikEd.InitImages();

// load css for edit and non-edit pages
	wikEd.InitMainCSS();

// add stylesheet definitions
	wikEd.ApplyCSS(document, wikEd.config.mainCSS);

// add image path to image filename
	if (wikEd.logo == null) {

// create logo
		wikEd.logo = document.createElement('img');
		wikEd.logo.id = 'wikEdLogoImg';

// insert logo into page
		var logoContainer;
		if (wikEd.logoContainerId != '') {
			logoContainer = document.getElementById(wikEd.logoContainerId);
		}
		if (logoContainer != null) {

// logo as last element of specified list (e.g. monobook, simple, myskin, gumax)
			if (wikEd.logoToList == true) {
				wikEd.logoList = document.createElement('li');
				wikEd.logoList.id = 'wikEdLogoList';
				wikEd.logoList.className = 'wikEdLogoList';
				wikEd.logoList.appendChild(wikEd.logo);
				var list;
				var logo;
				if (logoContainer.tagName == 'UL') {
					list = logoContainer;
				}
				else {
					list = logoContainer.getElementsByTagName('ul')[0];
				}
				if (list != null) {
					list.appendChild(wikEd.logoList);
					wikEd.logo.className = 'wikEdLogo';
				}
			}

// logo as last child of specified element
			else {
				logoContainer.appendChild(wikEd.logo);
				wikEd.logo.className = 'wikEdLogo';
			}
		}

// logo as first page element, fallback for undetected skin
		if (wikEd.logo.className == '') {
			document.body.insertBefore(wikEd.logo, document.body.firstChild);
			wikEd.logo.className = 'wikEdLogoFallBack';
		}

// add event listener to logo
		wikEd.AddEventListener(wikEd.logo, 'click', wikEd.MainSwitch, true);
	}

// page loaded flag for dynamically loaded scripts
	wikEd.pageLoaded = true;

// load the external diff script if not already done
	if ( (wikEd.config.loadDiffScript == true) && (wikEd.externalScripts['diff.js'] == null) ) {
		if (typeof(WDiffString) == 'undefined') {
			var sep = '&';
			if (wikEd.config.diffScriptSrc.indexOf('?') == -1) {
				sep = '?';
			}
			wikEd.AppendScript(wikEd.config.diffScriptSrc + sep + wikEd.programVersion);
		}
		wikEd.externalScripts['diff.js'] = true;
	}

// load the external wikEdDiff script if not already done
	if ( (wikEd.config.loadDiff == true) && (wikEd.externalScripts['wikEdDiff.js'] == null) ) {
		if (typeof(wikEd.Diff) == 'undefined') {
			var sep = '&';
			if (wikEd.config.diffSrc.indexOf('?') == -1) {
				sep = '?';
			}
			wikEd.AppendScript(wikEd.config.diffSrc + sep + wikEd.programVersion);
		}
		wikEd.externalScripts['wikEdDiff.js'] = true;
	}

// load the MS IE selection/range compatibility library IERange
	if (wikEd.msie == true) {
		if ( (wikEd.config.loadIERange == true) && (wikEd.externalScripts['ierange.js'] == null) ) {
			if (typeof(DOMUtils) == 'undefined') {
				var sep = '&';
				if (wikEd.config.IERangeSrc.indexOf('?') == -1) {
					sep = '?';
				}
				wikEd.AppendScript(wikEd.config.IERangeSrc + sep + wikEd.programVersion);
			}
			wikEd.externalScripts['ierange.js'] = true;
		}
	}

// init syntax highlighting regExp object
	wikEd.HighlightSyntaxInit();

// check if disabled
	wikEd.disabled = wikEd.GetSavedSetting('wikEdDisabled', wikEd.config.disabledPreset);
	if (wikEd.disabled == true) {
		wikEd.useWikEd = false;
		wikEd.SetLogo();
		return;
	}

// location search string function: put all used images and icons on an empty page
	if (window.location.search.match(/(\?|&)wikEd=iconPage\b/i) != null) {
		var str = wikEd.config.text.iconPage;
		for (var imageKey in wikEd.config.image) {
			if (wikEd.config.image.hasOwnProperty(imageKey) == true) {
				var imageAddress = wikEd.config.image[imageKey];
				if (typeof(imageAddress) == 'string') {
					str += '<img src="' + imageAddress + '"> ';
				}
			}
		}
		document.body.innerHTML = str;
		return;
	}

// continue setup
	wikEd.TurnOn(true);

	return;
};


//
// wikEd.TurnOn: continue setup, can be called repeatedly
//

wikEd.TurnOn = function(scrollToEditFocus) {

// check if setup was already run
	if (wikEd.turnedOn == true) {
		return;
	}

// set error logo
	wikEd.SetLogo('error');

// no id, no wikEd
	if (navigator.appName == null) {
		wikEd.browserNotSupported = true;
	}

// check browser versions
	switch (wikEd.browserName) {

// check Mozilla version
		case 'Mozilla':
			if (
				(wikEd.browserFlavor == 'Firefox') && (wikEd.browserVersion < 1.5) ||
				(wikEd.browserFlavor == 'Netscape') && (wikEd.browserVersion < 8.0) ||
				(wikEd.browserFlavor == 'SeaMonkey') && (wikEd.browserVersion < 1.0)
			) {
				wikEd.browserNotSupported = true;
			}
			break;

// check MSIE version
		case 'MSIE':
			wikEd.browserNotSupported = true;
			break;

// check Opera version
		case 'Opera':
			if (wikEd.browserVersion < 10.51) {
				wikEd.browserNotSupported = true;
			}

// 10.50 beta, 10.51 are too buggy (inserthtml, parentNode...)
			wikEd.browserNotSupported = true;

			break;

// check Google Chrome version
		case 'Chrome':
			if (wikEd.browserVersion < 0.2) {
				wikEd.browserNotSupported = true;
			}
			break;

// check Safari version
		case 'Safari':
			if (wikEd.browserVersion < 500) {
				wikEd.browserNotSupported = true;
			}
			break;
	}

// browser or version not supported, set error message and exit
	if ( (wikEd.browserNotSupported == true) && (wikEd.config.skipBrowserTest == false) ) {
		wikEd.SetLogo('browser');
		return;
	}

// get form elements
	var array;
	array	= document.getElementsByName('wpEdittime');
	if (array[0] != null) {
		wikEd.edittime = array[0].value
	}
	array = document.getElementsByName('wpStarttime');
	if (array[0] != null) {
		wikEd.starttime = array[0].value
	}
	array = document.getElementsByName('wpAutoSummary');
	if (array[0] != null) {
		wikEd.autoSummary = array[0].value
	}
	array = document.getElementsByName('wpEditToken');
	if (array[0] != null) {
		wikEd.editToken = array[0].value
	}

// page type detection

// detect custom edit page
	if (wikEd.config.customEditFormId != '') {
		wikEd.editForm = document.getElementById(wikEd.config.customEditFormId);
	}
	if (wikEd.config.customTextAreaId != '') {
		wikEd.textarea = document.getElementById(wikEd.config.customTextAreaId);
	}
	if (wikEd.config.customSaveButtonId != '') {
		wikEd.saveButton = document.getElementById(wikEd.customwikEdSaveButtonId);
	}

// detect standard edit page
	if (wikEd.textarea == null) {
		wikEd.textarea = document.getElementsByName('wpTextbox1')[0];
	}
	if (wikEd.editForm == null) {
		wikEd.editForm = document.getElementById('editform');
	}
	if (wikEd.saveButton == null) {
		wikEd.saveButton = document.getElementById('wpSave');
	}
	wikEd.diffPreviewButton = document.getElementById('wpDiff');
	wikEd.previewButton = document.getElementById('wpPreview');

// detect MediaWiki Semantic Forms extension
	if (wikEd.textarea == null) {
		wikEd.editForm = document.getElementsByName('createbox')[0];
		wikEd.textarea = document.getElementsByName('free_text')[0];
	}

// detect edit raw watchlist page
	if ( (wikEd.editForm == null) || (wikEd.textarea == null) ) {
		wikEd.textarea = document.getElementById('titles');
		if (wikEd.textarea != null) {
			wikEd.watchlistEdit = true;

// get watchlist edit form
			var node = wikEd.textarea;
			while (node != null) {
				node = node.parentNode;
				if (node.tagName == 'FORM') {
					break;
				}
			}
			wikEd.editForm = node;
		}

// get watchlist submit button
		if (wikEd.editForm != null) {
			var submits = wikEd.editForm.getElementsByTagName('input');
			for (i = 0; i < submits.length; i ++) {
				if (submits[i].type == 'submit') {
					wikEd.saveButton = submits[i];
					break;
				}
			}
		}
	}

// detect upload page
	if ( (wikEd.textarea == null) || (wikEd.editForm == null) || (wikEd.saveButton == null) ) {
		wikEd.textarea = document.getElementsByName('wpUploadDescription')[0];
		wikEd.editForm = document.getElementById('mw-upload-form');
		wikEd.saveButton = document.getElementsByName('wpUpload')[0];
		if ( (wikEd.textarea != null) && (wikEd.editForm != null) && (wikEd.saveButton != null) ) {
			wikEd.uploadEdit = true;
			wikEd.rearrange = false;
		}
	}

// detect view and restore deleted pages
	if ( (wikEd.textarea == null) || (wikEd.editForm == null) || (wikEd.saveButton == null) ) {
		wikEd.textarea = document.getElementsByTagName('textarea')[0];
		if (wikEd.textarea != null) {

// get form
			var node = document.getElementsByName('preview')[0];
			while (node != null) {
				node = node.parentNode;
				if (node.tagName == 'FORM') {
					break;
				}
			}
			wikEd.editForm = node;
			if (wikEd.editForm != null) {
				wikEd.previewButton = document.getElementsByName('preview')[0];
				wikEd.viewDeleted = true;
				wikEd.rearrange = false;
			}
		}
	}

// set page detection error indicator
	if ( (wikEd.textarea == null) || (wikEd.editForm == null) ) {
		wikEd.SetLogo();
		return;
	}

// check if the textarea is read-only
	if (wikEd.config.skipReadOnlyTest == false) {
		if ( (wikEd.GetAttribute(wikEd.textarea, 'readonly') != null) || (wikEd.saveButton == null) ) {
			wikEd.readOnly = true;
		}
	}

// get missing wg variables from footer link, fails on /subpages (code copied to wikEdDiff.js)
	if (wikEd.wikiGlobals.wgArticlePath == null) {
		var printfooter = wikEd.GetElementsByClassName('printfooter', 'div')[0];
		if (printfooter != null) {
			var articleLink = printfooter.getElementsByTagName('a')[0];
			if (articleLink != null) {
				var regExpMatch = /^(https?:\/\/[^\/]*)(\/([^\/]*\/)*)([^\/]*)$/.exec(articleLink.href);
				if (regExpMatch != null) {
					wikEd.wikiGlobals.wgServer = regExpMatch[1];
					wikEd.wikiGlobals.wgArticlePath = regExpMatch[1] + regExpMatch[2] + '$1';
					wikEd.wikiGlobals.wgPageName = regExpMatch[4];
					wikEd.wikiGlobals.wgTitle = decodeURIComponent( regExpMatch[4].replace(/_/g, ' ') );
				}
			}
		}
	}

// get missing wg variables from form action url
	if (wikEd.wikiGlobals.wgScript == null) {
		wikEd.wikiGlobals.wgScript = wikEd.editForm.action.replace(/^https?:\/\/[^\/]*|\?.*$/g, '');
		wikEd.wikiGlobals.wgScriptPath = wikEd.wikiGlobals.wgScript.replace(/\/index.php/, '');
	}

// get current page name
	wikEd.pageName = wikEd.wikiGlobals.wgPageName;

// get current namespace
	if (wikEd.pageName != null) {
		var colonPos = wikEd.pageName.indexOf(':');
		if (colonPos == -1) {
			wikEd.pageNamespace = '';
		}
		else {
			wikEd.pageNamespace = wikEd.pageName.substr(0, colonPos);
		}
	}

// initialize frame css, main css, buttons, and button bars
	wikEd.InitFrameCSS();
	wikEd.InitMainEditCSS();
	wikEd.InitButton();
	wikEd.InitButtonKey();
	wikEd.InitButtonBar();
	wikEd.InitHistoryLength();
	wikEd.InitIncompatibleScripts();

// check for incompatible scripts
	if (wikEd.config.skipScriptTest == false) {
		var scriptNames = '';
		for (var key in wikEd.config.incompatibleScripts) {
			if (wikEd.config.incompatibleScripts.hasOwnProperty(key) == true) {
				var generalName = key;
				var regExp = new RegExp(wikEd.config.incompatibleScripts[key].replace(/\.js$/g, ''), 'gim');
				if (regExp.test(wikEd.externalScriptsString) == true) {
					if (scriptNames != '') {
						scriptNames += ', ';
					}
					scriptNames += generalName;
				}
			}
		}
		if (scriptNames != '') {
			wikEd.SetLogo('incompatible', scriptNames);
			return;
		}
	}

// define Unicode characters for fixing function
	wikEd.InitUnicode();

// detect if we add a new section (+ tab)
	if (/(\?|&)section=new\b/.test(window.location.search) == true) {
		wikEd.addNewSection = true;
	}
	else {
		var section = document.getElementsByName('wpSection');
		if (section != null) {
			if (section.length > 0) {
				if (section[0].value == 'new') {
					wikEd.addNewSection = true;
				}
			}
		}
	}

// load the external InstaView script
	if ( (wikEd.greasemonkey == false) && (wikEd.config.loadInstaView == true) && (wikEd.externalScripts['instaview.js'] == null) ) {
		if (typeof(InstaView) == 'undefined') {
			var sep = '&';
			if (wikEd.config.instaViewSrc.indexOf('?') == -1) {
				sep = '?';
			}
			wikEd.AppendScript(wikEd.config.instaViewSrc + sep + wikEd.programVersion);
		}
		wikEd.externalScripts['instaview.js'] = true;
	}
	else if ( (wikEd.greasemonkey == false) || (wikEd.config.loadInstaView != true) ) {
		wikEd.config.useLocalPreview = false;
	}

// get initial textarea dimensions
	wikEd.textareaBorderHeight = parseInt(wikEd.GetStyle(wikEd.textarea, 'borderTopWidth'), 10) + parseInt(wikEd.GetStyle(wikEd.textarea, 'borderBottomWidth'), 10);

	if (wikEd.GetStyle(wikEd.textarea, 'display') != 'none') {
		wikEd.textareaOffsetHeightInitial = wikEd.textarea.offsetHeight;
	}
	else {
		wikEd.textareaOffsetHeightInitial = wikEd.textarea.parentNode.clientHeight;
	}
	wikEd.textareaOffsetHeightInitial = wikEd.textarea.offsetHeight;
	wikEd.textareaHeight = (wikEd.textarea.offsetHeight - wikEd.textareaBorderHeight) + 'px';
	wikEd.textareaWidth = '100%';

// remove frame border if textarea has none
	var styleFrameContainer = '';
	if (wikEd.textareaBorderHeight == 0) {
		styleFrameContainer = 'border-width: 0;';
	}

// setup the undo buffers and save the original text for local changes view
	wikEd.origVersion = wikEd.textarea.value;

// Opera 0.9.51
	wikEd.origVersion = wikEd.origVersion.replace(/\r\n|\n\r|\r/g, '\n');

// add stylesheet definitions
	wikEd.ApplyCSS(document, wikEd.config.mainEditCSS);

// get button settings from saved settings
	wikEd.using = wikEd.GetSavedSetting('wikEdSummaryUsing', wikEd.config.usingPreset);
	wikEd.useWikEd = ! wikEd.GetSavedSetting('wikEdUseClassic', ! wikEd.config.useWikEdPreset);
	wikEd.highlightSyntax = ! wikEd.GetSavedSetting('wikEdSyntaxOff', ! wikEd.config.highlightSyntaxPreset);
	wikEd.fullScreenMode = wikEd.GetSavedSetting('wikEdFullscreen', wikEd.config.fullScreenModePreset);
	wikEd.closeToolbar = wikEd.GetSavedSetting('wikEdCloseToolbar', wikEd.config.closeToolbarPreset);
	wikEd.refHide = wikEd.GetSavedSetting('wikEdRefHide', wikEd.config.refHidePreset);
	wikEd.diff = wikEd.GetSavedSetting('wikEdDiff', wikEd.config.diffPreset);
	wikEd.tableMode = false;

// detect preview page
	if (window.location.search.match(/(\?|&)action=submit\b/) != null) {
		wikEd.previewPage = true;
	}

// no fullscreen for preview and upload pages
	if ( (wikEd.uploadEdit == true) || (wikEd.previewPage == true) ) {
		wikEd.fullScreenMode = false;
	}

// disable wikEd for Lupin's autoedit scripts
	if (window.location.search.match(/(\?|&)autoedit=/) != null) {
		wikEd.useWikEd = false;
	}

// disable wikEd for js pages
	if (/\.js$/.test(wikEd.wikiGlobals.wgTitle) == true) {
		if ( (wikEd.wikiGlobals.wgCanonicalNamespace != 'User_talk') && (wikEd.wikiGlobals.wgCanonicalNamespace != 'Talk') ) {
			wikEd.noSpellcheck = true;
			if (wikEd.origVersion.length > 20000) {
				wikEd.useWikEd = false;
			}
			else {
				wikEd.highlightSyntax = false;
			}
		}
	}

// no spellcheck for watchlist editing
	if (wikEd.watchlistEdit == true) {
		wikEd.noSpellcheck = true;
	}

// disable spellchecker for textarea
	if (wikEd.noSpellcheck == true) {
		wikEd.textarea.setAttribute('spellcheck', false);
	}

// preset frame related styles to avoid browser crashes
	var styleFrameBody;
	var styleFrameWrapperPosition;
	var styleFrameWrapperVisibility;
	var styleTextareaWrapperPosition;
	var styleTextareaWrapperVisibility;
	if (wikEd.useWikEd == true) {
		styleFrameBody = 'display: block;';
		styleFrameWrapperPosition = 'static';
		styleFrameWrapperVisibility = 'visible';
		styleTextareaWrapperPosition = 'absolute';
		styleTextareaWrapperVisibility = 'hidden';
	}
	else {
		styleFrameBody = 'display: none;';
		styleFrameWrapperPosition = 'absolute';
		styleFrameWrapperVisibility = 'hidden';
		styleTextareaWrapperPosition = 'static';
		styleTextareaWrapperVisibility = 'visible';
	}
	var inputWrapperClass;
	if (wikEd.fullScreenMode == true) {
		inputWrapperClass = 'wikEdInputWrapperFull';
	}
	else {
		inputWrapperClass = 'wikEdInputWrapper';
	}

// check if we use the wikEd.editor user interface of the vector skin

//	wikEd.wikiEditor = document.getElementById('wikiEditor-ui');
	wikEd.wikiEditor = wikEd.GetElementsByClassName('wikiEditor-ui', 'div')[0];

	if (wikEd.wikiEditor == null) {
		wikEd.textareaContainer = wikEd.textarea;
	}
	else {
		wikEd.wikiEditorFrame = wikEd.wikiEditor.getElementsByTagName('IFRAME')[0];
		wikEd.wikiEditorTop = wikEd.GetElementsByClassName('wikiEditor-ui-top', 'div')[0];
		wikEd.wikiEditorBar = wikEd.GetElementsByClassName('wikiEditor-ui-toolbar', 'div')[0];
		wikEd.wikiEditorBottom = wikEd.GetElementsByClassName('wikiEditor-ui-bottom', 'div')[0];
		wikEd.wikiEditorText = wikEd.GetElementsByClassName('wikiEditor-ui-text', 'div')[0];
		wikEd.textareaContainer = wikEd.wikiEditor;
	}

// create input wrapper, contains the whole fullscreen content
	wikEd.inputWrapper = document.createElement('div');
	wikEd.inputWrapper.id = 'wikEdInputWrapper';
	wikEd.inputWrapper.className = inputWrapperClass;
	wikEd.textareaContainer.parentNode.insertBefore(wikEd.inputWrapper, wikEd.textareaContainer);

// create editor wrapper, contains toolbar, textarea, toc, but not the summary
	if (wikEd.wikiEditor != null) {
		wikEd.editorWrapper = wikEd.wikiEditor;
	}
	else {
		wikEd.editorWrapper = document.createElement('div');
		wikEd.editorWrapper.id = 'wikEdEditorWrapper';
		wikEd.editorWrapper.className = 'wikEdEditorWrapper';
	}
	wikEd.inputWrapper.appendChild(wikEd.editorWrapper);

// create toolbar wrapper
	wikEd.toolbarWrapper = document.createElement('div');
	wikEd.toolbarWrapper.id = 'wikEdToolbarWrapper';
	wikEd.toolbarWrapper.className = 'wikEdToolbarWrapper';
	wikEd.toolbar = document.getElementById('toolbar');
	if (wikEd.toolbar != null) {
		wikEd.editorWrapper.appendChild(wikEd.toolbarWrapper);
	}
	else if (wikEd.wikiEditorBar != null) {
		wikEd.wikiEditorBar.parentNode.insertBefore(wikEd.toolbarWrapper, wikEd.wikiEditorBar);
		wikEd.toolbarWrapper.appendChild(wikEd.wikiEditorBar);
	}
	else {
		wikEd.editorWrapper.appendChild(wikEd.toolbarWrapper);
	}

// create captcha wrapper
	wikEd.textBoxTable;
	if (wikEd.rearrange == true) {
		wikEd.captchaWrapper = document.createElement('div');
		wikEd.captchaWrapper.id = 'wikEdCaptchaWrapper';
		wikEd.captchaWrapper.className = 'wikEdCaptchaWrapper';
		wikEd.editorWrapper.appendChild(wikEd.captchaWrapper);

// fill captcha wrapper with elements between form and textarea (table)
		wikEd.textBoxTable = document.getElementById('textBoxTable');
		if ( (wikEd.uploadEdit == false) && (wikEd.watchlistEdit == false) ) {
			var node = wikEd.editForm.firstChild;
			while (node != null) {
				if ( (node == wikEd.inputWrapper) || (node == wikEd.wikiEditor) ) {
					break;
				}
				var nextNode = node.nextSibling;
				wikEd.captchaWrapper.appendChild(node);
				node = nextNode;
			}
		}
	}

// create debug textarea wrapper
	wikEd.debugWrapper = document.createElement('div');
	wikEd.debugWrapper.id = 'wikEdDebugWrapper';
	wikEd.debugWrapper.className = 'wikEdDebugWrapper';
	wikEd.debugWrapper.style.visibility = 'hidden';
	wikEd.editorWrapper.appendChild(wikEd.debugWrapper);

// create edit wrapper for textarea and frame wrapper
	wikEd.editWrapper = document.createElement('div');
	wikEd.editWrapper.id = 'wikEdEditWrapper';
	wikEd.editWrapper.className = 'wikEdEditWrapper';
	wikEd.editorWrapper.appendChild(wikEd.editWrapper);

// create textarea wrapper
	wikEd.textareaWrapper = document.createElement('div');
	wikEd.textareaWrapper.id = 'wikEdTextareaWrapper';
	wikEd.textareaWrapper.className = 'wikEdTextareaWrapper';
	wikEd.textareaWrapper.style.position = styleTextareaWrapperPosition;
	wikEd.textareaWrapper.style.visibility = styleTextareaWrapperVisibility;
	wikEd.editWrapper.appendChild(wikEd.textareaWrapper);

// create frame wrapper
	wikEd.frameWrapper = document.createElement('div');
	wikEd.frameWrapper.id = 'wikEdFrameWrapper';
	wikEd.frameWrapper.className = 'wikEdFrameWrapper';
	wikEd.frameWrapper.style.position = styleFrameWrapperPosition;
	wikEd.frameWrapper.style.visibility = styleFrameWrapperVisibility;
	wikEd.editWrapper.appendChild(wikEd.frameWrapper);

// create console wrapper for buttons, summary, and submit
	if (wikEd.rearrange == true) {
		wikEd.consoleWrapper = document.createElement('div');
		wikEd.consoleWrapper.id = 'wikEdConsoleWrapper';
		wikEd.consoleWrapper.className = 'wikEdConsoleWrapper';
		wikEd.inputWrapper.appendChild(wikEd.consoleWrapper);
	}

// create buttons wrapper for toolbar and wikEd button bars
	if (wikEd.wikiEditor != null) {
		wikEd.buttonsWrapper = wikEd.wikiEditorTop;
	}
	else {
		wikEd.buttonsWrapper = document.createElement('div');
		wikEd.buttonsWrapper.id = 'wikEdButtonsWrapper';
		wikEd.buttonsWrapper.className = 'wikEdButtonsWrapper';
	}
	wikEd.editorWrapper.insertBefore(wikEd.buttonsWrapper, wikEd.editWrapper);

// create button bar wrapper
	wikEd.buttonBarWrapper = document.createElement('div');
	wikEd.buttonBarWrapper.id = 'wikEdButtonBarWrapper';
	wikEd.buttonBarWrapper.className = 'wikEdButtonBarWrapper';
	wikEd.buttonsWrapper.appendChild(wikEd.buttonBarWrapper);

// create summary wrapper for summary, minor edit, and watch this page
	if (wikEd.rearrange == true) {
		wikEd.summaryWrapper = document.createElement('div');
		wikEd.summaryWrapper.id = 'wikEdSummaryWrapper';

// add summary above the edit field if we add a new section (+ tab)
		if (wikEd.addNewSection == true) {
			wikEd.summaryWrapper.className = 'wikEdSummaryWrapperTop';
			wikEd.inputWrapper.insertBefore(wikEd.summaryWrapper, wikEd.inputWrapper.firstChild);
		}
		else {
			wikEd.summaryWrapper.className = 'wikEdSummaryWrapper';
			wikEd.consoleWrapper.appendChild(wikEd.summaryWrapper);
		}

// create summary input wrapper
		wikEd.summaryInputWrapper = document.createElement('div');
		wikEd.summaryInputWrapper.id = 'wikEdSummaryInputWrapper';
		wikEd.summaryInputWrapper.className = 'wikEdSummaryInputWrapper';
		wikEd.summaryWrapper.appendChild(wikEd.summaryInputWrapper);

// create minor edit and watch page wrapper
		wikEd.editOptionsWrapper = document.createElement('div');
		wikEd.editOptionsWrapper.id = 'wikEdEditOptionsWrapper';
		wikEd.editOptionsWrapper.className = 'wikEdEditOptionsWrapper';

// create submit wrapper for submit elements
		wikEd.submitWrapper = document.createElement('div');
		wikEd.submitWrapper.id = 'wikEdSubmitWrapper';
		wikEd.submitWrapper.className = 'wikEdSubmitWrapper';
		wikEd.consoleWrapper.appendChild(wikEd.submitWrapper);

// create submit buttons wrapper for submit buttons and help links
		wikEd.submitButtonsWrapper = document.createElement('div');
		wikEd.submitButtonsWrapper.id = 'wikEdSubmitButtonsWrapper';
		wikEd.submitButtonsWrapper.className = 'wikEdSubmitButtonsWrapper';
	}

// create preview wrapper for preview and diff box
	wikEd.localPrevWrapper = document.createElement('div');
	wikEd.localPrevWrapper.id = 'wikEdLocalPrevWrapper';
	wikEd.localPrevWrapper.className = 'wikEdLocalPrevWrapper';
	wikEd.localPrevWrapper.style.display = 'none';
	if (wikEd.rearrange == true) {
		wikEd.inputWrapper.appendChild(wikEd.localPrevWrapper);
	}
	else if (wikEd.saveButton != null) {
		wikEd.saveButton.parentNode.appendChild(wikEd.localPrevWrapper);
	}
	else if (wikEd.previewButton != null) {
		wikEd.previewButton.parentNode.appendChild(wikEd.localPrevWrapper);
	}
	else if (wikEd.diffPreviewButton != null) {
		wikEd.diffPreviewButton.parentNode.appendChild(wikEd.localPrevWrapper);
	}

// create insert wrapper for insert special chars links
	if (wikEd.rearrange == true) {
		wikEd.insertWrapper = document.createElement('div');
		wikEd.insertWrapper.id = 'wikEdInsertWrapper';
		wikEd.insertWrapper.className = 'wikEdInsertWrapper';
		wikEd.inputWrapper.appendChild(wikEd.insertWrapper);
	}

// append input wrapper to document
	if ( (wikEd.rearrange == true) && (wikEd.watchlistEdit == false) ) {
		wikEd.editForm.insertBefore(wikEd.inputWrapper, wikEd.editForm.firstChild);
	}

// fill the wrappers

// create debug textarea and add to debug wrapper
	wikEd.debug = document.createElement('textarea');
	wikEd.debug.rows = 20;
	wikEd.debug.style.display = 'none';
	wikEd.debug.setAttribute('spellcheck', false);
	wikEd.debugWrapper.appendChild(wikEd.debug);

// display startup error messages
	if (wikEd.config.debugStartUp != '') {
		wikEd.Debug(wikEd.config.debugStartUp);
	}

// wikEdDiff enhanced ajax diff
	if (typeof(wikEd.diffTable) == 'object') {
		if ( (wikEd.diffTable != null) && (wikEd.diff == true) ) {
			if (typeof(wikEd.Diff) == 'function') {
				wikEd.Diff();
			}
		}
	}

// hide toolbar wrapper
	if (wikEd.closeToolbar == true) {
		wikEd.toolbarWrapper.style.display = 'none';
	}
	else {
		wikEd.toolbarWrapper.style.display = 'block';
	}

// call wikibits:mwSetupToolbar() now because it would terminate with an error after setting textarea to display: none
	if (wikEd.toolbar != null) {
		if (wikEd.toolbar.getElementsByTagName('IMG').length == 0) {
			if (typeof(mwSetupToolbar) == 'function') {
				mwSetupToolbar();
				wikEd.RemoveEventListener(window, 'load', mwSetupToolbar, false);
			}
		}
	}

// dropdowns from toolbar should go over wikEd toolbar
	if (wikEd.wikiEditorBar != null) {
		wikEd.wikiEditorBar.style.zIndex = '5';
	}

// get edit options
	wikEd.editOptions = wikEd.GetElementsByClassName('editCheckboxes', 'div', wikEd.editForm)[0];

// old MediaWiki versions
	if (wikEd.editOptions == null) {
		var wpSummary = document.getElementsByName('wpSummary')[0];
		if (wpSummary != null) {
			wikEd.editOptions = wpSummary.parentNode;
			wikEd.editOptions.className = 'wikEdEditOptions';
		}
	}

// add summary elements to summary input wrapper
	if (wikEd.rearrange == true) {
		wikEd.summaryLabel = document.getElementById('wpSummaryLabel');
		if (wikEd.summaryLabel != null) {
			wikEd.summaryInputWrapper.appendChild(wikEd.summaryLabel);
		}
		wikEd.summaryText = document.getElementsByName('wpSummary')[0];
		if (wikEd.summaryText != null) {
			wikEd.summaryInputWrapper.appendChild(wikEd.summaryText);
		}
	}

// move editpage-copywarn out of summary wrapper
// needs to be done before appending editOptions to summary wrapper otherwise a linebreak stays (Mozilla bug)
	if (wikEd.rearrange == true) {
		var copywarn = document.getElementById('editpage-copywarn');
		if (copywarn != null) {
			wikEd.inputWrapper.parentNode.insertBefore(copywarn, wikEd.inputWrapper.nextSibling);
		}
	}

// add submit buttons to submit wrapper
	if (wikEd.rearrange == true) {
		var wpEditButtons;
		if (wikEd.saveButton != null) {
			wpEditButtons = wikEd.saveButton.parentNode;
		}
		else if (wikEd.previewButton != null) {
			wpEditButtons = wikEd.previewButton.parentNode;
		}
		else if (wikEd.diffPreviewButton != null) {
			wpEditButtons = wikEd.diffPreviewButton.parentNode;
		}
		if (wpEditButtons != null) {
			wikEd.submitButtonsWrapper.appendChild(wpEditButtons);
		}
	}

// add a link to the wikEd help page
	if (wikEd.rearrange == true) {
		if ( (wikEd.config.helpPageLink != '') && (wikEd.config.helpPageLink != null) ) {
			var editHelpParent = wikEd.diffPreviewButton;
			while (editHelpParent != null) {
				if (editHelpParent.tagName == 'SPAN') {
					break;
				}
				editHelpParent = editHelpParent.nextSibling;
			}

			if (editHelpParent != null) {
				var editHelp = editHelpParent.lastChild;
				while (editHelp != null) {
					if (editHelp.tagName == 'A') {
						break;
					}
					editHelp = editHelp.previousSibling;
				}

				if (editHelp != null) {
					wikEd.helpSpan = document.createElement('span');
					wikEd.helpSpan.id = 'wikEdHelpSpan';
					wikEd.helpSpan.className = 'wikEdHelpSpan';
					wikEd.helpSpan.innerHTML = wikEd.config.helpPageLink.replace(/\{wikEdHomeBaseUrl\}/g, wikEd.config.homeBaseUrl);
					editHelpParent.insertBefore(wikEd.helpSpan, editHelp.nextSibling);

					wikEd.editHelp = wikEd.helpSpan.parentNode;
					wikEd.editHelp.id = 'wikEdEditHelp';
					wikEd.editHelp.className = 'wikEdEditHelp';
				}
			}
		}
	}

// add submit buttons, edit options, and edit help to submit wrapper
	if (wikEd.submitWrapper != null) {
		if (wikEd.submitButtonsWrapper != null) {
			wikEd.submitWrapper.appendChild(wikEd.submitButtonsWrapper);
		}
		if (wikEd.editOptionsWrapper != null) {
			wikEd.submitWrapper.appendChild(wikEd.editOptionsWrapper);
			if (wikEd.editOptions != null) {
				wikEd.editOptionsWrapper.appendChild(wikEd.editOptions);

// remove linebreak before minor edit checkbox
				var node = wikEd.editOptions.firstChild;
				while (node != null) {
					if (node.tagName != null) {
						if (node.tagName == 'BR') {
							node.parentNode.removeChild(node);
							break;
						}
					}
					node = node.nextSibling;
				}
			}
		}
		if (wikEd.editHelp != null) {
			wikEd.submitWrapper.appendChild(wikEd.editHelp);
		}
	}

// add textBoxTable or textarea to edit wrapper
	if (wikEd.textBoxTable != null) {
		wikEd.textareaWrapper.appendChild(wikEd.textBoxTable);
	}
	else if (wikEd.wikiEditor != null) {
		wikEd.textareaWrapper.appendChild(wikEd.wikiEditorBottom);
	}
	else {
		wikEd.textareaWrapper.appendChild(wikEd.textarea);
	}

// set frame font family
	var classFrameBody;
	if (wikEd.highlightSyntax == true) {
		if (wikEd.refHide == true) {
			classFrameBody = 'wikEdFrameBodyNewbie';
		}
		else {
			classFrameBody = 'wikEdFrameBodySyntax';
		}
	}
	else {
		classFrameBody = 'wikEdFrameBodyPlain';
	}

// add edit-frame to frame wrapper
// any DOM changes to a starting iframe in designmode may crash mozilla, including DOM move, display: none; and position: absolute;

// create the iframe
	var html = '';
	html += '<div id="wikEdFrameOuter" class="wikEdFrameOuter" style="' + styleFrameContainer + '">';
	html += '<div id="wikEdFrameInner" class="wikEdFrameInner" style="' + styleFrameContainer + '">';
	html += '<iframe id="wikEdFrame" class="wikEdFrame"></iframe>';
	html += '</div>';
	html += '</div>';
	wikEd.frameWrapper.innerHTML = html;

// old Mozilla versions crash when designmode is turned on before the frame has loaded completely
// but onload workaround has problems starting with Firefox 3.6 (bug 542727)
	var onloadWorkaround = false;
	if ( (wikEd.mozilla == true) && (
		(wikEd.browserFlavor == 'Firefox') && (wikEd.browserVersion < 3.0) ||
		(wikEd.browserFlavor == 'Netscape') && (wikEd.browserVersion < 9.0) ||
		(wikEd.browserFlavor == 'SeaMonkey') && (wikEd.browserVersion < 2.0) ) ) {
		onloadWorkaround = true;
	}

// fill the frame with content
	html = '';
	html += '<html id="wikEdFrameHtml" class="wikEdFrameHtml"><head></head>';
	html += '<body id="wikEdFrameBody" class="' + classFrameBody + '" style="' + styleFrameBody + '"';

// disable spellchecker in iframe
	if (wikEd.noSpellcheck == true) {
		html += ' spellcheck="false"';
	}
	if (wikEd.readOnly == false) {
		html += ' onload="var doc = window.document; doc.designMode = \'on\'; ';
	}
	html += 'try { doc.execCommand(\'styleWithCSS\', 0, false); } catch (e) { ';
	html += 'try { doc.execCommand(\'useCSS\', 0, true); } catch (e) { ';
	html += 'try { doc.execCommand(\'styleWithCSS\', false, false); } catch (e) { } } }"';
	html += '></body></html>';

	wikEd.frameOuter = document.getElementById('wikEdFrameOuter');
	wikEd.frameInner = document.getElementById('wikEdFrameInner');
	wikEd.frame = document.getElementById('wikEdFrame');
	wikEd.frameWindow = wikEd.frame.contentWindow;
	wikEd.frameDocument = wikEd.frameWindow.document;

// set frame width, border divs shrink around
	wikEd.frameBorderHeight = parseInt(wikEd.GetStyle(wikEd.frameOuter, 'borderTopWidth'), 10) + parseInt(wikEd.GetStyle(wikEd.frameOuter, 'borderBottomWidth'), 10) + parseInt(wikEd.GetStyle(wikEd.frameInner, 'borderTopWidth'), 10) + parseInt(wikEd.GetStyle(wikEd.frameInner, 'borderBottomWidth'), 10);
	wikEd.frameBorderWidth = parseInt(wikEd.GetStyle(wikEd.frameOuter, 'borderLeftWidth'), 10) + parseInt(wikEd.GetStyle(wikEd.frameOuter, 'borderRightWidth'), 10) + parseInt(wikEd.GetStyle(wikEd.frameInner, 'borderLeftWidth'), 10) + parseInt(wikEd.GetStyle(wikEd.frameInner, 'borderRightWidth'), 10);

	wikEd.frameHeight = (wikEd.textareaOffsetHeightInitial - wikEd.frameBorderHeight) + 'px';
	wikEd.frameWidth = (wikEd.editorWrapper.clientWidth - wikEd.frameBorderWidth) + 'px';
	wikEd.frame.style.height = wikEd.frameHeight;
	wikEd.frame.style.width = wikEd.frameWidth;

// do not remember sie if started in fullscreen mode
	if (wikEd.fullScreenMode == true) {
		wikEd.frameHeight = 0;
		wikEd.frameWidth = 0;
	}

// turn on designmode before adding content
	if ( (onloadWorkaround == false) && (wikEd.readOnly == false) ) {
		wikEd.frameDocument.designMode = 'on';
		try { wikEd.frameDocument.execCommand('styleWithCSS', 0, false); } catch (e) {
			try { wikEd.frameDocument.execCommand('useCSS', 0, true); } catch (e) {
				try { wikEd.frameDocument.execCommand('styleWithCSS', false, false); } catch (e) {
				}
			}
		}
	}

// MS-IE needs styling for full width frame
	if (wikEd.msie == true) {
////		wikEd.frame.style.width = wikEd.textareaWidth + 'px';// 100%
	}

// fill iframe with content
	wikEd.frameDocument.open();
	wikEd.frameDocument.write(html);
	wikEd.frameDocument.close();
	wikEd.frameBody = wikEd.frameDocument.body;

// generate button bars and add them to the buttons wrapper
// form wrapper has been added against summary input submit defaulting to this button
	if (wikEd.readOnly == false) {
		wikEd.buttonBarFormat = wikEd.MakeButtonBar(wikEd.config.buttonBar.format);
		wikEd.buttonBarWrapper.appendChild(wikEd.buttonBarFormat);

		wikEd.buttonBarTextify = wikEd.MakeButtonBar(wikEd.config.buttonBar.textify);
		wikEd.buttonBarWrapper.appendChild(wikEd.buttonBarTextify);
	}

	wikEd.buttonBarControl = wikEd.MakeButtonBar(wikEd.config.buttonBar.control);
	wikEd.buttonBarWrapper.appendChild(wikEd.buttonBarControl);

	if (wikEd.config.buttonBar.custom1[6].length > 0) {
		wikEd.buttonBarCustom1 = wikEd.MakeButtonBar(wikEd.config.buttonBar.custom1);
		wikEd.buttonBarWrapper.appendChild(wikEd.buttonBarCustom1);
	}

	wikEd.buttonBarFind = wikEd.MakeButtonBar(wikEd.config.buttonBar.find);
	wikEd.buttonBarWrapper.appendChild(wikEd.buttonBarFind);

	if (wikEd.readOnly == false) {
		wikEd.buttonBarFix = wikEd.MakeButtonBar(wikEd.config.buttonBar.fix);
		wikEd.buttonBarWrapper.appendChild(wikEd.buttonBarFix);
	}

	if (wikEd.config.buttonBar.custom2[6].length > 0) {
		wikEd.buttonBarCustom2 = wikEd.MakeButtonBar(wikEd.config.buttonBar.custom2);
		wikEd.buttonBarWrapper.appendChild(wikEd.buttonBarCustom2);
	}

	var br = document.createElement('br');
	br.style.clear = 'both';
	wikEd.buttonsWrapper.appendChild(br);

	wikEd.caseSensitive = document.getElementById('wikEdCaseSensitive');
	wikEd.regExp = document.getElementById('wikEdRegExp');
	wikEd.findAhead = document.getElementById('wikEdFindAhead');
	wikEd.findText = document.getElementById('wikEdFindText');
	wikEd.replaceText = document.getElementById('wikEdReplaceText');

// add preview box top bar to submit wrapper
	wikEd.buttonBarPreview = wikEd.MakeButtonBar(wikEd.config.buttonBar.preview);
	if ( (wikEd.rearrange == true) && (wikEd.submitWrapper != null) ) {
		wikEd.submitWrapper.insertBefore(wikEd.buttonBarPreview, wikEd.submitWrapper.firstChild);
	}

// add preview box and its bottom bar to preview wrapper
	if (wikEd.localPrevWrapper != null) {
		var div = document.createElement('div');
		div.id = 'wikEdPreviewBoxOuter';
		div.className = 'wikEdPreviewBoxOuter';
		wikEd.localPrevWrapper.appendChild(div);

		wikEd.previewBox = document.createElement('div');
		wikEd.previewBox.id = 'wikEdPreviewBox';
		wikEd.previewBox.className = 'wikEdPreviewBox';
		div.appendChild(wikEd.previewBox);
		wikEd.buttonBarPreview2 = wikEd.MakeButtonBar(wikEd.config.buttonBar.preview2);
		wikEd.localPrevWrapper.appendChild(wikEd.buttonBarPreview2);
	}

// add jump box to standard preview
	var wikiPreview = document.getElementById('wikiPreview');
	if (wikiPreview != null) {
		if (wikiPreview.firstChild != null) {
			wikEd.buttonBarJump = wikEd.MakeButtonBar(wikEd.config.buttonBar.jump);
			wikiPreview.insertBefore(wikEd.buttonBarJump, wikiPreview.firstChild);
		}
	}

// add insert special chars to insert wrapper
	if (wikEd.insertWrapper != null) {
		var wpSpecialchars = document.getElementById('editpage-specialchars');
		if (wpSpecialchars != null) {
			wikEd.insertWrapper.appendChild(wpSpecialchars);
		}
	}

// wrappers filled

// add local preview button next to submit button
	var previewSpan = document.createElement('span');
	previewSpan.innerHTML = wikEd.MakeButtonCode(82, 'button');
	if (wikEd.previewButton != null) {
		wikEd.previewButton.parentNode.insertBefore(previewSpan, wikEd.previewButton.nextSibling);
	}
	else if (wikEd.saveButton != null) {
		wikEd.saveButton.parentNode.insertBefore(previewSpan, wikEd.saveButton.nextSibling);
	}

// add local diff button next to submit button
	if ( ( (wikEd.diffPreviewButton != null) || (wikEd.watchlistEdit == true) ) && (wikEd.readOnly == false) ) {
		var diffSpan = document.createElement('span');
		diffSpan.innerHTML = wikEd.MakeButtonCode(83, 'button');
		if (wikEd.diffPreviewButton != null) {
			wikEd.diffPreviewButton.parentNode.insertBefore(diffSpan, wikEd.diffPreviewButton.nextSibling);
		}
		else if (previewSpan != null) {
			previewSpan.parentNode.insertBefore(diffSpan, previewSpan.nextSibling);
		}
		else if (wikEd.previewButton != null) {
			wikEd.previewButton.parentNode.insertBefore(diffSpan, wikEd.previewButton.nextSibling);
		}
	}

// correct tab order between check boxes and submits
	wikEd.frame.tabIndex = wikEd.textarea.tabIndex;

// initialize image buttons
	wikEd.Button(document.getElementById('wikEdDiff'),            'wikEdDiff', null, wikEd.diff);
	wikEd.Button(document.getElementById('wikEdRefHide'),         'wikEdRefHide', null, wikEd.refHide);
	wikEd.Button(document.getElementById('wikEdHighlightSyntax'), 'wikEdHighlightSyntax', null, wikEd.highlightSyntax);
	wikEd.Button(document.getElementById('wikEdUseWikEd'),        'wikEdUseWikEd', null, wikEd.useWikEd);
	wikEd.Button(document.getElementById('wikEdCloseToolbar'),    'wikEdCloseToolbar', null, wikEd.closeToolbar);
	wikEd.Button(document.getElementById('wikEdFullScreen'),      'wikEdFullScreen', null, wikEd.fullScreenMode);
	wikEd.Button(document.getElementById('wikEdUsing'),           'wikEdUsing', null, wikEd.using);
	wikEd.Button(document.getElementById('wikEdCaseSensitive'),   'wikEdCaseSensitive', null, false);
	wikEd.Button(document.getElementById('wikEdRegExp'),          'wikEdRegExp', null, false);
	wikEd.Button(document.getElementById('wikEdFindAhead'),       'wikEdFindAhead', null, wikEd.config.findAheadSelected);
	wikEd.Button(document.getElementById('wikEdClose'),           'wikEdClose', null, false, 'wikEdButton');
	wikEd.Button(document.getElementById('wikEdClose2'),          'wikEdClose2', null, false, 'wikEdButton');
	wikEd.Button(document.getElementById('wikEdTableMode'),       'wikEdTableMode', null, wikEd.tableMode);

// hide typo fix button until typo fix rules are loaded and parsed
	wikEd.fixRegExTypo = document.getElementById('wikEdFixRegExTypo');
	if (wikEd.fixRegExTypo != null) {
		wikEd.fixRegExTypo.style.display = 'none';
	}

// hide buttons if API is not available
	if ( (wikEd.wikiGlobals.wgEnableAPI != true) && (wikEd.wikiGlobals.wgEnableAPI != 'true') ) {
		var fixRedirect = document.getElementById('wikEdFixRedirect');
		if (fixRedirect != null) {
			fixRedirect.style.display = 'none';
		}
	}

// add a clear summary button left to the summary input field
	if (wikEd.summaryText != null) {
		var clearSummaryForm = document.createElement('form');
		clearSummaryForm.id = 'wikEdClearSummaryForm';
		clearSummaryForm.className = 'wikEdClearSummaryForm';
		wikEd.summaryText.parentNode.insertBefore(clearSummaryForm, wikEd.summaryText);

		wikEd.clearSummary = document.createElement('button');
		wikEd.clearSummary.id = 'wikEdClearSummary';
		wikEd.clearSummary.className = 'wikEdClearSummary';
		wikEd.clearSummary.alt = wikEd.config.text['wikEdClearSummary alt'];
		wikEd.clearSummary.title = wikEd.config.text['wikEdClearSummary title'];
		wikEd.clearSummary.style.height = (wikEd.summaryText.clientHeight + 1) +'px';
		clearSummaryForm.appendChild(wikEd.clearSummary);

		wikEd.clearSummaryImg = document.createElement('img');
		wikEd.clearSummaryImg.id = 'wikEdClearSummaryImg';
		wikEd.clearSummaryImg.src = wikEd.config.image['clearSummary'];
		wikEd.clearSummaryImg.alt = 'Clear summary';
		wikEd.clearSummary.appendChild(wikEd.clearSummaryImg);

// remember button width, might be without image
		wikEd.clearSummaryWidth = wikEd.clearSummary.offsetWidth;

// make the summary a combo box
		var summaryComboInput = document.createElement('span');
		summaryComboInput.id = 'wikEdSummaryComboInput';
		summaryComboInput.className = 'wikEdSummaryComboInput';
		summaryComboInput = wikEd.summaryText.parentNode.insertBefore(summaryComboInput, wikEd.summaryText);

		wikEd.summaryText = wikEd.summaryText.parentNode.removeChild(wikEd.summaryText);
		wikEd.summaryText.className = 'wikEdSummaryText';
		wikEd.summaryTextWidth = wikEd.summaryWrapper.offsetWidth - wikEd.summaryInputWrapper.offsetWidth;
		if (wikEd.summaryTextWidth < 150) {
			wikEd.summaryTextWidth = 150;
		}
		wikEd.summaryText.style.width = wikEd.summaryTextWidth + 'px';

		wikEd.summarySelect = document.createElement('select');
		wikEd.summarySelect.id = 'wikEdSummarySelect';
		wikEd.summarySelect.className = 'wikEdSummarySelect';

		summaryComboInput.appendChild(wikEd.summaryText);
		summaryComboInput.appendChild(wikEd.summarySelect);
	}

// shorten submit button texts
	if (wikEd.previewButton != null) {
		wikEd.previewButton.value = wikEd.config.text.shortenedPreview;
	}
	if (wikEd.diffPreviewButton != null) {
		wikEd.diffPreviewButton.value = wikEd.config.text.shortenedChanges;
	}

// set up combo input boxes with history
	wikEd.fieldHist ['find'] = [];
	wikEd.savedName.find = 'wikEdFindHistory';
	wikEd.inputElement.find = new Object(wikEd.findText);
	wikEd.selectElement.find = new Object(document.getElementById('wikEdFindSelect'));
	wikEd.selectElement.find.title = wikEd.config.text['wikEdFindSelect title'];

	wikEd.fieldHist ['replace'] = [];
	wikEd.savedName.replace = 'wikEdReplaceHistory';
	wikEd.inputElement.replace = new Object(wikEd.replaceText);
	wikEd.selectElement.replace = new Object(document.getElementById('wikEdReplaceSelect'));
	wikEd.selectElement.replace.title = wikEd.config.text['wikEdReplaceSelect title'];

	if (wikEd.summaryInputWrapper != null) {
		wikEd.fieldHist ['summary'] = [];
		wikEd.savedName.summary = 'wikEdSummaryHistory';
		wikEd.inputElement.summary = new Object(wikEd.summaryText);
		wikEd.selectElement.summary = new Object(document.getElementById('wikEdSummarySelect'));
		wikEd.selectElement.summary.title = wikEd.config.text['wikEdSummarySelect title'];
	}

// adjust the select field widths to that of the text input fields
	wikEd.ResizeComboInput('find');
	wikEd.ResizeComboInput('replace');
	if (wikEd.summaryText != null) {
		wikEd.ResizeComboInput('summary');
	}

// hide the button bars per saved setting
	if (wikEd.buttonBarFormat != null) {
		wikEd.ButtonBarInit(wikEd.buttonBarFormat);
	}
	if (wikEd.buttonBarTextify != null) {
		wikEd.ButtonBarInit(wikEd.buttonBarTextify);
	}
	if (wikEd.buttonBarControl != null) {
		wikEd.ButtonBarInit(wikEd.buttonBarControl);
	}
	if (wikEd.buttonBarCustom1 != null) {
		wikEd.ButtonBarInit(wikEd.buttonBarCustom1);
	}
	if (wikEd.buttonBarFind != null) {
		wikEd.ButtonBarInit(wikEd.buttonBarFind);
	}
	if (wikEd.buttonBarFix != null) {
		wikEd.ButtonBarInit(wikEd.buttonBarFix);
	}
	if (wikEd.buttonBarCustom2 != null) {
		wikEd.ButtonBarInit(wikEd.buttonBarCustom2);
	}

// display only the textarea or the iframe, dont change the frame
	wikEd.SetEditArea(wikEd.useWikEd, true);

// copy page warnings above edit window
	if (wikEd.config.doCloneWarnings == true) {
		if ( (wikEd.clonedWarnings == false) && (wikEd.previewPage == false) && (/(.*\n){2}/.test(wikEd.origVersion) ) == true) {
			var divs = document.getElementsByTagName('div');
			var divWarnings = [];
			var editnoticeArea = false;
			for (var i = 0; i < divs.length; i ++) {
				var div = divs[i];
				if (/editnotice/.test(div.id) == true) {
					if (editnoticeArea == false) {
						divWarnings.push(div);
						editnoticeArea = true;;
					}
				}
				else if (/mw-.*?warning/.test(div.className) == true) {
					divWarnings.push(div);
				}
			}
			for (var i = 0; i < divWarnings.length; i ++) {
				var clone = divWarnings[i].cloneNode(true);
				wikEd.editForm.insertBefore(clone, wikEd.editForm.firstChild);
			}
			wikEd.clonedWarnings = true;
		}
	}

// add frame stylesheet definition
	wikEd.direction = wikEd.GetStyle(document.body, 'direction');
	wikEd.frameBody.style.direction = wikEd.direction;
	wikEd.ApplyCSS(wikEd.frameDocument, wikEd.config.frameCSS);
	wikEd.HighlightNamedHideButtonsStylesheet = new wikEd.StyleSheet(wikEd.frameDocument);

// copy textarea background
	if (wikEd.GetStyle(wikEd.textarea, 'display') != 'none') {
		wikEd.frameInner.style.backgroundColor = wikEd.GetStyle(wikEd.textarea, 'backgroundColor');
	}

// adjust font size (px)
	wikEd.textSizeInit = parseFloat(wikEd.GetStyle(wikEd.textarea, 'fontSize')) * wikEd.config.textSizeAdjust / 100;
	wikEd.textSize = wikEd.textSizeInit;
	wikEd.frameBody.style.fontSize = wikEd.textSize + 'px';

// copy the textarea content to the iframe
	if (wikEd.useWikEd == true) {
		wikEd.UpdateFrame();
	}

// initialize IERange DOM range compatibility library
	if (typeof(IERange) == 'function') {
		IERange(wikEd.frameWindow, wikEd.frameDocument);
	}

// scroll to edit window and focus if it is not a preview page
	if ( (scrollToEditFocus == true) && (wikEd.previewPage == false) ) {

// focus the input field
		if (wikEd.config.focusEdit == true) {
			if (wikEd.useWikEd == true) {
				wikEd.frameWindow.focus();
			}
			else {
				if (wikEd.msie == true) {
					wikEd.textarea.selection.empty();
				}
				else {
					wikEd.textarea.setSelectionRange(0, 0);
				}
				wikEd.textarea.focus();
			}
		}

// scroll
		if ( (wikEd.fullScreenMode == false) && (wikEd.config.scrollToEdit == true) ) {
			window.scroll(0, wikEd.GetOffsetTop(wikEd.editForm) - 2);
		}
	}

// register edit button click events
	for (var buttonId in wikEd.editButtonHandler) {
		if (wikEd.editButtonHandler.hasOwnProperty(buttonId) == true) {
			var buttonObj = document.getElementById(buttonId);
			if (buttonObj != null) {
				wikEd.AddEventListener(buttonObj, 'click', wikEd.EditButtonHandler, true);
			}
		}
	}

// register summary shrinking event after loading the 'Clear summary' image handler
	wikEd.AddEventListener(wikEd.clearSummaryImg, 'load', wikEd.ShrinkSummaryHandler, true);

// register summary resize event for window resizing (MS IE bug: fires once always)
	wikEd.AddEventListener(window, 'resize', wikEd.ResizeWindowHandler, true);

// register frame events
	wikEd.AddEventListener(wikEd.frameDocument, 'keydown', wikEd.KeyFrameHandler, true);
	wikEd.AddEventListener(wikEd.frameDocument, 'keyup', wikEd.KeyFrameHandler, true);
	wikEd.AddEventListener(wikEd.frameDocument, 'keypress', wikEd.KeyFrameHandler, true);
	wikEd.AddEventListener(wikEd.frameDocument, 'mouseup', wikEd.KeyFrameHandler, true);
	wikEd.AddEventListener(wikEd.frameDocument, 'keydown', wikEd.KeyHandler, true);
	wikEd.AddEventListener(wikEd.frameDocument, 'mousemove', wikEd.ResizeGripHandler, true);
	wikEd.AddEventListener(wikEd.frameDocument, 'dblclick', wikEd.ResizeFrameResetHandler, true);

// register document events
	wikEd.AddEventListener(document, 'keydown', wikEd.KeyHandler, true);

// dblclick on wrapper events
	wikEd.AddEventListener(wikEd.debugWrapper, 'dblclick', wikEd.DebugHandler, true);
	wikEd.AddEventListener(wikEd.localPrevWrapper, 'dblclick', wikEd.PrevWrapperHandler, true);

// register find ahead events
	wikEd.AddEventListener(wikEd.findText, 'keyup', wikEd.FindAhead, true);

// register submit button events
	wikEd.AddEventListener(wikEd.saveButton, 'click', wikEd.SaveButtonHandler, true);
	wikEd.AddEventListener(wikEd.previewButton, 'click', wikEd.PreviewButtonHandler, true);
	wikEd.AddEventListener(wikEd.diffPreviewButton, 'click', wikEd.DiffPreviewButtonHandler, true);

// unload (leaving page) events
	wikEd.AddEventListener(window, 'pagehide', wikEd.UnloadHandler, false);

// set button bar grip area events
	if (wikEd.buttonBarFormat != null) {
		wikEd.AddEventListener(wikEd.buttonBarFormat.firstChild.firstChild, 'click', wikEd.ButtonBarGripHandler, false);
	}
	if (wikEd.buttonBarTextify != null) {
		wikEd.AddEventListener(wikEd.buttonBarTextify.firstChild.firstChild, 'click', wikEd.ButtonBarGripHandler, false);
	}
	if (wikEd.buttonBarControl != null) {
		wikEd.AddEventListener(wikEd.buttonBarControl.firstChild.firstChild, 'click', wikEd.ButtonBarGripHandler, false);
	}
	if (wikEd.buttonBarCustom1 != null) {
		if (wikEd.buttonBarCustom1.firstChild.firstChild != null) {
			wikEd.AddEventListener(wikEd.buttonBarCustom1.firstChild.firstChild, 'click', wikEd.ButtonBarGripHandler, false);
		}
	}
	if (wikEd.buttonBarFind != null) {
		wikEd.AddEventListener(wikEd.buttonBarFind.firstChild.firstChild, 'click', wikEd.ButtonBarGripHandler, false);
	}
	if (wikEd.buttonBarFix != null) {
		wikEd.AddEventListener(wikEd.buttonBarFix.firstChild.firstChild, 'click', wikEd.ButtonBarGripHandler, false);
	}
	if (wikEd.buttonBarCustom2 != null) {
		if (wikEd.buttonBarCustom2.firstChild.firstChild != null) {
			wikEd.AddEventListener(wikEd.buttonBarCustom2.firstChild.firstChild, 'click', wikEd.ButtonBarGripHandler, false);
		}
	}

// register combo box events
	wikEd.AddEventListener(wikEd.summarySelect, 'change', function() { wikEd.ChangeComboInput('summary'); }, false);
	wikEd.AddEventListener(wikEd.summarySelect, 'focus', function() { wikEd.SetComboOptions('summary'); }, false);

	wikEd.AddEventListener(wikEd.selectElement.find, 'change', function() { wikEd.ChangeComboInput('find'); }, false);
	wikEd.AddEventListener(wikEd.selectElement.find, 'focus', function() { wikEd.SetComboOptions('find'); }, false);

	wikEd.AddEventListener(wikEd.selectElement.replace, 'change', function() { wikEd.ChangeComboInput('replace'); }, false);
	wikEd.AddEventListener(wikEd.selectElement.replace, 'focus', function() { wikEd.SetComboOptions('replace'); }, false);

// register the clear summary click handler
	wikEd.AddEventListener(wikEd.clearSummary, 'click', wikEd.ClearSummaryHandler, true);

// select the text on focus for find and replace fields
	wikEd.AddEventListener(wikEd.findText, 'focus', wikEd.FindReplaceHandler, true);
	wikEd.AddEventListener(wikEd.replaceText, 'focus', wikEd.FindReplaceHandler, true);

// tab / shift-tab between find and replace fields
	wikEd.AddEventListener(wikEd.findText, 'keydown', wikEd.FindReplaceHandler, true);
	wikEd.AddEventListener(wikEd.replaceText, 'keydown', wikEd.FindReplaceHandler, true);

// init MediaWiki file paths for use in regexps
	if (wikEd.wikiGlobals.wgServer != null) {
		wikEd.server = wikEd.wikiGlobals.wgServer;
	}
	if (wikEd.wikiGlobals.wgArticlePath != null) {
		wikEd.articlePath = wikEd.wikiGlobals.wgArticlePath;
	}
	if (wikEd.wikiGlobals.wgScriptPath != null) {
		wikEd.scriptPath = wikEd.wikiGlobals.wgScriptPath;
	}
	if (wikEd.wikiGlobals.wgScript != null) {
		wikEd.script = wikEd.wikiGlobals.wgScript;
	}

	wikEd.articlePath = wikEd.articlePath.replace(wikEd.server, '');
	wikEd.scriptPath = wikEd.scriptPath.replace(wikEd.server, '');
	wikEd.articlePath = wikEd.articlePath.replace(/\$1$/, '');
	wikEd.scriptPath = wikEd.scriptPath.replace(/\/?$/, '/');
	wikEd.scriptName = wikEd.script.replace(wikEd.scriptPath, '');
	wikEd.scriptURL = wikEd.server + wikEd.scriptPath;

// prepare for use in regexps
	wikEd.server = wikEd.server.replace(/(\W)/g, '\\$1');
	wikEd.articlePath = wikEd.articlePath.replace(/(\W)/g, '\\$1');
	wikEd.script = wikEd.script.replace(/(\W)/g, '\\$1');
	wikEd.scriptPath = wikEd.scriptPath.replace(/(\W)/g, '\\$1');
	wikEd.scriptName = wikEd.scriptName.replace(/(\W)/g, '\\$1');

// check if dynamically inserted addon tags have to be removed: Web of Trust (WOT)
	if (document.getElementById('wot-logo') != null) {
		wikEd.cleanNodes = true;
	}

// fullscreen mode
	if (wikEd.fullScreenMode == true) {
		wikEd.FullScreen(wikEd.fullScreenMode, true);
	}

// override the insertTags function in wikibits.js used by the standard button toolbar and the editpage special chars
	if (typeof(insertTags) == 'function') {
		if (wikEd.InsertTagsOriginal == null) {
			wikEd.InsertTagsOriginal = insertTags;
		}
		insertTags = wikEd.InsertTags;
	}
	else {
		window.insertTags = wikEd.InsertTags;
	}

// hook wikEd into the enhanced new edit toolbar, not Greasemonkey compatible
	if (typeof(jQuery) == 'function') {
		jQuery('#wpTextbox1').bind('encapsulateSelection', function(e, before, inside, after) {
			if (wikEd.useWikEd == true) {
				wikEd.InsertTags(before, after, inside);
			}
		});
	}

// update textarea before using UI LivePreview function, not Greasemonkey compatible
	if ( (typeof(jQuery) == 'function') && (typeof(mw) == 'object') ) {
		jQuery(mw).bind('LivePreviewPrepare', function(event) {
			if (wikEd.useWikEd == true) {
				wikEd.UpdateTextarea();
			}
		});
	}

// override insertAtCursor function in wikia.com MediaWiki:Functions.js, not Greasemonkey compatible
	if (typeof(insertAtCursor) == 'function') {
		if (wikEd.InsertAtCursorOriginal == null) {
			wikEd.InsertAtCursorOriginal = insertAtCursor;
		}
		insertAtCursor = wikEd.InsertAtCursor;
	}

// reset error indicator
	wikEd.SetLogo();
	wikEd.turnedOn = true;

// get frame resize grip image dimensions
	var resizeGripImage = document.createElement('img');
	resizeGripImage.id = 'wikEdResizeGrip';
	wikEd.AddEventListener(resizeGripImage, 'load', wikEd.ResizeGripLoadHandler, true);
	resizeGripImage.src = wikEd.config.image['resizeGrip'];

// remove accesskeys that are defined in wikEd from page elements
	wikEd.deleteAccesskeys();

// run scheduled custom functions
	wikEd.ExecuteHook(wikEd.config.setupHook);

// load and parse RegExTypoFix rules if the button is enabled
	wikEd.LoadTypoFixRules();

// done with setup and turn-on
	return;
};


//
// wikEd.deleteAccesskeys: remove accesskeys that are defined in wikEd from page elements
//

wikEd.deleteAccesskeys = function() {

	var accesskeyTags = ['textarea', 'input', 'a'];
	for (var i = 0; i < accesskeyTags.length; i ++) {
		var accesskeyElements = document.getElementsByTagName(accesskeyTags[i]);
		for (var j = 0; j < accesskeyElements.length; j ++) {
			var attribute = wikEd.GetAttribute(accesskeyElements[j], 'accesskey');
			if (attribute != null) {
				if (wikEd.buttonKeyCode[ attribute.toUpperCase().charCodeAt(0) ] != null) {
					accesskeyElements[j].setAttribute('accesskey', null);
				}
			}
		}
	}
	return;
};


//
// wikEd.AutoUpdate: check for the latest version and force-reload to update
//

wikEd.AutoUpdate = function() {

// check only on non-interaction pages
	if (/(\?|&)action=/.test(window.location.search) == true) {
		return;
	}

// check if autoupdate is enabled
	if (wikEd.config.autoUpdate != true) {
		return;
	}

// check for forced update check
	var forcedUpdate = false;
	if (wikEd.config.forcedUpdate != '') {

// get version numbers from strings
		var currentVersion = wikEd.VersionToNumber(wikEd.programVersion);
		var forcedVersion = wikEd.VersionToNumber(wikEd.config.forcedUpdate);

// schedule forced update check
		if ( (currentVersion != null) && (forcedVersion != null) ) {
			if (forcedVersion > currentVersion) {
				forcedUpdate = true;
			}
		}
	}

// check for regular update
	var regularUpdate = false;
	var currentDate = new Date();
	if (forcedUpdate == false) {

// get date of last update check
		var lastCheckStr = wikEd.GetPersistent('wikEdAutoUpdate');
		var lastCheckDate = new Date(lastCheckStr);

// fix missing or corrupt saved setting
		if (isNaN(lastCheckDate.valueOf()) == true) {
			wikEd.SetPersistent('wikEdAutoUpdate', 'January 1, 1970', 0, '/');
			return;
		}

// get the hours since last update check
		var diffHours = (currentDate - lastCheckDate) / 1000 / 60 / 60;
		if (wikEd.greasemonkey == true) {
			if (diffHours > wikEd.config.autoUpdateHoursGM) {
				regularUpdate = true;
			}
		}
		else if (diffHours > wikEd.config.autoUpdateHours) {
			regularUpdate = true;
		}
	}

// perform AJAX request to get latest version number
	if ( (forcedUpdate == true) || (regularUpdate == true) ) {

// save current update check date
		wikEd.SetPersistent('wikEdAutoUpdate', currentDate.toUTCString(), 0, '/');

// make the ajax request
	wikEd.AjaxRequest('GET', wikEd.config.autoUpdateUrl, null, 'text/plain', function(ajax, obj) {

// get response
			var html = ajax.responseText;

// get version numbers from strings
			var currentVersion = wikEd.VersionToNumber(wikEd.programVersion);
			var newVersion = wikEd.VersionToNumber(html);

// check if downloaded version is newer and perform update
			if ( (currentVersion != null) && (newVersion != null) ) {
				if (newVersion > currentVersion) {
					wikEd.DoUpdate();
				}
			}
		});
	}
	return;
};


//
// wikEd.VersionToNumber: parse version string (1.22.333a) into number 122333097
//

wikEd.VersionToNumber = function(versionStr) {

	var ver = versionStr.match(/(\d+)\.(\d+)\.(\d+)(\w?)/);
	if (ver == null) {
		return;
	}
	var versionNumber = Number(ver[1]) * 100000000 + Number(ver[2]) * 1000000 + Number(ver[3]) * 1000 + (ver[4] + '0').charCodeAt(0);

	return(versionNumber);
};


//
// wikEd.DoUpdate: actually perform update
//

wikEd.DoUpdate = function() {

// update Greasemonkey script by navigating to the script code page
	if (wikEd.greasemonkey == true) {
		var updatePopup = wikEd.config.text.wikEdGreasemonkeyAutoUpdate;
		updatePopup = updatePopup.replace(/\{updateURL\}/g, wikEd.config.autoUpdateUrl);
		alert(updatePopup);
		window.location.href = wikEd.config.autoUpdateScriptUrl;
	}

// update wikEd by reloading the page with cache bypassing (equivalent to Shift-Reload or Shift-F5)
	else {
		window.location.reload(true);
	}
	return;
};


//
// wikEd.LoadTypoFixRules: load and parse RegExTypoFix rules if the button is enabled
//

wikEd.LoadTypoFixRules = function() {

// load RegExTypoFix rules per Ajax if enabled
	if ( (wikEd.config.regExTypoFix == false) || (wikEd.readOnly == true) || (wikEd.typoRulesFind.length > 0) ) {
		return;
	}

// make the ajax request
		var sep = '&';
		if (wikEd.config.regExTypoFixURL.indexOf('?') == -1) {
			sep = '?';
		}
		wikEd.AjaxRequest('GET', wikEd.config.regExTypoFixURL + sep + wikEd.programVersion, null, 'text/plain', function(ajax) {

// get response
		var rulesTxt = ajax.responseText;

// parse regexp rules
		var regExp = /^<Typo +word="(.+?)" +find="(.+?)" +replace="(.+?)" +\/>/gim;
		while ( (regExpMatch = regExp.exec(rulesTxt)) != null) {

// check if this is a valid regexp
			var regExpFind;
			try {
				regExpFind = new RegExp(regExpMatch[2], 'gm');
			}
			catch (err) {
				continue;
			}

// save regexp and replace
			wikEd.typoRulesFind.push(regExpFind);
			wikEd.typoRulesReplace.push(regExpMatch[3]);
		}

// display typo fix button
		if (wikEd.typoRulesFind.length > 0) {
			if (wikEd.fixRegExTypo != null) {
				wikEd.fixRegExTypo.style.display = 'inline';
			}
		}
		return;
	});
	return;
};


//
// wikEd.EditButtonHandler: handler for clicks on edit buttons
//

wikEd.EditButtonHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

// execute the button click handler code
	var obj;
	if (event.currentTarget != null) {
		obj = event.currentTarget;
	}

// MS IE compatibility
	else {
		obj = event.srcElement;
	}

// workaround for mozilla 3.0 bug 441087
	objId = obj.id;
	eventShiftKey = event.shiftKey;
	eval(wikEd.editButtonHandler[objId]);
	return;
};


//
// wikEd.ShrinkSummaryHandler: shrink the summary after loading the 'Clear summary' image
//

wikEd.ShrinkSummaryHandler = function(event) {

	var diffWidth = wikEd.clearSummary.offsetWidth - wikEd.clearSummaryWidth;

// Firefox < 3.0
	if ( typeof(wikEd.inputElement.summary.clientLeft) == 'undefined' ) {
		wikEd.inputElement.summary.style.width = (wikEd.inputElement.summary.clientWidth - diffWidth) + 'px';
		wikEd.selectElement.summary.style.width = (wikEd.selectElement.summary.clientWidth - diffWidth) + 'px';
	}

// Firefox >= 3.0
	else {
		wikEd.inputElement.summary.style.width = (wikEd.inputElement.summary.clientWidth - diffWidth) + 'px';
		wikEd.selectElement.summary.style.width = (wikEd.selectElement.summary.clientWidth - diffWidth + 3) + 'px';
	}
	wikEd.clearSummaryWidth = wikEd.clearSummary.offsetWidth;
	return;
};


//
// wikEd.ResizeWindowHandler: adjust the summary width after resizing the window
//

wikEd.ResizeWindowHandler = function(event) {

// adjust frame size
	wikEd.frameHeight = (wikEd.textareaOffsetHeightInitial - wikEd.frameBorderHeight) + 'px';
	wikEd.frameWidth = (wikEd.editorWrapper.clientWidth - wikEd.frameBorderWidth) + 'px';
	wikEd.frame.style.height = wikEd.frameHeight;
	wikEd.frame.style.width = wikEd.frameWidth;

	wikEd.ResizeSummary();
	return;
};


//
// wikEd.UnloadHandler: save editing frame to cached textarea
//

wikEd.UnloadHandler = function(event) {

// update textarea if not already done in submit handlers
	if (wikEd.useWikEd == true) {
		if (wikEd.textareaUpdated != true) {
			wikEd.UpdateTextarea();
		}
	}
	return;
};


//
// wikEd.SaveButtonHandler: 'Save page' onsubmit click handler for submit button
//

wikEd.SaveButtonHandler = function(event) {

	wikEd.RemoveEventListener(wikEd.saveButton, 'click', wikEd.SaveButtonHandler, true);

// update textarea
	if (wikEd.useWikEd == true) {
		wikEd.UpdateTextarea();
		wikEd.textareaUpdated = true;
	}

// check for interfering scripts or gadgets: mwEmbed for file uploads
	if ( (wikEd.uploadEdit == true) && (typeof(MW_EMBED_VERSION) != 'undefined') ) {
		wikEd.AddEventListener(wikEd.saveButton, 'click', wikEd.SaveButtonHandler, true);
		return;
	}

// add "using wikEd" to summary, not for adding a new section (+ tab)
	if (wikEd.summaryText != null) {
		var text = wikEd.summaryText.value;
		text = text.replace(/^[, ]+/, '');
		text = text.replace(/[, ]+$/, '');
		wikEd.AddToHistory('summary');

		if ( (wikEd.using == true) && (text != '') ) {
			if (text.lastIndexOf(wikEd.config.summaryUsing) < 0) {
				if (wikEd.addNewSection != true) {
					text += ' ' + wikEd.config.summaryUsing;
				}
			}
		}
		wikEd.summaryText.value = text;
	}

// submit
	wikEd.saveButton.click();

// reinstate handler in case the browser back button will be used
	wikEd.AddEventListener(wikEd.saveButton, 'click', wikEd.SaveButtonHandler, true);

	return;
};


//
// wikEd.PreviewButtonHandler: 'Show preview' click handler
//

wikEd.PreviewButtonHandler = function(event) {

	if (wikEd.useWikEd == true) {
		wikEd.UpdateTextarea();
		wikEd.textareaUpdated = true;
	}
	return;
};


//
// wikEd.DiffPreviewButtonHandler: 'Show changes' click handler
//

wikEd.DiffPreviewButtonHandler = function(event) {

	if (wikEd.fullScreenMode == true) {
		wikEd.FullScreen(false);
	}
	if (wikEd.useWikEd == true) {
		wikEd.UpdateTextarea();
		wikEd.textareaUpdated = true;
	}

	return;
};


//
// wikEd.LinkifyHandler: open innermost highlighted link in new window/tab on ctrl/meta-click
//

wikEd.LinkifyHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if ( (event.shiftKey == false) && ( (event.ctrlKey == true) || (event.metaKey == true) ) && (event.altKey == false) ) {
		var node = event.target;
		while (node != null) {
			var linkId = node.id;
			if (linkId != null) {
				if (linkId.indexOf('wikEdLinkify') == 0) {
					var linkIdNo = linkId.replace(/\D/g, '');
					var linkUrl = wikEd.linkifyArray[linkIdNo];
					if (linkUrl != null) {
						event.stopPropagation();
						window.open(linkUrl);
						window.focus();
						break;
					}
				}
			}
			node = node.parentNode;
		}
	}
	return;
};


//
// wikEd.ButtonBarGripHandler: click, mouseover handler, see also wikEd.ButtonBarInit()
//

wikEd.ButtonBarGripHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	event.stopPropagation();

	var grip = event.target;
	var gripWrapper = grip.parentNode;
	var buttonsWrapper = gripWrapper.nextSibling;
	var barInnerWrapper = gripWrapper.parentNode;
	var bar = barInnerWrapper.parentNode;
	if (event.type == 'click') {
		buttonsWrapper.style.position = 'static';

// hide the buttons bar
		if (buttonsWrapper.className != 'wikEdButtonBarButtonsWrapperHidden') {
			buttonsWrapper.className = 'wikEdButtonBarButtonsWrapperHidden';
			barInnerWrapper.className = 'wikEdButtonBarInnerWrapperHidden';
			gripWrapper.className = 'wikEdButtonBarGripWrapperHidden';
			wikEd.buttonsWrapperWidth[bar.id] = buttonsWrapper.offsetWidth;
			buttonsWrapper.style.display = 'none';
			wikEd.AddEventListener(grip, 'mouseover', wikEd.ButtonBarGripHandler, false);
			wikEd.SetPersistent(bar.id + 'Hidden', '1', 0, '/');
		}

// unhide the buttons bar
		else {
			buttonsWrapper.className = 'wikEdButtonBarButtonsWrapperVisible';
			barInnerWrapper.className = 'wikEdButtonBarInnerWrapperVisible';
			gripWrapper.className = 'wikEdButtonBarGripWrapperVisible';
			buttonsWrapper.style.display = 'block';
			wikEd.RemoveEventListener(grip, 'mouseover', wikEd.ButtonBarGripHandler, false);
			wikEd.SetPersistent(bar.id + 'Hidden', '0', 0, '/');
		}
	}

// show the buttons bar on mouseover
	else if (event.type == 'mouseover') {
		if (buttonsWrapper.className == 'wikEdButtonBarButtonsWrapperHidden') {
			wikEd.AddEventListener(bar, 'mouseout', wikEd.ButtonBarHandler, false);

// show buttons to the right
			if (bar.offsetParent.clientWidth > grip.offsetLeft + grip.offsetWidth + wikEd.buttonsWrapperWidth[bar.id]) {
				buttonsWrapper.style.left = (grip.offsetLeft + grip.offsetWidth) + 'px';
			}

// show buttons to the left
			else {
				buttonsWrapper.style.left = (gripWrapper.offsetLeft - wikEd.buttonsWrapperWidth[bar.id]) + 'px';
			}

// a mozilla bug sometimes gives offsetTop - 1 when the wikEd.toolbarWrapper is hidden
			buttonsWrapper.style.top = gripWrapper.offsetTop + 'px';
			buttonsWrapper.style.position = 'absolute';
			buttonsWrapper.style.display = 'block';
		}
	}
	return;
};


//
// wikEd.ButtonBarHandler: mouseout handler
//

wikEd.ButtonBarHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	event.stopPropagation();

	var bar = event.currentTarget;

	var barInnerWrapper = bar.firstChild;
	var gripWrapper = barInnerWrapper.firstChild;
	var grip = gripWrapper.firstChild;
	var buttonsWrapper = gripWrapper.nextSibling;
	var buttons = buttonsWrapper.firstChild;

// hide the buttons
	if (event.type == 'mouseout') {
		if (buttonsWrapper.className == 'wikEdButtonBarButtonsWrapperHidden') {

// filter the events for mouseouts actually leaving the bar
			if (
				(
					( (event.target == grip) || (event.target == gripWrapper) ) &&
					(event.safeRelatedTarget != gripWrapper) && (event.safeRelatedTarget != buttonsWrapper) && (event.safeRelatedTarget != buttons) && (event.safeRelatedTarget.parentNode != buttons)
				) ||
				(
					( (event.target.parentNode.parentNode == buttons) || (event.target.parentNode == buttons) || (event.target == buttons) || (event.target == buttonsWrapper) ) &&
					(event.safeRelatedTarget.parentNode.parentNode != buttons) && (event.safeRelatedTarget.parentNode != buttons) && (event.safeRelatedTarget != buttons) && (event.safeRelatedTarget != buttonsWrapper) && (event.safeRelatedTarget != gripWrapper) && (event.safeRelatedTarget != grip)
				)
			) {
				wikEd.RemoveEventListener(bar, 'mouseout', wikEd.ButtonBarHandler, false);
				buttonsWrapper.style.display = 'none';
				buttonsWrapper.style.position = 'static';
			}
		}
	}
	return;
};


//
// clear the summary click handler
//

wikEd.ClearSummaryHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	event.preventDefault();

// clear the summary if it is only a paragraph name
	if ( /^\/\* .*? \*\/ *$/.test(wikEd.summaryText.value) == true) {
		wikEd.summaryText.value = '';
	}

// clear the summary but leave paragraph names
	else {
		wikEd.summaryText.value = wikEd.summaryText.value.replace(/^((\/\* .*? \*\/ *)?).*()/,
			function (p, p1, p2) {
				if (p1.length > 0) {
					p1 = p1 + ' ';
				}
				return(p1);
			}
		);
	}
	wikEd.summaryText.focus();
	return;
};


//
// wikEd.FindReplaceHandler: find and replace: tab and shift-tab between fields, select on focus
//

wikEd.FindReplaceHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

// tab / shift-tab between fields
	if (event.type == 'keydown') {
		if (event.keyCode == 9) {
			if (event.target == wikEd.findText) {
				event.preventDefault();
				wikEd.RemoveEventListener(wikEd.replaceText, 'focus', wikEd.FindReplaceHandler, true);
				wikEd.replaceText.focus();
				wikEd.AddEventListener(wikEd.replaceText, 'focus', wikEd.FindReplaceHandler, true);
			}
			else if (event.target == wikEd.replaceText) {
				event.preventDefault();
				wikEd.RemoveEventListener(wikEd.findText, 'focus', wikEd.FindReplaceHandler, true);
				wikEd.findText.focus();
				wikEd.AddEventListener(wikEd.findText, 'focus', wikEd.FindReplaceHandler, true);
			}
		}
	}

// select on focus
	else if (event.type == 'focus') {
		if (wikEd.msie == true) {

		}
		else {
			event.target.setSelectionRange(0, this.textLength);
		}
	}
	return;
};


//
// wikEd.KeyFrameHandler: event handler for key and mouse events in the frame
//

wikEd.KeyFrameHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (wikEd.useWikEd == true) {
		switch (event.type) {

// keydown event
			case 'keydown':
				switch (event.keyCode) {

// tab key, switch between form elements instead of adding multiple spaces
					case 9:
						if ( (event.shiftKey == false) && (event.ctrlKey == false) && (event.altKey == false) && (event.metaKey == false) ) {
							event.preventDefault();

// focus the next form element
							if (wikEd.addNewSection == true) {
								document.getElementById('wpMinoredit').focus();
							}
							else {
								wikEd.summaryText.focus();
							}

// scroll to text input top
							if (wikEd.fullScreenMode == false) {
								window.scroll(0, wikEd.GetOffsetTop(wikEd.inputWrapper));
							}
						}
						break;
				}
				break;

// after cursor movements set cursor position into closest highest text node so that highlighting does not bleed out
			case 'keyup':
				switch (event.keyCode) {
					case 17: // ctrl-v
					case 37: // left
					case 38: // up
					case 39: // right
					case 40: // down
					case 33: // page up
					case 34: // page down
					case 46: // del
					case  8: // backspace
						wikEd.AntiHighlightBleeding(new Object());
				}
				break;

// grey out inactive buttons
			case 'mouseup':
				wikEd.AntiHighlightBleeding(new Object());
			case 'keypress':
				wikEd.InactiveButtons();
		}
	}
	return;
};


//
// set cursor position into closest highest text node so that highlighting does not bleed out
//   does not work under Google Chrome which forces the cursor into the previous node
//

wikEd.AntiHighlightBleeding = function(obj, editButtonInsert) {

// check if disabled
	if (wikEd.config.antiHighlightBleeding != true) {
		return;
	}

// get selection object
	if (obj.sel == null) {
		obj.sel = wikEd.GetSelection();
	}

// only if no text is selected
	var range = obj.sel.getRangeAt(obj.sel.rangeCount - 1);
	if ( (obj.sel.isCollapsed != true) || (range.collapsed != true) ) {
		return;
	}

// correct focusNode to actual (deepest) node
	var	focusNode = obj.sel.focusNode;
	var focusOffset = obj.sel.focusOffset;
	if (focusNode == null) {
		return;
	}

// set focus into deepest node
	if (focusNode.childNodes != null) {
		if ( (focusNode.childNodes.length > 0) && (focusOffset < focusNode.childNodes.length) ) {
			focusNode = focusNode.childNodes.item(focusOffset);
			focusOffset = 0;
			if (focusNode.tagName != 'BR') {
				range.setStart(focusNode, focusOffset);
				range.setEnd(focusNode, focusOffset);
			}
		}
	}

// do not further correct if focus is linebreak if key but not if edit button
	if ( (focusNode.tagName == 'BR') && (editButtonInsert != true) ) {
		return;
	}

// get next text-like node to the left if we are not in the middle of a text node
	var leftNode = focusNode;
	var leftLevel = 0;
	var objLeft = {
		'backwards': true
	};
	if ( (focusNode.nodeName != '#text') || (focusOffset == 0) ) {
		wikEd.GetNextTextNode(objLeft, focusNode, 0);
	}
	if (objLeft.foundNode != null) {
		leftNode = objLeft.foundNode;
		leftLevel = objLeft.foundLevel;
	}

// get next text-like node to the right if we are not in the middle of a text node
	var objRight = {
		'backwards': false
	};
	var rightNode = focusNode;
	var rightLevel = 0;
	if ( (focusNode.nodeName != '#text') || (focusOffset == focusNode.textContent.length) ) {
		wikEd.GetNextTextNode(objRight, focusNode, 0);
	}
	if (objRight.foundNode != null) {
		rightNode = objRight.foundNode;
		rightLevel = objRight.foundLevel;
	}

// check if we need to correct the focus node to higher level text-like node
	var correctTo = '';
	if (leftNode != rightNode) {
		if ( (focusNode.tagName == 'BR') && (editButtonInsert == true) ) {
			correctTo = 'left';
		}
		else if ( (leftLevel > rightLevel) && (leftNode != focusNode) )  {
			correctTo = 'left';
		}
		else if ( (leftLevel < rightLevel) && (rightNode != focusNode) ) {
			correctTo = 'right';
		}

// same level, set focus outside tag markups (class names contains 'Tag'): [ [[ | || <
		else if (leftLevel == rightLevel) {

// get class names
			var leftClass = '';
			if (leftNode.nodeName == '#text') {
				leftClass = leftNode.parentNode.className;
			}
			else {
				leftClass = leftNode.className;
			}

			var rightClass = '';
			if (rightNode.nodeName == '#text') {
				rightClass = rightNode.parentNode.className;
			}
			else {
				rightClass = rightNode.className;
			}

			if ( (/wikEd.*?Tag/.test(leftClass) != true) && (/wikEd.*?Tag/.test(rightClass) == true) && (leftNode != focusNode) ) {
				correctTo = 'left';
			}
			else if ( (/wikEd.*?Tag/.test(leftClass) == true) && (/wikEd.*?Tag/.test(rightClass) != true) && (rightNode != focusNode) ) {
				correctTo = 'right';
			}
		}
	}

// set focus to the next left node
	if (correctTo == 'left') {
		var node;

// insert new text node after linebreak and focus
		if (leftNode.tagName == 'BR') {
			node = wikEd.frameDocument.createTextNode('');
			leftNode.parentNode.insertBefore(node, leftNode.nextSibling);
			range.setStart(node, 0);
			range.setEnd(node, 0);
		}
		else {
			node = leftNode;
			if (node.nodeName == '#text') {
				range.setStart(node, node.textContent.length);
				range.setEnd(node, node.textContent.length);
			}
			else {
				range.setStartAfter(node);
				range.setEndAfter(node);
			}
		}
	}

// set focus to the next right node
	else if (correctTo == 'right') {
		var node;

// insert new text node before linebreak
		if (rightNode.tagName == 'BR') {
			var node = wikEd.frameDocument.createTextNode('');
			rightNode.parentNode.insertBefore(node, rightNode);
			range.setStart(node, 0);
			range.setEnd(node, 0);
		}
		else {
			node = rightNode;
			if (node.nodeName == '#text') {
				range.setStart(node, 0);
				range.setEnd(node, 0);
			}
			else {
				range.setStartBefore(node);
				range.setEndBefore(node);
			}
		}
	}

	return;
};


//
// wikEd.ResizeGripLoadHandler: event handler to determine grip background image size
//

wikEd.ResizeGripLoadHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	wikEd.resizeGripWidth = event.currentTarget.width;
	wikEd.resizeGripHeight = event.currentTarget.height;
	return;
};


//
// wikEd.ResizeGripHandler: event handler for mouse over resize grip background image
//

wikEd.ResizeGripHandler = function(event) {

// prevent console errors about undefined functions and variables (Firefox bug)
	if (typeof(wikEd) == 'undefined') {
		return;
	}

// Firefox bug during startup ("WikEdEvent is not defined")
	if (typeof(wikEd.EventWrapper) != 'function' ) {
		return;
	}

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (wikEd.useWikEd == true) {
		if (event.type == 'mousemove') {
			if ( (event.shiftKey == false) && (event.ctrlKey == false) && (event.altKey == false) && (event.metaKey == false) ) {

// move into grip
				if (wikEd.resizeFrameMouseOverGrip == false) {
					if (event.clientY >= wikEd.frameBody.clientHeight - wikEd.resizeGripHeight) {
						if (event.clientX >= wikEd.frameBody.clientWidth - wikEd.resizeGripWidth) {
							if ( (event.clientY < wikEd.frameBody.clientHeight) && (event.clientX < wikEd.frameBody.clientWidth) ) {
								wikEd.resizeFrameMouseOverGrip = true;
								if (wikEd.fullScreenMode == true) {
									wikEd.frameBody.style.cursor = 'alias';
								}
								else {
									wikEd.AddEventListener(wikEd.frameDocument, 'mousedown', wikEd.ResizeStartHandler, true);
									wikEd.frameBody.style.cursor = 'move';
								}
							}
						}
					}
				}

// move out of grip
				else if (wikEd.resizeFrameActive == false) {
					if (
						(event.clientY < wikEd.frameBody.clientHeight - wikEd.resizeGripHeight) ||
						(event.clientX < wikEd.frameBody.clientWidth - wikEd.resizeGripWidth)
					) {
						wikEd.resizeFrameMouseOverGrip = false;
						wikEd.RemoveEventListener(wikEd.frameDocument, 'mousedown', wikEd.ResizeStartHandler, true);
						wikEd.frameBody.style.cursor = 'auto';
					}
				}
			}
		}
	}
	return;
};


//
// wikEd.ResizeStartHandler: event handler to start the resizing of the editing frame
//

wikEd.ResizeStartHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (wikEd.useWikEd == true) {
		if ( (event.type == 'mousedown') && (event.button == 0) ) {
			if ( (event.shiftKey == false) && (event.ctrlKey == false) && (event.altKey == false) && (event.metaKey == false) ) {
				if (event.clientY >= wikEd.frameBody.clientHeight - wikEd.resizeGripHeight) {
					if (event.clientX >= wikEd.frameBody.clientWidth - wikEd.resizeGripWidth) {
						if ( (event.clientY < wikEd.frameBody.clientHeight) && (event.clientX < wikEd.frameBody.clientWidth) ) {
							event.preventDefault();
							wikEd.resizeFrameActive = true;

							wikEd.resizeFramePageYStart = event.pageY;
							wikEd.resizeFramePageXStart = event.pageX;

							wikEd.resizeFrameOffsetHeight = wikEd.frame.offsetHeight;
							wikEd.resizeFrameOffsetWidth = wikEd.frame.offsetWidth;
							wikEd.AddEventListener(wikEd.frameDocument, 'mouseup', wikEd.ResizeStopHandler, true);
							wikEd.AddEventListener(document, 'mouseup', wikEd.ResizeStopHandler, true);
							wikEd.AddEventListener(wikEd.frameDocument, 'mousemove', wikEd.ResizeDragHandlerFrame, true);
							wikEd.AddEventListener(document, 'mousemove', wikEd.ResizeDragHandlerDocument, true);
						}
					}
				}
			}
		}
	}
	return;
};


//
// wikEd.ResizeStopHandler: event handler to stop the resizing of the editing frame
//

wikEd.ResizeStopHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (wikEd.useWikEd == true) {
		if (event.type == 'mouseup') {
			wikEd.RemoveEventListener(wikEd.frameDocument, 'mouseup', wikEd.ResizeStopHandler, true);
			wikEd.RemoveEventListener(document, 'mouseup', wikEd.ResizeStopHandler, true);
			wikEd.RemoveEventListener(wikEd.frameDocument, 'mousemove', wikEd.ResizeDragHandlerFrame, true);
			wikEd.RemoveEventListener(document, 'mousemove', wikEd.ResizeDragHandlerDocument, true);

			if (
				(event.clientY < wikEd.frameBody.clientHeight - wikEd.resizeGripHeight) ||
				(event.clientX < wikEd.frameBody.clientWidth - wikEd.resizeGripWidth)
			) {
				wikEd.resizeFrameMouseOverGrip = false;
				wikEd.RemoveEventListener(wikEd.frameDocument, 'mousedown', wikEd.ResizeStartHandler, true);
				wikEd.frameBody.style.cursor = 'auto';
			}
		}
		wikEd.resizeFrameActive = false;
	}
	return;
};


//
// wikEd.ResizeDragHandlerFrame: event handler for editing frame resizing by mouse dragging (frame event)
//

wikEd.ResizeDragHandlerFrame = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (event.type == 'mousemove') {
		var diffY = event.pageY - wikEd.resizeFramePageYStart;
		var diffX = event.pageX - wikEd.resizeFramePageXStart;

		var frameHeightNew = wikEd.resizeFrameOffsetHeight + diffY;
		var frameWidthNew = wikEd.resizeFrameOffsetWidth + diffX;

		if (frameHeightNew >=  100) {
			wikEd.frameHeight = frameHeightNew + 'px';
			wikEd.frame.style.height = wikEd.frameHeight;
		}
		if (frameWidthNew >=  100) {
			wikEd.frameWidth = frameWidthNew + 'px';
			wikEd.frame.style.width = wikEd.frameWidth;
		}
	}
	return;
};


//
// wikEd.ResizeDragHandlerDocument: event handler for editing frame resizing by mouse dragging (document event)
//

wikEd.ResizeDragHandlerDocument = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (event.type == 'mousemove') {
		var diffY = event.pageY - wikEd.resizeFramePageYStart - wikEd.GetOffsetTop(wikEd.frame);
		var diffX = event.pageX - wikEd.resizeFramePageXStart - wikEd.GetOffsetLeft(wikEd.frame);

		var frameHeightNew = wikEd.resizeFrameOffsetHeight + diffY;
		var frameWidthNew = wikEd.resizeFrameOffsetWidth + diffX;

		if (frameHeightNew >=  100) {
			wikEd.frameHeight = frameHeightNew + 'px';
			wikEd.frame.style.height = wikEd.frameHeight;
		}
		if (frameWidthNew >=  100) {
			wikEd.frameWidth = frameWidthNew + 'px';
			wikEd.frame.style.width = wikEd.frameWidth;
		}
	}
	return;
};


//
// wikEd.ResizeFrameResetHandler: event handler to reset the editing frame size
//

wikEd.ResizeFrameResetHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (wikEd.useWikEd == true) {
		if (event.type == 'dblclick') {
			if ( (event.shiftKey == false) && (event.ctrlKey == false) && (event.altKey == false) && (event.metaKey == false) ) {
				if (event.clientY > wikEd.frameBody.clientHeight - wikEd.resizeGripHeight) {
					if (event.clientX > wikEd.frameBody.clientWidth - wikEd.resizeGripWidth) {
						if ( (event.clientY < wikEd.frameBody.clientHeight) && (event.clientX < wikEd.frameBody.clientWidth) ) {

// end fullscreen mode
							if (wikEd.fullScreenMode == true) {
								wikEd.FullScreen(false);
							}

// reset size to default
							wikEd.frameHeight = (wikEd.textareaOffsetHeightInitial - wikEd.frameBorderHeight) + 'px';
							wikEd.frameWidth = (wikEd.editorWrapper.clientWidth - wikEd.frameBorderWidth) + 'px';
							wikEd.frame.style.height = wikEd.frameHeight;
							wikEd.frame.style.width = wikEd.frameWidth;

// end resizing
							wikEd.RemoveEventListener(wikEd.frameDocument, 'mouseup', wikEd.ResizeStopHandler, true);
							wikEd.RemoveEventListener(document, 'mouseup', wikEd.ResizeStopHandler, true);
							wikEd.RemoveEventListener(wikEd.frameDocument, 'mousemove', wikEd.ResizeDragHandlerFrame, true);
							wikEd.RemoveEventListener(document, 'mousemove', wikEd.ResizeDragHandlerDocument, true);
							wikEd.resizeFrameMouseOverGrip = false;
							wikEd.RemoveEventListener(wikEd.frameDocument, 'mousedown', wikEd.ResizeStartHandler, true);
							wikEd.frameBody.style.cursor = 'auto';
							wikEd.resizeFrameActive = false;
						}
					}
				}
			}
		}
	}
	return;
};


//
// wikEd.DebugHandler: event handler to clear or hide the debug textarea on (shift/ctrl/alt) double click
//

wikEd.DebugHandler = function(event) {

	if ( (event.shiftKey == true) || (event.ctrlKey == true) || (event.altKey == true) || (event.metaKey == true) ) {
		wikEd.debugWrapper.style.visibility = 'hidden';
		wikEd.debug.style.display = 'none';
		wikEd.debugOpen = false;
	}
	else {
		wikEd.debug.value = '';
	}
	return;
};


//
// wikEd.PrevWrapperHandler: event handler to close preview / diff box on double click
//

wikEd.PrevWrapperHandler = function(event) {

	wikEd.localPrevWrapper.style.display = 'none';
	return;
};


//
// wikEd.SetLogo: set the logo on top of the page
//

wikEd.SetLogo = function(state, parameter) {

	if (state == 'error') {
		wikEd.logo.src = wikEd.config.image['error'];
		wikEd.logo.alt = wikEd.config.text['wikEdLogo error alt'];
		wikEd.logo.title = wikEd.config.text['wikEdLogo error title'];
	}
	else if (state == 'browser') {
		wikEd.logo.src = wikEd.config.image['browser'];
		wikEd.logo.alt = wikEd.config.text['wikEdLogo browser alt'];
		wikEd.logo.title = wikEd.config.text['wikEdLogo browser title'];
	}
	else if (state == 'incompatible') {
		wikEd.logo.src = wikEd.config.image['incompatible'];
		wikEd.logo.alt = wikEd.config.text['wikEdLogo incompatible alt'];
		wikEd.logo.title = wikEd.config.text['wikEdLogo incompatible title'];
	}
	else {
		if (wikEd.disabled == true) {
			wikEd.logo.src = wikEd.config.image['disabled'];
			wikEd.logo.alt = wikEd.config.text['wikEdLogo disabled alt'];
			wikEd.logo.title = wikEd.config.text['wikEdLogo disabled title'];
		}
		else if (wikEd.testVersion == true) {
			wikEd.logo.src = wikEd.config.image['testVersion'];
			wikEd.logo.alt = wikEd.config.text['wikEdLogo testVersion alt'];
			wikEd.logo.title = wikEd.config.text['wikEdLogo testVersion title'];
		}
		else {
			wikEd.logo.src = wikEd.config.image['logo'];
			wikEd.logo.alt = wikEd.config.text['wikEdLogo alt'];
			wikEd.logo.title = wikEd.config.text['wikEdLogo title'];
		}
	}
	var version = wikEd.programVersion;
	if (wikEd.config.gadget == true) {
		version += ' G';
	}
	else if (wikEd.greasemonkey == true) {
		version += ' GM';
	}
	wikEd.logo.title = wikEd.logo.title.replace(/\{wikEdParameter\}/g, parameter);
	wikEd.logo.title = wikEd.logo.title.replace(/\{wikEdProgramVersion\}/g, version);
	wikEd.logo.title = wikEd.logo.title.replace(/\{wikEdProgramDate\}/g, wikEd.programDate);

	return;
};


//
// wikEd.MakeButtonBar: generate button bar div element
//

wikEd.MakeButtonBar = function(bar) {

// id outer, class outer, id inner, class inner, alt, button numbers
	var barId = bar[0];
	var barClass = bar[1];
	var buttonsId = bar[2];
	var buttonsClass = bar[3];
	var barHeight = bar[4];
	var gripTitle = bar[5];
	var buttonNumbers = bar[6];

// collect the buttons
	var buttons = '';
	for (var i = 0; i < buttonNumbers.length; i ++) {
		var buttonNo = buttonNumbers[i];
		switch (buttonNo) {
			case 'br':
				buttons += '<br>';
				break;
			case 'find':
				buttons += '<span class="wikEdFindComboInput" id="wikEdFindComboInput">';
				buttons += '<input class="wikEdCombo" id="wikEdFindText" type="text" value="">';
				buttons += '<select class="wikEdCombo" id="wikEdFindSelect">';
				buttons += '</select>';
				buttons += '</span>';
				break;
			case 'replace':
				buttons += '<span class="wikEdReplaceComboInput" id="wikEdReplaceComboInput">';
				buttons += '<input class="wikEdCombo" id="wikEdReplaceText" type="text" value="">';
				buttons += '<select class="wikEdCombo" id="wikEdReplaceSelect">';
				buttons += '</select>';
				buttons += '</span>';
				break;
			default:
				var currButton = wikEd.config.button[buttonNo];
				if (typeof(currButton) != 'object') {
					alert('Loading error: The button "' + buttonNumbers[i] + '" is not defined.');
				}
				if ( (currButton[0] == 'wikEdSource') && (wikEd.config.showSourceButton != true) ) {
					break;
				}
				else if ( (currButton[0] == 'wikEdUsing') && (wikEd.config.showUsingButton != true) ) {
					break;
				}
				else if ( (currButton[0] == 'wikEdTableMode') && (wikEd.config.showTableModeButton != true) ) {
					break;
				}

// add button html code
				buttons += '<img ' + wikEd.MakeButtonCode(buttonNo) + '>';
		}
	}

// create the button bar div
	var div = document.createElement('div');
	div.id = barId;
	div.className = barClass;

	var buttonsStyle = '';
	if (barHeight > 0) {
		buttonsStyle = ' style="height: ' + barHeight + 'px;"';
	}

// make a grip bar
	var html = '';
	if (gripTitle != null) {
		var gripStyle = 'width: ' + wikEd.config.buttonBarGripWidth + 'px; ';
		if (barHeight > 0) {
			gripStyle += 'height: ' + barHeight + 'px; ';
		}
		if (gripStyle.length > 0){
			gripStyle = ' style="' + gripStyle + '"';
		}

		html += '<div class="wikEdButtonBarInnerWrapperVisible" style="height: ' + barHeight + 'px;">';

		html += '<div class="wikEdButtonBarGripWrapperVisible">';
		html += '<div class="wikEdButtonBarGrip"' + gripStyle + ' title="' + gripTitle + '">';
		html += '&nbsp;';
		html += '</div>';
		html += '</div>';

		html += '<div class="wikEdButtonBarButtonsWrapperVisible"' + buttonsStyle + '>';
		html += '<div id="' + buttonsId + '" class="' + buttonsClass + '" style="">';
		html += buttons;
		html += '</div>';
		html += '</div>';

		html += '</div>';
	}

// make a standard no-grip bar
	else {
		html += '<div id="' + buttonsId + '" class="' + buttonsClass + '"' + buttonsStyle + '">';
		html += buttons;
		html += '</div>';
	}
	div.innerHTML = html;

	return(div);
};


//
// wikEd.MakeButtonCode: create button code and register
//

wikEd.MakeButtonCode = function(buttonNo, type) {

	var currButton = wikEd.config.button[buttonNo];

// add accesskey information to button title and
	var accessKey = '';
	if (wikEd.config.buttonKey[buttonNo] != null) {
		accessKey = ' [' + wikEd.config.text['alt-shift'] + wikEd.config.buttonKey[buttonNo][0] + ']';

// initialize wikEd.buttonKeyCode[keyCode] = id
		wikEd.buttonKeyCode[ (wikEd.config.buttonKey[buttonNo][1]) ] = currButton[0];
	}

// add button html code
	var html;
	if (type == 'button') {
		html = '<button type="button" id="' + currButton[0] + '" class="' + currButton[1] + '" title="' + currButton[2] + accessKey +'"><img src="' + currButton[3] + '" width="' + currButton[4] + '" height="' + currButton[5] + '" alt="' + currButton[6] + '"></button>';
	}
	else {
		html = '<img id="' + currButton[0] + '" class="' + currButton[1] + '" title="' + currButton[2] + accessKey +'" src="' + currButton[3] + '" width="' + currButton[4] + '" height="' + currButton[5] + '" alt="' + currButton[6] + '"';
	}

// collect click event info
	wikEd.editButtonHandler[ currButton[0] ] = currButton[7];

	return(html);
};


//
// wikEd.ButtonBarInit: hide buttons bar, see also wikEd.ButtonBarGripHandler()
//

wikEd.ButtonBarInit = function(bar) {

	if (wikEd.GetPersistent(bar.id + 'Hidden') == '1') {
		var barInnerWrapper = bar.firstChild;
		var gripWrapper = barInnerWrapper.firstChild;
		var grip = gripWrapper.firstChild;
		var buttonsWrapper = gripWrapper.nextSibling;

		barInnerWrapper.className = 'wikEdButtonBarInnerWrapperHidden';
		gripWrapper.className = 'wikEdButtonBarGripWrapperHidden';
		buttonsWrapper.className = 'wikEdButtonBarButtonsWrapperHidden';
		wikEd.buttonsWrapperWidth[bar.id] = buttonsWrapper.offsetWidth;
		buttonsWrapper.style.display = 'none';
		wikEd.AddEventListener(grip, 'mouseover', wikEd.ButtonBarGripHandler, true);
	}
	return;
};


//
// wikEd.SetEditArea: apply css changes to switch between classic textarea and rich text frame
//

wikEd.SetEditArea = function(useFrame, notFrame) {

	var scrollRatio;

// turn rich text frame on
	if (useFrame == true) {
		scrollRatio = wikEd.textarea.scrollTop / wikEd.textarea.scrollHeight;

// remember resized textarea dimensions
		wikEd.textareaHeight = (wikEd.textarea.offsetHeight - wikEd.textareaBorderHeight) + 'px';
		wikEd.textareaWidth = '100%';

		wikEd.textareaWrapper.style.position = 'absolute';
		wikEd.textareaWrapper.style.visibility = 'hidden';
		wikEd.textarea.style.display = 'none';

		if (notFrame != true) {
			wikEd.frameWrapper.style.position = 'static';
			wikEd.frameWrapper.style.visibility = 'visible';
			wikEd.frameBody.style.display = 'block';
		}

// set visibility of native toolbar
		if (wikEd.closeToolbar == true) {
			wikEd.toolbarWrapper.style.display = 'none';
		}
		else {
			wikEd.toolbarWrapper.style.display = 'block';
		}

		if (wikEd.buttonBarFormat != null) {
			wikEd.buttonBarFormat.style.display = 'block';
		}
		if (wikEd.buttonBarTextify != null) {
			wikEd.buttonBarTextify.style.display = 'block';
		}
		if (wikEd.buttonBarCustom1 != null) {
			wikEd.buttonBarCustom1.style.display = 'block';
		}
		if (wikEd.buttonBarFind != null) {
			wikEd.buttonBarFind.style.display = 'block';
		}
		if (wikEd.buttonBarFix != null) {
			wikEd.buttonBarFix.style.display = 'block';
		}
		if (wikEd.buttonBarCustom2 != null) {
			wikEd.buttonBarCustom2.style.display = 'block';
		}
		if (wikEd.buttonBarControl != null) {
			wikEd.buttonBarControl.style.display = 'block';
		}
		wikEd.frameBody.scrollTop = scrollRatio * wikEd.frameBody.scrollHeight;
	}

// turn classic textarea on
	else {
		scrollRatio = wikEd.frameBody.scrollTop / wikEd.frameBody.scrollHeight;
		if (notFrame != true) {

// get resized frame dimensions for textarea
			if (wikEd.useWikEd == true) {
				wikEd.textareaHeight = wikEd.frameHeight;
				wikEd.textareaWidth = '100%';
			}
			wikEd.frameWrapper.style.position = 'absolute';
			wikEd.frameWrapper.style.visibility = 'hidden';
// Mozilla or wikEd bug: <br> insertion before text a while after setting display to 'none', test with setTimeout('alert(wikEd.frameBody.innerHTML)', 1000);
//			wikEd.frameBody.style.display = 'none';
		}
		wikEd.textareaWrapper.style.position = 'static';
		wikEd.textareaWrapper.style.visibility = 'visible';

		wikEd.textarea.style.height = wikEd.textareaHeight;
		wikEd.textarea.style.width = wikEd.textareaWidth;
		wikEd.textarea.style.display = 'block';

// force visibility of native toolbar
		if (wikEd.toolbarWrapper != null) {
			wikEd.toolbarWrapper.style.display = 'block';
		}
		if (wikEd.buttonBarFormat != null) {
			wikEd.buttonBarFormat.style.display = 'none';
		}
		if (wikEd.buttonBarTextify != null) {
			wikEd.buttonBarTextify.style.display = 'none';
		}
		if (wikEd.buttonBarCustom1 != null) {
			wikEd.buttonBarCustom1.style.display = 'none';
		}
		if (wikEd.buttonBarFind != null) {
			wikEd.buttonBarFind.style.display = 'none';
		}
		if (wikEd.buttonBarFix != null) {
			wikEd.buttonBarFix.style.display = 'none';
		}
		if (wikEd.buttonBarCustom2 != null) {
			wikEd.buttonBarCustom2.style.display = 'none';
		}
		if (wikEd.buttonBarControl != null) {
			wikEd.buttonBarControl.style.display = 'block';
		}
		wikEd.textarea.scrollTop = scrollRatio * wikEd.textarea.scrollHeight;
	}

	return;
};


//
// wikEd.Button: toggle or set button checked state
//   used for buttons that do not require nor change the text. Faster than wikEd.EditButton()
//

wikEd.Button = function(buttonObj, buttonId, toggleButton, setButton, classButton, doButton) {

	if (buttonObj != null) {

// check if the button is disabled
		if (buttonObj.className == 'wikEdButtonInactive') {
			return;
		}

// set button to pressed, set cursor to hourglass
		buttonObj.style.cursor = 'wait';

// init the button
		if (setButton != null) {
			if (setButton == false) {
				buttonObj.setAttribute('checked', false);
				if (classButton == null) {
					buttonObj.className = 'wikEdButtonUnchecked';
				}
			}
			else {
				buttonObj.setAttribute('checked', true);
				if (classButton == null) {
					buttonObj.className = 'wikEdButtonChecked';
				}
			}
		}
		else if (classButton != null) {
			buttonObj.className = classButton;
		}

// toggle the button
		if (toggleButton != null) {
			if (toggleButton == true) {
				if (wikEd.GetAttribute(buttonObj, 'checked') == 'true') {
					buttonObj.setAttribute('checked', false);
					buttonObj.className = 'wikEdButtonUnchecked';
				}
				else {
					buttonObj.setAttribute('checked', true);
					buttonObj.className = 'wikEdButtonChecked';
				}
			}
		}
	}

// perform specific actions
	var focusFrame = false;
	if ( ( (setButton == null) && (classButton == null) ) || (doButton == true) ) {

// remove active content
		wikEd.RemoveElements(['script', 'object', 'applet', 'embed']);

		switch (buttonId) {

// switch between syntax highlighting and plain text
			case 'wikEdHighlightSyntax':
				if (wikEd.GetAttribute(buttonObj, 'checked') == 'true') {
					wikEd.highlightSyntax = true;
					wikEd.SetPersistent('wikEdSyntaxOff', '0', 0, '/');
					if (wikEd.refHide == true) {
						wikEd.frameBody.className = 'wikEdFrameBodyNewbie';
					}
					else {
						wikEd.frameBody.className = 'wikEdFrameBodySyntax';
					}
				}
				else {
					wikEd.highlightSyntax = false;
					wikEd.SetPersistent('wikEdSyntaxOff', '1', 0, '/');
					wikEd.frameBody.className = 'wikEdFrameBodyPlain';
				}

// do not keep whole text selected
				wikEd.EditButton( null, 'wikEdUpdateAll', {'keepSel': false} );
				break;

// toggle table mode // {{TABLE}}
			case 'wikEdTableMode':
				if (wikEd.GetAttribute(buttonObj, 'checked') != 'true') {
					wikEd.tableMode = false;
					wikEd.EditButton(null, 'wikEdUpdateAll');
				}
				else {
					wikEd.tableMode = true;
					wikEd.EditButton(null, 'wikEdTablify');
				}
				break;

// align textbox with display top
			case 'wikEdScrollToPreview':
			case 'wikEdScrollToPreview2':
			case 'wikEdScrollToPreview3':
				window.scroll(0, wikEd.GetOffsetTop(wikEd.saveButton));
				focusFrame = true;
				break;

// align edit buttons with display top
			case 'wikEdScrollToEdit':
			case 'wikEdScrollToEdit2':
			case 'wikEdScrollToEdit3':
			case 'wikEdScrollToEdit4':
				window.scroll(0, wikEd.GetOffsetTop(wikEd.inputWrapper));
				focusFrame = true;
				break;

// cycle through different font sizes
			case 'wikEdTextZoomDown':
				wikEd.textSize = wikEd.textSize / 1.2;
				if (wikEd.textSize < wikEd.textSizeInit / 1.2 / 1.2) {
					wikEd.textSize = wikEd.textSizeInit * 1.2 * 1.2;
				}
				wikEd.frameBody.style.fontSize = wikEd.textSize + 'px';
				focusFrame = true;
				break;

// cycle through different font sizes
			case 'wikEdTextZoomUp':
				wikEd.textSize = wikEd.textSize * 1.2;
				if (wikEd.textSize > wikEd.textSizeInit * 1.2 * 1.2) {
					wikEd.textSize = wikEd.textSizeInit / 1.2 / 1.2;
				}
				wikEd.frameBody.style.fontSize = wikEd.textSize + 'px';
				focusFrame = true;
				break;

// display local preview box
			case 'wikEdLocalPreview':
				if (wikEd.fullScreenMode == true) {
					wikEd.FullScreen(false);
				}
				if (wikEd.useWikEd == true) {
					wikEd.UpdateTextarea();
				}

// clear box to display loading indicator, keep wrapper height to prevent scrolling
				var previewHeight = wikEd.previewBox.offsetHeight;
				if ( (wikEd.previewBox.innerHTML != '') && (previewHeight > 0) ) {
					wikEd.previewBox.style.height = previewHeight + 'px';
				}
				wikEd.previewBox.innerHTML = wikEd.config.text.wikEdPreviewLoading;
				wikEd.localPrevWrapper.style.display = 'inline';

// prepare ajax preview
				wikEd.previewIsAjax = false;
				var bodyData = wikEd.textarea.value;

// Opera 0.9.51
				bodyData = bodyData.replace(/\r\n|\n\r|\r/g, '\n');

				if (wikEd.config.useAjaxPreview == true) {
					var livePreview = true;

// articles on watchlist preview page
					if (wikEd.watchlistEdit == true) {
						bodyData = bodyData.replace(/\n{1}/g, '\n\n');
						bodyData = bodyData.replace(/(.+)/g,
							function (p, p1) {
								if (/[\#<>\[\]\|\{\}]/.test(p1) == true) {
									return(p1);
								}
								var article = p1;
								var talk;
								if (/:/.test(article) == true) {

// postfix (User_talk) or prefix (Discussion_Utilisateur), test for xxx_ vs. _xxx (all ASCII non-letters as separator)
// Firefox 3.6.7 + Greasemonkey 0.8.20100408.06: invalid range with \{-‰ and \x8f-™
									if (/[ -\/\:-\@\[-\`\{-\x88‰‹\x8d\x8f-\x98™›\x9d\xa0-»¿×÷]/.test(wikEd.config.text['talk namespace suffix']) == true) {
										talk = article.replace(/([^:]*)/, wikEd.config.text['talk namespace suffix'] + '$1');
									}
									else {
										talk = article.replace(/([^:]*)/, '$1' + wikEd.config.text['talk namespace suffix']);
									}
								}
								else {
									talk = wikEd.config.text['talk namespace'] + ':' + article;
								}
								var uriArticle = article.replace(/ /g, '_');
								uriArticle = encodeURI(uriArticle);
								uriArticle = uriArticle.replace(/%25(\d\d)/g, '%$1');
								uriArticle = uriArticle.replace(/'/g, '%27');
								var hist = wikEd.wikiGlobals.wgServer + wikEd.wikiGlobals.wgScript + '?title=' + uriArticle + '&action=history';
								return('[[:' + p1 + ']]&nbsp;•&nbsp;([[:' + talk + '|' + wikEd.config.text['talk page'] + ']], [' + hist + ' ' + wikEd.config.text['history page'] + '])');
							}
						);
					}

// normal article edit page
					else {

// append references section for section edits
						var section = document.getElementsByName('wpSection');
						if (section != null) {
							if (section.length > 0) {
								if (/\d+/.test(section[0].value) == true) {
									if (/<ref[^>\/]*>.*?<\/ref[^>]*>/i.test(bodyData) == true) {
										if (/<references\b[^>]*>/i.test(bodyData) == false) {
											bodyData += '<div class="wikEdPreviewRefs"><references/></div>';
										}
									}
								}
							}
						}

// GesHI syntax highlighting support, GeSHi css is only provided dynamically and not for &live
// so request a full preview and attach css to page, remember already loaded GeSHi languages
						while ( (regExpMatch = /<(source|syntaxhighlight)\b[^>]*?lang\s*=\s*("|')(\w+)\2/gi.exec(bodyData)) != null) {
							var lang = regExpMatch[3];
							if (wikEd.geSHiCSS['wikEd' + lang] == null) {
								livePreview = false;
								wikEd.geSHiCSS['wikEd' + lang] = true;
								break;
							}
						}
					}

// make the ajax request
					wikEd.AjaxPreview(bodyData, wikEd.LocalPreviewAjaxHandler, livePreview);
				}

// prepare a local preview (Pilaf's InstaView), will be overwritten by Ajax version
				if ( (wikEd.config.useLocalPreview == true) && (typeof(InstaView) == 'object') ) {
					InstaView.conf.user.name = wikEd.wikiGlobals.wgUserName;
					var text = wikEd.textarea.value;

// Opera 0.9.51
					text = text.replace(/\r\n|\n\r|\r/g, '\n');

					var instaView = InstaView.convert(text);
					if (wikEd.previewIsAjax != true) {
						wikEd.previewBox.innerHTML = instaView;

// init sortable tables (wikibits.js)
						if (typeof(sortables_init) == 'function') {
							sortables_init();
						}

// init collapsible tables (common.js)
						if (typeof(createCollapseButtons) == 'function') {
							createCollapseButtons();
						}
					}
				}
				focusFrame = true;
				break;

// display local diff box
			case 'wikEdLocalDiff':
				if (typeof(WDiffString) != 'function') {
					var diffTextLinkified = '';
					wikEd.previewBox.innerHTML = '<div class="wikEdPreviewDiffError">' + wikEd.config.text.diffNotLoaded + '</div>';
					wikEd.localPrevWrapper.style.display = 'block';
					break;
				}
				if (wikEd.fullScreenMode == true) {
					wikEd.FullScreen(false);
				}
				if (wikEd.useWikEd == true) {
					wikEd.UpdateTextarea();
				}

// add trailing newline
				var currentVersion = wikEd.textarea.value;

// Opera 0.9.51
				currentVersion = currentVersion.replace(/\r\n|\n\r|\r/g, '\n');

// call external diff program
				wikEd.previewBox.innerHTML = wikEd.DiffResponse(wikEd.origVersion, currentVersion);

// display diff, keep wrapper height to prevent scrolling
				var previewHeight = wikEd.previewBox.offsetHeight;
				if ( (wikEd.previewBox.innerHTML != '') && (previewHeight > 0) ) {
					wikEd.previewBox.style.height = previewHeight + 'px';
				}
				wikEd.localPrevWrapper.style.display = 'block';

// scroll to button, textarea, or preview field
				wikEd.ScrollToPreview();

// run scheduled custom functions
				wikEd.ExecuteHook(wikEd.config.diffHook);
				break;

// toggle wikEdDiff
			case 'wikEdDiff':

// turn wikEdDiff off
				if (wikEd.GetAttribute(buttonObj, 'checked') != 'true') {
					wikEd.diff = false;
					wikEd.SetPersistent('wikEdDiff', '0', 0, '/');
					if (typeof(wikEd.diffDiv) == 'object') {
						if (wikEd.diffDiv != null) {
							wikEd.diffDiv.style.display = 'none';
						}
					}
					window.scroll(0, wikEd.GetOffsetTop(wikEd.inputWrapper));
				}

// turn wikEdDiff on
				else {
					wikEd.diff = true;
					wikEd.SetPersistent('wikEdDiff', '1', 0, '/');
					if (typeof(wikEd.diffDiv) == 'object') {
						if (wikEd.diffDiv != null) {
							wikEd.diffDiv.style.display = 'block';
							window.scroll(0, wikEd.GetOffsetTop(wikEd.diffDiv));
							wikEd.Diff();
						}
					}
				}
				focusFrame = true;
				break;

// close the preview / diff box
			case 'wikEdClose':
			case 'wikEdClose2':
				window.scroll(0, wikEd.GetOffsetTop(wikEd.inputWrapper));
				wikEd.localPrevWrapper.style.display = 'none';
				wikEd.previewBox.style.height = 'auto';
				focusFrame = true;
				break;

// switch between textarea and frame display
//   switching an iframe in design mode immediately after initialization between absolute/static may crash mozilla
			case 'wikEdUseWikEd':

// enble wikEd
				if (wikEd.GetAttribute(buttonObj, 'checked') == 'true') {
					wikEd.UpdateFrame();

// turn rich text frame on
					wikEd.SetEditArea(true);
					wikEd.useWikEd = true;
					wikEd.SetPersistent('wikEdUseClassic', '0', 0, '/');

// run scheduled custom functions
					wikEd.ExecuteHook(wikEd.config.frameHook);
				}

// turn classic textarea on, disable wikEd
				else {
					wikEd.UpdateTextarea();
					wikEd.SetEditArea(false);
					wikEd.useWikEd = false;
					wikEd.SetPersistent('wikEdUseClassic', '1', 0, '/');

// run scheduled custom functions
					wikEd.ExecuteHook(wikEd.config.textareaHook);
				}
				break;

// add "using wikEd" to summaries
			case 'wikEdUsing':
				if (wikEd.GetAttribute(buttonObj, 'checked') == 'true') {
					wikEd.using = true;
					wikEd.SetPersistent('wikEdSummaryUsing', '1', 0, '/');
				}
				else {
					wikEd.using = false;
					wikEd.SetPersistent('wikEdSummaryUsing', '0', 0, '/');
				}
				break;

// hide ref tags
			case 'wikEdRefHide':
				if (wikEd.GetAttribute(buttonObj, 'checked') == 'true') {
					wikEd.refHide = true;
					wikEd.SetPersistent('wikEdRefHide', '1', 0, '/');
				}
				else {
					wikEd.refHide = false;
					wikEd.SetPersistent('wikEdRefHide', '0', 0, '/');
				}
				if (wikEd.useWikEd == true) {
					if (wikEd.refHide == true) {
						wikEd.frameBody.className = 'wikEdFrameBodyNewbie';
					}
					else {
						wikEd.frameBody.className = 'wikEdFrameBodySyntax';
					}
					wikEd.EditButton(null, 'wikEdWikify', 'whole');
				}
				break;

// close the toolbar
			case 'wikEdCloseToolbar':
				if (wikEd.GetAttribute(buttonObj, 'checked') == 'true') {
					wikEd.closeToolbar = true;
					wikEd.toolbarWrapper.style.display = 'none';
					wikEd.SetPersistent('wikEdCloseToolbar', '1', 0, '/');
				}
				else {
					wikEd.closeToolbar = false;
					wikEd.toolbarWrapper.style.display = 'block';
					wikEd.SetPersistent('wikEdCloseToolbar', '0', 0, '/');
				}
				if (wikEd.fullScreenMode == true) {
					wikEd.FullScreen(wikEd.fullScreenMode);
				}
				break;

// just toggle the case sensitive search button
			case 'wikEdCaseSensitive':
				break;

// just toggle the regexp search button
			case 'wikEdRegExp':
				break;

// just toggle the find-ahead-as-you-type search button
			case 'wikEdFindAhead':
				break;

// switch to fullscreen edit area
			case 'wikEdFullScreen':
				if (wikEd.rearrange == true) {
					if (wikEd.GetAttribute(buttonObj, 'checked') == 'true') {
						wikEd.FullScreen(true);
						wikEd.SetPersistent('wikEdFullscreen', '1', 0, '/');
					}
					else {
						wikEd.FullScreen(false);
						wikEd.SetPersistent('wikEdFullscreen', '0', 0, '/');
					}
				}
				break;

// clear the saved settings for find, replace, and summary history
			case 'wikEdClearHistory':
				wikEd.ClearHistory('find');
				wikEd.ClearHistory('replace');
				wikEd.ClearHistory('summary');
				focusFrame = true;
				break;

// for testing
			case 'wikEdPlaceholder':
				break;
		}
	}

// reset cursor to normal
	if (buttonObj != null) {
		buttonObj.style.cursor = 'pointer';
	}

// focus the frame
	if ( (wikEd.useWikEd == true) && (focusFrame == true) ) {
		wikEd.frameWindow.focus();
	}

	return;
};


//
// wikEd.EditButton: editing functions
//   used for buttons that require or change the text, more time consuming than wikEd.Button()
//

wikEd.EditButton = function(buttonObj, buttonId, parameters, CustomHandler) {

// check if button is disabled
	if (buttonObj != null) {
		if (buttonObj.className == 'wikEdButtonInactive') {
			return;
		}
	}

// remove active and non-text content
	wikEd.RemoveElements(['script', 'object', 'applet', 'embed', 'textarea']);

// select the appropriate text change targets (whole, selection, cursor, focusWord, focusLine, selectionWord, or selectionLine)
	var obj = {};
	obj.changed = {};
	var highlightNoTimeOut = false;

// set cursor position into closest highest text node so that highlighting does not bleed out
	wikEd.AntiHighlightBleeding(obj, true);

// switch the button
	switch (buttonId) {

// undo, redo: whole
		case 'wikEdUndo':
		case 'wikEdRedo':
		case 'wikEdUndoAll':
		case 'wikEdRedoAll':
			wikEd.GetText(obj, 'whole');
			obj.changed = obj.whole;
			break;

// basic wiki character formatting: selection / focusWord / cursor
		case 'wikEdBold':
		case 'wikEdItalic':
		case 'wikEdUnderline':
		case 'wikEdStrikethrough':
		case 'wikEdNowiki':
		case 'wikEdSuperscript':
		case 'wikEdSubscript':
		case 'wikEdWikiLink':
		case 'wikEdWebLink':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'focusWord');
				if (obj.focusWord.plain != '') {
					obj.changed = obj.focusWord;
				}
				else  {
					obj.changed = obj.cursor;
				}
			}
			break;

// reference: selection / cursor
		case 'wikEdRef':
		case 'wikEdRefNamed':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				obj.changed = obj.cursor;
			}
			break;

// references and small references: selection / cursor
		case 'wikEdReferences':
		case 'wikEdReferencesSection':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				obj.changed = obj.cursor;
			}
			break;

// character formatting: selection / focusWord / cursor
		case 'wikEdCase':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'focusWord');
				if (obj.focusWord.plain != '') {
					obj.changed = obj.focusWord;
				}
				else {
					obj.changed = obj.cursor;
				}
			}
			break;

// multiple line changes: selectionLine / focusLine / cursor
		case 'wikEdDecreaseHeading':
		case 'wikEdIncreaseHeading':
		case 'wikEdIncreaseBulletList':
		case 'wikEdDecreaseBulletList':
		case 'wikEdIncreaseNumberList':
		case 'wikEdDecreaseNumberList':
		case 'wikEdIncreaseIndentList':
		case 'wikEdDecreaseIndentList':
		case 'wikEdDefinitionList':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				wikEd.GetText(obj, 'selectionLine');
				obj.changed = obj.selectionLine;
			}
			else {
				wikEd.GetText(obj, 'focusLine');
				if (obj.focusLine.plain != '') {
					obj.changed = obj.focusLine;
				}
				else {
					obj.changed = obj.cursor;
				}
			}
			break;

// sort: selectionLine / focusLine
		case 'wikEdSort':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				wikEd.GetText(obj, 'selectionLine');
				obj.changed = obj.selectionLine;
			}
			else {
				wikEd.GetText(obj, 'focusPara');
				if (obj.focusPara.plain != '') {
					obj.changed = obj.focusPara;
				}
			}
			break;

// image: selectionWord (if text is selected) / cursor
		case 'wikEdImage':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				wikEd.GetText(obj, 'selectionWord');
				obj.changed = obj.selectionWord;
			}
			else  {
				obj.changed = obj.cursor;
			}
			break;

// table: selectionLine / cursor
		case 'wikEdTable':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				wikEd.GetText(obj, 'selectionLine');
				obj.changed = obj.selectionLine;
			}
			else  {
				wikEd.GetText(obj, 'focusLine');
				obj.changed = obj.cursor;
			}
			break;

// wikify: selection / whole
		case 'wikEdWikify':
			if (parameters == 'whole') {
				wikEd.GetText(obj, 'whole');
				obj.changed = obj.whole;
			}
			else {
				wikEd.GetText(obj, 'selection');
				if (obj.selection.plain != '') {
					obj.changed = obj.selection;
				}
				else {
					wikEd.GetText(obj, 'whole');
					obj.changed = obj.whole;
				}
			}
			break;

// textify: selection / whole, without wikifying
		case 'wikEdTextify':
			wikEd.GetText(obj, 'selection', false);
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'whole', false);
				obj.changed = obj.whole;
			}
			break;

// redirect: whole
		case 'wikEdRedirect':
			wikEd.GetText(obj, 'whole, selection, cursor');
			if (obj.selection.plain == '') {
				wikEd.GetText(obj, 'selectionWord');
			}
			obj.changed = obj.whole;
			break;

// find and replace: selection / focusWord / cursor
		case 'wikEdFindPrev':
		case 'wikEdFindNext':
		case 'wikEdJumpPrev':
		case 'wikEdJumpNext':
		case 'wikEdReplacePrev':
		case 'wikEdReplaceNext':
		case 'wikEdFindAll':
			wikEd.GetText(obj, 'selection');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'focusWord');
				if (obj.focusWord.plain != '') {
					obj.changed = obj.focusWord;
				}
				else {
					obj.changed = obj.cursor;
				}
			}
			break;

// replace all: selection / whole
		case 'wikEdReplaceAll':
			wikEd.GetText(obj, 'selection');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'whole');
				obj.changed = obj.whole;
			}
			break;

// fixing buttons: selection / whole
		case 'wikEdFixBasic':
		case 'wikEdFixUnicode':
		case 'wikEdFixAll':
		case 'wikEdFixHtml':
		case 'wikEdFixRegExTypo':
		case 'wikEdFixRedirect':
		case 'wikEdFixRedirectReplace':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'whole');
				obj.changed = obj.whole;
			}
			break;

// fixing buttons: selection / focusPara / cursor
		case 'wikEdFixPunct':
		case 'wikEdFixMath':
		case 'wikEdFixUnits':
		case 'wikEdFixDashes':
		case 'wikEdFixCaps':
		case 'wikEdFixChem':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'focusPara');
				if (obj.focusPara.plain != '') {
					obj.changed = obj.focusPara;
				}
				else {
					obj.changed = obj.cursor;
				}
			}
			break;

// fixing buttons: selection / focusLine / cursor
		case 'wikEdFixChem':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'focusLine');
				if (obj.focusPara.plain != '') {
					obj.changed = obj.focusLine;
				}
				else {
					obj.changed = obj.cursor;
				}
			}
			break;

// source: selection / whole
		case 'wikEdSource':
			wikEd.GetText(obj, 'selection');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'whole');
				obj.changed = obj.whole;
			}
			break;

// insert tags: selection / focusWord / cursor
		case 'wikEdInsertTags':
			wikEd.GetText(obj, 'selection, cursor');
			if (obj.selection.plain != '') {
				obj.changed = obj.selection;
			}
			else {
				wikEd.GetText(obj, 'focusWord');
				if (obj.focusWord.plain != '') {
					obj.changed = obj.focusWord;
				}
				else {
					obj.changed = obj.cursor;
				}
			}
			break;

// convert wiki tables to html
		case 'wikEdTablify':
			wikEd.GetText(obj, 'whole');
			obj.changed = obj.whole;
			break;

// update text view using current control button settings
		case 'wikEdUpdateAll':
			wikEd.GetText(obj, 'whole');
			obj.changed = obj.whole;
			break;

// custom edit functions have to call wikEd.GetText() themselves
		default:
			wikEd.GetText(obj, 'cursor');
			obj.changed = obj.cursor;
			break;
	}

// exit
	if (obj.changed == null) {
		wikEd.frameWindow.focus();

// reset button to active, reset cursor
		if (buttonObj != null) {
			if (buttonObj.className != 'wikEdButtonInactive') {
				buttonObj.className = 'wikEdButton';
			}
		}
		return;
	}

// set local syntax highlighting flag
	var highlightSyntax = wikEd.highlightSyntax;

// manipulate the text
	var selectChanged = true;
	var selectChangedText = '';
	switch (buttonId) {

// undo
		case 'wikEdUndo':
			if (wikEd.lastVersion == null) {
				wikEd.lastVersion = obj.changed.plain;
			}
			wikEd.FrameExecCommand('undo');
			if (obj.sel.rangeCount == 0) {
				obj.sel.collapse(wikEd.frameBody, 0);
			}
			obj.changed.range = obj.sel.getRangeAt(obj.sel.rangeCount - 1);
			obj.changed.plain = null;
			obj.changed.keepSel = true;
			break;

// redo
		case 'wikEdRedo':
			wikEd.FrameExecCommand('redo');
			if (obj.sel.rangeCount == 0) {
				obj.sel.collapse(wikEd.frameBody, 0);
			}
			obj.changed.range = obj.sel.getRangeAt(obj.sel.rangeCount - 1);
			obj.changed.plain = null;
			obj.changed.keepSel = true;
			break;

// bold
		case 'wikEdBold':
			if ( /'''([^'](.|\n)*?)'''/.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/'''([^'](.|\n)*?)'''/g, '$1');
			}
			else {
				obj.changed.plain = '\'\'\'' + obj.changed.plain + '\'\'\'';
				obj.changed.plain = obj.changed.plain.replace(/(''')( *)((.|\n)*?)( *)(''')/, '$2$1$3$6$5');
			}
			obj.changed.plain = obj.changed.plain.replace(/'{6,}/g, '\'\'\'\'\'');
			obj.changed.keepSel = true;
			break;

// italic
		case 'wikEdItalic':
			if ( /('{3,})''([^'](.|\n)*?)''('{3,})/.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/('{3,})''([^'](.|\n)*?)''('{3,})/g, '$1$2$4');
			}
			else if ( /(^|[^'])''([^'](.|\n)*?)''([^']|$)/.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/(^|[^'])''([^'](.|\n)*?)''([^']|$)/g, '$1$2$4');
			}
			else {
				obj.changed.plain = '\'\'' + obj.changed.plain + '\'\'';
				obj.changed.plain = obj.changed.plain.replace(/('')( *)((.|\n)*?)( *)('')/, '$2$1$3$6$5');
			}
			obj.changed.plain = obj.changed.plain.replace(/'{6,}/g, '\'\'\'\'\'');
			obj.changed.keepSel = true;
			break;

// underline
		case 'wikEdUnderline':
			if ( /&lt;u&gt;((.|\n)*?)&lt;\/u&gt;/i.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/&lt;u&gt;((.|\n)*?)&lt;\/u&gt;/gi, '$1');
			}
			else {
				obj.changed.plain = '&lt;u&gt;' + obj.changed.plain + '&lt;\/u&gt;';
				obj.changed.plain = obj.changed.plain.replace(/(&lt;u&gt;)( *)((.|\n)*?)( *)(&lt;\/u&gt;)/, '$2$1$3$6$5');
			}
			obj.changed.keepSel = true;
			break;

// strikethrough
		case 'wikEdStrikethrough':
			if ( /&lt;s&gt;((.|\n)*?)&lt;\/s&gt;/i.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/&lt;s&gt;((.|\n)*?)&lt;\/s&gt;/gi, '$1');
			}
			else {
				obj.changed.plain = '&lt;s&gt;' + obj.changed.plain + '&lt;\/s&gt;';
				obj.changed.plain = obj.changed.plain.replace(/(&lt;s&gt;)( *)((.|\n)*?)( *)(&lt;\/s&gt;)/, '$2$1$3$6$5');
			}
			obj.changed.keepSel = true;
			break;

// nowiki
		case 'wikEdNowiki':
			if ( /&lt;nowiki&gt;((.|\n)*?)&lt;\/nowiki&gt;/i.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/&lt;nowiki&gt;((.|\n)*?)&lt;\/nowiki&gt;/gi, '$1');
			}
			else {
				obj.changed.plain = '&lt;nowiki&gt;' + obj.changed.plain + '&lt;\/nowiki&gt;';
				obj.changed.plain = obj.changed.plain.replace(/(&lt;nowiki&gt;)( *)((.|\n)*?)( *)(&lt;\/nowiki&gt;)/, '$2$1$3$6$5');
			}
			obj.changed.keepSel = true;
			break;

// superscript
		case 'wikEdSuperscript':
			obj.changed.plain = obj.changed.plain.replace(/^(\s*)&lt;sub&gt;((.|\n)*?)&lt;\/sub&gt;(\s*)$/, '$1$2$4');
			if ( /&lt;sup&gt;((.|\n)*?)&lt;\/sup&gt;/i.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/&lt;sup&gt;((.|\n)*?)&lt;\/sup&gt;/gi, '$1');
			}
			else {
				obj.changed.plain = '&lt;sup&gt;' + obj.changed.plain + '&lt;/sup&gt;';
				obj.changed.plain = obj.changed.plain.replace(/(&lt;sup&gt;)( *)((.|\n)*?)( *)(&lt;\/sup&gt;)/, '$2$1$3$6$5');
			}
			obj.changed.keepSel = true;
			break;

// subscript
		case 'wikEdSubscript':
			obj.changed.plain = obj.changed.plain.replace(/^(\s*)&lt;sup&gt;((.|\n)*?)&lt;\/sup&gt;(\s*)$/, '$1$2$4');
			if ( /&lt;sub&gt;((.|\n)*?)&lt;\/sub&gt;/i.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/&lt;sub&gt;((.|\n)*?)&lt;\/sub&gt;/gi, '$1');
			}
			else {
				obj.changed.plain = '&lt;sub&gt;' + obj.changed.plain + '&lt;/sub&gt;';
				obj.changed.plain = obj.changed.plain.replace(/(&lt;sub&gt;)( *)((.|\n)*?)( *)(&lt;\/sub&gt;)/, '$2$1$3$6$5');
			}
			obj.changed.keepSel = true;
			break;

// in-text reference
		case 'wikEdRef':
		case 'wikEdRefNamed':
			if (obj.changed.plain == '') {
				if (buttonId == 'wikEdRef') {
					obj.changed.plain = '&lt;ref&gt;&lt;\/ref&gt;';
				}
				else {
					obj.changed.plain = '&lt;ref name="" \/&gt;';
				}
			}
			else if ( /&lt;ref( name="")? ?\/&gt;/i.test(obj.changed.plain) ) {
				obj.changed.plain = '';
			}
			else if ( /&lt;ref( name="")?&gt;((.|\n)*?)&lt;\/ref&gt;/i.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/&lt;ref( name="")?&gt;((.|\n)*?)&lt;\/ref&gt;/gi, '$2');
			}
			else {
				if (buttonId == 'wikEdRef') {
					obj.changed.plain = '&lt;ref&gt;' + obj.changed.plain + '&lt;/ref&gt;';
				}
				else {
					obj.changed.plain = '&lt;ref name=""&gt;' + obj.changed.plain + '&lt;/ref&gt;';
				}
				obj.changed.plain = obj.changed.plain.replace(/(&lt;ref( name="")?&gt;)( *)((.|\n)*?)( *)(&lt;\/ref&gt;)/, '$3$1$4$7$6');
			}
			obj.changed.keepSel = true;
			break;

// references location
		case 'wikEdReferences':
		case 'wikEdReferencesSection':
			var ref = wikEd.config.text.wikEdReferencesSection;
			ref = ref.replace(/</g, '&lt;');
			ref = ref.replace(/>/g, '&gt;');
			var refEscaped = ref;
			refEscaped = refEscaped.replace(/([^\w\s\;\&])/g, '\\$1');
			refEscaped = refEscaped.replace(/^\n|\n$/g, '\\n*');
			refEscaped = refEscaped.replace(/(\n)/g, '\\n');
			var	regExp = new RegExp(refEscaped, 'gi');

// plain references tag
			if (buttonId == 'wikEdReferences') {
				if (obj.changed.plain == '') {
					obj.changed.plain = '&lt;references/&gt;';
				}
				else if (regExp.test(obj.changed.plain) == true) {
					obj.changed.plain = obj.changed.plain.replace(regExp, '');
				}
				else if (/&lt;references ?\/&gt;/i.test(obj.changed.plain) ) {
					obj.changed.plain = obj.changed.plain.replace(/&lt;references ?\/&gt;/gi, '');
				}
				else {
					obj.changed = obj.cursor;
					obj.changed.plain = '&lt;references/&gt;';
				}
			}

// complete references code
			else {
				if (obj.changed.plain == '') {
					obj.changed.plain = ref;
				}
				else if (regExp.test(obj.changed.plain) == true) {
					obj.changed.plain = obj.changed.plain.replace(regExp, '');
				}
				else if ( /&lt;references ?\/&gt;/i.test(obj.changed.plain) ) {
					obj.changed.plain = obj.changed.plain.replace(/&lt;references ?\/&gt;/gi, '');
				}
				else {
					obj.changed = obj.cursor;
					obj.changed.plain = ref;
				}
			}
			obj.changed.keepSel = true;
			break;

// toggle lowercase / uppercase
		case 'wikEdCase':
			if (obj.changed.plain == '') {
				obj.changed.plain = null;
			}

// lowercase all uppercased text
			else {

// html character entities to chars
				var plain = obj.changed.plain;
				plain = plain.replace(/&gt;/g, '>');
				plain = plain.replace(/&lt;/g, '<');
				plain = plain.replace(/&amp;/g, '&');

				if (plain.toUpperCase() == plain) {
					plain = plain.toLowerCase();
				}

// first-letter-uppercase all lowercased text
				else if (plain.toLowerCase() == plain) {
					var regExp = new RegExp('(^|[^' + wikEd.letters + '_])([' + wikEd.letters + '_])([' + wikEd.letters + '_\']*)', 'g')
					plain = plain.replace(regExp,
						function (p, p1, p2, p3) {
							return(p1 + p2.toUpperCase() + p3.toLowerCase());
						}
					);
				}

// uppercase mixed upper and lowercased text
				else {
					plain = plain.toUpperCase();
				}

// chars back to html character entities
				plain = plain.replace(/&/g, '&amp;');
				plain = plain.replace(/</g, '&lt;');
				plain = plain.replace(/>/g, '&gt;');
				obj.changed.plain = plain;
			}
			obj.changed.keepSel = true;
			break;

// sort alphabetically by visible words, case insensitive, and numerically
		case 'wikEdSort':

// fix unicode and character entities
			wikEd.FixUnicode(obj.changed);

// keep leading and trailing empty lines and table syntax
			var pre = '';
			var main = '';
			var post = '';
			var regExpMatch = /^(((\{\|.*|!.*|\|\+.*|\|\-.*|)\n)*)((.|\n)*?)(((\|\}.*|\|\-.*|)\n)*)$/.exec(obj.changed.plain);
			if (regExpMatch != null) {
				pre = regExpMatch[1];
				main = regExpMatch[4];
				post = regExpMatch[6];
			}
			else {
				main = obj.changed.plain;
			}

// join cells in table rows
			main = main.replace(/(^|\n)(\|[^\-\+\}](.|\n)*?(?=(\|\-|\{\||\|\}|$)|$))/g,
				function(p, p1, p2, p3) {
					p2 = p2.replace(/\n/g, '\x00');
					return(p1 + p2);
				}
			);

// cycle through lines
			var lines = main.split('\n');
			var sortArray = [];
			for (var i = 0; i < lines.length; i ++) {
				var line = lines[i];
				var sortKey = line;

// remove empty lines
				if (line == '') {
					continue;
				}
				sortKey = sortKey.replace(/\x00/g, '\n');

// remove html
				sortKey = sortKey.replace(/&lt;.*&gt;/g, '');

// lowercase
				sortKey = sortKey.toLowerCase();

// keep visible text of wikilinks only
				sortKey = sortKey.replace(/\[\[[^\|\[\]]*\|/g, '');
				sortKey = sortKey.replace(/\[\[|\]\]/g, '');

// keep visible text of external links only
				sortKey = sortKey.replace(/\[(https?|ftp|irc|gopher):\S+/g, '');

// keep visible cell content only
				sortKey = sortKey.replace(/((^|\n)(\||\!))(?![\+\-\}\|\!])[^\|\!]*(\||\!)(?!\4)/g, '$1');
				sortKey = sortKey.replace(/(^|\n)\|-.*?(\n|$)/g, '$2');

// keep single ' only
				sortKey = sortKey.replace(/'{2,}/g, '');

// remove decimal commas
				sortKey = sortKey.replace(/(\d)\,(?=\d\d\d(\D|$))/g, '$1');

// sort numerically by adding preceeding 0s to numbers
				sortKey = sortKey.replace(/0*(\d+)(\.\d*)?/g,
					function(p, p1, p2) {
						return('000000000000000'.substr(p1.length) + p1 + p2);
					}
				);

// non-breaking and other spaces
				sortKey = sortKey.replace(/&nbsp;|\s/g, ' ');

// remove umlauts (just guessing, but probably better than not doing it)
				sortKey = sortKey.replace(/[à-æ]/g, 'a');
				sortKey = sortKey.replace(/[ç]/g, 'c');
				sortKey = sortKey.replace(/[ð]/g, 'd');
				sortKey = sortKey.replace(/[è-ë]/g, 'e');
				sortKey = sortKey.replace(/[ì-ï]/g, 'i');
				sortKey = sortKey.replace(/[ñ]/g, 'n');
				sortKey = sortKey.replace(/[ò-öø]/g, 'o');
				sortKey = sortKey.replace(/[ß]/g, 'ss');
				sortKey = sortKey.replace(/[ù-ü]/g, 'u');
				sortKey = sortKey.replace(/[ýÿ]/g, 'y');

// remove non-chars
				sortKey = sortKey.replace(/[^\$\@\.\,\:\;\-\w\s'\u007f-\uffff]/g, '');

// join multiple spaces
				sortKey = sortKey.replace(/ +/g, ' ');

// remove leading and trailing spaces
				sortKey = sortKey.replace(/^ +| +$/g, '');

				sortArray.push( [line, sortKey] );
			}

// sort lines
			sortArray = sortArray.sort(
				function(a, b) {
					if (a[1] <= b[1]) {
						return(-1);
					}
					else {
						return(1);
					}
				}
			);

// join lines
			var joined = '';
			for (var i = 0; i < sortArray.length; i ++) {
				joined += sortArray[i][0];
				if (i < sortArray.length - 1) {
					joined += '\n';
				}
			}
			joined = joined.replace(/\x00/g, '\n');
			obj.changed.plain = pre + joined + post;

			obj.changed.keepSel = true;
			break;

// undo all
		case 'wikEdUndoAll':
			if (wikEd.lastVersion == null) {
				wikEd.lastVersion = obj.changed.plain;
			}
			obj.changed.plain = wikEd.origVersion;
			obj.changed.plain = obj.changed.plain.replace(/&/g, '&amp;');
			obj.changed.plain = obj.changed.plain.replace(/>/g, '&gt;');
			obj.changed.plain = obj.changed.plain.replace(/</g, '&lt;');
			break;

// redo all
		case 'wikEdRedoAll':
			if (wikEd.lastVersion != null) {
				obj.changed.plain = wikEd.lastVersion;
			}
			break;

// create wikilink
		case 'wikEdWikiLink':
			if ( /\[\[((.|\n)*?)\]\]/.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/\[\[(.*?)\|\s*(.*?)\s*\]\]/g, '$2');
				obj.changed.plain = obj.changed.plain.replace(/\[\[((.|\n)*?)\]\]/g, '$1');
			}
			else {
				obj.changed.plain = '[[' + obj.changed.plain + ']]';
				obj.changed.plain = obj.changed.plain.replace(/(\[\[)( *)((.|\n)*?)( *)(\]\])/, '$2$1$3$6$5');
			}
			obj.changed.keepSel = true;
			break;

// create weblink
		case 'wikEdWebLink':
			if ( /\[((.|\n)*?)\]/.test(obj.changed.plain) ) {
				obj.changed.plain = obj.changed.plain.replace(/\[((.|\n)*?)\]/g, '$1');
			}
			else {
				obj.changed.plain = '[' + obj.changed.plain + ']';
				obj.changed.plain = obj.changed.plain.replace(/(\[)( *)((.|\n)*?)( *)(\])/, '$2$1$3$6$5');
			}
			obj.changed.keepSel = true;
			break;

// decrease heading level
		case 'wikEdDecreaseHeading':

// decrease heading
			obj.changed.plain = obj.changed.plain.replace(/(^|\n)=(=+) *(.*?) *=+(?=\n|$)/g, '$1$2 $3 $2');

// remove heading
			obj.changed.plain = obj.changed.plain.replace(/(^|\n)=(?!=) *(.*?) *=+(?=\n|$)/g, '$1$2');

// adjust closing tags
			obj.changed.plain = obj.changed.plain.replace(/(^|\n)(=+) *(.*?) *=+(?=\n|$)/g, '$1$2 $3 $2');
			obj.changed.keepSel = true;
			break;

// increase heading level
		case 'wikEdIncreaseHeading':

// increase heading
			obj.changed.plain = obj.changed.plain.replace(/(^|\n)(=+) *(.*?) *=+(?=\n|$)/g, '$1=$2 $3 $2=');

// create new heading
			if (/\n/.test(obj.changed.plain) == false) {
				obj.changed.plain = obj.changed.plain.replace(/(^|\n)([^=\s].*?)(?=\n|$)/g, '$1== $2 ==');
			}

// adjust closing tags
			obj.changed.plain = obj.changed.plain.replace(/(^|\n)(=+) *(.*?) *=+(?=\n|$)/g, '$1$2 $3 $2');
			obj.changed.keepSel = true;
			break;

// increase bullet list
		case 'wikEdIncreaseBulletList':
			obj.changed.plain = obj.changed.plain.replace(/(.+)/g,
				function (p, p1) {
					p1 = p1.replace(/^ *([\*\#\:\;]*) *()/g, '*$1 ');
					return(p1);
				}
			);
			obj.changed.keepSel = true;
			break;

// decrease bullet list
		case 'wikEdDecreaseBulletList':
			obj.changed.plain = obj.changed.plain.replace(/(.+)/g,
				function (p, p1) {
					p1 = p1.replace(/^[\*\#\:\;] *()/g, '');
					return(p1);
				}
			);
			obj.changed.keepSel = true;
			break;

// increase numbered list
		case 'wikEdIncreaseNumberList':
			obj.changed.plain = obj.changed.plain.replace(/(.+)/g,
				function (p, p1) {
					p1 = p1.replace(/^ *([\*\#\:\;]*) *()/g, '#$1 ');
					return(p1);
				}
			);
			obj.changed.keepSel = true;
			break;

// decrease numbered list
		case 'wikEdDecreaseNumberList':
			obj.changed.plain = obj.changed.plain.replace(/(.+)/g,
				function (p, p1) {
					p1 = p1.replace(/^[\*\#\:\;] *()/g, '');
					return(p1);
				}
			);
			obj.changed.keepSel = true;
			break;

// increase indented list
		case 'wikEdIncreaseIndentList':
			obj.changed.plain = obj.changed.plain.replace(/(.+)/g,
				function (p, p1) {
					p1 = p1.replace(/^ *([\*\#\:\;]*) *()/g, ':$1 ');
					return(p1);
				}
			);
			obj.changed.keepSel = true;
			break;

// decrease indented list
		case 'wikEdDecreaseIndentList':
			obj.changed.plain = obj.changed.plain.replace(/(.+)/g,
				function (p, p1) {
					p1 = p1.replace(/^[\*\#\:\;] *()/g, '');
					return(p1);
				}
			);
			obj.changed.keepSel = true;
			break;

// create definition list
		case 'wikEdDefinitionList':
			obj.changed.plain = obj.changed.plain.replace(/(.+)/g,
				function (p, p1) {
					p1 = p1.replace(/^ *([^\s\;]+) *()/g, '; $1 : ');
					return(p1);
				}
			);
			break;

// create image
		case 'wikEdImage':
			if (obj.changed.plain != '') {
				obj.changed.plain = '[[Image:<span class="wikEdInsertHere">' + wikEd.config.text['image filename'] + '</span>|thumb|<span class="wikEdInsertHere">' + wikEd.config.text['image width'] + '</span>px|' + obj.changed.plain + ']]';
			}
			else {
				obj.changed.plain = '[[Image:<span class="wikEdInsertHere">' + wikEd.config.text['image filename'] + '</span>|thumb|<span class="wikEdInsertHere">' + wikEd.config.text['image width'] + '</span>px|<span class="wikEdInsertHere"> </span>]]';
				if (obj.focusWord != null) {
					if (obj.focusWord.plain != '') {
						obj.changed.plain = ' ' + obj.changed.plain + ' ';
					}
				}
			}
			break;

// create table
		case 'wikEdTable':
			if (obj.changed.plain != '') {
				obj.changed.plain = obj.changed.plain.replace(/(^|\n) *()/g, '\n|-\n| ');
				obj.changed.plain = obj.changed.plain.replace(/^\n\|\-\n/, '\n{| class="wikitable" border="1"\n');
				obj.changed.plain = obj.changed.plain.replace(/$/g, '\n|}\n');
			}
			else if (wikEd.tableMode == true) {
				obj.changed.plain = '\n<table class="wikitable" border="1"><caption><span class="wikEdInsertHere">' + wikEd.config.text['table caption'] + '</span></caption><tr><th><span class="wikEdinserthere">' + wikEd.config.text['table heading'] + '</span></th><th><span class="wikEdinserthere">' + wikEd.config.text['table heading'] + '</span></th></tr><tr><td><span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span></td><td><span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span></td></tr><tr><td><span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span></td><td><span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span></td></tr></table>\n';
				if (obj.focusLine.plain != '') {
					obj.changed.plain = '\n' + obj.changed.plain + '\n';
				}
			}
			else {
				obj.changed.plain = '\n{| class="wikitable" border="1"\n|+ <span class="wikEdInsertHere">' + wikEd.config.text['table caption'] + '</span>\n! <span class="wikEdinserthere">' + wikEd.config.text['table heading'] + '</span> !! <span class="wikEdInsertHere">' + wikEd.config.text['table heading'] + '</span>\n|-\n| <span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span> || <span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span>\n|-\n| <span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span> || <span class="wikEdInsertHere">' + wikEd.config.text['table cell'] + '</span>\n|}\n';
				if (obj.focusLine.plain != '') {
					obj.changed.plain = '\n' + obj.changed.plain + '\n';
				}
			}
			break;

// wikify: always done above
		case 'wikEdWikify':
			break;

// textify: strip html from pasted content
		case 'wikEdTextify':
			wikEd.Textify(obj.changed);
			if (parameters == 'shift') {
				highlightNoTimeOut = true;
			}
			break;

// redirect
		case 'wikEdRedirect':
			var linkTarget;
			if (obj.selection.plain != '') {
				linkTarget = obj.selection.plain;
			}
			else if (obj.selectionWord.plain != '') {
				linkTarget = obj.selectionWord.plain;
			}
			else {
				linkTarget = '<span class="wikEdInsertHere">' + wikEd.config.text['redirect article link'] + '</span>';
			}

// remove link text after |
			linkTarget = linkTarget.replace(/\|(.|\n)*()/, '');

// remove formatting and spaces
			linkTarget = linkTarget.replace(/^(=+|'+|<[^>]*>|\s+|\[)+((.|\n)*?)(=+|'+|<[^>]*>|\s+|\])+$/g, '$2');
			linkTarget = linkTarget.replace(/&lt;/g, '<');
			linkTarget = linkTarget.replace(/&gt;/g, '>');
			linkTarget = linkTarget.replace(/\s+/g, ' ');
			linkTarget = linkTarget.replace(/^\s+|\s+$/g, '');

			obj.changed.plain = '#REDIRECT [[' + linkTarget + ']]';

// append to summary
			if (wikEd.wikiGlobals.wgUseAutomaticEditSummaries != true) {
				if (wikEd.inputElement.summary != null) {
					if ( (obj.selection.plain != '') || (obj.selectionWord.plain != '') ) {
						wikEd.inputElement.summary.value = wikEd.inputElement.summary.value.replace(/#REDIRECT( \[\[[^\]]*\]\])?(, *)?/g, '');
						wikEd.inputElement.summary.value = wikEd.AppendToSummary(wikEd.inputElement.summary.value, '#REDIRECT [[' + linkTarget + ']]');
					}
					else {
						wikEd.inputElement.summary.value = wikEd.AppendToSummary(wikEd.inputElement.summary.value, '#REDIRECT');
					}
				}
			}
			selectChanged = false;
			break;

// find and replace
		case 'wikEdFindPrev':
		case 'wikEdFindNext':
		case 'wikEdJumpPrev':
		case 'wikEdJumpNext':
		case 'wikEdReplacePrev':
		case 'wikEdReplaceNext':
		case 'wikEdFindAll':
		case 'wikEdReplaceAll':

// get the find text
			var findText;

// unescape <, >, and &
			obj.changed.plain = obj.changed.plain.replace(/&lt;/g, '<');
			obj.changed.plain = obj.changed.plain.replace(/&gt;/g, '>');
			obj.changed.plain = obj.changed.plain.replace(/&amp;/g, '&');

// copy selection/word under cursor to find field
			if ( (parameters == 'shift') && ( (buttonId == 'wikEdFindNext') || (buttonId == 'wikEdReplaceNext') ) ) {
				if (/\n/.test(obj.changed.plain) == false) {
					if (buttonId == 'wikEdFindNext') {
						wikEd.inputElement.find.value = obj.changed.plain;
					}
					else {
						wikEd.inputElement.replace.value = obj.changed.plain;
					}
					obj.changed.keepSel = true;
					obj.changed.plain = null;
					break;
				}
			}

// get the find text from the selection
			if ( (buttonId == 'wikEdJumpPrev') || (buttonId == 'wikEdJumpNext') ) {
				findText = obj.changed.plain;
				if (obj.selection.plain == '') {
					obj.changed.keepSel = true;
					obj.changed.plain = null;
					break;
				}
			}

// get the find text from the find field
			else {
				if (wikEd.inputElement.find.value != '') {
					findText = wikEd.inputElement.find.value;
				}
				else {
					obj.changed.plain = null;
					break;
				}
			}

// get button status
			var regExpChecked = wikEd.GetAttribute(wikEd.regExp, 'checked');
			var caseSensitiveChecked = wikEd.GetAttribute(wikEd.caseSensitive, 'checked');

// get the replace text
			var replaceText = wikEd.inputElement.replace.value;

// format the find and replace texts for a plain text search
			var useRegExp = true;
			if ( (regExpChecked == 'false') || (buttonId == 'wikEdJumpPrev') || (buttonId == 'wikEdJumpNext') ) {
				useRegExp = false;
			}

// format the replace text for a regular expression search
			if ( (buttonId == 'wikEdReplacePrev') || (buttonId == 'wikEdReplaceNext') || (buttonId == 'wikEdReplaceAll') ) {
				if (useRegExp == true) {

// substitute \\ \n \r \t \' \" \127 \x1f \u12ef
					replaceText = replaceText.replace(/\\\\/g, '\x00');
					replaceText = replaceText.replace(/\\n/g, '\n');
					replaceText = replaceText.replace(/\\r/g, '\r');
					replaceText = replaceText.replace(/\\t/g, '\t');
					replaceText = replaceText.replace(/\\'/g, '\'');
					replaceText = replaceText.replace(/\\"/g, '\"');

					replaceText = replaceText.replace(/\\([0-7]{3})/g,
						function(p, p1) {
							return(String.fromCharCode(parseInt(p1, 8)));
						}
					);
					replaceText = replaceText.replace(/\\x([0-9a-fA-F]{2})/g,
						function(p, p1) {
							return(String.fromCharCode(parseInt(p1, 16)));
						}
					);
					replaceText = replaceText.replace(/\\u([0-9a-fA-F]{4})/g,
						function(p, p1) {
							return(String.fromCharCode(parseInt(p1, 16)));
						}
					);
					replaceText = replaceText.replace(/\x00/g, '\\');
				}
			}

// check the regexp
			var replacedFlag = false;
			var regExpFind;
			if (
				(buttonId == 'wikEdReplacePrev') || (buttonId == 'wikEdReplaceNext') || (buttonId == 'wikEdReplaceAll') ||
				(buttonId == 'wikEdFindPrev') || (buttonId == 'wikEdFindNext') || (buttonId == 'wikEdFindAll')
			) {
				var regExpFindText = findText;
				if (useRegExp != true){
					regExpFindText = regExpFindText.replace(/([\\^$*+?.()\[\]{}:=!|,\-])/g, '\\$1');
				}
				var regExpFlags = 'gm';
				if (caseSensitive != true) {
					regExpFlags += 'i';
				}
				try {
					regExpFind = new RegExp(regExpFindText, regExpFlags);
				}
				catch (err) {
					return;
				}
			}

// replace all
			if (buttonId == 'wikEdReplaceAll') {
				if (regExpFind.test(obj.changed.plain)) {
					obj.changed.plain = obj.changed.plain.replace(regExpFind, replaceText);
					replacedFlag = true;
				}
				else {
					obj.changed.plain = null;
				}
			}

// replace an existing selection
			else if ( (buttonId == 'wikEdReplacePrev') || (buttonId == 'wikEdReplaceNext') ) {
				if (regExpFind.test(obj.selection.plain)) {
					var replaced = obj.selection.plain.replace(regExpFind, replaceText);
					if (obj.changed.plain != replaced) {
						obj.changed.plain = replaced;
						replacedFlag = true;
					}
					else {
						obj.changed.plain = null;
					}
				}
				else {
					obj.changed.plain = null;
				}
			}

			else if (
				(buttonId == 'wikEdFindPrev') || (buttonId == 'wikEdFindNext') ||
				(buttonId == 'wikEdJumpPrev') || (buttonId == 'wikEdJumpNext')
			) {
				obj.changed.plain = null;
			}

			if (
				(buttonId == 'wikEdFindPrev') || (buttonId == 'wikEdFindNext') ||
				(buttonId == 'wikEdJumpPrev') || (buttonId == 'wikEdJumpNext') ||
				(buttonId == 'wikEdReplacePrev') || (buttonId == 'wikEdReplaceNext') ||
				(buttonId == 'wikEdFindAll')
			) {
				if (replacedFlag == false) {

// get direction
					var backwards = false;
					if ( (buttonId == 'wikEdFindPrev') || (buttonId == 'wikEdJumpPrev') || (buttonId == 'wikEdReplacePrev') ) {
						backwards = true;
					}

// get case sensitive
					var caseSensitive = false;
					if (caseSensitiveChecked == 'true') {
						caseSensitive = true;
					}

// find all
					if (buttonId == 'wikEdFindAll') {
						var found;
						var foundRanges = [];

// start at top of text
						wikEd.RemoveAllRanges(obj.sel);
						var range = wikEd.frameDocument.createRange();
						if (wikEd.frameBody.firstChild != null) {
							range.setStartBefore(wikEd.frameBody.firstChild);
						}
						range.collapse(true);
						range = obj.sel.addRange(range);

// cycle through matches
						var scrollTop = wikEd.frameBody.scrollTop;
						do {

// wikEd.Find(obj, findText, caseSensitive, backwards, wrap, useRegExp)
							found = wikEd.Find(obj, findText, caseSensitive, false, false, useRegExp);
							if (found == true) {
								foundRanges.push(obj.changed.range.cloneRange());
							}
						} while (found == true);

// scroll back
						if (regExpChecked == 'false') {
							wikEd.frameBody.scrollTop = scrollTop;
						}

// add the found ranges, Webkit does not support multiple selections
						wikEd.RemoveAllRanges(obj.sel);
						for (var i = 0; i < foundRanges.length; i ++) {
							obj.sel.addRange(foundRanges[i]);
						}
						obj.changed.plain = null;
						selectChanged = false;
					}

// normal find
					else {
						obj.selectChanged = selectChanged;
						wikEd.Find(obj, findText, caseSensitive, backwards, true, useRegExp);
						selectChanged = obj.selectChanged;
					}
				}
			}

// escape <, >, and &
			if (obj.changed.plain != null) {
				obj.changed.plain = obj.changed.plain.replace(/&/g, '&amp;');
				obj.changed.plain = obj.changed.plain.replace(/</g, '&lt;');
				obj.changed.plain = obj.changed.plain.replace(/>/g, '&gt;');
			}

// save search history to settings
			if ( (buttonId == 'wikEdFindPrev') || (buttonId == 'wikEdFindNext') || (buttonId == 'wikEdFindAll') ) {
				wikEd.AddToHistory('find');
			}
			if ( (buttonId == 'wikEdReplacePrev') || (buttonId == 'wikEdReplaceNext') || (buttonId == 'wikEdReplaceAll') ) {
				wikEd.AddToHistory('find');
				wikEd.AddToHistory('replace');
			}
			obj.changed.keepSel = true;
			break;

// fixbasic: fix characters, spaces, empty lines, certain headings, needed for all fixing functions
// to do: only certain changes in multiline tags: comments, tables, subst
		case 'wikEdFixBasic':
			wikEd.FixBasic(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixPunct':
			wikEd.FixPunct(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixMath':
			wikEd.FixMath(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixChem':
			wikEd.FixChem(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixUnicode':
			wikEd.FixUnicode(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixRedirect':
			wikEd.FixRedirectCall(obj.changed);
			return;
		case 'wikEdFixRedirectReplace':
			wikEd.FixRedirectReplace(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixUnits':
			wikEd.FixUnits(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixDashes':
			wikEd.FixDashes(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixHtml':
			wikEd.FixHTML(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixRegExTypo':
			if ( (wikEd.config.regExTypoFix == true) && (wikEd.typoRulesFind.length > 0) ) {
				wikEd.FixTypos(obj.changed);
			}
			else {
				obj.changed.plain = null;
			}
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixCaps':
			wikEd.FixCaps(obj.changed);
			obj.changed.keepSel = true;
			break;
		case 'wikEdFixAll':
			wikEd.FixAll(obj.changed);
			obj.changed.keepSel = true;
			break;

// source on
		case 'wikEdSource':
			obj.changed.plain = obj.changed.code;
			obj.changed.plain = obj.changed.plain.replace(/(<(br|p)\b.*?>)/g, '$1\n\n');
			obj.changed.plain = obj.changed.plain.replace(/&/g, '&amp;');
			obj.changed.plain = obj.changed.plain.replace(/</g, '&lt;');
			obj.changed.plain = obj.changed.plain.replace(/>/g, '&gt;');
			highlightSyntax = false;
			break;

// insert tags
		case 'wikEdInsertTags':
			var tagOpen = parameters[0] || '';
			var tagClose = parameters[1] || '';
			var sampleText = parameters[2] || '';
			tagOpen = tagOpen.replace(/&/g, '&amp;');
			tagOpen = tagOpen.replace(/</g, '&lt;');
			tagOpen = tagOpen.replace(/>/g, '&gt;');
			tagClose = tagClose.replace(/&/g, '&amp;');
			tagClose = tagClose.replace(/</g, '&lt;');
			tagClose = tagClose.replace(/>/g, '&gt;');
			tagsampleText = sampleText.replace(/&/g, '&amp;');
			tagsampleText = sampleText.replace(/</g, '&lt;');
			tagsampleText = sampleText.replace(/>/g, '&gt;');

// single string to insert
			if ( (tagOpen.length > 0) && (tagClose.length == 0) && (sampleText.length == 0) ) {
				obj.changed = obj.cursor;
				obj.changed.plain = tagOpen;
			}

// opening and closing strings
			else if ( (obj.changed.plain == '') && (sampleText.length > 0) ) {
				obj.changed.plain = tagOpen + sampleText + tagClose;

// select sample text
				selectChangedText = sampleText;
				obj.changed.keepSel = true;
			}
			else {
				obj.changed.plain = tagOpen + obj.changed.plain + tagClose;
			}
			break;

// convert wiki tables to html // {{TABLE}}
		case 'wikEdTablify':
			obj.changed.keepSel = true;
			if (wikEd.tableMode == true) {
				wikEd.WikiTableToHtml(obj.changed);
			}
			break;

// update text view using current control button settings // {{TABLE}}
		case 'wikEdUpdateAll':
			obj.changed.keepSel = true;
			if (parameters != null) {
				if (parameters.keepSel == false) {
					obj.changed.keepSel = false;
				}
			}
			break;

// custom edit functions
		default:
			if (CustomHandler != null) {
				CustomHandler(obj);
			}
			else {
				alert('Unknown edit function \'' + buttonId + '\'');
			}
			break;
	}

// pause frame spellchecking
	var pauseFrameSpellchecking = false;
	var frameSpellchecking = wikEd.frameBody.spellcheck;
	if (frameSpellchecking == true) {
		var wholeLength = 0;
		var changedLength = 0;
		if (obj.whole != null) {
			if (obj.whole.plain != null) {
				wholeLength = obj.whole.plain.length;
			}
		}
		if (obj.changed.plain != null) {
			changedLength = obj.changed.plain.length;
		}
		if ( (changedLength > 10000) || (wholeLength > 10000) ) {
			pauseFrameSpellchecking = true;
			wikEd.frameBody.spellcheck = false;
		}
	}

// get the scroll position
	var frameScrollTop = wikEd.frameBody.scrollTop;
	var frameScrollLeft = wikEd.frameBody.scrollLeft;

// update the selection ranges, do not add any text changes
	if (obj.changed.plain == null) {
		if (buttonId != 'wikEdFindAll') {
			wikEd.RemoveAllRanges(obj.sel);
			obj.sel.addRange(obj.changed.range);

// scroll the selected text into the viewport
			if (selectChanged != false) {
				wikEd.ScrollToSelection();
			}
		}
	}

// apply text changes
	else {

// a text change erases the last version for redo all
		if ( (buttonId != 'wikEdUndo') && (buttonId != 'wikEdRedo') && (buttonId != 'wikEdUndoAll') ) {
			wikEd.lastVersion = null;
		}

// highlight the syntax
		obj.html = obj.changed.plain;
		if (highlightSyntax == true) {
			if (obj.changed.from == 'whole') {
				obj.whole = true;
			}
			wikEd.HighlightSyntax(obj, highlightNoTimeOut);
		}

// at least highlight tab characters
		else {
			obj.html = obj.html.replace(/(\t)/g, '<span class="wikEdTabPlain">$1</span><!--wikEdTabPlain-->');
		}

// display multiple blanks as blank-&nbsp;
		obj.html = obj.html.replace(/(^|\n) /g, '$1&nbsp;');
		obj.html = obj.html.replace(/ (\n|$)/g, '&nbsp;$1');
		obj.html = obj.html.replace(/ {2}/g, '&nbsp; ');
		obj.html = obj.html.replace(/ {2}/g, '&nbsp; ');

// newlines to <br>
		obj.html = obj.html.replace(/\n/g, '<br>');

// make changed range text the current selection
		wikEd.RemoveAllRanges(obj.sel);
		var range = obj.changed.range;
		obj.sel.addRange(range);

// replace the selection with changed text
// Opera 9.50beta bug: inserthtml removes blanks and generates consecutive text nodes
		if (obj.html != '') {
			var reselectBefore = '';
			var reselectAfter = '';
			if (obj.changed.from != 'whole') {
				wikEd.insertCounter ++;
				reselectBefore = '<span class="wikEdScrollBefore" id="wikEdScrollBefore' + wikEd.insertCounter + '"></span>';
				reselectAfter = '<span class="wikEdScrollAfter" id="wikEdScrollAfter' + wikEd.insertCounter + '"></span>';
			}
			wikEd.FrameExecCommand('inserthtml', reselectBefore + obj.html + reselectAfter);
		}
		else if (obj.sel.isCollapsed == false) {
			wikEd.FrameExecCommand('delete');
		}

// select the whole text after replacing the whole text and scroll to same height
		if (obj.changed.from == 'whole') {
			wikEd.RemoveAllRanges(obj.sel);
			wikEd.frameBody.scrollTop = frameScrollTop;
			var range = wikEd.frameDocument.createRange();
			range.setStartBefore(wikEd.frameBody.firstChild);
			range.setEndAfter(wikEd.frameBody.lastChild);
			obj.sel.addRange(range);
			selectChanged = false;
		}

// select the changed text and scroll it into the viewport
		else if (selectChanged != false) {
			wikEd.RemoveAllRanges(obj.sel);
			var range = wikEd.frameDocument.createRange();
			var startNodeReselect = wikEd.frameDocument.getElementById('wikEdScrollBefore' + wikEd.insertCounter);
			var endNodeReselect = wikEd.frameDocument.getElementById('wikEdScrollAfter' + wikEd.insertCounter);
			range.setStartAfter(startNodeReselect);
// should be range.setEndAfter, but that causes caret at start of next line due to https://bugzilla.mozilla.org/show_bug.cgi?id=587461
			range.setEndBefore(endNodeReselect);
			obj.sel.addRange(range);
			wikEd.ScrollToNodes(startNodeReselect, endNodeReselect);
		}
	}

// remove selection, keep whole text auto-selection as warning
	if (
		( (obj.changed.keepSel != true) && (obj.changed.from != 'whole') ) ||
		(obj.changed.keepSel == false) ||
		(buttonId == 'wikEdRedirect') ||
		( (buttonId == 'wikEdWikify') && (parameters == 'whole') )
	) {
		if (obj.sel.rangeCount == 0) {
			obj.sel.collapse(wikEd.frameBody, 0);
		}
		else {
			obj.sel.collapseToEnd();
		}

// focus edit area to continue editing as there is no selection that would be overwritten
		wikEd.frameWindow.focus();
	}

// reset button to active, reset cursor
	if (buttonObj != null) {
		if (buttonObj.className != 'wikEdButtonInactive') {
			buttonObj.className = 'wikEdButton';
		}
		buttonObj.style.cursor = 'auto';
	}

// grey out inactive buttons
	wikEd.InactiveButtons();

// add event handlers to unhide refs and templates
	if ( (highlightSyntax == true) && (obj.changed.plain != null) ) {

// add ref and template names to hide buttons
		wikEd.HighlightNamedHideButtons();

// add event handlers to unhide refs and templates
		wikEd.HideAddHandlers();

// add event handlers to make highlighted frame links ctrl-clickable
		wikEd.LinkifyAddHandlers();
	}

// resume frame spellchecking
	if (pauseFrameSpellchecking == true) {
		wikEd.frameBody.spellcheck = true;
	}

	return;
};


//
// wikEd.LocalPreviewAjaxHandler: process the returned article preview
//

wikEd.LocalPreviewAjaxHandler = function(ajax) {

	wikEd.previewIsAjax = true;

// get response
	var html = ajax.responseText;

// livepreview
	if (html.indexOf('<livepreview>') != -1) {
		html = html.replace(/\s*<\/livepreview>\s*()/, '');
		html = html.replace(/\s*<\/preview>\s*()/, '');
		html = html.replace(/&lt;/g, '<');
		html = html.replace(/&gt;/g, '>');
		html = html.replace(/&quot;/g, '"');
		html = html.replace(/&apos;/g, '\'');
		html = html.replace(/&amp;/g, '&');
		html = html.replace(/(.|\n)*<div class=("|')previewnote("|')>(.|\n)*?<\/div>/, '');
	}

// full preview page
	else {

// attach <style> stylesheet declarations to document (GeSHi)
		var regExpMatch;
		while ( (regExpMatch = /<()style\b[^>]*?type="text\/css">((.|\n)*?)<\/style>/gi.exec(html)) != null) {
			var css = regExpMatch[2];
			var stylesheet = new wikEd.StyleSheet(document);
			stylesheet.AddCSSRules(css);
		}

// get preview html
		html = wikEd.StringGetInnerHTML(html, 'div', 'id', 'wikiPreview', true);
		html = wikEd.StringGetInnerHTML(html, 'div', 'class', 'previewnote', true, false, true);
		html = html.replace(/<!--(.|\n)*?-->/g, '');
		html = html.replace(/\s+$/g, '');
	}

// clean form elements
	html = html.replace(/<\/?form\b[^>]*>/g, '');
	html = html.replace(/(<\/?input\b[^>]*?)\bname="search"([^>]*>)/g, '$1$2');

// remove cite errors for automatic section preview refs
	html = html.replace(/(<div\b[^>]*?\bclass="wikEdPreviewRefs"[^>]*>(.|\s)*$)/,
		function (p, p1, p2) {
			p1 = p1.replace(/<strong\b[^>]*?\bclass="error"[^>]*>(.|\s)*?<\/strong>/g, '');
			return(p1);
		}
	);
	wikEd.previewBox.innerHTML = html;

// init sortable tables (wikibits.js)
	if (typeof(sortables_init) == 'function') {
		sortables_init();
	}

// init collapsible tables (common.js)
	if (typeof(createCollapseButtons) == 'function') {
		createCollapseButtons();
	}

// scroll to button, textarea, or preview field
	wikEd.ScrollToPreview();

// run scheduled custom functions
	wikEd.ExecuteHook(wikEd.config.previewHook);

	return;
};


//
// wikEd.FilePreviewAjaxHandler: process the returned image addresses
//

wikEd.FilePreviewAjaxHandler = function(ajax) {

// get response
	var html = ajax.responseText;

// html-ize
	html = html.replace(/\s*<\/preview>\s*()/, '');
	html = html.replace(/\s*<\/livepreview>\s*()/, '');
	html = html.replace(/&lt;/g, '<');
	html = html.replace(/&gt;/g, '>');
	html = html.replace(/&amp;/g, '&');
	html = html.replace(/&quot;/g, '"');
	html = html.replace(/&apos;/g, '\'');
	html = html.replace(/<\/?(br|p)\b.*?>/g, '\n');

// parse response into file url cache
	var regExpFile = new RegExp('\\n((Image|File|' + wikEd.config.text['wikicode Image'] + '|' + wikEd.config.text['wikicode File'] + '):[^ ]+) +(\\d+) +(.*)', 'ig');
	var regExpMatch;
	while ( (regExpMatch = regExpFile.exec(html)) != null) {
		var file = regExpMatch[1];
		var filePreviewSize = regExpMatch[3];
		var links = regExpMatch[4];
		var fileObj = {};
		var regExpMatch;
		if ( (regExpMatch = /\bsrc="(.+?)"/.exec(links)) != null) {
			fileObj.url = regExpMatch[1];
			if ( (regExpMatch = /\bwidth="(\d+)"/.exec(links)) != null) {
				fileObj.width = parseInt(regExpMatch[1]);
			}
			if ( (regExpMatch = /\bheight="(\d+)"/.exec(links)) != null) {
				fileObj.height = parseInt(regExpMatch[1]);
			}
		}
		else {
			fileObj.url = wikEd.config.image['noFile'];
			fileObj.width = 16;
			fileObj.height = 16;
		}
		wikEd.filePreviewCache['wikEd' + file + filePreviewSize] = fileObj;
	}

// cycle through file preview spans and add missing images as background
	for (var i = 0; i < wikEd.filePreviewNo; i ++) {
		if (wikEd.filePreviewIds[i] != '') {
			var span = wikEd.frameDocument.getElementById('wikEdFilePreview' + i);
			var fileNameSize = wikEd.filePreviewIds[i];
			var fileObj = wikEd.filePreviewCache['wikEd' + fileNameSize];
			if (fileObj != null) {
				span.style.backgroundImage = 'url(' + fileObj.url + ')';
				if (fileObj.height != null) {
					span.style.height = fileObj.height + 'px';
				}
				if (fileObj.width != null) {
					span.style.width = fileObj.width + 'px';
				}
				span.style.display = 'block';
			}
			wikEd.filePreviewIds[i] = '';
		}
	}

	return;
};


//
// wikEd.DiffResponse: calculate calculate and linkify the diff between two versions (code copied to wikEdDiff.js)
//

wikEd.DiffResponse = function(oldVersion, newVersion) {

// add trailing newline
	if (oldVersion.substr(oldVersion.length - 1, 1) != '\n') {
		oldVersion += '\n';
	}
	if (newVersion.substr(newVersion.length - 1, 1) != '\n') {
		newVersion += '\n';
	}

// call external diff program
	var diffText = WDiffString(oldVersion, newVersion);
	if (wikEd.config.fullDiff != true) {
		diffText = WDiffShortenOutput(diffText);
	}

// linkify blockwise with breaks at delete and block move tags
	var diffTextLinkified = '';
	var regExp = /<span\b[^>]+?\bclass="wDiffHtml(Delete|Block)"[^>]*>/g;
	var regExpMatch;
	var pos = 0;
	while ( (regExpMatch = regExp.exec(diffText)) != null) {
		diffTextLinkified += wikEd.DiffLinkify(diffText.substring(pos, regExpMatch.index)) + regExpMatch[0];
		pos = regExp.lastIndex;
	}
	diffTextLinkified += wikEd.DiffLinkify(diffText.substr(pos));

	return(diffTextLinkified);
};


//
// wikEd.DiffLinkify: linkify external links and wikilinks in diffed text as <a> anchor elements (code copied to wikEdDiff.js)
//

wikEd.DiffLinkify = function(html) {

// &lt; &gt; to \x00 \x01
	html = html.replace(/&lt;/g, '\x00');
	html = html.replace(/&gt;/g, '\x01');

// external links
	html = html.replace(/\b(((https?|ftp|irc|gopher):\/\/)|news:|mailto:)([^\x00-\x20\s"\[\]\x7f\|\{\}<>]|<[^>]*>)+?(?=([\!"\(\)\.\,\:\;\‘-•]*\s|[\x00-\x20\s"\[\]\x7f\|\{\}]))/gi,
		function (p) {
			var whole = p;

			var title = whole;
			title = title.replace(/\x00!--.*?--\x01/g, '');
			title = title.replace(/.*--\x01|\x00!--.*/g, '');
			title = title.replace(/<.*?>/g, '');
			title = title.replace(/^.*>|<.*$/g, '');
			title = title.replace(/^\s+|\s+$/g, '');
			title = decodeURI(title);

			var url = title.replace(/\s/g, '_');
			url = encodeURI(url);
			url = url.replace(/"/g, '%22');
			url = url.replace(/'/g, '%27');
			url = url.replace(/#/g, '%23');

			var linkTitle = title.replace(/"/g, '&quot;');

// linkify all url text fragments between highlighting <span>s seperately
			var anchorOpen = '<a href = "' + url + '" style="text-decoration: none; color: inherit; color: expression(parentElement.currentStyle.color);" title="' + linkTitle + '">';
			var anchorClose = '</a>';
			whole = whole.replace(/(<[^>]*>)/g, anchorClose + '$1' + anchorOpen);
			return(anchorOpen + whole + anchorClose);
		}
	);

// linkify links and templates
	if ( (wikEd.wikiGlobals.wgServer != null) && (wikEd.wikiGlobals.wgArticlePath != null) ) {

//                       1 [[ 2title        23 | text       3   ]]1 4 {{ 5title        56                6 4
		html = html.replace(/(\[\[([^|\[\]{}\n]+)(\|[^\[\]{}<>]*)?\]\])|(\{\{([^|\[\]{}\n]*)([^\[\]{}<>]*\}\})?)/g,
		function (p, p1, p2, p3, p4, p5, p6) {
				var articleName = p2 || '';
				var templateName = p5 || '';
				var whole = p;

// extract title
				var title = articleName;
				if (title == '') {
					title = templateName;
				}
				title = title.replace(/\x00!--.*?--\x01/g, '');
				title = title.replace(/.*--\x01|\x00!--.*/g, '');
				title = title.replace(/<.*?>/g, '');
				title = title.replace(/^.*>|<.*$/g, '');
				title = title.replace(/^\s+|\s+$/g, '');

// [[/subpage]] refers to a subpage of the current page, [[#section]] to a section of the current page
				if ( (title.indexOf('/') == 0) || (title.indexOf('#') == 0) ) {
					title = wikEd.pageName + title;
				}

// create url
				var url = title.replace(/\s/g, '_');
				url = encodeURI(url);
				url = url.replace(/"/g, '%22');
				url = url.replace(/'/g, '%27');
				url = url.replace(/#/g, '%23');
				var articleTitle = title.replace(/"/g, '&quot;');
				if (templateName != '') {
					if (/:/.test(title) == false) {
						url = 'Template:' + url;
						articleTitle = 'Template:' + articleTitle;
					}
				}
				url = wikEd.wikiGlobals.wgServer + wikEd.wikiGlobals.wgArticlePath.replace(/\$1/, url);

// linkify all text fragments between highlighting <span>s seperately
				var anchorOpen = '<a href = "' + url + '" style = "text-decoration: none; color: inherit; color: expression(parentElement.currentStyle.color)" title="' + articleTitle + '">';
				var anchorClose = '</a>';
				whole = whole.replace(/(<[^>]*>)/g, anchorClose + '$1' + anchorOpen);
				return(anchorOpen + whole + anchorClose);
			}
		);
	}

// \x00 and \x01 back to &lt; and &gt;
	html = html.replace(/\x00/g, '&lt;');
	html = html.replace(/\x01/g, '&gt;');

	return(html);
};


//
// wikEd.StringGetInnerHTML: get innerHTML of element from html in a string; can also get text before or after node
//

wikEd.StringGetInnerHTML = function(html, tag, attrib, value, defaultToWholeHTML, getBeforeHTML, getAfterHTML) {

	var startPos;
	var startLength;
	var endPos;
	var endLength;
	var level = 0;
	var string = '';
	var regExpMatch;

	var attribValue = '';
	if (attrib != '') {
		attribValue = '[^>]*?' + attrib + '\\s*=\\s*("|\\\')?' + value + '\\1';
	}
	var regExpStart = new RegExp('<' + tag + '\\b' + attribValue + '[^>]*?>', 'gi');
	if ( (regExpMatch = regExpStart.exec(html)) != null) {
		startPos = regExpMatch.index;
		startLength = regExpMatch[0].length;
		var regExpParse = new RegExp('<(\\/?)' + tag + '\\b.*?>', 'g');
		regExpParse.lastIndex = startPos;
		while ( (regExpMatch = regExpParse.exec(html)) != null) {
			if (regExpMatch[1] == '') {
				level ++;
			}
			else {
				level --;
				if (level == 0) {
					endPos = regExpMatch.index;
					endLength = regExpMatch[0].length;
					break;
				}
			}
		}
	}

// return whole html if node does not exist
	if (endPos == null) {
		if (defaultToWholeHTML == true) {
			string = html;
		}
	}

// return text before node
	else if (getBeforeHTML == true) {
		string = html.substr(0, startPos);
	}

// return text after node
	else if (getAfterHTML == true) {
		string = html.substr(endPos + endLength);
	}

// return innerHTML of node
	else {
		string = html.substring(startPos + startLength, endPos);
	}

	return(string);
};


//
// wikEd.ScrollToPreview: scroll to edit buttons, textarea, or preview field depending on current position
//

wikEd.ScrollToPreview = function() {

// reset fixed height to auto
	wikEd.previewBox.style.height = 'auto';

	var scrollOffset = window.pageYOffset || document.body.scrollTop;
	var inputOffset = wikEd.GetOffsetTop(wikEd.inputWrapper);
	var editOffset = wikEd.GetOffsetTop(wikEd.editWrapper);
	var submitOffset = 0;
	if (wikEd.saveButton != null) {
		submitOffset = wikEd.GetOffsetTop(wikEd.saveButton);
	}
	else if (wikEd.previewButton != null) {
		submitOffset = wikEd.GetOffsetTop(wikEd.previewButton);
	}
	else if (wikEd.diffPreviewButton != null) {
		submitOffset = wikEd.GetOffsetTop(wikEd.diffPreviewButton);
	}
	var editHeight = wikEd.editWrapper.clientHeight;

	if (scrollOffset > submitOffset) {
		window.scroll(0, submitOffset);
	}
	else if (scrollOffset > (editHeight / 2 + editOffset) ) {
		window.scroll(0, submitOffset);
	}
	else if (scrollOffset > editOffset) {
		window.scroll(0, editOffset);
	}
	else {
		window.scroll(0, inputOffset);
	}
	return;
};


//
// wikEd.LinkifyAddHandlers: register click handlers to make highlighted frame links ctrl-clickable (linkify)
//

wikEd.LinkifyAddHandlers = function() {

	if (wikEd.config.linkify != true) {
		return;
	}

// much faster than individual getElementById in SeaMonkey 1.1.18
	var spans = wikEd.frameDocument.getElementsByTagName('span');
	for (var i = 0; i < spans.length; i ++) {
		var spanId = spans[i].id;
		if (spanId != null) {
			if (spanId.indexOf('wikEdLinkify') == 0) {
				wikEd.AddEventListener(spans[i], 'click', wikEd.LinkifyHandler, true);
			}
		}
	}
	return;
};


//
// wikEd.HighlightNamedHideButtons: register :before text for named hiding buttons
//

wikEd.HighlightNamedHideButtons = function() {

	if (wikEd.refHide != true) {
		return;
	}

	var rules = '';

// references
	for (var i = 0; i < wikEd.referenceArray.length; i ++) {
		if (wikEd.referenceArray[i].added == true) {
			continue;
		}
		rules += '.wikEdRefButton' + i + ' { border: 1px solid; border-color: #e8e8e8 #444 #444 #e8e8e8; background: #d8d4d0; }\n';

		rules += '.wikEdRefButtonShow' + i + ' { border: 1px solid; border-color: #000 #e8e8e8 #e8e8e8 #000; background: #c8c4c0; }\n';

		rules += '.wikEdRefButton' + i + ':before, .wikEdRefButtonShow' + i + ':before { content: "' + wikEd.config.text.hideRef + ' ' + wikEd.referenceArray[i].text + '"; line-height: 0.75em; font-size: 65%; color: #000; font-family: sans-serif; }\n';

		wikEd.referenceArray[i].added = true;
	}

// templates
	for (var i = 0; i < wikEd.templateArray.length; i ++) {
		if (wikEd.templateArray[i].added == true) {
			continue;
		}
		rules += '.wikEdTemplButton' + i + ' { border: 1px solid; border-color: #e8e8e8 #444 #444 #e8e8e8; background: #d8d4d0; }\n';

		rules += '.wikEdTemplButtonShow' + i + ' { border: 1px solid; border-color: #000 #e8e8e8 #e8e8e8 #000; background: #c8c4c0; }\n';

		rules += '.wikEdTemplButton' + i + ':before, .wikEdTemplButtonShow' + i + ':before { content: "' + wikEd.config.text.hideTempl + ' ' + wikEd.templateArray[i].text + '"; line-height: 0.75em; font-size: 65%; color: #000; font-family: sans-serif; }\n';

		wikEd.templateArray[i].added = true;
	}

// character entities
	for (var i = 0; i < wikEd.charEntityArray.length; i ++) {
		if (wikEd.charEntityArray[i].added == true) {
			continue;
		}
		var character = wikEd.charEntityArray[i].text;
		if (character == '"') {
			character = '\\' + character;
		}
		rules += '.wikEdCharEntityButton' + i + ' { border: 1px solid; border-color: #e8e8e8 #444 #444 #e8e8e8; background: #d8d4d0; border-color: rgba(255, 255, 255, 0.75)  rgba(64, 64, 64, 0.5)  rgba(64, 64, 64, 0.5) rgba(255, 255, 255, 0.75); background: rgba(192, 192, 192, 0.3); }\n';

		rules += '.wikEdCharEntityButtonShow' + i + ' { border: 1px solid; border-color: #000 #e8e8e8 #e8e8e8 #000; background: #c8c4c0; border-color: rgba(64, 64, 64, 0.5) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.75) rgba(64, 64, 64, 0.5); background: rgba(192, 192, 192, 0.3); }\n';

		rules += '.wikEdCharEntityButton' + i + ':before, .wikEdCharEntityButtonShow' + i + ':before { content: "' + character + '"; }\n';

		wikEd.charEntityArray[i].added = true;
	}

// add or replace existing css rules
	if (rules != '') {
		wikEd.HighlightNamedHideButtonsStylesheet.AddCSSRules(rules);
	}
	return;
};


//
// wikEd.HideAddHandlers: register mouseover handlers for tabs to unhide refs, templates, and character entities
//

wikEd.HideAddHandlers = function() {

	if ( (wikEd.config.hideContent != true) || (wikEd.refHide != true) ) {
		return;
	}
	var hideButton = wikEd.frameDocument.getElementsByTagName('button');
	for (var i = 0; i < hideButton.length; i ++) {
		var tabClass = hideButton[i].className;
		if (
			(tabClass.indexOf('wikEdRefButton') == 0) ||
			(tabClass.indexOf('wikEdTemplButton') == 0) ||
			(tabClass.indexOf('wikEdCharEntityButton') == 0)
		) {
			wikEd.AddEventListener(hideButton[i], 'click', wikEd.HideShowHandler, true);
			if (
				(tabClass.indexOf('wikEdRefButtonShow') == -1) &&
				(tabClass.indexOf('wikEdTemplButtonShow') == -1) &&
				(tabClass.indexOf('wikEdCharEntityButtonShow') == -1)
			) {
				wikEd.AddEventListener(hideButton[i], 'mouseover', wikEd.HideShowHandler, true);
			}
		}
	}
	return;
};


//
// wikEd.HideShowHandler: display hidden ref or template on mouse over hide tab
//

wikEd.HideShowHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}
	event.preventDefault();

// find hidden content node
	var hideTarget = event.currentTarget;
	var hideInto = event.safeRelatedTarget;
	var hideButton;
	var hideContainer;
	var hide;

// <container><button></button></container><hide> text </hide>

// target == button
	if (/^wikEd(Ref|Templ|CharEntity)Button(Show)?\d*$/.test(hideTarget.className) == true) {
		hideButton = hideTarget;
		hideContainer = hideButton.parentNode;
		if (hideContainer != null) {
			if (/^wikEd(Ref|Templ|CharEntity)Container$/.test(hideContainer.className) == false) {
				hideContainer = null;
			}
			else {

// get hide text
				hide = wikEd.GetNextSiblingNode(hideContainer);
				if (hide != null) {
					if (/^wikEd(Ref|Templ|TemplNs|CharEntity)(Show)?$/.test(hide.className) == false) {
						hide = null;
					}
				}
			}
		}
	}

// target == hide text
	else if (/^wikEd(Ref|Templ|TemplNs|CharEntity)(Show)?$/.test(hideTarget.className) == true) {

		hide = hideTarget;
		hideContainer = wikEd.GetPreviousSiblingNode(hideTarget);
		if (hideContainer != null) {
			if (/^wikEd(Ref|Templ|CharEntity)Container$/.test(hideContainer.className) == false) {
				hideContainer = null;
			}
			else {

// get button
				hideButton = wikEd.GetFirstChildNode(hideContainer);
				if (hideButton != null) {
					if (/^wikEd(Ref|Templ|CharEntity)Button(Show)?\d*$/.test(hideButton.className) == false) {
						hideButton = null;
					}
				}
			}
		}
	}

	if ( (hideContainer == null) || (hideButton == null) || (hide == null) ) {
		return;
	}

// get classes
	var hideButtonClass = hideButton.className;
	var hideClass = hide.className;

// open on hover
	if (event.type == 'mouseover') {
		if (hideButtonClass.indexOf('wikEdRefButton') == 0) {
			hide.style.display = 'block';
		}
		else if (hideButtonClass.indexOf('wikEdTemplButton') == 0) {
			hide.style.display = 'block';
		}
		else if (hideButtonClass.indexOf('wikEdCharEntity') == 0) {
			hide.style.display = 'inline';
		}
		wikEd.RemoveEventListener(hideButton, 'mouseover', wikEd.HideShowHandler, true);
		wikEd.AddEventListener(hide, 'mouseout', wikEd.HideShowHandler, true);
		wikEd.AddEventListener(hideButton, 'mouseout', wikEd.HideShowHandler, true);
	}

// close after hover
	else if (event.type == 'mouseout') {
		if ( (hideInto != hideContainer) && (hideInto != hideButton) && (hideInto != hide) ) {
			if (/^wikEd(Ref|Templ|CharEntity)Button\d*$/.test(hideButton.className) == true) {
				var hideOut = false;
				var node = hideInto;
				while (node != null) {
					if (node == wikEd.frameBody) {
						hideOut = true;
						break;
					}
					if ( (node == hideContainer) || (node == hide) ) {
						break;
					}
					node = node.parentNode;
				}
				if (hideOut == true) {
					hide.style.display = 'none';
					wikEd.RemoveEventListener(hide, 'mouseout', wikEd.HideShowHandler, true);
					wikEd.RemoveEventListener(hideButton, 'mouseout', wikEd.HideShowHandler, true);
					wikEd.AddEventListener(hideButton, 'mouseover', wikEd.HideShowHandler, true);

// move cursor out of hidden text
					wikEd.UnhideCursor(hideContainer, hide);
				}
			}
		}
	}

// hide on click
	else if (event.type == 'click') {
		if (/^wikEd(Ref|Templ|CharEntity)ButtonShow\d*$/.test(hideButtonClass) == true) {
			hide.style.display = 'none';

			hideButtonClass = hideButtonClass.replace(/Show/, '');
			hideClass = hideClass.replace(/Show/, '');

			hideButton.className = hideButtonClass;
			hideButton.title = wikEd.config.text[hideButtonClass.replace(/\d+$/g, '') + 'Tooltip'];

			wikEd.AddEventListener(hideButton, 'mouseover', wikEd.HideShowHandler, true);

// move cursor out of hidden text
			wikEd.UnhideCursor(hideContainer, hide);
		}

// open on click
		else if (/^wikEd(Ref|Templ|CharEntity)Button\d*$/.test(hideButtonClass) == true) {
			if (hideButtonClass.indexOf('wikEdCharEntityButton') == 0) {
				hide.style.display = 'inline';
			}
			else {
				hide.style.display = 'block';
			}
			hideButtonClass = hideButtonClass.replace(/Button(Show)?/, 'ButtonShow');
			hideClass += 'Show';
			hideClass = hideClass.replace(/Show/, '') + 'Show';

			hideButton.className = hideButtonClass;
			hideButton.title = wikEd.config.text[hideButtonClass.replace(/\d+$/g, '') + 'Tooltip'];

			wikEd.RemoveEventListener(hideButton, 'mouseover', wikEd.HideShowHandler, true);
			wikEd.RemoveEventListener(hide, 'mouseout', wikEd.HideShowHandler, true);
			wikEd.RemoveEventListener(hideButton, 'mouseout', wikEd.HideShowHandler, true);
		}
	}
	return;
};


//
// wikEd.UnhideCursor: move cursor out of hidden element for wikEd.HideShowHandler
//

wikEd.UnhideCursor = function(firstHiddenParent, lastHiddenParent) {

// get selection and clone range
	var sel = wikEd.GetSelection();
	var range = sel.getRangeAt(sel.rangeCount - 1);
	if (range != null) {

// check if selected text is hidden
		var startHidden = false;
		var node = range.startContainer;
		while (node != null) {
			if (node == wikEd.frameBody) {
				break;
			}
			if ( (node == lastHiddenParent) || (node == firstHiddenParent) ) {
				startHidden = true;
				break;
			}
			node = node.parentNode;
		}
		var endHidden = false;
		var node = range.endContainer;
		while (node != null) {
			if (node == wikEd.frameBody) {
				break;
			}
			if ( (node == lastHiddenParent) || (node == firstHiddenParent) ) {
				endHidden = true;
				break;
			}
			node = node.parentNode;
		}

// unselect hidden text
		if ( (startHidden == false) && (endHidden == true) ) {
			range.setEndBefore(firstHiddenParent);
		}
		else if ( (startHidden == true) && (endHidden == false) ) {
			range.setStartAfter(lastHiddenParent);
		}
		else if ( (startHidden == true) && (endHidden == true) ) {
			range.setEndAfter(lastHiddenParent);
			range.collapse(false);
		}
	}
	return;
};


//
// wikEd.GetText: get the text fragments to manipulate
//

wikEd.GetText = function(obj, whichFragment, wikify) {

// remove dynamically inserted nodes by other scripts
	wikEd.CleanNodes(wikEd.frameDocument);

// get selection object
	if (obj.sel == null) {
		obj.sel = wikEd.GetSelection();
	}

// cursor for the cursor position (always done)
	if (obj.cursor == null) {
		obj.cursor = {
			'from': 'cursor',
			'keepSel': null,
			'plain': ''
		};

// set cursor range
		obj.cursor.range = wikEd.frameDocument.createRange();
		wikEd.SetRangeStart(obj.cursor.range, obj.sel.focusNode, obj.sel.focusOffset);
		obj.cursor.range.collapse(true);
	}

// whole for the whole text
	if (obj.whole == null) {
		if (/whole|selectionWord|selectionLine|selectionPara|focusWord|focusLine|focusPara/.test(whichFragment) == true) {
			obj.whole = {
				'plainArray': [],
				'plainNode': [],
				'plainStart': [],
				'from': 'whole',
				'keepSel': null
			};

// set whole range
			obj.whole.range = wikEd.frameDocument.createRange();
			obj.whole.range.setStart(wikEd.frameBody, 0);
			obj.whole.range.setEnd(wikEd.frameBody, wikEd.frameBody.childNodes.length);

// get whole plain text
			wikEd.GetInnerHTML(obj.whole, wikEd.frameBody);
			obj.whole.code = obj.whole.html;
			wikEd.RemoveHighlightingWikify(obj.whole, wikify);
			obj.whole.plain = obj.whole.html;
			obj.whole.plain = obj.whole.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.whole.plain = obj.whole.plain.replace(/\xa0/g, ' ');
		}
	}

// selection for the selected text
	if (obj.selection == null) {
		if (/selection\b|selectionWord|selectionLine|selectionPara/.test(whichFragment) == true) {
			obj.selection = {
				'from': 'selection',
				'keepSel': null
			};

// copy range to document fragment
			if (obj.sel.rangeCount == 0) {
				obj.sel.collapse(wikEd.frameBody, 0);
			}
			obj.selection.range = obj.sel.getRangeAt(obj.sel.rangeCount - 1);
			var documentFragment = obj.selection.range.cloneContents();

// get selected text
			wikEd.GetInnerHTML(obj.selection, documentFragment);
			obj.selection.code = obj.selection.html;
			wikEd.RemoveHighlightingWikify(obj.selection, wikify);
			obj.selection.plain = obj.selection.html;
			obj.selection.plain = obj.selection.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.selection.plain = obj.selection.plain.replace(/\xa0/g, ' ');
		}
	}

// focusWord, focusLine, and focusPara for the word, line, and paragraph under the cursor
	if (obj.focusWord == null) {
		if (/focusWord|focusLine|focusPara/.test(whichFragment) == true) {
			obj.focusWord = {
				'from': 'focusWord',
				'keepSel': false,
				'range': wikEd.frameDocument.createRange(),
				'tableEdit': obj.tableEdit
			};

// setup focusLine object for the line under the cursor
			obj.focusLine = {
				'from': 'focusLine',
				'keepSel': false,
				'range': wikEd.frameDocument.createRange(),
				'tableEdit': obj.tableEdit
			};

// setup focusPara object for the paragraph under the cursor
			obj.focusPara = {
				'from': 'focusPara',
				'keepSel': false,
				'range': wikEd.frameDocument.createRange(),
				'tableEdit': obj.tableEdit
			};

// find the word and line boundaries
			wikEd.FindBoundaries(obj.focusWord, obj.focusLine, obj.focusPara, obj.whole, obj.cursor);

// get the wikified plain text for the word under the cursor
			var documentFragment = obj.focusWord.range.cloneContents();
			wikEd.GetInnerHTML(obj.focusWord, documentFragment);
			obj.focusWord.code = obj.focusWord.html;
			wikEd.RemoveHighlightingWikify(obj.focusWord, wikify);
			obj.focusWord.plain = obj.focusWord.html;
			obj.focusWord.plain = obj.focusWord.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.focusWord.plain = obj.focusWord.plain.replace(/\xa0/g, ' ');

// get the wikified plain text for the line under the cursor
			var documentFragment = obj.focusLine.range.cloneContents();
			wikEd.GetInnerHTML(obj.focusLine, documentFragment);
			obj.focusLine.code = obj.focusLine.html;
			wikEd.RemoveHighlightingWikify(obj.focusLine, wikify);
			obj.focusLine.plain = obj.focusLine.html;
			obj.focusLine.plain = obj.focusLine.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.focusLine.plain = obj.focusLine.plain.replace(/\xa0/g, ' ');

// get the wikified plain text for the paragraph under the cursor
			var documentFragment = obj.focusPara.range.cloneContents();
			wikEd.GetInnerHTML(obj.focusPara, documentFragment);
			obj.focusPara.code = obj.focusPara.html;
			wikEd.RemoveHighlightingWikify(obj.focusPara, wikify);
			obj.focusPara.plain = obj.focusPara.html;
			obj.focusPara.plain = obj.focusPara.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.focusPara.plain = obj.focusPara.plain.replace(/\xa0/g, ' ');
		}
	}

// selectionWord and selectionLine for the complete words and lines under the selection
	if (obj.selectionWord == null) {
		if (/selectionWord|selectionLine|selectionPara/.test(whichFragment) == true) {

// setup selectionWord object for the words under the selection
			obj.selectionWord = {
				'from': 'selectionWord',
				'keepSel': false,
				'range': wikEd.frameDocument.createRange(),
				'tableEdit': obj.tableEdit
			};

// setup selectionLine object for the lines under the selection
			obj.selectionLine = {
				'from': 'selectionLine',
				'keepSel': false,
				'range': wikEd.frameDocument.createRange(),
				'tableEdit': obj.tableEdit
			};

// setup focusPara object for the paragraph under the selection
			obj.selectionPara = {
				'from': 'selectionPara',
				'keepSel': false,
				'range': wikEd.frameDocument.createRange(),
				'tableEdit': obj.tableEdit
			};

// find the word and line boundaries
			wikEd.FindBoundaries(obj.selectionWord, obj.selectionLine, obj.selectionPara, obj.whole, obj.selection);

// get the wikified plain text for the words under the selection
			var documentFragment = obj.selectionWord.range.cloneContents();
			wikEd.GetInnerHTML(obj.selectionWord, documentFragment);
			obj.selectionWord.code = obj.selectionWord.html;
			wikEd.RemoveHighlightingWikify(obj.selectionWord, wikify);
			obj.selectionWord.plain = obj.selectionWord.html;
			obj.selectionWord.plain = obj.selectionWord.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.selectionWord.plain = obj.selectionWord.plain.replace(/\xa0/g, ' ');

// get the wikified plain text for the lines under the selection
			var documentFragment = obj.selectionLine.range.cloneContents();
			wikEd.GetInnerHTML(obj.selectionLine, documentFragment);
			obj.selectionLine.code = obj.selectionLine.html;
			wikEd.RemoveHighlightingWikify(obj.selectionLine, wikify);
			obj.selectionLine.plain = obj.selectionLine.html;
			obj.selectionLine.plain = obj.selectionLine.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.selectionLine.plain = obj.selectionLine.plain.replace(/\xa0/g, ' ');

// get the wikified plain text for the paragraph under the selection
			var documentFragment = obj.selectionPara.range.cloneContents();
			wikEd.GetInnerHTML(obj.selectionPara, documentFragment);
			obj.selectionPara.code = obj.selectionPara.html;
			wikEd.RemoveHighlightingWikify(obj.selectionPara, wikify);
			obj.selectionPara.plain = obj.selectionPara.html;
			obj.selectionPara.plain = obj.selectionPara.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');
			obj.selectionPara.plain = obj.selectionPara.plain.replace(/\xa0/g, ' ');
		}
	}
	return;
};


//
// wikEd.Find: custom find function with regexp properties, sets obj.changed.range, uses obj ranges
//

wikEd.Find = function(obj, findText, caseSensitive, backwards, wrap, useRegExp) {

	var found = false;

// get selection
	if (obj.sel == null) {
		obj.sel = wikEd.GetSelection();
	}
	if (obj.sel.rangeCount == 0) {
		obj.sel.collapse(wikEd.frameBody, 0);
	}
	var range = obj.sel.getRangeAt(obj.sel.rangeCount - 1);

	if (obj.changed == null) {
		obj.changed = {};
	}
	obj.selectChanged = false;

// empty the range to avoid error messages for reverse direction ranges
	obj.changed.range = wikEd.frameDocument.createRange();

// regexp instead of plain text search for browser lacking .find (Opera), built in .find() ignores newlines
	if (useRegExp != true) {
		if (typeof(wikEd.frameWindow.find) != 'function') {
			useRegExp = true;
			findText = findText.replace(/([\\^$*+?.()\[\]{}:=!|,\-])/g, '\\$1');
		}
	}

// create the regexp
	var regExpFind;
	if (useRegExp == true) {
		var regExpFlags = 'gm';
		if (caseSensitive != true) {
			regExpFlags += 'i';
		}
		try {
			regExpFind = new RegExp(findText, regExpFlags);
		}
		catch (err) {
			return(false);
		}
	}

// use the fast built-in find function for non-regexp searches; Opera does not have .find
	if (useRegExp != true) {

// parameters: window.find(string, caseSensitive, backwards, wrapAround, wholeWord, searchInFrames, showDialog)
		found = wikEd.frameWindow.find(findText, caseSensitive, backwards, wrap, false, true, false);
		if (found == true) {
			range = obj.sel.getRangeAt(obj.sel.rangeCount - 1);
		}
		obj.changed.range = range;
	}

// slow javascript regexp find and replace
	else {

// perform find
		if (obj.plainArray === undefined) {
			wikEd.ParseDOM(obj, wikEd.frameBody);
		}
		var regExpMatch = [];

// find next, search to the right
		if (backwards == false) {

// set start position for search to right
			regExpFind.lastIndex = obj.plainFocus;

// execute the regexp search to the right
			regExpMatch = regExpFind.exec(obj.plain);

// remember position for repeated searches
			obj.plainFocus = regExpFind.lastIndex;

// wrap around, start at beginning
			if ( (wrap == true) && (regExpMatch == null) ) {
				regExpFind.lastIndex = 0;
				regExpMatch = regExpFind.exec(obj.plain);
			}
		}

// find previous, search to the left
		else {

// cycle through the matches to the left
			var regExpMatchNext;
			do {
				regExpMatch = regExpMatchNext;
				regExpMatchNext = regExpFind.exec(obj.plain);
				if (regExpMatchNext == null) {
					break;
				}
			} while (regExpMatchNext.index < obj.plainAnchor);

// wrap around, find last occurrence
			if ( (wrap == true) && (regExpMatch == null) ) {
				do {
					regExpMatch = regExpMatchNext;
					regExpMatchNext = regExpFind.exec(obj.plain);
				} while (regExpMatchNext != null);
			}
		}

// select the find
		if (regExpMatch != null) {
			found = true;

			var i = 0;
			while ( (obj.plainStart[i + 1] <= regExpMatch.index) && (obj.plainStart[i + 1] != null) ) {
				i ++;
			}

			var j = i;
			while ( (obj.plainStart[j + 1] <= regExpMatch.index + regExpMatch[0].length) && (obj.plainStart[j + 1] != null) ) {
				j ++;
			}

			var startNode = obj.plainNode[i];
			var startOffset = regExpMatch.index - obj.plainStart[i];
			var endNode = obj.plainNode[j];
			var endOffset = regExpMatch.index + regExpMatch[0].length - obj.plainStart[j];
			wikEd.SetRange(obj.changed.range, startNode, startOffset, endNode, endOffset);
			obj.selectChanged = true;
		}
	}
	return(found);
};


//
// wikEd.ScrollToSelection: scroll iframe range into viewport
//   for MSIE see http://www.webmasterworld.com/javascript/3820483.htm
//   removig helper nodes gives Error: Node was not found = NS_ERROR_DOM_NOT_FOUND_ERR for certain undo actions
//   adding nodes breaks the undo history in Chrome and Opera

wikEd.ScrollToSelection = function(frameScrollTop, frameScrollLeft, removeHelperNodes) {

// get selection and clone range
	var obj = {};
	obj.sel = wikEd.GetSelection();
	if (obj.sel.rangeCount == 0) {
		return;
	}

// get selection plain text
	range = obj.sel.getRangeAt(obj.sel.rangeCount - 1);
	var documentFragment = range.cloneContents();
	wikEd.GetInnerHTML(obj, documentFragment);
	var plainText = obj.plain;
	plainText = plainText.replace(/&lt;/g, '<');
	plainText = plainText.replace(/&gt;/g, '>');
	plainText = plainText.replace(/&amp;/g, '&');

// select using backwards built-in find
	if ( (typeof(wikEd.frameWindow.find) == 'function') && (plainText.length > 0) ) {
		obj.sel.collapseToEnd();

// Chrome; parameters: wikEd.Find(obj, findText, caseSensitive, backwards, wrap, useRegExp)
		var found = wikEd.Find(obj, plainText, true, true, false, false);

// Firefox (\n removed, \xa0 as blank)
		if ( (found == false) && (/\n/.test(plainText) == true) ) {
			plainText = range.toString();
			wikEd.Find(obj, plainText, true, true, false, false);
		}
	}

// select empty range using backwards built-in find for previous character
	else if ( (typeof(wikEd.frameWindow.find) == 'function') && (plainText.length == 0) ) {
		var backwards = true;

// get plain text from start to selection
		var rangeClone = range.cloneRange();
		rangeClone.setStartBefore(wikEd.frameBody.firstChild);
		var documentFragment = rangeClone.cloneContents();
		wikEd.GetInnerHTML(obj, documentFragment);
		var plainText = obj.plain;
		plainText = plainText.replace(/&lt;/g, '<');
		plainText = plainText.replace(/&gt;/g, '>');
		plainText = plainText.replace(/&amp;/g, '&');
		plainText = plainText.replace(/^([\s\S]*?)([^\n]\n*)$/, '$2');

// get plain text from selection to end for potentially less newlines
		if (plainText.length > 1) {
			var plainTextBack = plainText;
			var obj = {};

			var rangeClone = range.cloneRange();
			rangeClone.setEndAfter(wikEd.frameBody.lastChild);
			var documentFragment = rangeClone.cloneContents();
			wikEd.GetInnerHTML(obj, documentFragment);
			var plainText = obj.plain;
			plainText = plainText.replace(/&lt;/g, '<');
			plainText = plainText.replace(/&gt;/g, '>');
			plainText = plainText.replace(/&amp;/g, '&');
			plainText = plainText.replace(/^(\n*[^\n])([\s\S]*?)$/, '$1');

// backward or forward find
			if (plainTextBack.length > plainText.length) {
				backwards = false;
			}
			else {
				plainText = plainTextBack;
			}
		}

// Chrome; parameters: wikEd.Find(obj, findText, caseSensitive, backwards, wrap, useRegExp)
		var found = wikEd.Find(obj, plainText, true, backwards, false, false);

// Firefox
		if ( (found == false) && (/\n/.test(plainText) == true) ) {
			plainText = plainText.replace(/\n/g, '');
			plainText = plainText.replace(/\xa0/g, ' ');
			wikEd.Find(obj, plainText, true, backwards, false, false);
		}
		if (backwards == true) {
			obj.sel.collapseToEnd();
		}
		else {
			obj.sel.collapseToStart();
		}
	}

// use inserted spans as scroll marker, breaks undo history in Chrome and Opera
	else {
		var rangeStart = range.cloneRange();
		var rangeEnd = range.cloneRange();

// spans to be temporarily inserted before and after selection range to get range position
		wikEd.insertCounter ++;
		var scrollStartNode = wikEd.frameDocument.createElement('span');
		scrollStartNode.className = 'wikEdScrollBefore';
		scrollStartNode.id = 'wikEdScrollBefore' + wikEd.insertCounter;
		var scrollEndNode = wikEd.frameDocument.createElement('span');
		scrollEndNode.className = 'wikEdScrollAfter';
		scrollEndNode.id = 'wikEdScrollAfter' + wikEd.insertCounter;

// get the range border nodes and offsets
		var startNode = range.startContainer;
		var startOffset = range.startOffset;
		var endNode = range.endContainer;
		var endOffset = range.endOffset;

		var startLength;
		if (startNode.nodeName == '#text') {
			startLength = startNode.nodeValue.length;
		}
		var endLength;
		if (endNode.nodeName == '#text') {
			endLength = endNode.nodeValue.length;
		}

// insert end node
		if (endNode.nodeName == '#text') {
			if (endOffset == 0) {
				endNode.parentNode.insertBefore(scrollEndNode, endNode);
			}
			else if (endOffset == endLength - 1) {
				endNode.parentNode.insertBefore(scrollEndNode, endNode.nextSibling);
			}
			else {
				rangeEnd.collapse(false);
				rangeEnd.insertNode(scrollEndNode);
			}
		}
		else {
			var refNode = endNode.childNodes.item(endOffset);
			endNode.insertBefore(scrollEndNode, refNode);
		}

// insert start node
		if (startNode.nodeName == '#text') {
			if (startOffset == 0) {
				startNode.parentNode.insertBefore(scrollStartNode, startNode);
			}
			else if (startOffset == startLength - 1) {
				startNode.parentNode.insertBefore(scrollStartNode, startNode.nextSibling);
			}
			else {

// collapse as a Firefox bug work around; http://stackoverflow.com/questions/665676
				rangeStart.collapse(true);
				rangeStart.insertNode(scrollStartNode);
			}
		}
		else {
			var refNode = startNode.childNodes.item(startOffset);
			startNode.insertBefore(scrollStartNode, refNode);
		}

		wikEd.ScrollToNodes(scrollStartNode, scrollEndNode);

// set selection
		range.setStartBefore(scrollStartNode);
		range.setEndAfter(scrollEndNode);
		wikEd.RemoveAllRanges(sel);
		sel.addRange(range);
	}

	return;
};


//
// wikEd.ScrollToNodes: scroll iframe range into viewport
//

wikEd.ScrollToNodes = function(scrollStartNode, scrollEndNode) {

// absolute span for line height detection (Opera and Chrome do not vertically align empty span at bottom)
	var lineHeightNode = wikEd.frameDocument.createElement('span');
	lineHeightNode.innerHTML = '&nbsp;';
	lineHeightNode.className = 'wikEdScrollLineHeight';
	scrollEndNode.appendChild(lineHeightNode);
	lineHeight = lineHeightNode.clientHeight;
	lineHeightNode.innerHTML = '';
	scrollEndNode.removeChild(lineHeightNode);

// scroll to node coordinates
	scrollStartNode.style.verticalAlign = 'top';
	scrollEndNode.style.verticalAlign = 'top';
	var startOffsetLeft = wikEd.GetOffsetLeft(scrollStartNode);
	var startOffsetTop  = wikEd.GetOffsetTop(scrollStartNode);
	var endOffsetRight  = wikEd.GetOffsetLeft(scrollEndNode);
	var endOffsetBottom = wikEd.GetOffsetTop(scrollEndNode);
	scrollStartNode.style.verticalAlign = 'baseline';
	scrollEndNode.style.verticalAlign = 'baseline';
	var frameScrollTop  = wikEd.frameBody.scrollTop;
	var frameScrollLeft = wikEd.frameBody.scrollLeft;
	var x = frameScrollLeft;
	var y = frameScrollTop;

// current scroll position

// selection above viewport
	if (endOffsetBottom < frameScrollTop) {
		y = startOffsetTop;
	}

// selection below viewport
	else if (startOffsetTop > frameScrollTop + wikEd.frameBody.clientHeight) {
		y = endOffsetBottom - wikEd.frameBody.clientHeight + lineHeight;
	}

// selection left of viewport
	if (endOffsetRight < frameScrollLeft) {
		if (endOffsetRight <= wikEd.frameBody.clientWidth) {
			x = 0;
		}
		else {
			x = startOffsetLeft;
		}
	}

// selection right of viewport
	else if (startOffsetLeft > frameScrollLeft + wikEd.frameBody.clientWidth) {
		x = endOffsetRight - wikEd.frameBody.clientWidth;
	}

// do scroll
	wikEd.frameWindow.scrollTo(x, y);

	return;
};


//
// wikEd.WikiTableToHtml: convert wiki tables to html // {{TABLE}}
//

wikEd.WikiTableToHtml = function(obj) {

////
	return;
};


//
// wikEd.Textify: strip html off of text
//

wikEd.Textify = function(obj) {

// convert html to plain
	obj.plain = obj.html;
	obj.plain = obj.plain.replace(/ \n|\n /g, ' ');
	obj.plain = obj.plain.replace(/\n/g, ' ');

// delete tags
	obj.plain = obj.plain.replace(/<(style|script|object|applet|embed)\b[^>]*>.*?<\/\1>/g, '');

// newlines
	obj.plain = obj.plain.replace(/[\n ]*<br\b[^>]*>[\n ]*()/g, '\n');

// <div>...</div> to <br> for Safari, Chrome, WebKit
	if ( (wikEd.safari == true) || (wikEd.chrome == true) || (wikEd.webkit == true) ) {
		var isRemove = [];
		obj.plain = obj.plain.replace(/(<(\/?)div\b([^>]*)>)/g,
			function (p, p1, p2, p3) {
				if (p2 == '') {
					if (p3 == '') {
						isRemove.push(true);
						return('\x00');
					}
					isRemove.push(false);
					return(p1);
				}
				if (isRemove.pop() == true) {
					return('\x01');
				}
				return(p1);
			}
		);
		obj.plain = obj.plain.replace(/\x00\n\x01/g, '\x01');
		obj.plain = obj.plain.replace(/\x01\n/g, '\x01');
		obj.plain = obj.plain.replace(/\n\x00/g, '\x00');
		obj.plain = obj.plain.replace(/\x01\x00/g, '\x01');
		obj.plain = obj.plain.replace(/^\x00|\x01$/g, '');
		obj.plain = obj.plain.replace(/[\x00\x01]/g, '\n');
	}

// remove empty lines from block tags
	obj.plain = obj.plain.replace(/(<(blockquote|center|div|p|pre|gallery)\b[^>]*>)[\s\x00]+/gi, '$1');
	obj.plain = obj.plain.replace(/[\s\x00]+(<\/(blockquote|center|div|p|pre|gallery|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references)>)/gi, '$1');

// remove highlighting pre tags
	var isRemove = [];
	obj.plain = obj.plain.replace(/(<(\/?)pre\b([^>]*)>)/g,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (/\bclass="wikEd[\w\/]+"/.test(p3) == true) {
					isRemove.push(true);
					return('');
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('');
			}
			return(p1);
		}
	);

// blocks
	obj.plain = obj.plain.replace(/<\/?(address|blockquote|center|div|hr|isindex|p|pre)\b.*?>/g, '\x00\x00');

// keep headings only if starting with a newline
	obj.plain = obj.plain.replace(/[\s|\x00]*(^|\n|\x00)[\s|\x00]*<h[1-6]\b[^>]*>(.*?)<\/h[1-6]>[\s|\x00]*()/g, '\x00\x00$2\x00\x00');

// lists
	obj.plain = obj.plain.replace(/<\/?(dir|dl|menu|ol|ul)\b.*?>/g, '\x00');
	obj.plain = obj.plain.replace(/<\/(dd|dt|li)>/g, '\x00');

// forms
	obj.plain = obj.plain.replace(/<\/?(select|textarea)\b.*?>/g, '\x00');
	obj.plain = obj.plain.replace(/<\/(option|legend|optgroup)>/g, '\x00');

// tables
	if (wikEd.tableMode == true) {

// override pasted table class // {{TABLE}}
		obj.plain = obj.plain.replace(/(<table\b)([^>]*)(>)/gi,
			function (p, p1, p2, p3) {
				if (p2.match(/\bclass=/) != null) {
					p2 = p2.replace(/\bclass\s*=\s*(['"]?)[^<>'"\n]*?\1/g, 'class="wikEdTableEdit"');
				}
				else {
					p2 = ' class="wikEdTableEdit"';
				}
				return(p1 + p2 + p3);
			}
		);

// keep table html markup // {{TABLE}}
		obj.plain = obj.plain.replace(/[\s\x00]*(<table\b.*?>)/g, '\x00\x00$1');
		obj.plain = obj.plain.replace(/(<\/table>)[\s\x00]*()/g, '$1\x00');

		obj.plain = obj.plain.replace(/<(\/?(table|caption|tr|th|td)\b[^>]*)>/g, '\x01$1\x02');
	}

// textify table
	else if (wikEd.tableMode == false) {
		obj.plain = obj.plain.replace(/<\/?(table|caption)\b.*?>/g, '\x00');
		obj.plain = obj.plain.replace(/<\/(tr|th|td)>/g, '\x00');
	}

// finish html to plain conversion
	obj.plain = obj.plain.replace(/<.*?>/g, '');

// recover table html
	obj.plain = obj.plain.replace(/\x01/g, '<');
	obj.plain = obj.plain.replace(/\x02/g, '>');

// remove spaces
	obj.plain = obj.plain.replace(/[ \t\xa0]+(\x00)/g, '$1');
	obj.plain = obj.plain.replace(/(\x00)[ \t\xa0]+/g, '$1');

// trim down \x00 and \n
	obj.plain = obj.plain.replace(/\x00+\n/g, '\n');
	obj.plain = obj.plain.replace(/\n\x00+/g, '\n');
	obj.plain = obj.plain.replace(/\n*\x00(\x00|\n)+/g, '\n\n');
	obj.plain = obj.plain.replace(/\x00/g, '\n');
	obj.plain = obj.plain.replace(/(<\/table>\n)\n+/g, '$1');

// remove empty lines and spaces from article start and end
	if (obj.from == 'whole') {
		obj.plain = obj.plain.replace(/^\s+|\s+$/g, '');
	}

	return;
};


//
// wikEd.InactiveButtons: grey out inactive buttons, called after every change and click
//

wikEd.InactiveButtons = function() {

// undo
	if (wikEd.frameDocument.queryCommandEnabled('undo') == true ) {
		document.getElementById('wikEdUndo').className = 'wikEdButton';
		document.getElementById('wikEdUndoAll').className = 'wikEdButton';
	}
	else {
		document.getElementById('wikEdUndo').className = 'wikEdButtonInactive';
		document.getElementById('wikEdUndoAll').className = 'wikEdButtonInactive';
	}

// redo
	if (wikEd.frameDocument.queryCommandEnabled('redo') == true ) {
		document.getElementById('wikEdRedo').className = 'wikEdButton';
	}
	else {
		document.getElementById('wikEdRedo').className = 'wikEdButtonInactive';
	}

// redo all
	if (wikEd.lastVersion != null) {
		document.getElementById('wikEdRedoAll').className = 'wikEdButton';
	}
	else {
		document.getElementById('wikEdRedoAll').className = 'wikEdButtonInactive';
	}
	return;
};


//
// wikEd.FixBasic: fix characters, spaces, empty lines, certain headings, needed for all fixing functions
//

//// change: double spaces ok after dot

wikEd.FixBasic = function(obj) {

// non-breaking space character to normal space
	obj.plain = obj.plain.replace(/\xa0/g, ' ');

// tab to space
	obj.plain = obj.plain.replace(/ *\t[ \t]*()/g, ' ');

// remove trailing spaces
	obj.plain = obj.plain.replace(/(\t| |&nbsp;)+\n/g, '\n');

// remove spaces in empty lines
	obj.plain = obj.plain.replace(/\n( |&nbsp;|\t)+\n/g, '\n\n');

// empty line before and after headings, spaces around word (lookahead), remove bold, italics, and extra =
	obj.plain = obj.plain.replace(/(^|\n)+(=+) *(.*?) *(=+)(?=(\n|$))/g,
		function(p, p1, p2, p3, p4) {
			p3 = p3.replace(/'{2,}/g, '');
			return('\n\n' + p2 + ' ' + p3 + ' ' + p2 + '\n\n');
		}
	);

// uppercase well known headings
	var regExp = new RegExp('\\n=+ ' + wikEd.config.text['External links'] + '? =+\\n', 'gi');
	obj.plain = obj.plain.replace(regExp, '\n== ' + wikEd.config.text['External links'] + ' ==\n');
	regExp = new RegExp('\\n=+ ' + wikEd.config.text['See also'] + ' =+\\n', 'gi');
	obj.plain = obj.plain.replace(regExp, '\n== ' + wikEd.config.text['See also'] + ' ==\n');
	regExp = new RegExp('\\n=+ ' + wikEd.config.text.References + '? =+\\n', 'gi');
	obj.plain = obj.plain.replace(regExp, '\n== ' + wikEd.config.text.References + ' ==\n');

// add space after * # : ; (list) and after {| |- |+ | (table), spare #REDIRECT
	obj.plain = obj.plain.replace(/(^|\n)([\*\#\:\;]+|\{\||\|\-|\|\+|\|(?!\})) *()/g, '$1$2 ');
	obj.plain = obj.plain.replace(/(^|\n)# REDIRECT\b/gi, '$1#REDIRECT');
	obj.plain = obj.plain.replace(/ +(?=\n)/g, '');

// empty line before and after tables
	obj.plain = obj.plain.replace(/\n+(\{\|)/g, '\n\n$1');
	obj.plain = obj.plain.replace(/(\n\|\}([^\}]|$)) *(.*)[\n|$]+/g, '$1\n\n$3\n\n');

// empty line before and after lists
	obj.plain = obj.plain.replace(/(^|\n)([^\*\#\:\;\n].*)(?=\n[\*\#\:\;])/g, '$1$2\n\n');
	obj.plain = obj.plain.replace(/(^|\n)([\*\#\:\;].*?)(?=\n[^\*\#\:\;\n])/g, '$1$2\n\n');

// split into lines and change single lines, used to handle tables
	var lines = obj.plain.split('\n');
	obj.plain = '';
	var tableflag = false;

	for (var i = 0; i < lines.length; i ++) {
		var line = lines[i];

// do not change lines starting with a blank
		if (/^ /.test(line) == false) {

// detect table
			if (line.match(/^(\{\||\!|\|[^}])/) != null) {
				tableflag = true;
			}
			else if (line.match(/^\|\}/) != null) {
				tableflag = false;
			}

// changes only to be done in tables
			if (tableflag == true) {

// add spaces around ||
				line = line.replace(/ *\|\| *()/g, ' || ');
			}

// changes not to be done in tables
			if (! tableflag) {

// empty line before and after images
				var regExp = new RegExp('^(\\[\\[(Image|File|' + wikEd.config.text['wikicode Image'] + '|' + wikEd.config.text['wikicode File'] + '):.*?\\]\\])', 'ig');
				line = line.replace(regExp, '\n$1');

				regExp = new RegExp('(\\[\\[(Image|File|' + wikEd.config.text['wikicode Image'] + '|' + wikEd.config.text['wikicode File'] + '):.*?(\\[\\[.*?\\]\\].*?)*\\]\\])$', 'ig');
				line = line.replace(regExp, '$1\n');

// empty line before and after includes
				line = line.replace(/^(\{\{.*?\}\})/g, '\n$1');
				line = line.replace(/(\{\{.*?\}\})$/g, '$1\n');
			}
		}

// concatenate the lines
		obj.plain += line;
		if (i < lines.length - 1) {
			obj.plain += '\n';
		}
	}

// remove underscores in wikilinks
	obj.plain = obj.plain.replace(/\[\[(.*?)((\|.*?)|)\]\]/g,
		function (p, p1, p2, p3) {
			p1 = p1.replace(/_/g, ' ');
			return('[[' + p1 + p2 + ']]');
		}
	);

// remove spaces in wikilinks, protect [[xxx| ]]
	obj.plain = obj.plain.replace(/\[\[ *([^\|\[\]]*?) *\| +\]\]/g, '[[$1|\x00]]');
	obj.plain = obj.plain.replace(/\[\[ *([^\|\[\]]*?) *\| *([^\[\][]*?) *\]\]/g, '[[$1|$2]]');
	obj.plain = obj.plain.replace(/\[\[ *([^\|\[\]]*) *\]\]/g, '[[$1]]');
	obj.plain = obj.plain.replace(/\x00/g, ' ');

// remove spaces in external links
	obj.plain = obj.plain.replace(/\[ *(.*?) *\](?!\])/g, '[$1]');

// no space around pipes before curly brackets
	obj.plain = obj.plain.replace(/ +\| +\}\}/g, '|}}');

// no empty line between headings and includes
	obj.plain = obj.plain.replace(/\n(=+ .*? =+\n)\n+(\{\{.*?\}\})/g, '\n$1$2');

// spaces in comments
	obj.plain = obj.plain.replace(/(&lt;!--) *(.*?) *(--&gt;)/g, '$1 $2 $3');

// empty line before and after categories
	var regExp = new RegExp('( |\\n)*(\\[\\[(Category|' + wikEd.config.text['wikicode Category'] + ')\\s*:[^\\n]*?\\]\\])( |\\n)*', 'gi');
	obj.plain = obj.plain.replace(regExp, '\n\n$2\n\n');

// categories not separated by empty lines (lookahead)
	regExp = new RegExp('(\\[\\[(Category|' + wikEd.config.text['wikicode Category'] + ')\\s*:[^\\n]*?\\]\\])\\n*(?=\\[\\[(Category|' + wikEd.config.text['wikicode Category'] + ')\\s*:[^\\n]*?\\]\\])', 'gi');
	obj.plain = obj.plain.replace(regExp, '$1\n');

// single empty lines only
	obj.plain = obj.plain.replace(/\n{3,}/g, '\n\n');

// remove leading and trailing newlines
	obj.plain = obj.plain.replace(/^\n+/, '');
	obj.plain = obj.plain.replace(/\n{2,}$/, '\n');

	return;
};


//
// wikEd.FixPunct: remove (or add) space before .,:;
//

wikEd.FixPunct = function(obj) {

	wikEd.FixBasic(obj);

// protect punctuation in charents
	obj.plain = obj.plain.replace(/(&([a-zA-Z0-9]{2,10}|#[0-9]{2,7}))(;)/g, '$1\x00$3');

// protect punctuation in URLs
	var regExp = new RegExp('(\\b(http://|https://|ftp://|irc://|gopher://|news:|mailto:|file://)[!#%&()+,\\-./:;=?@~' + wikEd.letters + '_]*)', 'g');
	obj.plain = obj.plain.replace(regExp,
		function(p, p1, p2) {
			p = p.replace(/([.,:;?!](?!$))/g, '\x00$1');
			return(p);
		}
	);

// protect punctuation in filenames
	regExp = new RegExp('([' + wikEd.letters + '_\\-])([.,:;?!])(?=([a-zA-Z]{2,4})([\\s:;?!.,()\\[\\]{}|]|$))', 'g');
	obj.plain = obj.plain.replace(regExp, '$1\x00$2');

// protect punctuation in article names
	obj.plain = obj.plain.replace(/(\[\[|\{\{)([^\]}|\n]*)/g,
		function(p, p1, p2) {
			p = p.replace(/([.,:;?!])/g, '\x00$1');
			return(p);
		}
	);

	if (wikEd.config.fixPunctFrench == true) {
		obj.plain = obj.plain.replace(/(«) *()/g, '$1 ');
		obj.plain = obj.plain.replace(/ *(»)/g, ' $1');

		regExp = new RegExp('([' + wikEd.letters + '_\'"”\\]})]) *([.,])(?=(['+ wikEd.letters + '\'"”\\[{(\\s]|$))', 'g');
		obj.plain = obj.plain.replace(regExp, '$1$2 ');

		regExp = new RegExp('([' + wikEd.letters + '\'"”\\]})]) *([:;?!])', 'g');
		obj.plain = obj.plain.replace(regExp, '$1 $2 ');
	}
	else {
		regExp = new RegExp('([' + wikEd.letters + '_\'"”\\]})]) *([.,:;])(?=([' + wikEd.letters + '\'"”\\[{(\\s]|$))', 'g');
		obj.plain = obj.plain.replace(regExp, '$1$2 ');
	}
	obj.plain = obj.plain.replace(/\x00/g, '');
	obj.plain = obj.plain.replace(/ +$/g, '');
	obj.plain = obj.plain.replace(/ +\n/g, '\n');
	obj.plain = obj.plain.replace(/ {2,}/g, ' ');

	return;
};


//
// wikEd.FixUnicode: fix unicode character representations
//

wikEd.FixUnicode = function(obj) {

// replace supported chars: change decimal, hex, and character entities into actual char
	for (var i = 0; i < wikEd.supportedChars.length; i ++) {
		var replaceChar = String.fromCharCode(parseInt(wikEd.supportedChars[i][0], 16));

// decimal representation
		var regExpStr = '&amp;#0*' + parseInt(wikEd.supportedChars[i][0], 16) + ';|';

// hex representation
		regExpStr += '&amp;#x0*' + wikEd.supportedChars[i][0] + ';';

// case insensitive replace
		var regExp = new RegExp(regExpStr, 'gi');
		obj.plain = obj.plain.replace(regExp, replaceChar);

// character entity representation
		regExpStr = '&amp;' + wikEd.supportedChars[i][1] + ';';

// case sensitive replace
		var regExp = new RegExp(regExpStr, 'g');
		obj.plain = obj.plain.replace(regExp, replaceChar);
	}

// replace unsupported chars in IE6: change decimal, hex, and chars into character entities
	for (var i = 0; i < wikEd.problemChars.length; i ++) {
		var replaceChar = '&amp;' + wikEd.problemChars[i][1] + ';';

// decimal representation
		var regExpStr = '&amp;#0*' + parseInt(wikEd.problemChars[i][0], 16) + ';|';

// hex representation
		regExpStr += '&amp;#x0*' + wikEd.problemChars[i][0] + ';';

// case insensitive replace
		var regExp = new RegExp(regExpStr, 'gi');
		obj.plain = obj.plain.replace(regExp, replaceChar);

// actual character representation
		regExpStr = '\\u' + wikEd.problemChars[i][0];

// case sensitive replace
		var regExp = new RegExp(regExpStr, 'g');
		obj.plain = obj.plain.replace(regExp, replaceChar);
	}

// replace special chars (spaces and invisible characters): change decimal, hex, and chars into character entities
	for (var i = 0; i < wikEd.specialChars.length; i ++) {
		var replaceChar = '&amp;' + wikEd.specialChars[i][1] + ';';

// decimal representation
		var regExpStr = '&amp;#0*' + parseInt(wikEd.specialChars[i][0], 16) + ';|';

// hex representation
		regExpStr += '&amp;#x0*' + wikEd.specialChars[i][0] + ';';

// case insensitive replace
		var regExp = new RegExp(regExpStr, 'gi');
		obj.plain = obj.plain.replace(regExp, replaceChar);

// actual character representation
		regExpStr = '\\u' + wikEd.specialChars[i][0];

// case sensitive replace
		var regExp = new RegExp(regExpStr, 'g');
		obj.plain = obj.plain.replace(regExp, replaceChar);
	}

// unicode line separator and paragraph separator
	obj.plain = obj.plain.replace(/\u2028/g, '\n');
	obj.plain = obj.plain.replace(/\u2029/g, '\n\n');

	return;
};


//
// wikEd.FixRedirectCall: parse link targets into wikEd.redirectsCache object using AJAX API call
//

wikEd.FixRedirectCall = function(obj) {

// check if api is enabled
	if ( ( (wikEd.wikiGlobals.wgEnableAPI != true) && (wikEd.wikiGlobals.wgEnableAPI != 'true') ) || (wikEd.scriptURL == '') ) {
		return;
	}

// reset redirects object
	wikEd.redirectsCache = {};

// get wiki links
	var links = '';

//                  1 [[    2  2   3                34#                4 5     6    6  5  ]]    1
	var regExpLink = /(\[\[\s*(:?)\s*([^\n#<>\[\]{}|]+)(\s*#[^\n\[\]\|]*?)?(\s*\|(.|\s)*?)?\]\]\s*)/g;
	while ( (regExpMatch = regExpLink.exec(obj.plain)) != null) {
		links += regExpMatch[3] + '|';
	}
	if (links == '') {
		return;
	}

// prepare the request
	var postFields = {};
	postFields['titles'] = links;
	postFields['redirects'] = 'true';
	postFields['format'] = 'xml';
	postFields['action'] = 'query';
	if (wikEd.starttime != null) {
		postFields['wpStarttime'] = wikEd.starttime;
	}
	if (wikEd.edittime != null) {
		postFields['wpEdittime'] = wikEd.edittime;
	}
	if (wikEd.editToken != null) {
		postFields['wpEditToken'] = wikEd.editToken;
	}
	if (wikEd.autoSummary != null) {
		postFields['wpAutoSummary'] = wikEd.autoSummary;
	}

	var requestUrl = wikEd.scriptURL + 'api.php';

// make the ajax request
	wikEd.AjaxRequest('POST', requestUrl, postFields, 'text/plain', function(ajax) {

// get response
		var txt = ajax.responseText;
		if ( (regExpMatch = txt.match(/<redirects>((.|\s)*?)<\/redirects>/)) != null) {
			var redirects = regExpMatch[1];

			if ( (regExpMatch = txt.match(/<normalized>((.|\s)*?)<\/normalized>/)) != null) {
				redirects = regExpMatch[1] + redirects;
			}

// parse redirects
			var i = 0;
			wikEd.redirectsCache.from = [];
			wikEd.redirectsCache.to = [];
			wikEd.redirectsCache.allFrom = '';

			var regExpRedir = /<(r|n) .*?\bfrom="([^">]*)".*?\bto="([^"]*)".*?>/g;
			while ( (regExpMatch = regExpRedir.exec(txt)) != null) {
				wikEd.redirectsCache.from[i] = regExpMatch[2];
				wikEd.redirectsCache.allFrom += i + '="' + regExpMatch[2] + '"';
				wikEd.redirectsCache.to[i] = regExpMatch[3];
				i ++;
			}

// recurse through chained normalizations and redirects
			wikEd.redirectsCache.toIndex = [];
			for (var i = 0; i < wikEd.redirectsCache.to.length; i ++) {
				wikEd.redirectsCache.toIndex[i] = wikEd.ResolveRedirects(i);
			}

		}

// replace links
		wikEd.EditButton(null, 'wikEdFixRedirectReplace');

		return;
	});
// end Ajax handler

	return;
};


//
// wikEd.ResolveRedirects: recursively follow redirects, called from wikEd.FixRedirectCall Ajax handler
//   uses wikEd.redirectsCache.allFrom as a regExp hash

wikEd.ResolveRedirects = function(i) {
	var toRegExp = wikEd.redirectsCache.to[i].replace(/(\W)/g, '\\$1');
	var regExp = new RegExp('(\\d+)="' + toRegExp + '"');
	if ( (regExpMatch = wikEd.redirectsCache.allFrom.match(regExp)) != null) {
		i = wikEd.ResolveRedirects( parseInt(regExpMatch[1], 10) );
	}
	return(i);
};


//
// wikEd.FixRedirectReplace: replace redirects using wikEd.redirectsCache object prepared in wikEd.FixRedirectCall()
//

wikEd.FixRedirectReplace = function(obj) {

	if (wikEd.redirectsCache.from == null) {
		return;
	}

// cycle through parsed redirects
	if (wikEd.redirectsCache.from != null) {
		for (var i = 0; i < wikEd.redirectsCache.from.length; i ++) {

//                                       1  1    2                                    23    #               3 4      |56     6  54
			var regExp = new RegExp('\\[\\[\\s*(:?)\\s*(' + wikEd.redirectsCache.from[i] + ')(\\s*#[^\\n\\[\\]|]*?)?(\\s*\\|((.|\\s)*?))?\\s*\\]\\]', 'g');
			obj.plain = obj.plain.replace(regExp,
				function(p, p1, p2, p3, p4, p5) {
					var prefix = p1;
					var article = p2;
					var redirect = wikEd.redirectsCache.to[ wikEd.redirectsCache.toIndex[i] ];
					var fragmentId = p3;
					var linkText = p5 || '';

// use normalized target
					var linkTarget = redirect;

// lowercase link target if link text starts with lowercase (main space only)
					if (wikEd.config.articlesCaseSensitive == false) {
						if (/:/.test(linkTarget) != true) {
							if (article.charAt(0).toLowerCase() == article.charAt(0)) {
								linkTarget = linkTarget.charAt(0).toLowerCase() + linkTarget.substr(1);
							}
						}
					}

// remove text if identical to new target
					if (linkText != '') {
						if ( linkText.replace(/_/g, ' ') == linkTarget ) {
							linkText = '';
						}
					}

// keep replaced link as link text
					else if (linkText == '') {
						if (linkTarget != article) {
							linkText = article;
						}
					}

// return fixed link
					var wikiLink;
					if (linkText == '') {
						wikiLink = '[[' + prefix + linkTarget + fragmentId + ']]';
					}
					else {
						wikiLink = '[[' + prefix + linkTarget + fragmentId + '|' + linkText + ']]';
					}
					return(wikiLink);
				}
			);
		}
	}
	return;
};


//
// wikEd.FixMath: math character fixer, originally from User:Omegatron
//

wikEd.FixMath = function(obj) {

	wikEd.FixBasic(obj);

// change only outside <math> </math> wikicode
	obj.plain = obj.plain.replace(/(.*?)((&lt;math(\b.*?)&gt;.*?&lt;\/math&gt;)|$)/gi,
		function (p, p1, p2) {

// convert html entities into actual dash characters
			p1 = p1.replace(/&plus;/g, '+');
			p1 = p1.replace(/&minus;/g, '\u2212');
			p1 = p1.replace(/&middot;/g, '·');

// convert dash next to a number into a minus sign character
			var regExp = new RegExp('([^' + wikEd.letters + '_,{])-(\\d)', 'g');
			p1 = p1.replace(regExp, '$1\u2212$2');

// changes 2x3 to 2×3
			p1 = p1.replace(/(\d *)x( *\d)/g, '$1\xd7$2');

// changes 10^3 to 10<sup>3</sup>
			p1 = p1.replace(/(\d*\.?\d+)\^(\u2212?\d+\.?\d*)/g, '$1&lt;sup&gt;$2&lt;/sup&gt;');

// change x^3 to x<sup>3</sup>
			var regExp = new RegExp('([' + wikEd.letters + '_])\\^(\\u2212?\\d+\\.?\\d*) ', 'g');
			p1 = p1.replace(regExp, '$1&lt;sup&gt;$2&lt;/sup&gt;');

// change +/- to ±
			p1 = p1.replace(/( |\d)\+\/(-|\u2212)( |\d)/g, '$1\xb1$3');

// htmlize single char superscripts
			p1 = p1.replace(/(\xb9|&sup1;)/g, '&lt;sup&gt;1&lt;/sup&gt;');
			p1 = p1.replace(/(\xb2|&sup2;)/g, '&lt;sup&gt;2&lt;/sup&gt;');
			p1 = p1.replace(/(\xb3|&sup3;)/g, '&lt;sup&gt;3&lt;/sup&gt;');

			return(p1 + p2);
		}
	);
	return;
};


//
// wikEd.FixChem: fix chemical formulas
//

wikEd.FixChem = function(obj) {

	wikEd.FixBasic(obj);

	var realElements = 'H|He|Li|Be|B|C|N|O|F|Ne|Na|Mg|Al|Si|P|S|Cl|Ar|K|Ca|Sc|Ti|V|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Sr|Y|Zr|Nb|Mo|Tc|Ru|Rh|Pd|Ag|Cd|In|Sn|Sb|Te|I|Xe|Cs|Ba|Hf|Ta|W|Re|Os|Ir|Pt|Au|Hg|Tl|Pb|Bi|Po|At|Rn|Fr|Ra|Rf|Db|Sg|Bh|Hs|Mt|Ds|Rg|La|Ce|Pr|Nd|Pm|Sm|Eu|Gd|Tb|Dy|Ho|Er|Tm|Yb|Lu|Ac|Th|Pa|U|Np|Pu|Am|Cm|Bk|Cf|Es|Fm|Md|No|Lr';
	var pseudoElements = '|Me|Et|Pr|Bu|e';

// fix common typos
	obj.plain = obj.plain.replace(/\bh2o\b/g, 'H2O');
	obj.plain = obj.plain.replace(/\bh3o+/g, 'H3O+');
	obj.plain = obj.plain.replace(/\boh-/g, 'OH-');

// uppercase lowercased elements
	var regExp = new RegExp('(^|[^a-zA-Z])(' + realElements.toLowerCase() + pseudoElements.toLowerCase() + ')([^a-zA-Z]|$)', 'g');
	obj.plain = obj.plain.replace(regExp,
		function (p, p1, p2, p3) {
			if (p2 != 'e') {
				p2 = p2.charAt(0).toUpperCase() + p2.substr(1).toLowerCase();
			}
			return(p1 + p2 + p3);
		}
	);

// fix superscripts
	obj.plain = obj.plain.replace(/&plus;/g, '+');
	obj.plain = obj.plain.replace(/&minus;/g, '\u2212');
	obj.plain = obj.plain.replace(/&middot;/g, '·');
	regExp = new RegExp('(' + realElements + pseudoElements + '|\\))(\\d*(\\+|-|\\u2212))', 'g');
	obj.plain = obj.plain.replace(regExp,
		function (p, p1, p2, p3) {
			p2 = p2.replace(/-/g, '\u2212');
			return(p1 + '&lt;sup&gt;' + p2 + '&lt;/sup&gt;');
		}
	);

// fix indices
	regExp = new RegExp('(' + realElements + pseudoElements + '|\\))(\\d+)', 'g');
	obj.plain = obj.plain.replace(regExp, '$1&lt;sub&gt;$2&lt;/sub&gt;');

// fix prefixes
	regExp = new RegExp('(\\d+) *(\\(|' + realElements + pseudoElements + ')', 'g');
	obj.plain = obj.plain.replace(regExp, '$1$2');

// fix arrows
	obj.plain = obj.plain.replace(/ *-+&gt; *()/g, ' \u2192 ');
	obj.plain = obj.plain.replace(/ *&lt;-+ *()/g, ' \u2190 ');

// &hdarr; and "leftwards harpoon over rightwards harpoon" not supported in IE6
//	obj.plain = obj.plain.replace(/ *(&lt;=+&gt;|&hdarr;|&harr;|\u2190 *\u2192) *()/g, ' \u21cc ');
	obj.plain = obj.plain.replace(/ *(&lt;==+&gt;|&hdarr;|&harr;|\u21cc|\u2190 *\u2192) *()/g, ' <=> ');

// fix -
	var regExp = new RegExp('([' + wikEd.letters + '_]|\\)|&gt;) +(-|\\u2212) +([' + wikEd.letters + '_]|\\()', 'g');
	obj.plain = obj.plain.replace(regExp, '$1 \u2212 $3');

	return;
};


//
// wikEd.FixUnits: unit formatter
//

wikEd.FixUnits = function(obj) {

	wikEd.FixBasic(obj);

// convert into actual characters
	obj.plain = obj.plain.replace(/&amp;deg;|&amp;#00b0;/g, '°');
	obj.plain = obj.plain.replace(/&amp;#00b5;|&amp;mu;|&amp;micro;/g, 'µ');
	obj.plain = obj.plain.replace(/&amp;Omega;|&amp;#8486;/g, '\u03a9');

// add space before units, remove space around /, and use abreviations
	var regExp = new RegExp('( */ *|\\d *)(Y|yotta|Z|zetta|E|exa|P|peta|T|tera|G|giga|M|mega|k|kilo|K|h|hecto|da|deca|d|deci|c|centi|m|mill?i|micro|u|µ|n|nano|p|pico|f|femto|a|atto|z|zepto|y|yocto|mibi|mebi|)(gramm?s?|g|metres?|meters?|m|amperes?|Amperes?|amps?|Amps?|A|Angstroms?|Angströms?|Å|Kelvins?|kelvins?|K|moles?|Moles?|mol|candelas?|cd|rad|Ci|sr|Hert?z|hert?z|Hz|newtons?|Newtons?|N|Joules?|joules?|J|watts?|Watts?|W|pascals?|Pascals?|Pa|lm|lx|C|volts?|Volts?|V|O|Farads?|F|Wb|T|H|S|bequerels?|Bequerels?|Bq|Gy|Sv|kat|centigrades?|°C|decibels?|db|dB|M|ohms?|Ohms?|\\u03a9|sec|seconds?|s|minutes?|min|hour?|h|bits?|Bits?|bit|bytes?|Bytes?|B|bps|Bps)(?=[^' + wikEd.letters + '_]|$)', 'g');
	obj.plain = obj.plain.replace(regExp,
		function (p, p1, p2, p3) {

			p1 = p1.replace(/ *\/ *()/g, '/');
			p1 = p1.replace(/(\d) *()/g, '$1 ');

			p2 = p2.replace(/yotta/g, 'Y');
			p2 = p2.replace(/zetta/g, 'Z');
			p2 = p2.replace(/exa/g, 'E');
			p2 = p2.replace(/peta/g, 'P');
			p2 = p2.replace(/tera/g, 'T');
			p2 = p2.replace(/giga/g, 'G');
			p2 = p2.replace(/mega/g, 'M');
			p2 = p2.replace(/kilo/g, 'k');
			p2 = p2.replace(/K/g, 'k');
			p2 = p2.replace(/hecto/g, 'h');
			p2 = p2.replace(/deca/g, 'da');
			p2 = p2.replace(/deci/g, 'd');
			p2 = p2.replace(/centi/g, 'c');
			p2 = p2.replace(/mill?i/g, 'm');
			p2 = p2.replace(/micro|u/g, 'µ');
			p2 = p2.replace(/nano/g, 'n');
			p2 = p2.replace(/pico/g, 'p');
			p2 = p2.replace(/femto/g, 'f');
			p2 = p2.replace(/atto/g, 'a');
			p2 = p2.replace(/zepto/g, 'z');
			p2 = p2.replace(/yocto/g, 'y');
			p2 = p2.replace(/mibi/g, 'mebi');

			p3 = p3.replace(/gramm?s?/g, 'g');
			p3 = p3.replace(/metres?|meters?/g, 'm');
			p3 = p3.replace(/amperes?|Amperes?|amps?|Amps?/g, 'A');
			p3 = p3.replace(/Angstroms?|Angströms?/g, 'Å');
			p3 = p3.replace(/Kelvins?|kelvins?/g, 'K');
			p3 = p3.replace(/moles?|Moles?/g, 'mol');
			p3 = p3.replace(/candelas?/g, 'cd');
			p3 = p3.replace(/Hert?z|hert?z/g, 'Hz');
			p3 = p3.replace(/newtons?|Newtons?/g, 'N');
			p3 = p3.replace(/Joules?|joules?/g, 'J');
			p3 = p3.replace(/watts?|Watts?/g, 'W');
			p3 = p3.replace(/pascals?|Pascals?/g, 'Pa');
			p3 = p3.replace(/volts?|Volts?/g, 'V');
			p3 = p3.replace(/ohms?|Ohms?/g, '\u03a9');
			p3 = p3.replace(/bequerels?|Bequerels?/g, 'Bq');
			p3 = p3.replace(/Farads?/g, 'F');
			p3 = p3.replace(/bits?|Bits?/g, 'bit');
			p3 = p3.replace(/bytes?|Bytes?/g, 'B');
			p3 = p3.replace(/sec|seconds?/g, 's');
			p3 = p3.replace(/minutes?/g, 'min');
			p3 = p3.replace(/hours?/g, 'h');
			p3 = p3.replace(/sec|seconds?/g, 's');
			p3 = p3.replace(/bps/g, 'bit/s');
			p3 = p3.replace(/Bps/g, 'B/s');

			return(p1 + p2 + p3);
		}
	);

// fix prefix casing
	var regExp = new RegExp(' K(bit/s|B/s)([^' + wikEd.letters + '_]|$)', 'g');
	obj.plain = obj.plain.replace(regExp, ' k$1$2');

	var regExp = new RegExp(' m(bit/s|B/s)([^' + wikEd.letters + '_]|$)', 'g');
	obj.plain = obj.plain.replace(regExp, ' M$1$2');

	var regExp = new RegExp(' g(bit/s|B/s)([^' + wikEd.letters + '_]|$)', 'g');
	obj.plain = obj.plain.replace(regExp, ' G$1$2');

	var regExp = new RegExp(' t(bit/s|B/s)([^' + wikEd.letters + '_]|$)', 'g');
	obj.plain = obj.plain.replace(regExp, ' T$1$2');

	var regExp = new RegExp(' e(bit/s|B/s)([^' + wikEd.letters + '_]|$)', 'g');
	obj.plain = obj.plain.replace(regExp, ' E$1$2');

	return;
};


//
// wikEd.FixDashes: fixes dashes and minus signs
//

wikEd.FixDashes = function(obj) {

	wikEd.FixBasic(obj);

// convert html character entities into actual dash characters
	obj.plain = obj.plain.replace(/&amp;mdash;/g, '—');
	obj.plain = obj.plain.replace(/&amp;ndash;/g, '–');
	obj.plain = obj.plain.replace(/&amp;minus;/g, '\u2212');

// remove spaces around em dashes
	var regExp = new RegExp('([' + wikEd.letters + '\'"”\\]})])( |&amp;nbsp;)*—( |&amp;nbsp;)*([' + wikEd.letters + '\'"“\\[{(])', 'g');
	obj.plain = obj.plain.replace(regExp, '$1—$4');

// convert -- to em dashes
	var regExp = new RegExp('([' + wikEd.letters + '\'"”\\]})])( |&amp;nbsp;)*--( |&amp;nbsp;)*([' + wikEd.letters + '\'"“\\[{(])', 'g');
	obj.plain = obj.plain.replace(regExp, '$1—$4');

// convert hyphen next to lone number into a minus sign character
	var regExp = new RegExp('([' + wikEd.letters + '\'"”\\]>] ) *(\\u2212|–)(\\d)', 'g');
	obj.plain = obj.plain.replace(regExp, '$1\u2212$3');

// convert minus or en dashes to dashes with spaces
	var regExp = new RegExp('([' + wikEd.letters + '\'"”\\]}])( |&amp;nbsp;)*(\\u2212|–)( |&amp;nbsp;)*([' + wikEd.letters + '\'"“\\[{])', 'g');
	obj.plain = obj.plain.replace(regExp, '$1 – $5');

// convert dashes to en dashes in dates
	obj.plain = obj.plain.replace(/(^|[ \(\|])(\d\d(\d\d)?)(\u2212|-|–)(\d\d)(\u2212|-|–)(\d\d(\d\d)?)([ \)\}\|,.;—]|$)/gm, '$1$2–$5–$7$9');

	return;
};


//
// wikEd.FixHTML: fix html to wikicode
//

wikEd.FixHTML = function(obj) {

	wikEd.FixBasic(obj);

// remove syntax highlighting
	obj.html = obj.plain;
	obj.html = obj.html.replace(/\n/g, '<br>');
	wikEd.RemoveHighlighting(obj);

// keep <br> in blockquote
	obj.html = obj.html.replace(/(&lt;blockquote\b.*?&gt;)([\S\s]*?)(&lt;\/blockquote&gt;)/gi,
		function (p, p1, p2, p3) {
			p2 = p2.replace(/&lt;(br\b.*?)&gt;<br\b.*?>/g, '\x00$1\x01\n');
			return(p1 + p2 + p3);
		}
	);

// keep <br> in tables (and certain templates!?)
	obj.html = obj.html.replace(/(<br\b[^>]*>\|)([^\}][\S\s]*?)(?=<br\b[^>]*>\|)/gi,
		function (p, p1, p2) {
			p2 = p2.replace(/&lt;(br\b.*?)&gt;/g, '\x00$1\x01');
			return(p1 + p2);
		}
	);

// detect outermost template tags
	var depth = 0;
	obj.html = obj.html.replace(/((\{\{)|\}\})/g,
		function (p, p1, p2) {
			p2 = p2 || '';
			if (p2 != '') {
				depth ++;
				if (depth == 1) {
					return('<!--wikEdOuterTemplateStart-->' + p1);
				}
				return(p1);
			}
			depth --;
			if (depth == 0) {
				return(p1 + '<!--wikEdOuterTemplateEnd-->');
			}
			return(p1);
		}
	);

// keep <br> in templates
	obj.html = obj.html.replace(/<!--wikEdOuterTemplateStart-->([\S\s]*?)<!--wikEdOuterTemplateEnd-->/g,
		function (p, p1) {
			return(p1.replace(/&lt;(br\b.*?)&gt;/g, '\x00$1\x01'));
		}
	);

// detect outermost table tags
	var depth = 0;
	obj.html = obj.html.replace(/(((^|<br\b[^>]*>)\{\|)|<br\b[^>]*>\|\})/g,
		function (p, p1, p2, p3) {
			if (p2 != '') {
				depth ++;
				if (depth == 1) {
					return('<!--wikEdOuterTableStart-->' + p1);
				}
				return(p1);
			}
			depth --;
			if (depth == 0) {
				return(p1 + '<!--wikEdOuterTableEnd-->');
			}
			return(p1);
		}
	);

// keep <br> in tables
	obj.html = obj.html.replace(/<!--wikEdOuterTableStart-->([\S\s]*?)<!--wikEdOuterTableEnd-->/g,
		function (p, p1) {
			return(p1.replace(/&lt;(br\b.*?)&gt;/g, '\x00$1\x01'));
		}
	);

// turn visible html code into real html, exclude comments
	obj.html = obj.html.replace(/&lt;(\/?\w.*?)&gt;/g, '<$1>');

// restore valid <br>s
	obj.html = obj.html.replace(/\x00(.*?)\x01/g, '&lt;$1&gt;');

// wikify, keep user added attribute
	wikEd.WikifyHTML(obj, true);

// turn real html into visible html code
	obj.html = obj.html.replace(/<br\b[^>]*>[\n ]*()/g, '\n');
	obj.html = obj.html.replace(/</g, '&lt;');
	obj.html = obj.html.replace(/>/g, '&gt;');
	obj.plain = obj.html;

	return;
};


//
// wikEd.FixCaps: fix capitalizing of lists, linklists, images, headings
//

wikEd.FixCaps = function(obj) {

	wikEd.FixBasic(obj);

// uppercase lists
// start (listcode (char-ent|tag|category..|digit|non-word,non-ret))(word,non-digit..) end
	var regExp = new RegExp('^((\\||[*#:;]+)[ \'"]*(\'+|&\\w+;|&lt;.*?&gt;|\\{\\{.*?\\}\\}.*|\\d|[^' + wikEd.letters + '_\\n])*)([^' + wikEd.letters + '_\\d\\n].*?)?$', 'gm');
	obj.plain = obj.plain.replace(regExp,
		function (p, p1, p2, p3, p4) {
			if (p4.match(/^(http|ftp|alpha|beta|gamma|delta|epsilon|kappa|lambda|$)/) == null) {

// spaces cannot be added to p1 in above regExp !?
				p4 = p4.replace(/^(\s*)(.*?)$/,
					function (p, p1, p2) {
						p2 = p2.charAt(0).toUpperCase() + p2.substr(1);
						return(p1 + p2);
					}
				);
			}
			return(p1 + p4);
		}
	);

// uppercase link lists (link)
//                                12 table list   2          13   34    4
	obj.plain = obj.plain.replace(/^((\||[*#:;]+)[ '"]*\[\[)(.*?)(\]\])/gm,
		function (p, p1, p2, p3, p4) {

// uppercase link
			var regExp = new RegExp('^((&\\w+;|[^' + wikEd.letters + '_]|\\d)*)([' + wikEd.letters + '_].*)$', '');
			p3 = p3.replace(regExp,
				function (p, p1, p2, p3) {
					if (p3.match(/^(http|ftp|alpha|beta|gamma|delta|epsilon|kappa|lambda)/) == null) {
						p3 = p3.charAt(0).toUpperCase() + p3.substr(1);
					}
					return(p1 + p3);
				}
			);

// uppercase comment
		var regExp = new RegExp('(\\| *(&\\w+;|&lt;.*?&gt;|[^' + wikEd.letters + '_][^|]*)$', '');
			p3 = p3.replace(regExp,
				function (p, p1, p2, p3) {
					if (p3.match(/^(http|ftp|alpha|beta|gamma|delta|epsilon|kappa|lambda)/) == null) {
						p3 = p3.charAt(0).toUpperCase() + p3.substr(1);
					}
					return(p1 + p3);
				}
			);
			return(p1 + p3 + p4);
		}
	);

// uppercase headings
	var regExp = new RegExp('^(=+ (&\\w+\\;|&lt;.*?&gt;|\\d|[^' + wikEd.letters + '_\\n])*)([' + wikEd.letters + '_].*? =+)$', 'gm');
	obj.plain = obj.plain.replace(regExp,
		function (p, p1, p2, p3) {
			if (p3.match(/^(http|ftp|alpha|beta|gamma|delta|epsilon|kappa|lambda)/) == null) {
				p3 = p3.charAt(0).toUpperCase() + p3.substr(1);
			}
			return(p1 + p3);
		}
	);

// uppercase images
	var regExp = new RegExp('(\\[\\[)(Image|File|' + wikEd.config.text['wikicode Image'] + '|' + wikEd.config.text['wikicode File'] + '):([' + wikEd.letters + '_])([^\\n]*\\]\\])', 'igm');
	obj.plain = obj.plain.replace(regExp,
		function (p, p1, p2, p3, p4) {
			p2 = p2.charAt(0).toUpperCase() + p2.substr(1).toLowerCase();
			p3 = p3.toUpperCase();
			return(p1 + p2 + ':' + p3 + p4);
		}
	);

	return;
};


//
// wikEd.FixTypos: fix typos using the AutoWikiBrowser/RegExTypoFix list (.test() is not faster)
//

wikEd.FixTypos = function(obj) {

	wikEd.FixBasic(obj);

//	split into alternating plain text and {{lang}} template fragments (does not support nested templates)
	var fragment = [];
	var nextPos = 0;
	var regExp = /{{\s*lang\s*\|(.|\n)*?}}/gi;
	while ( (regExpMatch = regExp.exec(obj.plain)) != null) {
		fragment.push(obj.plain.substring(nextPos, regExpMatch.index));
		fragment.push(regExpMatch[0]);
		nextPos = regExp.lastIndex;
	}
	fragment.push(obj.plain.substring(nextPos));

// cycle through the RegExTypoFix rules
	for (var i = 0; i < wikEd.typoRulesFind.length; i ++) {

// cycle through the fragments, jump over {{lang}} templates
		for (var j = 0; j < fragment.length; j = j + 2) {
			fragment[j] = fragment[j].replace(wikEd.typoRulesFind[i], wikEd.typoRulesReplace[i]);
		}
	}

// re-assemble text
	obj.plain = fragment.join('');

	return;
};


//
// wikEd.FixAll:
//

wikEd.FixAll = function(obj) {
	wikEd.FixBasic(obj);
	wikEd.FixUnicode(obj);
	wikEd.FixHTML(obj);
	wikEd.FixCaps(obj);
	return;
};


//
// wikEd.RemoveElements: remove elements by tag name
//

wikEd.RemoveElements = function(tagNameArray) {

// cycle through the element names
	for (var i = 0; i < tagNameArray.length; i ++) {
		var elementArray = wikEd.frameDocument.getElementsByTagName(tagNameArray[i]);
		for (var j = 0; j < elementArray.length; j ++) {
			elementArray[j].parentNode.removeChild(elementArray[j]);
		}
	}
	return;
};


//
// wikEd.FindBoundaries: find word boundaries and line boundaries starting from selection.range
//

wikEd.FindBoundaries = function(word, line, para, whole, selection) {

// get the start node and offset
	var startNode = selection.range.startContainer;
	var startOffset = selection.range.startOffset;

// get the end node and offset
	var endNode = selection.range.endContainer;
	var endOffset = selection.range.endOffset;

	if (startNode.childNodes != null) {
		if (startNode.childNodes.length > 0) {
			startNode = startNode.childNodes.item(startOffset);
			startOffset = 0;
		}
	}
	if (endNode.childNodes != null) {
		if (endNode.childNodes.length > 0) {
			endNode = endNode.childNodes.item(endOffset);
			endOffset = 0;
		}
	}

// find the start and end nodes in the whole plain text arrays
	var startNodeIndex;
	var endNodeIndex;
	for (var i = 0; i < whole.plainNode.length; i ++) {
		if (startNode == whole.plainNode[i]) {
			startNodeIndex = i;
		}
		if (endNode == whole.plainNode[i]) {
			endNodeIndex = i;
			break;
		}
	}

// find last previous word and line boundary
	var foundWord = false;
	var foundLine = false;
	var foundPara = false;
	var regExp = new RegExp('.*[^' + wikEd.letters + '_]', 'g');
	var plainPrev = '';

// check text nodes left-wise for a boundary
	var plain = '';
	for (var i = startNodeIndex; i >= 0; i --) {
		plainPrev = plain;
		plain = whole.plainArray[i];
		plain = plain.replace(/&lt;/g, '<');
		plain = plain.replace(/&gt;/g, '>');
		plain = plain.replace(/&amp;/g, '&');

// boundary is a new paragraph
		if ( (plainPrev == '\n') && (plain == '\n') ) {
			para.range.setStartAfter(whole.plainNode[i + 1]);
			foundPara = true;
			break;
		}

// boundary is a newline
		else if (plain == '\n') {
			if (foundWord == false) {
				word.range.setStartAfter(whole.plainNode[i]);
				foundWord = true;
			}
			if (foundLine == false) {
				line.range.setStartAfter(whole.plainNode[i]);
				foundLine = true;
			}
		}

// check text node for a word boundary
		else if (foundWord == false) {
			if (i == startNodeIndex) {
				plain = plain.substr(0, startOffset);
			}
			regExp.lastIndex = 0;
			if (regExp.exec(plain) != null) {
				wikEd.SetRangeStart(word.range, whole.plainNode[i], regExp.lastIndex);
				foundWord = true;
			}
		}
	}

// boundary is start of text
	if (foundPara == false) {
		para.range.setStartBefore(whole.plainNode[0]);
	}
	if (foundLine == false) {
		line.range.setStartBefore(whole.plainNode[0]);
	}
	if (foundWord == false) {
		word.range.setStartBefore(whole.plainNode[0]);
	}

// find next word and line boundary
	regExp = new RegExp('[^' + wikEd.letters + '_]', 'g');
	foundWord = false;
	foundLine = false;
	foundPara = false;

// check text nodes right-wise for a boundary
	plain = '';
	for (var i = endNodeIndex; i < whole.plainArray.length; i ++) {
		plainPrev = plain;
		plain = whole.plainArray[i];
		plain = plain.replace(/&lt;/g, '<');
		plain = plain.replace(/&gt;/g, '>');
		plain = plain.replace(/&amp;/g, '&');

// boundary is a double newline
		if ( (plainPrev == '\n') && (plain == '\n') ) {
			para.range.setEndBefore(whole.plainNode[i]);
			foundPara = true;
			break;
		}

// boundary is a newline
		else if (plain == '\n') {
			if (foundWord == false) {
				word.range.setEndBefore(whole.plainNode[i]);
				foundWord = true;
			}
			if (foundLine == false) {
				line.range.setEndBefore(whole.plainNode[i]); //// crashes for empty selection
				foundLine = true;
			}
		}

// check text node for a word boundary
		else if (foundWord == false) {
			if (i == endNodeIndex) {
				regExp.lastIndex = endOffset;
			}
			else {
				regExp.lastIndex = 0;
			}
			var regExpArray = regExp.exec(plain);
			if (regExpArray != null) {
				wikEd.SetRangeEnd(word.range, whole.plainNode[i], regExp.lastIndex - 1);
				foundWord = true;
			}
		}
	}

// boundary is end of text
	if (foundPara == false) {
		para.range.setEndAfter(whole.plainNode[whole.plainArray.length - 1]);
	}
	if (foundLine == false) {
		line.range.setEndAfter(whole.plainNode[whole.plainArray.length - 1]);
	}
	if (foundWord == false) {
		word.range.setEndAfter(whole.plainNode[whole.plainArray.length - 1]);
	}

	return;
};


//
// remove syntax highlighting and wikify
//

wikEd.RemoveHighlightingWikify = function(obj, wikify) {

	if ( (obj.html != '') || (wikify == true) ) {

// <div>...</div> to <br> for Safari, Chrome, WebKit
		if ( (wikEd.safari == true) || (wikEd.chrome == true) || (wikEd.webkit == true) ) {
			var isRemove = [];
			obj.html = obj.html.replace(/(<(\/?)div\b([^>]*)>)/g,
				function (p, p1, p2, p3) {
					if (p2 == '') {
						if (p3 == '') {
							isRemove.push(true);
							return('\x00');
						}
						isRemove.push(false);
						return(p1);
					}
					if (isRemove.pop() == true) {
						return('\x01');
					}
					return(p1);
				}
			);
			obj.html = obj.html.replace(/\x00\s*<br>\s*\x01/g, '\x01');
			obj.html = obj.html.replace(/\x01\s*<br>/g, '\x01');
			obj.html = obj.html.replace(/<br>\s*\x00/g, '\x00');
			obj.html = obj.html.replace(/\x01\s*\x00/g, '\x01');
			obj.html = obj.html.replace(/^\x00|\x01$/g, '');
			obj.html = obj.html.replace(/[\x00\x01]/g, '<br>');
		}

// remove syntax highlighting
		wikEd.RemoveHighlighting(obj);

// wikify, don't allow many attributes
		if ( (obj.htmlCode == true) && (wikify != false) ) {
			wikEd.WikifyHTML(obj, false);
		}
	}
	return;
};


//
// wikEd.WikifyHTML:
//   obj.html contains the text to be wikified
//   expects < > &lt; &gt; &amp;  spaces instead of &nbsp; <br> (not \n)
//   returns <br> (not \n)

// allowed and converted tags:
//   br|p
//   h1|h2|h3|h4|h5|h6
//   hr
//   i|dfn|cite|em|var
//   b|strong
//   table|caption|col|thead|tfoot|tbody|tr|td|th
//   dl|dt|dd|li|ol|ul
//   a
// not allowed yet:
//   bdo|q|kbd|samp|abbr|acronym|label
// other allowed tags:
//   big|blockquote|colgroup|center|code|del|div|font|ins|pre|s|small|span|strike|sub|sup|tt|u|rb|rp|rt|ruby
// mediawiki tags (inline/block):
//   nowiki|math|noinclude|includeonly|ref|charinsert|fundraising|fundraisinglogo
//   gallery|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references

wikEd.WikifyHTML = function(obj, relaxed) {

	var regExpStr;
	var regExp;
	var regExpMatch;

// delete tags: <style>
	obj.html = obj.html.replace(/<(style)\b[^>]*>.*?<\/\1>/gi, '');

// remove MediaWiki section edit spans
	obj.html = obj.html.replace(/<span[^>]*class="editsection"[^>]*>.*?<\/span>\s*()/gi, '');

// remove MediaWiki heading spans
	obj.html = obj.html.replace(/<span\b[^>]*\bclass="mw-headline"[^>]*>(.*?)<\/span>\s*()/g, '$1');

// remove MediaWiki divs from article top
	obj.html = obj.html.replace(/<h3\b[^>]*\bid="siteSub"[^>]*>.*?<\/h3>\s*()/g, '');
	obj.html = obj.html.replace(/<div\b[^>]*\bid="contentSub"[^>]*>.*?<\/div>\s*()/g, '');
	obj.html = obj.html.replace(/<div\b[^>]*\bid="jump-to-nav"[^>]*>.*?<\/div>\s*()/g, '');

// remove MediaWiki table of contents
	obj.html = obj.html.replace(/<table\b[^>]*?\bid="toc"[^>]*>.*?<\/table>\s*()/g, '');

// remove MediaWiki print footer
	obj.html = obj.html.replace(/<div\b[^>]*?\bclass="printfooter"[^>]*>[^<>"]+"<a\b[^>]*>[^<]+<\/a>"<\/div>\s*()/g, '');

// remove MediaWiki category list tags
	while(/<div\b[^>]*\bid="catlinks"[^>]*>(.*?)<\/div>\s*()/g.test(obj.html) == true) {
		obj.html = obj.html.replace(regExp, '$1');
	}
	while(/<p\b[^>]*?\bclass="catlinks"[^>]*>(.*?)<a\b[^>]*>[^<>]+<\/a>: (.*?)<\/p>/g.test(obj.html) == true) {
		obj.html = obj.html.replace(regExp, '$1$2');
	}

// convert MS-Word non-standard lists: *
	obj.html = obj.html.replace(/\s*<p [^>]*>\s*<!--\[if !supportLists\]-->.*?<!--\[endif\]-->\s*(.*?)\s*<\/p>\s*()/g, '* $1\n');

// collect MS-Word footnote texts
	var footnotes = {};
	obj.html = obj.html.replace(/<div\b[^>]* id="ftn(\d+)"[^>]*>\s*<p class="MsoFootnoteText">\s*<a(.|\n)*?<\/a>((.|\n)*?)<\/p>\s*<\/div>/g,
		function(p, p1, p2, p3) {
			footnotes[p1] = p3.replace(/^(\s|<br\b[^>]*>)|(\s|<br\b[^>]*>)$/g, '');
			return('');
		}
	);

// add footnotes as <ref> tags
	obj.html = obj.html.replace(/<a\b[^>]* name="_ftnref(\d+)"[^>]*>(.|\n)*?<!--\[endif\]-->\s*<\/span>\s*<\/span>\s*<\/a>/g,
		function(p, p1) {
			var ref = '&lt;ref name="footnote_' + p1 + '"&gt;' + footnotes[p1] + '&lt;/ref&gt;';
			return(ref);
		}
	);

// remove MS-Word footnote separator
	obj.html = obj.html.replace(/<!--\[if !supportFootnotes\]-->(\s|<br\b[^>]*>)*<hr\b[^>]*>\s*<!--\[endif\]-->(\s|<br\b[^>]*>)*()/g, '');

// correct name for MS-Word images
//                             1                                                    2    2                  3      3       4    4                                 1             5            5
	obj.html = obj.html.replace(/(<v:imagedata\b[^>]*? src="[^">]*?[\\\/]clip_image\d+(\.\w+)"[^>]*? o:title="([^">]*)"[^>]*>(.|\s)*?<img\b[^>]*? src="[^">]*?[\\\/])clip_image\d+\.\w+("[^>]*>)/g, '$1$3$2$5');

// convert <div class="poem">...</div> to <poem>...</poem>
	var isPoem = [];
	obj.html = obj.html.replace(/(<(\/?)div\b([^>]*)>)/gi,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (/\bclass="poem"/.test(p3) == true) {
					isPoem.push(true);
					return('<poem>');
				}
				isPoem.push(false);
				return(p1);
			}
			if (isPoem.pop() == true) {
				return('<poem>');
			}
			return(p1);
		}
	);

// sanitize <span> <div> <p>
	obj.html = obj.html.replace(/<(span|div|p)\b *(.*?) *\/?>/gi,
		function (p, p1, p2) {
			return('<' + p1 + wikEd.SanitizeAttributes(p1, p2, relaxed) +  '>');
		}
	);

// remove <span> ... </span> pairs withhout attributes
	var isRemove = [];
	obj.html = obj.html.replace(/(<(\/?)span\b([^>]*)>)/gi,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (p3 == '') {
					isRemove.push(true);
					return('');
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('');
			}
			return(p1);
		}
	);

// remove <p> ... </p> pairs withhout attributes
	var isRemove = [];
	obj.html = obj.html.replace(/(<(\/?)p\b([^>]*)>)/gi,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (p3 == '') {
					isRemove.push(true);
					return('\x00\x00');
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('\x00\x00');
			}
			return(p1);
		}
	);

// escape character entities
	obj.html = obj.html.replace(/&(?!(amp;|lt;|gt;))/g, '&amp;');

// remove comments
	obj.html = obj.html.replace(/<!--.*?-->/g, '');

// <hr> horizontal rule
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<hr\b[^>]*>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00----\x00\x00');

// <i> <em> <dfn> <var> <cite> italic
	obj.html = obj.html.replace(/<(i|em|dfn|var|cite)\b.*?>/gi, '\'\'');
	obj.html = obj.html.replace(/<\/(i|em|dfn|var|cite)\b.*?>/gi, '\'\'');

// <b> <strong> bold
	obj.html = obj.html.replace(/<(b|strong)\b.*?>/gi, '\'\'\'');
	obj.html = obj.html.replace(/<\/(b|strong)\b.*?>/gi, '\'\'\'');

// <h1> .. <h6> headings
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(^|\n|<br\b[^>]*>|\x00)(\s|<br\b[^>]*>|\x00)*<h1\b[^>]*>(.*?)<\/h1>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00= $4 =\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(^|\n|<br\b[^>]*>|\x00)(\s|<br\b[^>]*>|\x00)*<h2\b[^>]*>(.*?)<\/h2>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00== $4 ==\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(^|\n|<br\b[^>]*>|\x00)(\s|<br\b[^>]*>|\x00)*<h3\b[^>]*>(.*?)<\/h3>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00=== $4 ===\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(^|\n|<br\b[^>]*>|\x00)(\s|<br\b[^>]*>|\x00)*<h4\b[^>]*>(.*?)<\/h4>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00==== $4 ====\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(^|\n|<br\b[^>]*>|\x00)(\s|<br\b[^>]*>|\x00)*<h5\b[^>]*>(.*?)<\/h5>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00===== $4 =====\x00\x00');
	obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(^|\n|<br\b[^>]*>|\x00)(\s|<br\b[^>]*>|\x00)*<h6\b[^>]*>(.*?)<\/h6>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00\x00====== $4 ======\x00\x00');

	obj.html = obj.html.replace(/<(h[0-6])\b[^>]*>(.*?)<\/\1>/gi, '$2');

// {{TABLE}}
// convert html tables to wikicode
	if (wikEd.tableMode == false) {

// remove <thead> <tbody> <tfoot>
		obj.html = obj.html.replace(/(\s|\x00|<br\b[^>]*>)<\/?(thead|tbody|tfoot)\b[^>]*>(\s|\x00|<br\b[^>]*>)*()/gi, '$1');

// remove <col></col> and <colgroup></colgroup>\s
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(col)\b[^>]*>.*?<\/\2>(|<br\b[^>]*>|\x00)*()/gi, '');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(colgroup)\b[^>]*>.*?<\/\2>(|<br\b[^>]*>|\x00)*()/gi, '');

// line breaks in table cells
		obj.html = obj.html.replace(/(<(td|th|caption)\b[^>]*>)(.*?)(<\/\2>)/gi,
			function(p, p1, p2, p3, p4) {
				p3 = p3.replace(/^(\s|<br\b[^>]*>|\x00>)+/gi, '');
				p3 = p3.replace(/(\s|<br\b[^>]*>|\x00>)+$/gi, '');
				p3 = p3.replace(/<br\b[^>]*> *()/gi, '&lt;br /&gt;');
				return(p1 + p3 + p4);
			}
		);

// remove table closing tags
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<\/(tr|thead|tbody|tfoot)>(\s|<br\b[^>]*>|\x00)*()/gi, '');

// <td> table cells
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<td>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00| ');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(td) +([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function (p, p1, p2, p3, p4) {
				p3 = wikEd.SanitizeAttributes(p2, p3, relaxed);
				if (p3 == '') {
					return('\x00| ');
				}
				else {
					return('\x00|' + p3 + ' | ');
				}
			}
		);

// <th> table cells
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<th>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00| ');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(th) +([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function (p, p1, p2, p3, p4) {
				p3 = wikEd.SanitizeAttributes(p2, p3, relaxed);
				if (p3 == '') {
					return('\x00| ');
				}
				else {
					return('\x00|' + p3 + ' | ');
				}
			}
		);

// <tr> table rows
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<tr>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00|-\x00');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(tr) +([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function (p, p1, p2, p3, p4) {
				return('\x00|-' + wikEd.SanitizeAttributes(p2, p3, relaxed) + '\x00');
			}
		);

// <caption> table caption
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<caption>(\s|<br\b[^>]*>|\x00)*()/gi, '\x00|+ ');
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*<(caption) +([^>]*)>(\s|<br\b[^>]*>|\x00)*()/gi,
			function (p, p1, p2, p3, p4) {
				p3 = wikEd.SanitizeAttributes(p2, p3, relaxed);
				if (p3 == '') {
					return('\x00|+ ');
				}
				else {
					return('\x00|+' + p3 + ' | ');
				}
			}
		);

// remove closing tags
		obj.html = obj.html.replace(/\s*<\/(td|th|caption)>\s*()/gi, '');

// line breaks, also in table cells (continued)
		obj.html = obj.html.replace(/<br\b[^>]*>[\n ]*()/gi, '\x00');

// <table>
		obj.html = obj.html.replace(/[\s\x00]*<table>[\s\x00]*(\|-(?=[\n\x00]))?/gi, '\x00\x00{|\x00');
		obj.html = obj.html.replace(/[\s\x00]*<(table) +([^>]*)>[\s\x00]*(\|-(?=[\n\x00]))?/gi,
			function (p, p1, p2, p3) {
				var table = '\x00\x00{|';
				if (wikEd.config.wikifyTableParameters != '') {
					table += ' ' + wikEd.config.wikifyTableParameters;
				}
				else {
					table += wikEd.SanitizeAttributes(p1, p2);
				}
				return(table);
			}
		);
		obj.html = obj.html.replace(/[\s\x00]*<\/table>[\s\x00]*()/gi, '\x00|}\x00\x00');

	}

// for table mode override pasted table class // {{TABLE}}
	else if (wikEd.tableMode == true) {
		obj.html = obj.html.replace(/(<table\b)([^>]*)(>)/gi,
			function (p, p1, p2, p3) {
				if (p2.match(/\bclass=/)) {
					p2 = p2.replace(/\bclass\s*=\s*(['"]?)[^<>'"\n]*?\1/g, 'class="wikEdTableEdit"');
				}
				else {
					p2 = ' class="wikEdTableEdit"';
				}
				return(p1 + p2 + p3);
			}
		);

// table block element needs only one newline
		obj.html = obj.html.replace(/(\s|<br\b[^>]*>|\x00)*(<table\b.*?>)/gi, '\x00\x00$2');
		obj.html = obj.html.replace(/(<\/table>)(\s|<br\b[^>]*>|\x00)*()/gi, '$1\x00');
	}

// line breaks (continued)
	if (wikEd.tableMode == true) {
		obj.html = obj.html.replace(/<br\b[^>]*>[\n ]*()/gi, '\x00');
	}

// convert links
	obj.html = obj.html.replace(/<a(\b[^>]*)>(.*?)<\/a>/gi,
		function (p, p1, p2) {
			var linkParam = p1;
			var linkText = p2;

			var hrefUrlParam = null;
			var hrefUrlArticle = null;
			var imgWidth = '';
			var hrefParamTitle = null;
			var hrefParamISBN = null;
			var hrefParamAction = null;
			var hrefParamSpecial = false;
			var linkArticleAnchor = '';
			var linkArticle = '';
			var linkTitle = '';

// get href value
			var hrefValue;
			var regExpMatchLink = linkParam.match(/\bhref="([^">]*)"/);
			if (regExpMatchLink != null) {
				hrefValue = regExpMatchLink[1];

// get absolute path from ./index.php and ../../index.php
				hrefValue = wikEd.RelativeToAbsolutePath(hrefValue);

// check for wiki article link and get parameters
//                                                     1                         2 article 2                        3articl314 anchor  4                          6                       7   8 urlpar 87539 anchor 9
				var regExpArticle = new RegExp(wikEd.server + '(' + wikEd.articlePath + '([^"\\?#]+)|' + wikEd.script + '\\?([^"#]*))(#[^"]*)?');
				var regExpMatchArticle = regExpArticle.exec(hrefValue);
				if (regExpMatchArticle != null) {

// article name from url path <a href="../wiki/ hrefUrlArticle ">
					hrefUrlArticle = regExpMatchArticle[2];

// article name from url parameters <a href="url? hrefUrlParam ">
					hrefUrlParam = regExpMatchArticle[3];

// link anchor <a href="link #anchor">
					linkArticleAnchor = regExpMatchArticle[4] || '';
					if (linkArticleAnchor != '') {
						linkArticleAnchor = linkArticleAnchor.replace(/\.([0-9A-F]{2})/g, '%$1');
						linkArticleAnchor = decodeURIComponent(linkArticleAnchor);
						linkArticleAnchor = linkArticleAnchor.replace(/_\d+$/g, '');
					}

// parse hrefUrlParam and check for special parameters
					if (hrefUrlParam != null) {
						var regExpMatchHref;
						while ( (regExpMatchHref = /(^|&amp;)(\w+)=([^"\&]+)/g.exec(hrefUrlParam)) != null) {
							var param = regExpMatchHref[2];
							var value = regExpMatchHref[3];
							switch (param) {
								case 'title':
									hrefParamTitle = value;
									break;
								case 'isbn':
									hrefParamISBN = value;
									break;
								case 'redlink':
									break;
								case 'action':
									hrefParamAction = value;
									break;
								default:
									hrefParamSpecial = true;
							}
							if (hrefParamAction != null) {
								break;
							}
						}
					}

// ISBN links
					if (hrefParamAction == null) {
						if ( (hrefParamISBN != null) && (hrefParamSpecial != true) ) {
							var isbn = hrefParamISBN;
							var regExpMatchISBN = /((\d\-?){13}|(\d\-?){10})/.exec(linkText);
							if (regExpMatchISBN != null) {
								isbn = regExpMatchISBN[1];
							}
							return('ISBN ' + isbn);
						}

// get article from href parameters
						else if ( (hrefParamTitle != null) && (hrefParamSpecial != true) ) {
							linkArticle = hrefParamTitle;
							linkArticle = linkArticle.replace(/_/g, ' ');
							linkArticle = decodeURIComponent(linkArticle);
						}

// get article name from url path
						else if (hrefUrlArticle != null) {
							linkArticle = hrefUrlArticle;
							linkArticle = linkArticle.replace(/_/g, ' ');
							linkArticle = decodeURIComponent(linkArticle);
						}

// get article name from <a title="">
						else {
							var regExpMatchTitle = /\btitle="([^">]+)"/.exec(linkParam);
							if (regExpMatchTitle != null) {
								linkArticle = regExpMatchTitle[1];
							}
						}
					}
				}

// format wiki link
				if (linkArticle != '') {

// check for wiki image
					var regExpMatchImage = /^<img\b[^>]*?\bwidth="(\d+)"[^>]*?>$/.exec(linkText);
					if (regExpMatchImage != null) {
						imgWidth = regExpMatchImage[1];
						imgWidth = '|' + imgWidth + 'px';
						if ( (linkTitle != '') && (linkTitle != 'Enlarge') ) {
							linkTitle = '|' + linkTitle;
							return('[[' + linkArticle + imgWidth + linkTitle + ']]');
						}
						else {
							return('[[' + linkArticle + imgWidth + ']]');
						}
					}

// category link
					var regExpCat = new RegExp('^(Category|' + wikEd.config.text['wikicode Category'] + ')\\s*:(.*)', 'i');
					var regExpMatchCat = regExpCat.exec(linkArticle);
					if (regExpMatch != null) {
						return('[[' + wikEd.config.text['wikicode Category'] + ':' + regExpMatchCat[1].charAt(0).toUpperCase() + linkText.substr(1) + ']]');
					}

// wiki link
					if (linkArticle == linkText.charAt(0).toUpperCase() + linkText.substr(1)) {
						return('[[' + linkText + linkArticleAnchor + ']]');
					}

// date link (English only)
					var regExpMatchDate = /^(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2})$/.exec(linkArticle);
					if (regExpMatchDate != null) {
						var month = regExpMatchDate[1];
						var day = regExpMatchDate[2];
						if (linkText == (day + ' ' + month) ) {
							return('[[' + linkArticle + linkArticleAnchor + ']]');
						}
					}

// lowercase the article name if the first char of the link text can exist in lower/uppercase and is lowercase
					if ( linkText.charAt(0).toLowerCase() != linkText.charAt(0).toUpperCase() ) {
						if ( linkText.charAt(0) == linkText.charAt(0).toLowerCase() ) {
							linkArticle = linkArticle.charAt(0).toLowerCase() + linkArticle.substr(1);
						}
					}

// suffix links
					var regExpStrSuffix = new RegExp('^' + linkArticle.replace(/(\W)/g, '\\$1') + '([' + wikEd.letters + '_]+)$');
					var regExpMatchSuffix = regExpStrSuffix.exec(linkText);
					if (regExpMatchSuffix != null) {
						return('[[' + linkArticle + linkArticleAnchor + ']]' + regExpMatchSuffix[1]);
					}
					return('[[' + linkArticle + linkArticleAnchor + '|' + linkText + ']]');
				}

// external link
				if (hrefValue != '') {

// PubMed link
					var regExpMatchPubMed = /^http:\/\/www\.ncbi\.nlm\.nih\.gov\/entrez\/query\.fcgi\?cmd=Retrieve&amp;db=pubmed&amp;.*?&amp;list_uids=(\d+)/.exec(hrefValue);
					if (regExpMatchPubMed != null) {
						return('PMID ' + regExpMatchPubMed[1]);
					}

// DOI link
					regExpMatchDOI = /^http:\/\/dx\.doi\.org\/(.*)/.exec(hrefValue);
					if (regExpMatchDOI != null) {
						return('{{doi|' + regExpMatchDOI[1] + '}}');
					}

// other external link
					return('[' + hrefValue + ' ' + linkText + ']');
				}
			}

// return unchanged text
			return(p1);
		}
	);

// clean up MediaWiki category list
	var regExp = new RegExp('<span\\b[^>]*>(\\[\\[(Category|' + wikEd.config.text['wikicode Category'] + ')\\s*:[^\\]]+\\]\\])<\\/span>[\\s\\x00\\|]*', 'gi');
	obj.html = obj.html.replace(regExp, '$1\x00');

// clean up DOI
	obj.html = obj.html.replace(/\[\[Digital object identifier\|DOI\]\]:(\{\{doi\|[^\}\s]+\}\})/gi, '$1');

// convert images
	obj.html = obj.html.replace(/<img\b([^>]*)>/gi,
		function (p, p1) {

// get and format parameters
			var address = '';
			var regExpMatch = /\bsrc\s*=\s*('|")([^'"]*)('|")/i.exec(p1);
			if (regExpMatch != null) {
				address = regExpMatch[2].replace(/^ +| +$/g, '');
			}

			var imgAlt = '';
			regExpMatch = /\balt\s*=\s*('|")([^'"]*)('|")/i.exec(p1);
			if (regExpMatch != null) {
				imgAlt = regExpMatch[2].replace(/^ +| +$/g, '');
				imgAlt = imgAlt.replace(/&amp;nbsp;|[\n\x00]/g, ' ');
				imgAlt = imgAlt.replace(/ {2,}/g, ' ');
				imgAlt = imgAlt.replace(/^ | $/g, '');
				if (imgAlt != '') {
					imgAlt = '|' + imgAlt;
				}
			}

			var imgWidth = '';
			regExpMatch = /\bwidth\s*=\s*('|")([^'"]*)('|")/i.exec(p1);
			if (regExpMatch != null) {
				imgWidth = '|' + regExpMatch[2].replace(/^ +| +$/g, '') + 'px';
			}

			var imgLink = '';
			regExpMatch = /([^\/]+)$/.exec(address);
			if (regExpMatch != null) {
				imgLink = regExpMatch[1];
				if (imgLink != '') {
					return('[[' + wikEd.config.text['wikicode Image'] + ':' + imgLink + imgWidth + imgAlt + ']]');
				}
			}
			return('');
		}
	);

// convert lists: * # : ;
	var listObj = {};
	listObj.prefix = '';
	obj.html = obj.html.replace(/[\s\x00]*<(\/?(ol|ul|li|dl|dd|dt))\b[^>]*>[\s\x00]*()/gi,
		function (p, p1, p2, p3, p4) {
			switch (p1.toLowerCase()) {
				case 'ol':
					listObj.prefix += '#';
					return('\x00');
				case 'ul':
					listObj.prefix += '*';
					return('\x00');
				case 'dl':
					listObj.prefix += ':';
					return('\x00');
				case '/ol':
				case '/ul':
				case '/dl':
					listObj.prefix = listObj.prefix.substr(0, listObj.prefix.length - 1);
					return('\x00\x00');
				case 'li':
				case 'dd':
					return('\x00' + listObj.prefix + ' ');
				case 'dt':
					return('\x00' + listObj.prefix.replace(/:$/, ';') + ' ');
				case '/li':
				case '/dt':
				case '/dd':
					return('');
			}
			return('');
		}
	);
	obj.html = obj.html.replace(/[\n|\x00]+[#\*:\;]+ (?=[\n|\x00])/g, '');

// <> remove not allowed tags
	obj.html = obj.html.replace(/(<\/?)(\/?)(\w+)(.*?>)/g,
		function (p, p1, p2, p3, p4) {

// keep table tags if in table mode
			if (wikEd.tableMode == true) {
				if (/^(table|tr|td|th|thead|tbody|tfoot|col|colgroup|caption)$/i.test(p3) == true) {
					p = p.replace(/</g, '\x01');
					p = p.replace(/>/g, '\x02');
					return(p);
				}
			}

// keep html elements with name, id, or class starting with wikEdKeep
			if (wikEd.keepFormatting == true) {
				if ( /^(div|span|ins|del)$/i.test(p3) == true) {
					if ( /\b(name|id|class)="wikEdKeep/.test(p4) == true) {
						p = p.replace(/</g, '\x01');
						p = p.replace(/>/g, '\x02');
						return(p);
					}
				}
			}

// keep allowed tags
			if ( /^(big|blockquote|colgroup|center|code|del|div|font|ins|p|pre|s|small|span|strike|sub|sup|tt|u|rb|rp|rt|ruby|nowiki|math|noinclude|includeonly|ref|charinsert|fundraising|fundraisinglogo|gallery|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references|syntaxhighlight)$/i.test(p3) == true) {
				return(p);
			}

			return('');
		}
	);

// sanitize attributes in opening html tags
	obj.html = obj.html.replace(/<(\w+) +(.*?) *(\/?)>/g,
		function (p, p1, p2, p3) {
			if (p3 != '') {
				p3 = ' ' + p3;
			}
			return('<' + p1 + wikEd.SanitizeAttributes(p1, p2, relaxed) + p3 + '>');
		}
	);

// unformat underlined, italic or bold blanks
// corrupts existing text
//	obj.html = obj.html.replace(/<u>('''|''|\s|\x00)*([\s\x00]+)('''|''|\s|\x00)*<\/u>/g, '$2');
//	obj.html = obj.html.replace(/'''(''|\s|\x00)*([\s\x00]+)(''|\s|\x00)*'''/g, '$2');
//	obj.html = obj.html.replace(/''([\s\x00]+)''/g, '$1');

// fix MS Word non-style heading formatting
	obj.html = obj.html.replace(/(\x00(={1,6}) *)(<u>|'''|'')+(.*?)(<\/u>|'''|'\')+( *\2\x00)/gi, '$1$4$6');

// remove empty headings
	obj.html = obj.html.replace(/\x00(={1,6})\s+\1\x00/g, '\x00');

// remove space-only lines
	obj.html = obj.html.replace(/([\s\x00]*\x00[\s\x00]*)/g,
		function (p, p1) {
			return(p1.replace(/\n/g, '\x00'));
		}
	);

// remove trailing linebreaks from table cells
	obj.html = obj.html.replace(/\x00{2,}(\|)/g, '\x00$1');

// remove leading and trailing spaces
	obj.html = obj.html.replace(/>\s+\x00/g, '>\x00');
	obj.html = obj.html.replace(/\x00\s+</g, '\x00<');

// remove empty inline and block tag pairs
	obj.html = obj.html.replace(/( *)<(big|colgroup|code|del|font|ins|pre|s|small|span|strike|sub|sup|tt|u|rb|rp|rt|ruby|nowiki|math|noinclude|includeonly|ref|charinsert|fundraising|fundraisinglogo)\b[^>]*><\/\1> *()/gi, '$1');
	obj.html = obj.html.replace(/[\s\x00]*<(blockquote|center|div|gallery|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references)\b[^>]*><\/\1>[\s\x00]*()/gi, '\x00\x00');

// remove empty lines from block tags
	obj.html = obj.html.replace(/(<(blockquote|center|div|p|pre|gallery|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references)\b[^>]*>[\s\x00])[\s\x00]+/gi, '$1');
	obj.html = obj.html.replace(/[\s\x00]+([\s\x00]<\/(blockquote|center|div|p|pre|gallery|source|poem|categorytree|hiero|imagemap|inputbox|timeline|references)>)/gi, '$1');

// blockquote
	obj.html = obj.html.replace(/(<blockquote\b[^>]*>[\s\x00]+)([\S\s]*?)([\s\x00]+<\/blockquote>)/gi,
		function (p, p1, p2, p3) {
			p2 = p2.replace(/\x00/g, '<br>\n');
			return(p1 + p2 + p3);
		}
	);

// escape < >
	obj.html = obj.html.replace(/</g, '&lt;');
	obj.html = obj.html.replace(/>/g, '&gt;');

// preserved table tags
	obj.html = obj.html.replace(/\x01/g, '<');
	obj.html = obj.html.replace(/\x02/g, '>');

// newlines to <br>
	obj.html = obj.html.replace(/\x00+\n/g, '\n');
	obj.html = obj.html.replace(/\n\x00+/g, '\n');
	obj.html = obj.html.replace(/\n*\x00(\x00|\n)+/g, '\n\n');
	obj.html = obj.html.replace(/\x00/g, '\n');
	obj.html = obj.html.replace(/\n/g, '<br>');

// table block element needs only one newline
	obj.html = obj.html.replace(/(<\/table><br\b[^>]*>)(<br\b[^>]*>)+/g, '$1');

// remove empty lines from article start and end
	if (obj.from == 'whole') {
		obj.html = obj.html.replace(/^(<br\b[^>]*>)+/gi, '');
		obj.html = obj.html.replace(/(<br\b[^>]*>)+$/gi, '');
	}

	return;
};


//
// wikEd.RelativeToAbsolutePath
//   broken for editing article names containing "/", https://bugzilla.mozilla.org/show_bug.cgi?id=430910

wikEd.RelativeToAbsolutePath = function(relativePath, fullPath) {

	var absolutePath = '';

// get current url
	if (fullPath == null) {
		fullPath = window.location.href;
		fullPath = fullPath.replace(/#.*()/, '');
		fullPath = fullPath.replace(/\?.*()/, '');
	}

// ./index.php
	if (/^\.\/()/.test(relativePath) == true) {
		relativePath = relativePath.replace(/^\.\/()/, '');
		fullPath = fullPath.replace(/\/[^\/]*$/, '');
		absolutePath = fullPath + '/' + relativePath;
	}

// ../../index.php
	else if (/^\.\.\/()/.test(relativePath) == true) {
		while (/^\.\.\/()/.test(relativePath) == true) {
			relativePath = relativePath.replace(/^\.\.\/()/, '');
			fullPath = fullPath.replace(/\/[^\/]*$/, '');
		}
		absolutePath = fullPath + '/' + relativePath;
	}

// full path
	else {
		absolutePath = relativePath;
	}
	return(absolutePath);
};


//
// wikEd.SanitizeAttributes: see Sanitizer.php
//

wikEd.SanitizeAttributes = function(tag, attributes, relaxed) {
	var common;
	var tablealign;
	var tablecell;
	var table;
	if (relaxed == true) {
		common = 'dir|style|class'; // not needed: lang|id|title
		tablealign = '|align|char|charoff|valign';
		table = '|summary|width|border|frame|rules|cellspacing|cellpadding|align|bgcolor';
		tablecell = '|abbr|axis|headers|scope|rowspan|colspan|nowrap|width|height|bgcolor';
	}
	else {
		common = 'dir';
		table = '|border|cellspacing|cellpadding|align|bgcolor';
		tablealign = '|align|valign';
		tablecell = '|rowspan|colspan|nowrap|bgcolor';
	}
	tag = tag.toLowerCase();
	var sanitized = '';
	var regExpMatch;
	while ( (regExpMatch = /(\w+)\s*=\s*(('|")(.*?)\3|(\w+))/g.exec(attributes)) != null) {
		var attrib = regExpMatch[1];
		var attribValue = regExpMatch[4] || regExpMatch[5];
		if (attribValue == '') {
			continue;
		}
		var valid = false;

// relaxed, for existing text tags
		if (relaxed == true) {
			if ('center|em|strong|cite|code|var|sub|supdl|dd|dt|tt|b|i|big|small|strike|s|u|rb|rp|ruby'.indexOf(tag) >= 0) {
				if (common.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('div|span|h1|h2|h3|h4|h5|h6|p'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('blockquote'.indexOf(tag) >= 0) {
				if ((common + '|cite').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('br'.indexOf(tag) >= 0) {
				if ('style|clear'.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('pre'.indexOf(tag) >= 0) {
				if ((common + '|width').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ins|del'.indexOf(tag) >= 0) {
				if ((common + '|cite|datetime').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ul'.indexOf(tag) >= 0) {
				if ((common + '|type').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ol'.indexOf(tag) >= 0) {
				if ((common + '|type|start').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('li'.indexOf(tag) >= 0) {
				if ((common + '|type|value').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('table'.indexOf(tag) >= 0) {
				if ((common + table).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('caption'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('thead|tfoot|tbody'.indexOf(tag) >= 0) {
				if ((common + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('colgroup|col'.indexOf(tag) >= 0) {
				if ((common + '|span|width' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('tr'.indexOf(tag) >= 0) {
				if ((common + '|bgcolor' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('td|th'.indexOf(tag) >= 0) {
				if ((common + tablecell + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('font'.indexOf(tag) >= 0) {
				if ((common + '|size|color|face').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('hr'.indexOf(tag) >= 0) {
				if ((common + '|noshade|size|width').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('rt'.indexOf(tag) >= 0) {
				if ((common + '|rbspan').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ref'.indexOf(tag) >= 0) {
				if (('name').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('references'.indexOf(tag) >= 0) {
			}
			else if ('source'.indexOf(tag) >= 0) {
				if (('lang').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('poem'.indexOf(tag) >= 0) {
				if (common.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('categorytree'.indexOf(tag) >= 0) {
				if ((common + '|mode|depth|onlyroot|hideroot|hideprefix|showcount|namespaces').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('charinsert'.indexOf(tag) >= 0) {
			}
			else if ('fundraising'.indexOf(tag) >= 0) {
			}
			else if ('fundraisinglogo'.indexOf(tag) >= 0) {
			}
			else if ('hiero'.indexOf(tag) >= 0) {
			}
			else if ('imagemap'.indexOf(tag) >= 0) {
			}
			else if ('inputbox'.indexOf(tag) >= 0) {
			}
			else if ('timeline'.indexOf(tag) >= 0) {
			}
			else if ('gallery'.indexOf(tag) >= 0) {
				if ((common + '|perrow|widths|heights').indexOf(attrib) >= 0) { valid = true; }
			}
		}

// strict, for html code to be wikified from external sources (websites, Word)
		else {
			if ('center|em|strong|cite|code|var|sub|supdl|dd|dt|tt|b|i|big|small|strike|s|u|rb|rp|ruby|blockquote|pre|ins|del'.indexOf(tag) >= 0) {
				if (common.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('div|span|h1|h2|h3|h4|h5|h6|p'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('br'.indexOf(tag) >= 0) {
				if ('clear'.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ul'.indexOf(tag) >= 0) {
				if ((common + '|type').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ol'.indexOf(tag) >= 0) {
				if ((common + '|type|start').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('li'.indexOf(tag) >= 0) {
				if ((common + '|type|value').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('table'.indexOf(tag) >= 0) {
				if ((common + table).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('caption'.indexOf(tag) >= 0) {
				if ((common + '|align').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('thead|tfoot|tbody'.indexOf(tag) >= 0) {
				if ((common + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('colgroup|col'.indexOf(tag) >= 0) {
				if ((common + '|span' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('tr'.indexOf(tag) >= 0) {
				if ((common + '|bgcolor' + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('td|th'.indexOf(tag) >= 0) {
				if ((common + tablecell + tablealign).indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('font'.indexOf(tag) >= 0) {
				if ((common + '|color').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('hr'.indexOf(tag) >= 0) {
				if ((common + '|noshade|size').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('rt'.indexOf(tag) >= 0) {
				if ((common + '|rbspan').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('ref'.indexOf(tag) >= 0) {
				if (('name').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('references'.indexOf(tag) >= 0) {
			}
			else if ('source'.indexOf(tag) >= 0) {
				if (('lang').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('poem'.indexOf(tag) >= 0) {
				if (common.indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('categorytree'.indexOf(tag) >= 0) {
				if ((common + '|mode|depth|onlyroot|hideroot|hideprefix|showcount|namespaces').indexOf(attrib) >= 0) { valid = true; }
			}
			else if ('charinsert'.indexOf(tag) >= 0) {
			}
			else if ('fundraising'.indexOf(tag) >= 0) {
			}
			else if ('fundraisinglogo'.indexOf(tag) >= 0) {
			}
			else if ('hiero'.indexOf(tag) >= 0) {
			}
			else if ('imagemap'.indexOf(tag) >= 0) {
			}
			else if ('inputbox'.indexOf(tag) >= 0) {
			}
			else if ('timeline'.indexOf(tag) >= 0) {
			}
			else if ('gallery'.indexOf(tag) >= 0) {
			}
		}

// clean up
		if (valid == true) {

// clean up defaults for align
			if (attrib == 'align') {
				if ('tr|td|th'.indexOf(tag) >= 0) {
					if (attribValue == 'left') {
						attribValue = '';
					}
				}
			}

// clean up defaults for valign
			else if (attrib == 'valign') {
				if ('tr|td|th'.indexOf(tag) >= 0) {
					if (attribValue == 'top') {
						attribValue = '';
					}
				}
			}

// clean up style
			else if (attrib == 'style') {

// remove non-standard Mozilla styles
				attribValue = attribValue.replace(/(^| )(-moz-[\w\-]+): [\w\-]+; *()/g, '$1');
				attribValue = attribValue.replace(/(^| )([\w\-]+): [^;]*(-moz-[\w\-]+|windowtext)[^;]*; *()/g, '$1');

// remove dimensions from null values
				attribValue = attribValue.replace(/\b0(%|in|cm|mm|em|ex|pt|pc|px)\b/g, '0');

// remove empty definitions and spaces
				attribValue = attribValue.replace(/[\w\-]+ *\: *\; *()/g, '');
				attribValue = attribValue.replace(/ *(;|:) *()/g, '$1 ');
				attribValue = attribValue.replace(/( |;)+$/g, ';');
			}

// clean up class
			else if (attrib == 'class') {

// remove MS Word classes
				attribValue = attribValue.replace(/^Ms.*$/g, '');
			}

			if (attribValue != '') {
				sanitized += ' ' + attrib + '="' + attribValue + '"';
			}
		}
	}
	return(sanitized);
};


//
// wikEd.RemoveHighlighting: remove syntax highlighting in obj.html; sets obj.htmlCode if text contains html code
//    expects <br> instead of \n

wikEd.RemoveHighlighting = function(obj) {

// remove highlighting error messages
	if (wikEd.config.highlightError == true) {
		obj.html = obj.html.replace(/<span\b[^>]*?\bclass="wikEdHighlightError"[^>]*>.*?<\/span><!--wikEdHighlightError-->/g, '');
	}

// remove highlighting and atttribute-free span tags
	var isRemove = [];
	obj.html = obj.html.replace(/(<(\/?)span\b([^>]*)>)/g,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (/\bclass="wikEd[\w\/]+"/.test(p3) == true) {
					isRemove.push(true);
					return('');
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('');
			}
			return(p1);
		}
	);

// remove highlighting div tags
	var isRemove = [];
	obj.html = obj.html.replace(/(<(\/?)div\b([^>]*)>)/g,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (/\bclass="wikEd[\w\/]+"/.test(p3) == true) {
					isRemove.push(true);
					return('');
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('');
			}
			return(p1);
		}
	);

// remove span tags from WebKit https://bugs.webkit.org/show_bug.cgi?id=13490
// filtering these tags does not help, they accumulate anyway
	var isRemove = [];
	obj.html = obj.html.replace(/(<(\/?)span\b([^>]*)>)/g,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (/\bclass="(Apple-style-span|Apple-.*?)"/.test(p3) == true) {
					isRemove.push(true);
					return('\x00');
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('\x01');
			}
			return(p1);
		}
	);

// remove highlighting font tags from WebKit
	var isRemove = [];
	obj.html = obj.html.replace(/(<(\/?)font\b([^>]*)>)/g,
		function (p, p1, p2, p3) {
			if (p2 == '') {
				if (/\bclass="(Apple-style-span|Apple-.*?)"/.test(p3) == true) {
					isRemove.push(true);
					return('\x00');
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('\x01');
			}
			return(p1);
		}
	);

// remove highlighting div tags from WebKit
	var isRemove = [];

//                             12             2 3   3     4     4 5             51
	obj.html = obj.html.replace(/(([\x00\x01]\s*)?<(\/?)div\b([^>]*)>(\s*[\x00\x01])?)/g,
		function (p, p1, p2, p3, p4, p5) {
			if (p3 == '') {
				if ( (p2 != '') || (p5 != '') ) {
					if (/\bstyle="/.test(p4) == true) {
						if (/\bclass="/.test(p4) == false) {
							isRemove.push(true);
							return('');
						}
					}
				}
				isRemove.push(false);
				return(p1);
			}
			if (isRemove.pop() == true) {
				return('');
			}
			return(p1);
		}
	);
	obj.html = obj.html.replace(/[\x00\x01]/g, '');

// comments
	obj.html = obj.html.replace(/<!--wikEd[\w\/]+-->/g, '');

// newlines
	obj.html = obj.html.replace(/[\n ]+/g, ' ');

// non-breaking spaces
	obj.html = obj.html.replace(/&nbsp;/g, '\xa0');

// check for pasted html content
	if (obj.html.match(/<(?!br\b)/) != null) {
		obj.htmlCode = true;
	}
	else {
		obj.htmlCode = false;
	}

	return;
};


//
// wikEd.HighlightSyntaxInit: initialize regExp for syntax highlighting and regExp-to-number array, called during start up
//

wikEd.HighlightSyntaxInit = function() {

	wikEd.parseObj.matchToTag = [''];
	wikEd.parseObj.regExpTags = null;

// main regular expression search definitions
// [regular expression fragment, tag, tagClass, tagStart (regexp starts with newline)]
	var tagArray = [
		['\\b(((https?|ftp|irc|gopher):\\/\\/)|news:|mailto:)[^\\x00-\\x20\\s"\\[\\]\\x7f]+', 'inlineURL', 'block'], // inline link

// faster without (!?)
//		['[^\\{\\}\\[\\]\x00\x01_\\|\\!\\=\\*\\#\\:\\;"\'\\n\\\\~\\-]+', 'text', 'ignore'], // chew-up fragment to ignore plain text, triples regExp speed, check later if chewed into start of inlineLink; start-with-text tags (PMID,...) have to be tested for separately to benefit from his

		['\x00(nowiki)\\b[^\x00\x01]*\x01(.|\\n)*?\x00/nowiki\\s*\x01', 'nowiki', 'block'], // <nowiki>...</nowiki>
		['\x00(pre)\\b[^\x00\x01]*\x01(.|\\n)*?\x00/pre\\s*\x01',       'pre',    'block'], // <pre>...</pre>
		['\x00(math)\\b[^\x00\x01]*\x01(.|\\n)*?\x00/math\\s*\x01',     'math',   'block'], // <math>...</math>

		['(^|\\n)([ \xa0]+)(\\S[^\\n]*)',        'preform',       'block'], // "preformatted" text line (leading space)
		['(^|\\n)([\\*\\#\\:\\;]+)([^\\n]*)',    'list',          'block'], // list line

		['\x00(br\\b)[^\x00\x01]*\x01',     'br',                 'block'], // <br>
		['\x00(\\w+)[^\x00\x01]*?\\/\x01',  'htmlEmpty',          'block'], // <html />

		['\x00(\\w+)[^\x00\x01]*\x01',      'html',                'open'], // <html>
		['\x00\\/(\\w+)[^\x00\x01]*\x01',   'html',               'close'], // </html>

		['(^|\\n)(\\{\\|)',                 'table',               'open'], // table start
		['(^|\\n)(\\|\\}\\})',              'pipeTemplateEnd',    'multi'], // empty template parameter + template end
		['(^|\\n)(\\|\\})',                 'table',              'close'], // table end

		['(^|\\n)(\\|\\+)',                 'caption',            'block'], // table caption
		['(^|\\n)(\\|\\-)',                 'row',                'block'], // table row

		['(^|\\n)(\\|)',                    'newlinePipe',        'block'], // table cell, wikilink separator, file parameter separator, empty template parameter
		['\\|\\|',                          'doublePipe',         'block'], // table cell separator, empty file parameter separator, empty template parameters
		['\\|',                             'pipe',               'block'], // table cell parameter separator, table caption parameter separator, wikilink separator, file parameter separator, redirect separator, template parameter parameter

		['(^|\\n)(!+)',                     'header',             'block'], // table header cell
		['!!',                              'headerSep',          'block'], // table header cell separator
		['!',                               'headerParam',        'block'], // table header cell parameter separator

		['\\{{2,}',                         'paramTempl',          'open'], // template or parameter start
		['\\}{2,}',                         'paramTempl',         'close'], // template parameter end

		['(^\\s*)#REDIRECT(?=\\s*\\[\\[)',  'redirect',           'block'], // redirect

		['\\[\\[(?=(Image|File|' + wikEd.config.text['wikicode Image'] + '|' + wikEd.config.text['wikicode File'] + ')\\s*:\\s*)', 'file', 'open'], // file link start /// add translation
		['\\[\\[',                          'link', 'open'],                // wikilink, category start with interlink detection
		['\\]\\]',                          'doubleCloseBracket', 'close'], // wikilink, category, file link, redirect end

		['\\[((((https?|ftp|irc|gopher):\\/\\/)|news:|mailto:)[^\\x00-\\x20\\s"\\[\\]\\x7f]+)(\\s*)', 'external',  'open'], // external link start; up?? [[url]] detected as ext link!
		['\\]',                             'external',           'close'], // external link end

		['(^|\\n)={1,6}',                   'heading',             'open'], // heading start - heading can contain multi-line templates and <tag>s, all single-line
		['={1,6}[ \xa0\\t]*(?=(\\n|$))',    'heading',            'close'], // heading end

		['\\\'{2,}',                        'boldItalic',         'multi'], // bold, italic

		['__(' + wikEd.magicWords + ')__',  'magic',              'block'], // magic words
		['~{3,5}',                          'signature',          'block'], // signature
		['(^|\\n)\\-{4,}',                  'hr',                 'block'], // hr
		['(\\n|$)',                         'newline',            'block']  // breaks: heading, lists, external link, wikilink before

	];

// parse tag array into regular expression string and parenthesized substring match-to-tag info array
	var regExpStrings = [];
	for (var i = 0; i < tagArray.length; i ++) {
		var regExpSub = tagArray[i][0];
		var tag = tagArray[i][1];
		var tagClass = tagArray[i][2];

// add parenthesized sub regExp to regexp array
		regExpStrings.push('(' + regExpSub + ')');

// detect if a fragment starts with (^|\\n) to handle the leading newlines
		var tagStart = false;
		if (/^\(\^\|\\n\)/.test(regExpSub) == true) {
			tagStart = true;
		}

// save tag information for matched parenthesis
		wikEd.parseObj.matchToTag.push( [tag, tagClass, tagStart] );

// add empty entry for all sub parentheses, ignore (? and \(
		var pos = 0;
		while ( (pos = regExpSub.indexOf('(', pos) + 1) > 0) {
			if (regExpSub.charAt(pos) != '?') {
				if (regExpSub.charAt(pos - 2) != '\\') {
					wikEd.parseObj.matchToTag.push( [] );
				}
			}
		}
	}

// create regExp from or-joined parenthesized sub regExps
	wikEd.parseObj.regExpTags = new RegExp(regExpStrings.join('|'), 'gi');

	return;
};


//
// wikEd.HighlightSyntax: highlight syntax in obj.html;
//   existing highlighting must have been removed using wikEd.RemoveHighlighting
//   expects < > &lt; &gt; &amp;  \xa0 instead of &nbsp;  \n instead of <br>
// Known bugs:
// - templates inside elements
// - fragment highlighting misses surrounding html

// this is a real wikicode parser that works as follows:
//   cycle through the text with a complex regexp search for wikicode and highlighting fragments
//     build an array based tree structure of text elements
//       tag info: text pos, text length, tag type (open, close, block, error)
//       connectivity info: parent, firstChild, nextSibling, paired opening/closing (all array indexes)
//   add actual highlighting html code to parse tree elements
//
/* TO DO:
<table> closes <td>, <tr>
<tr> closes <td>
heading closes links
*/


wikEd.HighlightSyntax = function(obj, noTimeOut) {

// start timer to cancel after wikEd.config.maxHighlightTime ms
	var highlightStartDate = new Date();

// linkify raw watchlist
	if (wikEd.watchlistEdit == true) {
		obj.html = obj.html.replace(/(.*)/gm,
			function (p, p1) {
				var ns = '';
				var article = p1;
				var regExp = /^((.*?):)(.*)$/;
				var regExpMatch = regExp.exec(article);
				if (regExpMatch != null) {
					ns = regExpMatch[2];
					article = regExpMatch[3];
				}
				var html = '<span class="wikEdWatchlistLink" ' + wikEd.HighlightLinkify(ns, article) + '>' + p + '</span>';
				return(html);
			}
		);
		return;
	}

// &lt; &gt; &amp; to \x00 \x01
	obj.html = obj.html.replace(/&lt;/g, '\x00');
	obj.html = obj.html.replace(/&gt;/g, '\x01');
	obj.html = obj.html.replace(/&amp;/g, '&');

// trailing, leading, and multi spaces to nbsp
	obj.html = obj.html.replace(/^ | $/gm, '\xa0');
	obj.html = obj.html.replace(/(\n|\xa0 | ) /g, '$1\xa0');

// define parse object
	var parseObj = {

// tree object that holds nodes to be sorted and joined for final text:
// { 'tag': , 'parent': , 'firstChild': , 'nextSibling': , 'start': , 'tagLength': , 'type': , 'pairedTagPos': , 'left': , 'right': , 'index':, 'noHide': }
		'tree': [],

// main regular expression for syntactic elements
		'regExp': null,

// last match
		'regExpMatch': null,

// highlight whole text or fragment
		'whole': false,

// ignore leading closing tags for fragment highlighting
		'addedOpenTag': false,

// quick references
		'lastOpenTag': null,
		'lastOpenNode': 0,

// filtered ignore p tags
		'lastOpenNodeFiltered': null,
		'lastOpenTagFiltered': null,

		'secondlastOpenNodeFiltered': null,
		'secondLastOpenTagFiltered': null,

		'tableMode': wikEd.tableMode
	};

// add root node
	parseObj.tree[0] = { 'type': 'root' };

// clear array of link addresses and preview image ids
	if (obj.whole == true) {
		parseObj.whole = true;
		wikEd.linkifyArray = [];
		wikEd.referenceArray = [];
		wikEd.templateArray = [];
		wikEd.charEntityArray = [];
		wikEd.HighlightNamedHideButtonsStylesheet = new wikEd.StyleSheet(wikEd.frameDocument);
		wikEd.filePreviewNo = 0;
		wikEd.filePreviewIds = [];
	}

// take out comments and html formatting to be kept
	var content = '';
	var from = 0;
	var commentsLength = 0;
	var regExpMatch;
	var regExpComments = /(\x00!--(.|\n)*?--\x01)|(<[^>]*>)/g;
	while ( (regExpMatch = regExpComments.exec(obj.html)) != null) {
		var tag;
		if (regExpMatch[1] != null) {
			tag = 'comment';
		}
		else if (regExpMatch[2] != null) {
			tag = 'keep';
		}
		parseObj.tree.push( { 'tag': tag, 'start': regExpMatch.index - commentsLength, 'tagLength': 0, 'type': tag, 'left': regExpMatch[0] } );
		content += obj.html.substring(from, regExpMatch.index);
		commentsLength += regExpMatch[0].length;
		from = regExpComments.lastIndex;
	}
	if (parseObj.tree.length > 0) {
		content += obj.html.substring(from);
		obj.html = content;
	}

//// opening block tags and templates break link?

// show main parsing regExp:
// WED('regExp', wikEd.parseObj.regExpTags.toString().replace(/\x00/g, '<').replace(/\x01/g, '>').replace(/\n/g, '\\n'));

// cycle through text and find tags with a regexp search
	wikEd.parseObj.regExpTags.lastIndex = 0;
	while ( (parseObj.regExpMatch = wikEd.parseObj.regExpTags.exec(obj.html)) != null) {

// cancel highlighting after wikEd.config.maxHighlightTime ms
		if (noTimeOut != true) {
			var currentDate = new Date();
			if ( (currentDate - highlightStartDate) > wikEd.config.maxHighlightTime) {
				break;
			}
		}

		var tagMatch = parseObj.regExpMatch[0];
		var tagFrom = parseObj.regExpMatch.index;
		var tagLength = tagMatch.length;
		var tagTo = tagFrom + tagLength;

		var tagMatchParenth = 0;

// get regexp index number from first defined parenthesized submatch
		var tag = '';
		var tagClass = '';
		var tagStart = '';
		for (var i = 1; i < wikEd.parseObj.matchToTag.length; i ++) {
			if (typeof(parseObj.regExpMatch[i]) != 'undefined') {

// get tag information
				tag = wikEd.parseObj.matchToTag[i][0];
				tagClass = wikEd.parseObj.matchToTag[i][1];
				tagStart = wikEd.parseObj.matchToTag[i][2];
				tagMatchParenth = i;
				break;
			}
		}

// handle chew-up regExp matches that massively speed up regexp search
		if (tagClass == 'ignore') {

// move regExp pointer back if chew-up regExp fragment has eaten into the start of an inline link
			if (obj.html.charAt(wikEd.parseObj.regExpTags.lastIndex) == ':') {
				var regExpMatch = /(https?|ftp|irc|gopher)$/.exec(tagMatch);
				if (regExpMatch != null) {
					wikEd.parseObj.regExpTags.lastIndex = wikEd.parseObj.regExpTags.lastIndex - regExpMatch[0].length;
				}
			}
			continue;
		}

// detect and remove newline from leading (^|\n) in sub-regexp
		var leadingNewline = false;
		if (tagStart == true) {
			if (parseObj.regExpMatch[tagMatchParenth + 1] == '\n') {
				tagFrom ++;
				tagLength --;
				leadingNewline = true;
			}
		}

// newlines close or end certain tags
		if (leadingNewline == true) {
			wikEd.HighlightBuildTree('newline', 'close', tagFrom, 0, parseObj);
		}

// no wikicode in link target or template or parameter name, only after pipe in linkPiped, or parameterPiped
		if ( (parseObj.lastOpenTag == 'link') || (parseObj.lastOpenTag == 'template') || (parseObj.lastOpenTag == 'parameter') ) {

			var openNode = parseObj.tree[parseObj.lastOpenNodeFiltered];
			if ( (openNode != null) && (openNode.firstChild == null) ) {

				if (
					( (tagClass == 'open') && (tag != 'template') ) ||
					( (tagClass == 'block') && (tag != 'newlinePipe') && (tag != 'doublePipe') && (tag != 'pipe') && (tag != 'headerSep') && (tag != 'headerParam') && (tag != 'newline') && (tag != 'preform') ) //// preform ok?
				) {

// convert opening tag to error and continue
					var errorText;
					if (parseObj.lastOpenTag == 'link') {
						errorText = wikEd.config.text.wikEdErrorCodeInLinkName;
					}
					else if (parseObj.lastOpenTag == 'template') {
						errorText = wikEd.config.text.wikEdErrorCodeInTemplName;
					}
					else if (parseObj.lastOpenTag == 'parameter') {
						errorText = wikEd.config.text.wikEdErrorCodeInParamName;
					}
					wikEd.HighlightMarkLastOpenNode(errorText, parseObj);
					wikEd.HighlightGetLevel(parseObj);
				}
			}
		}

// handle current tag by dispatching infos to stack manager that builds a hierarchical tree
		switch (tag) {

// non-ambiguous tags
			case 'nowiki':
			case 'pre':
			case 'math':
			case 'br':
			case 'table':
			case 'file':
			case 'heading':
			case 'redirect':
			case 'magic':
			case 'signature':
			case 'hr':
				wikEd.HighlightBuildTree(tag, tagClass, tagFrom, tagLength, parseObj);
				break;

// bold and italic
			case 'boldItalic':
				switch (tagLength) {
					case 2:
						switch(parseObj.lastOpenTagFiltered) {
							case 'italic':
								wikEd.HighlightBuildTree('italic', 'close', tagFrom, tagLength, parseObj);
								break;
							case 'boldItalic':
								wikEd.HighlightTreeRedefine(parseObj.lastOpenNodeFiltered, 'italic', 3, 2, parseObj);
								wikEd.HighlightTreeRedefine(parseObj.secondlastOpenNodeFiltered, 'bold', 0, 3, parseObj);
								wikEd.HighlightGetLevel(parseObj);
								wikEd.HighlightBuildTree('italic', 'close', tagFrom, tagLength, parseObj);
								break;
							default:
								wikEd.HighlightBuildTree('italic', 'open', tagFrom, tagLength, parseObj);
						}
						break;
					case 3:
						switch(parseObj.lastOpenTagFiltered) {
							case 'bold':
								wikEd.HighlightBuildTree('bold', 'close', tagFrom, tagLength, parseObj);
								break;
							case 'boldItalic':
								wikEd.HighlightTreeRedefine(parseObj.lastOpenNodeFiltered, 'bold', 2, 3, parseObj);
								wikEd.HighlightTreeRedefine(parseObj.secondlastOpenNodeFiltered, 'italic', 0, 2, parseObj);
								wikEd.HighlightGetLevel(parseObj);
								wikEd.HighlightBuildTree('bold', 'close', tagFrom, tagLength, parseObj);
								break;
							default:
								wikEd.HighlightBuildTree('bold', 'open', tagFrom, tagLength, parseObj);
						}
						break;
					case 5:
						switch(parseObj.lastOpenTagFiltered) {
							case 'bold':
								if (parseObj.secondLastOpenTagFiltered == 'italic') {
									wikEd.HighlightBuildTree('bold', 'close', tagFrom, 3, parseObj);
									wikEd.HighlightBuildTree('italic', 'close', tagFrom + 3, 2, parseObj);
								}
								else {
									wikEd.HighlightBuildTree('bold', 'close', tagFrom, 3, parseObj);
									wikEd.HighlightBuildTree('italic', 'open', tagFrom + 3, 2, parseObj);
								}
								break;
							case 'italic':
								if (parseObj.secondLastOpenTagFiltered == 'bold') {
									wikEd.HighlightBuildTree('italic', 'close', tagFrom, 2, parseObj);
									wikEd.HighlightBuildTree('bold', 'close', tagFrom + 2, 3, parseObj);
								}
								else {
									wikEd.HighlightBuildTree('italic', 'close', tagFrom, 2, parseObj);
									wikEd.HighlightBuildTree('bold', 'open', tagFrom + 2, 3, parseObj);
								}
								break;
							case 'boldItalic':
								wikEd.HighlightTreeRedefine(parseObj.secondlastOpenNodeFiltered, 'bold', 0, 3, parseObj);
								wikEd.HighlightTreeRedefine(parseObj.lastOpenNodeFiltered, 'italic', 3, 2, parseObj);
								wikEd.HighlightGetLevel(parseObj);
								parseObj.lastOpenTag == 'italic'
								wikEd.HighlightBuildTree('italic', 'close', tagFrom, 2, parseObj);
								wikEd.HighlightBuildTree('bold', 'close', tagFrom + 2, 3, parseObj);
								break;
							default:
								wikEd.HighlightBuildTree('boldItalic', 'open', tagFrom, tagLength, parseObj);
								wikEd.HighlightBuildTree('boldItalic', 'open', tagFrom, tagLength, parseObj);
						}
						break;
					default:
						parseObj.tree.push( { 'start': tagFrom, 'tagLength': tagLength, 'type': 'error', 'left': wikEd.config.text.wikEdErrorBoldItalic } );
						break;
				}
				break;

// templParam: template or template parameter
			case 'paramTempl':

// template or parameter
				var paramTemplTag = tag;
				if (tagLength == 2) {
					paramTemplTag = 'template';
				}
				else if (tagLength == 3) {
					paramTemplTag = 'parameter';
				}

// open paramTempl
				if (tagClass == 'open') {
					wikEd.HighlightBuildTree(paramTemplTag, tagClass, tagFrom, tagLength, parseObj);

// add spare elements for later disambiguation
					if (paramTemplTag == 'paramTempl') {
						for (var pos = 2; pos < tagLength - 1; pos = pos + 2) {
							wikEd.HighlightBuildTree(paramTemplTag, tagClass, tagFrom, tagLength, parseObj);
						}
					}
				}

// close paramTempl
				else {

// no opening tag, delegate error handling
					if ( (parseObj.lastOpenNode == 0) || (parseObj.lastOpenNode == null) ) {
						wikEd.HighlightBuildTree(paramTemplTag, tagClass, tagFrom, tagLength, parseObj);
						break;
					}
					var openNode = parseObj.tree[parseObj.lastOpenNodeFiltered];
					if (openNode == null) {
						wikEd.HighlightBuildTree(paramTemplTag, tagClass, tagFrom, tagLength, parseObj);
						break;
					}

// close template or parameter, open and close defined
					if (
						( (paramTemplTag == 'template') && (parseObj.lastOpenTagFiltered == 'template') ) ||
						( (paramTemplTag == 'parameter') && (parseObj.lastOpenTagFiltered == 'parameter') ) ||
						( (paramTemplTag == 'parameter') && (parseObj.lastOpenTagFiltered == 'parameterPiped') )
					) {
						wikEd.HighlightBuildTree(paramTemplTag, tagClass, tagFrom, tagLength, parseObj);
					}

// closing defines ambiguous opening
					else if (
						( (paramTemplTag == 'template') || (paramTemplTag == 'parameter') ) &&
						(parseObj.lastOpenTagFiltered == 'paramTempl') &&
						(openNode.tagLength >= tagLength)
					) {

// redefine ambiguous opening
						wikEd.HighlightTreeRedefine(parseObj.lastOpenNodeFiltered, paramTemplTag, openNode.tagLength - tagLength, tagLength, parseObj);

// adjust all ambiguous parents
						var redefinedTag;
						var redefinedLength;
						var nodeNo = openNode.parent;
						while ( (nodeNo != 0) && (nodeNo != null) ) {
							var node = parseObj.tree[nodeNo];
							if (node.tag != 'paramTempl') {
								break;
							}

							if (nodeNo == openNode.parent) {
								redefinedTag = node.tag;
								redefinedLength = node.tagLength - tagLength;
							}

// ignore spare paramTempl opening tags like p tags
							if (redefinedLength == 0) {
								redefinedTag = 'spare';
							}

// mark remaining single { as error
							else if (redefinedLength == 1) {
								parseObj.tree.push( {
									'start': node.start,
									'tagLength': node.tagLength,
									'type': 'error',
									'left': wikEd.config.text.wikEdErrorTemplParam
								} );
								redefinedTag = 'spare';
							}

// this is a template
							else if (redefinedLength == 2) {
								node.tag = 'template';
							}

// this is a parameter
							else if (redefinedLength == 3) {
								node.tag = 'parameter';
							}

// redefine parent
							wikEd.HighlightTreeRedefine(nodeNo, redefinedTag, null, redefinedLength, parseObj);

// all further opening paramTempl tags are spare
							if (redefinedLength <= 3) {
								redefinedTag = 'spare';
								redefinedLength = 0
							}

// up one level
							nodeNo = node.parent;
						}
						wikEd.HighlightGetLevel(parseObj);

// and close innermost tag
						wikEd.HighlightBuildTree(paramTemplTag, tagClass, tagFrom, tagLength, parseObj);
					}

// opening defines ambiguous closing
					else if ( (
						(openNode.tag == 'template') ||
						(openNode.tag == 'parameter') ||
						(openNode.tag == 'parameterPiped') ) && (tagLength >= openNode.tagLength)
					) {
						wikEd.HighlightBuildTree(openNode.tag, tagClass, tagFrom, openNode.tagLength, parseObj);
						wikEd.parseObj.regExpTags.lastIndex = wikEd.parseObj.regExpTags.lastIndex - tagLength + openNode.tagLength;
					}

// both ambiguous
					else if (
						(paramTemplTag == 'paramTempl') &&
						(openNode.tag == 'paramTempl') &&
						( (openNode.tagLength > 3) && (tagLength > 3) )
					) {
						parseObj.tree.push( {
							'start': openNode.start,
							'tagLength': openNode.tagLength,
							'type': 'error',
							'left': wikEd.config.text.wikEdErrorTemplParamAmbig
						} );
						parseObj.tree.push( {
							'start': tagFrom,
							'tagLength': tagLength,
							'type': 'error',
							'left': wikEd.config.text.wikEdErrorTemplParamAmbig
						} );
					}

// opening and closing do not match
					else {
						parseObj.tree.push( {
							'start': openNode.start,
							'tagLength': openNode.tagLength,
							'type': 'error',
							'left': wikEd.config.text.wikEdErrorTemplParam
						} );
						parseObj.tree.push( {
							'start': tagFrom,
							'tagLength': tagLength,
							'type': 'error',
							'left': wikEd.config.text.wikEdErrorTemplParam
						} );
					}
				}
				break;

// table single elements
			case 'header':
			case 'headerSep':
			case 'headerParam':
			case 'row':
			case 'caption':
				if (parseObj.lastOpenTagFiltered == 'table') {
					wikEd.HighlightBuildTree(tag, tagClass, tagFrom, tagLength, parseObj);
				}
				break;

// wikilink
			case 'link':
				wikEd.HighlightBuildTree(tag, tagClass, tagFrom, 2, parseObj);
				break;

// inline link block and external link
			case 'inlineURL':
			case 'external':

// trailing punctuation not part of inline links
				if (tag == 'inlineURL') {
					var regExpMatch;
					if (/\(/.test(tagMatch) == true) {
						regExpMatch = /^(.*?)([.,:;\\!?)]+)$/.exec(tagMatch);
					}
					else {
						regExpMatch = /^(.*?)([.,:;\\!?]+)$/.exec(tagMatch);
					}
					if (regExpMatch != null) {
						wikEd.parseObj.regExpTags.lastIndex = tagFrom + regExpMatch[1].length;
						tagMatch = regExpMatch[1];
						tagLength = tagMatch.length;
						tagTo = tagFrom + tagLength;
					}
				}

// urls in templates or tables are interrupted by tag strings
				if (tag == 'inlineURL') {
					var node = parseObj.tree[parseObj.lastOpenNode];
					while (node != null) {

// urls in templates are interrupted by }} and |
						if ( (node.tag == 'template') || (node.tag == 'paramTempl') || (node.tag == 'parameter') || (node.tag == 'parameterPiped') ) {
							var regExpMatch;
							if ( (regExpMatch = /^(.*?)(\}\}|\|)(.*?)$/.exec(tagMatch)) != null) {
								wikEd.parseObj.regExpTags.lastIndex = tagFrom + tagMatch[1].length;
								tagMatch = regExpMatch[1];
								tagLength = tagMatch.length;
								tagTo = tagFrom + tagLength;
							}
							break;
						}

// urls in tables are interrupted by ||
						else if (node.tag == 'table') {
							var regExpMatch;
							if ( (regExpMatch = /^(.*?)(\}\}|\|)(.*?)$/.exec(tagMatch)) != null) {
								wikEd.parseObj.regExpTags.lastIndex = tagFrom + tagMatch[1].length;
								tagMatch = regExpMatch[1];
								tagLength = tagMatch.length;
								tagTo = tagFrom + tagLength;
							}
							break;
						}
						node = parseObj.tree[node.parent];
					}
				}

// dissect external [url text
				if (tag == 'external') {
					if (tagClass == 'open') {
						var url = parseObj.regExpMatch[tagMatchParenth + 1];
						var spaces = parseObj.regExpMatch[tagMatchParenth + 5];
						wikEd.HighlightBuildTree(tag, tagClass, tagFrom, 1, parseObj);
						wikEd.HighlightBuildTree('externalURL', 'block', tagFrom + 1, url.length, parseObj);
						wikEd.HighlightBuildTree('externalText', tagClass, tagFrom + 1 + url.length + spaces.length, 0, parseObj);
					}

// close ], ignore false positive non-tags that have no opening [
					else {
						var node = parseObj.tree[parseObj.lastOpenNode];
						while (node != null) {
							if (node.tag == tag) {
								break;
							}
							node = parseObj.tree[node.parent];
						}
						if (node != null) {
							if (node.parent != null) {
								wikEd.HighlightBuildTree('externalText', tagClass, tagFrom, 0, parseObj);
								wikEd.HighlightBuildTree(tag, tagClass, tagFrom, tagLength, parseObj);
							}
						}
					}
					break;
				}

				wikEd.HighlightBuildTree(tag, tagClass, tagFrom, tagLength, parseObj);
				break;

// <html>
			case 'html':
				var htmlTag = parseObj.regExpMatch[tagMatchParenth + 1].toLowerCase();
				if (/^(ref|references|sub|sup|u|s|p)$/.test(htmlTag) == true) {
					wikEd.HighlightBuildTree(htmlTag, tagClass, tagFrom, tagLength, parseObj);
				}
				else if (/^(table|tr|td|th|col|thead|tfoot|tbody|colgroup|caption|big|blockquote|center|code|del|div|font|ins|small|span|strike|tt|rb|rp|rt|ruby|nowiki|math|noinclude|includeonly|gallery|categorytree|charinsert|hiero|imagemap|inputbox|poem|source|syntaxhighlight|timeline)$/.test(htmlTag) == true) {
					wikEd.HighlightBuildTree(htmlTag, tagClass, tagFrom, tagLength, parseObj);
				}
				else {
					wikEd.HighlightBuildTree('htmlUnknown', 'block', tagFrom, tagLength, parseObj);
				}
				break;

// <html />
			case 'htmlEmpty':
				var htmlTag = parseObj.regExpMatch[tagMatchParenth + 1];
				if (/^(references|ref|br|p)$/i.test(htmlTag) == true) {
					wikEd.HighlightBuildTree(htmlTag, tagClass, tagFrom, tagLength, parseObj);
				}
				else {
					wikEd.HighlightBuildTree(tag, tagClass, tagFrom, tagLength, parseObj);
				}
				break;

// |}}: table end or empty template parameter + template end
			case 'pipeTemplateEnd':
				if (parseObj.lastOpenTagFiltered == 'table') {
					wikEd.HighlightBuildTree('table', 'close', tagFrom, 2, parseObj);
				}
				else {
					wikEd.HighlightBuildTree('templateParam', 'block', tagFrom, 1, parseObj);
					wikEd.HighlightBuildTree('template', 'close', tagFrom + 1, 2, parseObj);
				}
				break;

// ]]: wikilink, file link, redirect
			case 'doubleCloseBracket':
				if (parseObj.lastOpenTagFiltered == 'file') {
					wikEd.HighlightBuildTree(parseObj.lastOpenTagFiltered, tagClass, tagFrom, tagLength, parseObj);
				}
				else {
					wikEd.HighlightBuildTree('link', tagClass, tagFrom, tagLength, parseObj);
				}
				break;

// \n|: table cell, wikilink separator, file parameter separator, redirect separator, empty template parameter
			case 'newlinePipe':
				switch (parseObj.lastOpenTagFiltered) {
					case 'table':
						wikEd.HighlightBuildTree('cell', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'link':
						wikEd.HighlightBuildTree('linkParam', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'file':
						wikEd.HighlightBuildTree('fileParam', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'template':
					case 'paramTempl':
						wikEd.HighlightBuildTree('templateParam', tagClass, tagFrom, tagLength, parseObj);
						break;
				}
				break;

// ||: table cell separator, empty file parameter separator, empty template parameters
			case 'doublePipe':
				switch (parseObj.lastOpenTagFiltered) {
					case 'table':
						wikEd.HighlightBuildTree('cellSep', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'link':
						wikEd.HighlightBuildTree('linkParam', tagClass, tagFrom, 1, parseObj);
						break;
					case 'file':
						wikEd.HighlightBuildTree('fileParam', tagClass, tagFrom, 1, parseObj);
						wikEd.HighlightBuildTree('fileParam', tagClass, tagFrom + 1, 1, parseObj);
						break;
					case 'template':
					case 'paramTempl':
						wikEd.HighlightBuildTree('templateParam', tagClass, tagFrom, 1, parseObj);
						wikEd.HighlightBuildTree('templateParam', tagClass, tagFrom + 1, 1, parseObj);
						break;
				}
				break;

// pipe |: table cell parameter separator, table caption parameter separator, wikilink separator, file parameter separator, template parameter, parameter default
			case 'pipe':
				switch (parseObj.lastOpenTagFiltered) {
					case 'table':
						wikEd.HighlightBuildTree('cellParam', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'link':
						wikEd.HighlightBuildTree('linkParam', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'file':
						wikEd.HighlightBuildTree('fileParam', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'template':
					case 'paramTempl':///// check later for parameterPiped
						wikEd.HighlightBuildTree('templateParam', tagClass, tagFrom, tagLength, parseObj);
						break;
					case 'parameter':
						wikEd.HighlightBuildTree('parameterDefault', tagClass, tagFrom, tagLength, parseObj);
						break;
				}
				break;

// list and preformatted (leading space) lines
			case 'preform':

// ignore template parameters preceeded with newline-spaces
				if (parseObj.lastOpenTagFiltered == 'template') {
					wikEd.parseObj.regExpTags.lastIndex = tagFrom + tagLength - parseObj.regExpMatch[tagMatchParenth + 3].length;
					break;
				}
			case 'list':

// highlight line
				wikEd.HighlightBuildTree(tag, tagClass, tagFrom, tagLength, parseObj);

// highlight tag
				wikEd.HighlightBuildTree(tag + 'Tag', tagClass, tagFrom, parseObj.regExpMatch[tagMatchParenth + 2].length, parseObj);

// move text pointer after tag
				wikEd.parseObj.regExpTags.lastIndex = tagFrom + tagLength - parseObj.regExpMatch[tagMatchParenth + 3].length;
				break;

// newline, old
			case 'newline':
				wikEd.HighlightBuildTree(tag, 'close', tagFrom, 0, parseObj);
				break;

// unrecognized tag
			default:
				parseObj.tree.push( { 'start': tagFrom, 'tagLength': tagLength, 'type': 'error', 'left': wikEd.config.text.wikEdErrorNoHandler } );
		}

// quit after reaching $ 'newline'
		if (tagMatch == '') {
			break;
		}
	}

// do not tolerate trailing opening tags for whole text highlighting
	if (parseObj.whole == true)  {

// mark remaining unmatched opening tags
		while ( (parseObj.lastOpenNode != 0) && (parseObj.lastOpenNode != null) ) {
			wikEd.HighlightMarkLastOpenNode(wikEd.config.text.wikEdErrorNoClose, parseObj);
		}
	}

// show parsing tree before additional block highlighting:
// WED('parseObj.tree', parseObj.tree);

// wiki autolinking (case sensitive, newlines are actually allowed!)
	var regExpMatch;
	var regExpAutoLink = /((PMID)[ \xa0\t]+(\d+))|((RFC)[ \xa0\t]+(\d+))|((RFC)[ \xa0\t]+(\d+))|((ISBN)[ \xa0\t]+((97(8|9)( |-)?)?(\d( |-)?){9}(\d|x)))/g;
	while ( (regExpMatch = regExpAutoLink.exec(obj.html) ) != null) {
		wikEd.HighlightBuildTree(regExpMatch[2] || regExpMatch[5] || regExpMatch[8] || regExpMatch[11], 'block', regExpMatch.index, regExpMatch[0].length, parseObj);
	}

// named html colors in quotation marks
	var regExpColorLight = /('|")(aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|blanchedalmond|burlywood|chartreuse|coral|cornsilk|cyan|darkgray|darkgrey|darkkhaki|darkorange|darksalmon|darkseagreen|floralwhite|fuchsia|gainsboro|ghostwhite|gold|goldenrod|greenyellow|honeydew|hotpink|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightskyblue|lightsteelblue|lightyellow|lime|linen|magenta|mediumaquamarine|mediumspringgreen|mediumturquoise|mintcream|mistyrose|moccasin|navajowhite|oldlace|orange|palegoldenrod|palegreen|paleturquoise|papayawhip|peachpuff|peru|pink|plum|powderblue|salmon|sandybrown|seashell|silver|skyblue|snow|springgreen|tan|thistle|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)(\1)/gi;
	while ( (regExpMatch = regExpColorLight.exec(obj.html) ) != null) {
		wikEd.HighlightBuildTree('colorLight', 'block', regExpMatch.index + regExpMatch[1].length, regExpMatch[2].length, parseObj);
	}
	var regExpColorDark = /('|")(black|blue|blueviolet|brown|cadetblue|chocolate|cornflowerblue|crimson|darkblue|darkcyan|darkgoldenrod|darkgreen|darkmagenta|darkolivegreen|darkorchid|darkred|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|forestgreen|gray|green|grey|indianred|indigo|lightseagreen|lightslategray|lightslategrey|limegreen|maroon|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumvioletred|midnightblue|navy|olive|olivedrab|orangered|orchid|palevioletred|purple|red|rosybrown|royalblue|saddlebrown|seagreen|sienna|slateblue|slategray|slategrey|steelblue|teal|tomato)(\1)/g;
	while ( (regExpMatch = regExpColorDark.exec(obj.html) ) != null) {
		wikEd.HighlightBuildTree('colorDark', 'block', regExpMatch.index + regExpMatch[1].length, regExpMatch[2].length, parseObj);
	}

// RGB hex colors #ddc, exclude links and character entities starting with &
	var regExpColor3 = /(^|[^\/\w&])(#[0-9a-f]{3})(?=([^\d\w]|$))/gi;
	while ( (regExpMatch = regExpColor3.exec(obj.html) ) != null) {
		wikEd.HighlightBuildTree('colorHex3', 'block', regExpMatch.index + regExpMatch[1].length, regExpMatch[2].length, parseObj);
	}

// RGB hex colors #d4d0cc, exclude links and character entities starting with &
	var regExpColor6 = /(^|[^\/\w&])(#[0-9a-f]{6})(?=([^\d\w]|$))/gi;
	while ( (regExpMatch = regExpColor6.exec(obj.html) ) != null) {
		wikEd.HighlightBuildTree('colorHex6', 'block', regExpMatch.index + regExpMatch[1].length, regExpMatch[2].length, parseObj);
	}

// RGB decimal colors rgb(128,64,265)
	var regExpColorDec = /\brgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)/gi;
	while ( (regExpMatch = regExpColorDec.exec(obj.html) ) != null) {
		wikEd.HighlightBuildTree('colorDec', 'block', regExpMatch.index, regExpMatch[0].length, parseObj);
	}

// single character highlighting: spaces, dashes
	var regExpCharSpaceDash = new RegExp('[' + wikEd.charHighlightingStr + ']', 'g');
	while ( (regExpMatch = regExpCharSpaceDash.exec(obj.html) ) != null) {
		wikEd.HighlightBuildTree('char', 'block', regExpMatch.index, regExpMatch[0].length, parseObj);
	}

// control character highlighting
	var regExpCharCtrl = new RegExp('[' + wikEd.controlCharHighlightingStr + ']', 'g');
	while ( (regExpMatch = regExpCharCtrl.exec(obj.html) ) != null) {
		if (regExpMatch[0].charCodeAt(0) > 2) {
			wikEd.HighlightBuildTree('ctrl', 'block', regExpMatch.index, regExpMatch[0].length, parseObj);
		}
	}

// character entities
	var regExpCharEntities = /&(\w+);/g;
	while ( (regExpMatch = regExpCharEntities.exec(obj.html) ) != null) {
		if (wikEd.charEntitiesByName[ regExpMatch[1] ] != null) {
			wikEd.HighlightBuildTree('charEntity', 'block', regExpMatch.index, regExpMatch[0].length, parseObj);
		}
	}

// merge wiki syntax in
	wikEd.HighlightAddHtml(parseObj, obj);

// get file previews
	if ( (wikEd.config.filePreview == true) && (wikEd.filePreviewRequest != '') ) {
		wikEd.AjaxPreview(wikEd.filePreviewRequest, wikEd.FilePreviewAjaxHandler);
		wikEd.filePreviewRequest = '';
	}

// merge html and plain text
	wikEd.HighlightMergeHtml(parseObj, obj);

// free up array
	parseObj.tree = [];

// \x00 and \x01 back to &lt; and &gt;
	obj.html = obj.html.replace(/&/g, '&amp;');
	obj.html = obj.html.replace(/\x00/g, '&lt;');
	obj.html = obj.html.replace(/\x01/g, '&gt;');

// remove comments
	if (wikEd.config.removeHighlightComments == true) {
		obj.html = obj.html.replace(/<!--wikEd[\w\/]+-->/g, '');
	}

	return;
};


//
// wikEd.HighlightTreeRedefine: redefine opening tag, for bold / italic and template / parameter
//

wikEd.HighlightTreeRedefine = function(openNodeIndex, tag, tagFromDiff, tagLength, parseObj) {

	if (tag != null) {
		parseObj.tree[openNodeIndex].tag = tag;
	}
	if (tagFromDiff != null) {
		parseObj.tree[openNodeIndex].start += tagFromDiff;
	}
	if (tagLength != null) {
		parseObj.tree[openNodeIndex].tagLength = tagLength;
	}

	return;
};


//
// wikEd.HighlightBuildTree: build an array based tree structure of text elements
//   tag info: text pos, text length, tag type (root, open, close, block, error)
//   connectivity info: parent, firstChild, nextSibling, paired opening/closing (all array indexes)

wikEd.HighlightBuildTree = function(tag, tagClass, tagFrom, tagLength, parseObj) {

// show parameters:
// WED('tag, tagClass, tagFrom, tagLength', tag + ' ,' + tagClass + ', ' + tagFrom + ', ' + tagLength);

// single-element tags (block)
	if (tagClass == 'block') {
		if ( (parseObj.lastOpenNode != 0) && (parseObj.lastOpenNode != null) ) {
			var redefinedParentTag;

// change parent link to linkPiped, only one valid separator per link
			if ( (tag == 'linkParam') && (parseObj.lastOpenTag == 'link') ) {
				redefinedParentTag = 'linkPiped';
			}

// change parent link to parameterPiped, only one valid separator per link
			else if ( (tag == 'parameterDefault') && (parseObj.lastOpenTag == 'parameter') ) {
				redefinedParentTag = 'parameterPiped';
			}

// redefine parent tag
			if (redefinedParentTag != null) {
				parseObj.tree[parseObj.lastOpenNode].tag = redefinedParentTag;
				parseObj.lastOpenTagFiltered = redefinedParentTag;
			}

// chain blocks
			var newNode = parseObj.tree.length;
			var previousSibling = null;

// first node
			if (parseObj.tree[parseObj.lastOpenNode].firstChild == null) {
				parseObj.tree[parseObj.lastOpenNode].firstChild = newNode;
			}

// chain to previous blocks
			else {
				previousSibling = parseObj.tree[parseObj.lastOpenNode].lastChild;
				var previousSiblingNode = parseObj.tree[previousSibling];
				if (previousSiblingNode != null) {
					previousSiblingNode.nextSibling = newNode;
				}
			}
			parseObj.tree[parseObj.lastOpenNode].lastChild = newNode;
		}

// add new block to tree
		parseObj.tree.push( {
			'tag': tag,
			'start': tagFrom,
			'tagLength': tagLength,
			'type': 'block',
			'parent': parseObj.lastOpenNode,
			'previousSibling': previousSibling
		} );
	}

// opening tags
	else if (tagClass == 'open') {

// push new open element onto tree
		var openNode = {
			'tag': tag,
			'start': tagFrom,
			'tagLength': tagLength,
			'type': 'open',
			'parent': parseObj.lastOpenNode
		};
		parseObj.lastOpenNode = parseObj.tree.push(openNode) - 1;

// get new top and second-to-top nodes, ignoring unpaired p tags
		wikEd.HighlightGetLevel(parseObj);
	}

// closing tags
	else if (tagClass == 'close') {

// try until we find the correct opening tag after fixing the tree
		while (true) {

// no opening tag on stack
			if (parseObj.lastOpenNode == 0) {

// ignore unmatched =
				if (tag == 'heading') {
					break;
				}

// ignore breaking newlines
				if (tag != 'newline') {

// tolerate leading closing tags for fragment highlighting
					if ( (parseObj.whole == false) && (parseObj.addedOpenTag == false) )  {

// add new closing element to tree
						parseObj.tree.push( {
							'tag': tag,
							'start': tagFrom,
							'tagLength': tagLength,
							'type': 'close',
							'pairedTagPos': parseObj.tree[parseObj.lastOpenNode].start + parseObj.tree[parseObj.lastOpenNode].tagLength
						} );
					}

// add no open tag error to tree
					else {
						parseObj.tree.push( {
							'start': tagFrom,
							'tagLength': tagLength,
							'type': 'error',
							'left': wikEd.config.text.wikEdErrorNoOpen
						} );
					}
					break;
				}
			}

// ignore unpaired <p> and spare nodes and try again with parent
			if ( (tag != 'p') && ( (parseObj.lastOpenTag == 'p') || (parseObj.lastOpenTag == 'spare') ) ) {
				if (parseObj.lastOpenNode != null) {
					parseObj.lastOpenNode = parseObj.tree[parseObj.lastOpenNode].parent;
					parseObj.lastOpenTag = parseObj.lastOpenNode.tag;
				}
				continue;
			}

// newline brakes heading or external link, remove corresponding opening tag from stack
			if (tag == 'newline') {

// mark broken opening tags
				var nodeNo = parseObj.lastOpenNode;
				var node = null;
				while ( (nodeNo != 0) && (nodeNo != null) ) {
					node = parseObj.tree[nodeNo];
					if (
						(node.tag == 'heading') ||
						(node.tag == 'link') ||
						(node.tag == 'linkPiped') ||
						(node.tag == 'externalText') ||
						(node.tag == 'bold') ||
						(node.tag == 'italic') ||
						(node.tag == 'boldItalic')
					) {
						wikEd.HighlightMarkLastOpenNode(wikEd.config.text.wikEdErrorNewline, parseObj);
						wikEd.HighlightGetLevel(parseObj);
					}
					nodeNo = node.parent;
				}
				break;
			}

// correct piped link
			switch (tag) {
				case 'link':
					if (parseObj.lastOpenTag == 'linkPiped') {
						tag = 'linkPiped';
					}
					break;

// correct piped parameter
				case 'parameter':
					if (parseObj.lastOpenTag == 'parameterPiped') {
						tag = 'parameterPiped';
					}
					break;
			}

// wrong closing element
			if (tag != parseObj.lastOpenTag) {

// ignore common unmatched false positive non-tags: = and ]
				if ( (tag == 'heading') ) {
					break;
				}

// check if there is an open tag for this close tag
				var nodeNo = parseObj.lastOpenNode;
				while ( (nodeNo != 0) && (nodeNo != null) ) {
					if (parseObj.tree[nodeNo].tag == tag) {
						break;
					}
					nodeNo = parseObj.tree[nodeNo].parent;
				}
				if ( (nodeNo != 0) && (nodeNo != null) ) {

// treat open tags as wrong, close tag as correct
					if (parseObj.tree[nodeNo].tag == tag) {

// mark remaining unmatched opening tags
						var nodeNo = parseObj.lastOpenNode;
						while ( (nodeNo != 0) && (nodeNo != null) ) {
							var node = parseObj.tree[nodeNo];
							if (node.tag == tag) {
								parseObj.lastOpenNode = nodeNo;
								break;
							}
							nodeNo = node.parent;
							node.type = 'error';
							node.left = wikEd.config.text.wikEdErrorNoClose;
							node.parent = null;
						}
						wikEd.HighlightGetLevel(parseObj);
					}

// treat open tags as correct, treat close tag as wrong
					else {

// add wrong close tag error to tree
						parseObj.tree.push( {
							'start': tagFrom,
							'tagLength': tagLength,
							'type': 'error',
							'left': wikEd.config.text.wikEdErrorNoOpen
						} );
						break;
					}
				}
			}

// headings in templates are ignored but we do not want to hide that template
			if (tag == 'heading') {

// check for heading in template or ref
				var ignoreHeading = false;
				var nodeNo = parseObj.tree[parseObj.lastOpenNode].parent;
				while ( (nodeNo != 0) && (nodeNo != null) ) {
					var node = parseObj.tree[nodeNo];
					if (node.tag == 'template') {
						node.noHide = true;
						ignoreHeading = true;
					}
					else if (node.tag == 'ref') {
						node.noHide = true;
						ignoreHeading = true;
					}
					nodeNo = node.parent;
				}

// clean out opening heading
				if (ignoreHeading == true) {

// add headings in template errors to tree

// convert opening tag to error
					wikEd.HighlightMarkLastOpenNode(wikEd.config.text.wikEdErrorTemplHeading, parseObj);

					parseObj.tree.push( {
						'start': tagFrom,
						'tagLength': tagLength,
						'type': 'error',
						'left': wikEd.config.text.wikEdErrorTemplHeading
					} );
					break;
				}
			}

// it is the correct closing element

// save element last text position to opening tag entry
			var pairedTagPos;
			parseObj.tree[parseObj.lastOpenNode].pairedTagPos = tagFrom;
			pairedTagPos = parseObj.tree[parseObj.lastOpenNode].start + parseObj.tree[parseObj.lastOpenNode].tagLength

// add new closing element to tree
			parseObj.tree.push( {
				'tag': tag,
				'start': tagFrom,
				'tagLength': tagLength,
				'type': 'close',
				'pairedTagPos': pairedTagPos
			} );

// up one level
			if ( (parseObj.lastOpenNode != 0) && (parseObj.lastOpenNode != null) ) {
				parseObj.lastOpenNode = parseObj.tree[parseObj.lastOpenNode].parent;
			}

			break;
		}

// get new top and second-to-top nodes, ignoring unpaired p tags
		wikEd.HighlightGetLevel(parseObj);
	}
	return;
};


//
// wikEd.HighlightMarkLastOpenNode: redefine last open node as an error, ignore p and spare, handle pipe subnodes
//

wikEd.HighlightMarkLastOpenNode = function(errorText, parseObj) {

	var lastOpenNode = parseObj.lastOpenNode;
	var openNode = parseObj.tree[lastOpenNode];
	parseObj.lastOpenNode = openNode.parent;
	if ( (openNode.tag != 'p') && (openNode.tag != 'spare') ) {

// mark pipes
		if ( (openNode.tag == 'linkPiped') || (openNode.tag = 'parameterPiped') || (openNode.tag = 'template') || (openNode.tag = 'paramTempl') ) {
			var childNode = parseObj.tree[openNode.firstChild];
			if (childNode != null) {
				parseObj.tree[openNode.firstChild] = {
					'start': childNode.start,
					'tagLength': childNode.tagLength,
					'type': 'error',
					'left': errorText
				};
			}
		}

// mark unmatched opening tags
		parseObj.tree[lastOpenNode] = {
			'start': openNode.start,
			'tagLength': openNode.tagLength,
			'type': 'error',
			'left': errorText
		};
	}
	return;
};


//
// wikEd.HighlightGetLevel: get current innermost (top) element name from parse stack, ignoring unpaired p tags
//

wikEd.HighlightGetLevel = function(parseObj) {

	parseObj.lastOpenTag = null;
	parseObj.lastOpenNodeFiltered = null;
	parseObj.lastOpenTagFiltered = null;
	parseObj.secondlastOpenNodeFiltered = null;
	parseObj.secondLastOpenTagFiltered = null;
	if ( (parseObj.lastOpenNode == 0) || (parseObj.lastOpenNode == null) ) {
		return;
	}

	parseObj.lastOpenTag = parseObj.tree[parseObj.lastOpenNode].tag;
	var nodeNo = parseObj.lastOpenNode;
	while ( (nodeNo != 0) && (nodeNo != null) ) {
		var node = parseObj.tree[nodeNo];
		if ( (node.tag != 'p') && (node.tag != 'spare') ) {
			parseObj.lastOpenNodeFiltered = nodeNo;
			parseObj.lastOpenTagFiltered = parseObj.tree[nodeNo].tag;
			break;
		}
		nodeNo = parseObj.tree[nodeNo].parent;
	}

	if ( (nodeNo != 0) && (nodeNo != null) ) {
		nodeNo = parseObj.tree[nodeNo].parent;
		while ( (nodeNo != 0) && (nodeNo != null) ) {
			var node = parseObj.tree[nodeNo];
			if ( (node.tag != 'p') && (node.tag != 'spare') ) {
				parseObj.secondlastOpenNodeFiltered = nodeNo;
				parseObj.secondLastOpenTagFiltered = parseObj.tree[nodeNo].tag;
				break;
			}
			nodeNo = parseObj.tree[nodeNo].parent;
		}
	}

	return;
};


//
// wikEd.HighlightAddCode: add actual highlighting html code to parse tree elements
//

wikEd.HighlightAddHtml = function(parseObj, obj) {

// cycle through currently existing parse array
	var from = 0;
	var i = 0;
	while (i < parseObj.tree.length) {
		var node = parseObj.tree[i];
		var tag = node.tag;
		var tagFrom = node.start;
		var tagLength = node.tagLength;
		var tagType = node.type;
		var pairedTagPos = node.pairedTagPos;
		var tagTo = tagFrom + tagLength;
		var tagMatch = '';
		if (tagLength > 0) {
			tagMatch = obj.html.substr(tagFrom, tagLength);
		}

		var insertLeft = '';
		var insertRight = '';
		var pushRight = '';
		var pushRight2 = '';
		var pushRightPos2;
		var pushLeft = '';

		switch (tagType) {
			case 'open':
				var innerPlain = '';
				if (pairedTagPos != null) {
					innerPlain = obj.html.substring(tagTo, pairedTagPos);
				}
				switch (tag) {
					case 'italic':
						insertLeft = '<span class="wikEdItalic"><span class="wikEdWiki">';
						insertRight = '</span><!--wikEdWiki-->';
						break;
					case 'bold':
						insertLeft = '<span class="wikEdBold"><span class="wikEdWiki">';
						insertRight = '</span><!--wikEdWiki-->';
						break;
					case 'link':
					case 'linkPiped':
						var inter = '';
						var interClean = '';
						var ns = '';
						var nsClean = '';
						var linkClass = 'wikEdLink';
						var article = '';
						var param = '';
						var follow = '';

// detect interlink and namespace
//                                12 inter:2      1 34  :  4 5        namespace        53    6template 6   7  89param 87
						var regExpLink = /^\s*(([\w\- ]+)\:\s*)?((\:\s*)?([^\:\|\[\]\{\}\n\t]*\s*\:\s*))?([^\|\n]+?)\s*(\|((.|\n)*))?\s*$/gi;
						regExpLink.lastIndex = 0;
						var regExpMatch;
						if ( (regExpMatch = regExpLink.exec(innerPlain)) != null) {

// get interwiki, namespace, article, paramters
							if (regExpMatch[1] != null) {
								inter = regExpMatch[1];
								interClean = inter;
								interClean = interClean.replace(/\s/g, ' ');
								interClean = interClean.replace(/ {2,}/g, ' ');
								interClean = interClean.replace(/: +:/, '');
								interClean = interClean.replace(/^ $/, '');
							}

							if (regExpMatch[3] != null) {
								ns = regExpMatch[3];
								nsClean = ns;
								nsClean = nsClean.replace(/\s/g, ' ');
								nsClean = nsClean.replace(/ {2,}/g, ' ');
								nsClean = nsClean.replace(/: :/, '');
								nsClean = nsClean.replace(/^ $/, '');

// change interwiki into more common namespace if ambiguous
								if ( (interClean != '') && (nsClean == '') ) {
									nsClean = interClean;
									ns = inter;
									inter = '';
									interClean = '';
								}
							}

// detect cross-namespace links
							linkClass = 'wikEdLink';
							if (wikEd.pageNamespace != null) {
								if (ns != wikEd.pageNamespace) {
									linkClass = 'wikEdLinkCrossNs';
								}
							}

							article = regExpMatch[6];

							if (regExpMatch[8] != null) {
								param = regExpMatch[8];
							}

// highlight interwiki and namespace
							if (article != '') {

// highlight interwiki
								if (inter != '') {
									wikEd.HighlightBuildTree('linkInter', 'block', tagFrom + 2, inter.length, parseObj);
								}

// highlight namespace
								if (ns != '') {
									wikEd.HighlightBuildTree('linkNamespace', 'block', tagFrom + 2 + inter.length, ns.length, parseObj);
								}

// linkify
								var regExpCasing = new RegExp('(^|\\:)' + wikEd.config.text['wikicode Category'] + '(\\:|$)', 'i');
								nsClean = nsClean.replace(regExpCasing, '$1' + wikEd.config.text['wikicode Category'] + '$2');
								if (nsClean == ':') {
									nsClean = '';
								}
								follow = ' ' + wikEd.HighlightLinkify(interClean + nsClean, article);
							}
						}
						if (nsClean.toLowerCase() == wikEd.config.text['wikicode Category'].toLowerCase() + ':') {
							insertLeft = '<span class="wikEdCat"' + follow + '><span class="wikEdLinkTag">';
							insertRight = '</span><!--wikEdLinkTag--><span class="wikEdCatName">';
						}
						else if (tag == 'linkPiped') {
							insertLeft = '<span class="' + linkClass + '"' + follow + '><span class="wikEdLinkTag">';
							insertRight = '</span><!--wikEdLinkTag--><span class="wikEdLinkTarget">';
						}
						else {
							insertLeft = '<span class="' + linkClass + '"' + follow + '><span class="wikEdLinkTag">';
							insertRight = '</span><!--wikEdLinkTag--><span class="wikEdLinkName">';
						}
						break;
					case 'file':
						var previewCode = '';
						var regExpFile = new RegExp('^\\s*(Image|File|' + wikEd.config.text['wikicode Image'] + '|' + wikEd.config.text['wikicode File'] + ')\\s*:\\s*([^\\|\\n]*)', 'i');
						var regExpMatch = regExpFile.exec(innerPlain);
						if (regExpMatch == null) {
							insertLeft = '<span class="wikEdFile"><span class="wikEdFileTag">';
						}

// linkify and preview
						else {
							var file = regExpMatch[1] + ':' + regExpMatch[2];
							var filePlain = regExpMatch[1] + ':' + regExpMatch[2].replace(/<.*?>/g, '');
							filePlain = filePlain.replace(/ /g,'_');

// add file preview box
							if (wikEd.config.filePreview == true) {

// get image size
								var filePreviewSize = wikEd.config.filePreviewSize;
								var regExpMatch;
								if ( (regExpMatch = /\|(\d+)px(\||$)/.exec(innerPlain)) != null) {
									var size = parseInt(regExpMatch[1]);
									if ( (size > 0) && (size < wikEd.config.filePreviewSize) ) {
										filePreviewSize = size;
									}
								}

// get image url and size from cache
								var style = '';
								var fileObj = wikEd.filePreviewCache['wikEd' + filePlain + filePreviewSize];
								if (fileObj != null) {
									var filePreviewHeight = filePreviewSize;
									if (fileObj.height != null) {
										filePreviewHeight = fileObj.height;
									}
									var filePreviewWidth = filePreviewSize;
									if (fileObj.width != null) {
										filePreviewWidth = fileObj.width;
									}
									style = 'background-image: url(' + fileObj.url + '); height: ' + filePreviewHeight + 'px; width: ' + filePreviewWidth + 'px;';
								}

// get image url and size through an ajax request
								else {
									style = 'display: none; height: ' + filePreviewSize + 'px; width: ' + filePreviewSize + 'px;';
									wikEd.filePreviewRequest += '\n' + filePlain + ' ' + filePreviewSize + ' [[' + file + '|' + filePreviewSize + 'px|' + filePreviewSize + 'x' + filePreviewSize + 'px]]\n';
									wikEd.filePreviewIds[wikEd.filePreviewNo] = filePlain + filePreviewSize;
								}
								previewCode = '<span class="wikEdFilePreview" id="wikEdFilePreview' + wikEd.filePreviewNo + '" style="' + style + '" title="' + wikEd.config.text.wikEdFilePreview + ' (' + filePlain + ')"></span><!--wikEdFilePreview-->';
								wikEd.filePreviewNo ++;
							}
							insertLeft += '<span class="wikEdFile" ' + wikEd.HighlightLinkify('', filePlain) + '><span class="wikEdFileTag">';
						}
						insertRight = previewCode + '</span><!--wikEdLinkTag--><span class="wikEdFileName">';
						break;
					case 'external':
						var url = '';
						var regExpMatch;
						if ( (regExpMatch = /\w\S+/.exec(innerPlain)) != null) {
							url = regExpMatch[0];
						}
						insertLeft = '<span class="wikEdURL" ' + wikEd.HighlightLinkify('', '', url) + '><span class="wikEdLinkTag">';
						insertRight = '</span><!--wikEdLinkTag-->';
						break;
					case 'externalText':
						insertLeft = '<span class="wikEdURLText">';
						break;
					case 'template':
						var mod = '';
						var inter = '';
						var interClean = '';
						var ns = '';
						var nsClean = '';
						var template = '';
						var param = '';
						var follow = '';

//                                             12          mod              2  :    1 34  :    4 5        namespace                 53     6 template            6    7   89 param  98
						var regExpTempl = new RegExp('^\\s*((' + wikEd.templModifier + ')\\:\\s*)?((\\:\\s*)?([^:|\\[\\]{}\\s\\x00\\x01]*\\s*\\:))?\\s*([^:\\n\\x00\\x01{}]+?)\\s*(\\|((.|\\n)*?))?\\s*$', 'gi');

// detect parser variables and functions, might slow main regexp down
						var regExpMatch;
						var parserVar = false;
						if ( (regExpMatch = regExpTempl.exec(innerPlain)) != null) {

// get modifier, namespace, template, paramters
							if (regExpMatch[1] != null) {
								mod = regExpMatch[1];
								interClean = mod.replace(/\s+$/g, '');
								interClean = inter.replace(/:$/g, '');
							}

							if (regExpMatch[3] != null) {
								ns = regExpMatch[3];
								nsClean = ns.replace(/^\s+|\s+$/g, '');
								nsClean = nsClean.replace(/\s*\:\s*()/g, ':');
								nsClean = nsClean.replace(/\s\s+/g, ' ');
								nsClean = nsClean.replace(/(.):$/g, '$1');
							}

							template = regExpMatch[6];

							if (regExpMatch[8] != null) {
								param = regExpMatch[8];
							}

// {{VARIABLE}}
							if (parserVar == false) {
								if ( (template != '') && (ns == '') && (param == '') ) {
									var regExpParserVar = new RegExp('^(' + wikEd.parserVariables + wikEd.parserVariablesR + ')$', '');
									if ( (regExpMatch = regExpParserVar.exec(template)) != null) {
										parserVar = true;
										wikEd.HighlightBuildTree('templateParserFunct', 'block', tagFrom + 2, innerPlain.length, parseObj);
									}
								}
							}

// {{VARIABLE:R}}
							if (parserVar == false) {
								if ( (ns != '') && (template == 'R') ) {
									var regExpParserVar = new RegExp('^(' + wikEd.parserVariablesR + ')$', '');
									if ( (regExpMatch = regExpParserVar.exec(ns.substr(0, ns.length - 1))) != null) {
										parserVar = true;
										wikEd.HighlightBuildTree('templateParserFunct', 'block', tagFrom + 2, innerPlain.indexOf(':') + 1, parseObj);
									}
								}
							}

// {{FUNCTION:param|R}}
							if (parserVar == false) {
								if ( (ns != '') && ( (param == '') || (param == 'R') ) ) {
									var regExpParserVar = new RegExp('^(' + wikEd.parserFunctionsR + ')$', '');
									if ( (regExpMatch = regExpParserVar.exec(ns.substr(0, ns.length - 1))) != null) {
										parserVar = true;
										wikEd.HighlightBuildTree('templateParserFunct', 'block', tagFrom + 2, innerPlain.indexOf(':') + 1, parseObj);
									}
								}
							}

// {{function:param|param}}
							if (parserVar == false) {
								if (ns != '') {
									var regExpParserVar = new RegExp('^(' + wikEd.parserFunctions + ')$', 'i');
									if ( (regExpMatch = regExpParserVar.exec(ns.substr(0, ns.length - 1))) != null) {
										parserVar = true;
										wikEd.HighlightBuildTree('templateParserFunct', 'block', tagFrom + 2, innerPlain.indexOf(':') + 1, parseObj);
									}
								}
							}

// {{#function:param|param}}
							if (parserVar == false) {
								if (ns != '') {
									var regExpParserVar = new RegExp('^(#(' + wikEd.parserFunctionsHash + '))$', 'i');
									if ( (regExpMatch = regExpParserVar.exec(ns.substr(0, ns.length - 1))) != null) {
										parserVar = true;
										wikEd.HighlightBuildTree('templateParserFunct', 'block', tagFrom + 2, innerPlain.indexOf(':') + 1, parseObj);
									}
								}
							}

// highlight template
							if (parserVar == false) {

// highlight modifier
								if (mod != '') {
									wikEd.HighlightBuildTree('templateModifier', 'block', tagFrom + 2, mod.length, parseObj);
								}

// highlight namespace
								if (ns != '') {
									wikEd.HighlightBuildTree('templateNamespace', 'block', tagFrom + 2 + mod.length, ns.length, parseObj);
								}

// add missing template namespace and linkify
								if (ns == ':') {
									ns = '';
								}
								else if (ns == '') {

// no Template: addition for subpage linking
									if (template.indexOf('/') != 0) {
										ns = wikEd.config.text['wikicode Template'] + ':';
									}
								}
								follow = ' ' + wikEd.HighlightLinkify(ns, template);
							}
						}
						var hideStyle = '';
						var hideClass = 'wikEdTempl';
						if ( (template != '') && (parserVar == false) ) {
							if (wikEd.refHide == true) {

// show first template immediately following a template or reference
								var hideButtonClass = 'wikEdTemplButton';
								if ( (node.parent != null) && (node.parent > 0) ) {
									var parentNode = parseObj.tree[node.parent];
									if (parentNode != null) {
										if ( (parentNode.tag == 'template') || (parentNode.tag == 'ref') )  {
											if (/^\s*$/.test(obj.html.substring(parentNode.start + parentNode.tagLength, tagFrom)) == true) {
												hideButtonClass = hideButtonClass.replace(/Button(Show)?/, 'ButtonShow');
												hideClass = 'wikEdTemplShow';
												hideButtonStyle = ' style="display: block"';
												hideStyle = ' style="display: block"';
											}
										}
									}
								}
								insertLeft = '<span class="wikEdTemplContainer"><button class="' + hideButtonClass + wikEd.templateArray.length + '" title="' + wikEd.config.text.wikEdTemplButtonTooltip + '"></button><!--wikEdTemplButton--></span><!--wikEdTemplContainer-->';
								wikEd.templateArray.push( {'text': template, 'added': false} );
							}
						}
						insertLeft += '<span class="' + hideClass + '"' + hideStyle + '><span class="wikEdTemplTag">';
						insertRight = '</span><!--wikEdTemplTag--><span class="wikEdTemplName"' + follow + '>';
						break;
					case 'parameter':
					case 'parameterPiped':
						insertLeft = '<span class="wikEdParam"><span class="wikEdTemplTag">';
						pushRight = '</span><!--wikEdTemplTag--><span class="wikEdParamName">';
						break;
					case 'html':
					case 'tr':
					case 'td':
					case 'th':
					case 'col':
					case 'thead':
					case 'tfoot':
					case 'tbody':
					case 'colgroup':
					case 'caption':
					case 'big':
					case 'blockquote':
					case 'center':
					case 'code':
					case 'del':
					case 'div':
					case 'font':
					case 'ins':
					case 'small':
					case 'span':
					case 'strike':
					case 'tt':
					case 'rb':
					case 'rp':
					case 'rt':
					case 'ruby':
					case 'nowiki':
					case 'math':
					case 'noinclude':
					case 'includeonly':
					case 'gallery':
					case 'categorytree':
					case 'charinsert':
					case 'hiero':
					case 'imagemap':
					case 'inputbox':
					case 'poem':
					case 'source':
					case 'syntaxhighlight':
					case 'timeline':
						insertLeft = '<span class="wikEdHtml"><span class="wikEdHtmlTag">';
						pushRight = '</span><!--wikEdHtmlTag-->';
						break;
					case 'u':
						insertLeft = '<span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTag--><span class="wikEdIns">';
						break;
					case 's':
						insertLeft = '<span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTag--><span class="wikEdDel">';
						break;
					case 'sub':
						insertLeft = '<span class="wikEdSubscript"><span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTag-->';
						break;
					case 'sup':
						insertLeft = '<span class="wikEdSuperscript"><span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTag-->';
						break;
					case 'p':
						insertLeft = '<span class="wikEdHtmlUnknown" title="' + wikEd.config.text.wikEdErrorHtmlUnknown + '">';
						pushRight = '</span><!--wikEdHtmlUnknown-->';
						break;
					case 'spare':
						break;
					case 'ref':

// ref no hide
						if (node.noHide == true) {
							insertLeft = '<span class="wikEdRef">';
						}

// ref hide
						else {
							var refName = '';
							var regExpMatch;
							if ( (regExpMatch = /(\bname\s*=\s*('|"))([^\x01]+?)\2/i.exec(tagMatch)) != null) {
								refName = regExpMatch[3];
								wikEd.HighlightBuildTree('refName', 'block', tagFrom + regExpMatch.index + regExpMatch[1].length, regExpMatch[3].length, parseObj);
							}
							else if ( (regExpMatch = /(\bname\s*=\s*)(\w+)/i.exec(tagMatch)) != null) {
								refName = regExpMatch[2];
								wikEd.HighlightBuildTree('refName', 'block', tagFrom + regExpMatch.index + regExpMatch[1].length, regExpMatch[2].length, parseObj);
							}
							if (wikEd.refHide == true) {
								if (refName != '') {
									insertLeft = '<span class="wikEdRefContainer"><button class="wikEdRefButton' + wikEd.referenceArray.length + '" title="' + wikEd.config.text.wikEdRefButtonTooltip + '"></button><!--wikEdRefButton--></span><!--wikEdRefContainer-->';
									wikEd.referenceArray.push( {'text': refName, 'added': false} );
								}
								else {
									insertLeft = '<span class="wikEdRefContainer"><button class="wikEdRefButton" title="' + wikEd.config.text.wikEdRefButtonTooltip + '"></button><!--wikEdRefButton--></span><!--wikEdRefContainer-->';
								}
							}
							insertLeft += '<span class="wikEdRef"><span class="wikEdHtmlTag">';
							pushRight = '</span><!--wikEdHtmlTag-->';
						}
						break;
					case 'references':
						insertLeft = '<span class="wikEdRefList"><span class="wikEdReferencesTag">';
						pushRight = '</span><!--wikEdReferencesTag-->';
						break;
					case 'heading':
						var heading = innerPlain.replace(/^\s+|\s+$/g, '');
						if ( (heading == wikEd.config.text['See also']) || (heading == wikEd.config.text.References) || (heading == wikEd.config.text['External links']) ) {
							insertLeft = '<span class="wikEdHeadingWP">';
						}
						else {
							insertLeft = '<span class="wikEdHeading">';
						}
						break;
					case 'table':/// \n| = </td><td>, \n|- = </t></tr><tr> not blocks but td, th, tr
						if (parseObj.tableMode == true) {

// wikitable
							var regExpTable = /\{\| *((\w+ *= *('|")[^\n'"]*\3 *)*)(\n|$)/gi;
							regExpTable.lastIndex = tagFrom;
							var regExpMatch = regExpTable.exec(obj.html);
							if (regExpMatch == null) {

// html table
								regExpTable = /<table\b\s*((\w+\s*=\s*('|")[^>'"]*\3\s*)*)\s*>/gi;
								regExpTable.lastIndex = tagFrom;
								regExpMatch = regExpTable.exec(obj.html)
							}

							if (regExpMatch != null) {
								if (regExpMatch.index == tagFrom) {
									var params = regExpMatch[1];
									if (params != '') {
										params += ' ';
									}
									insertLeft = '<table ' + params + ' border="1" class="wikEdTableEdit"><!--wikEdTableMode';
									pushRight2 = '-->';
									pushRightPos2 = regExpMatch.index + regExpMatch[0].length;
								}
								else {
									parseObj.tableMode = false;
								}
							}
							else {
								parseObj.tableMode = false;
							}
						}
						if (parseObj.tableMode == false) {
							insertLeft = '<span class="wikEdTable"><span class="wikEdTableTag">';
							insertRight = '</span><!--wikEdTableTag-->';
						}
						break;
				}
				break;
			case 'close':
				switch (tag) {
					case 'italic':
						insertLeft = '<span class="wikEdWiki">';
						pushRight = '</span><!--wikEdWiki--></span><!--wikEdItalic-->';
						break;
					case 'bold':
						insertLeft = '<span class="wikEdWiki">';
						pushRight = '</span><!--wikEdWiki--></span><!--wikEdBold-->';
						break;
					case 'link':
						insertLeft = '</span><!--wikEdLinkName/CatName--><span class="wikEdLinkTag">';
						insertRight = '</span><!--wikEdLinkTag--></span><!--wikEdLink/Cat-->';
						break;
					case 'linkPiped':
						insertLeft = '</span><!--wikEdLinkText--><span class="wikEdLinkTag">';
						insertRight = '</span><!--wikEdLinkTag--></span><!--wikEdLink/Cat/LinkCross-->';
						break;
					case 'file':
						insertLeft = '</span><!--wikEdFileName/Param/Caption--><span class="wikEdFileTag">';
						insertRight = '</span><!--wikEdFileTag--></span><!--wikEdFile-->';
						break;
					case 'externalText':
						insertRight = '</span><!--wikEdURLText-->';
						break;
					case 'external':
						insertLeft = '<span class="wikEdLinkTag">';
						insertRight = '</span><!--wikEdLinkTag--></span><!--wikEdURL-->';
						break;
					case 'template':
						insertLeft = '</span><!--wikEdTemplName/Param--><span class="wikEdTemplTag">';
						insertRight = '</span><!--wikEdTemplTag--></span><!--wikEdTempl-->';
						break;
					case 'parameter':
					case 'parameterPiped':
						insertLeft = '</span><!--wikEdParamName/Default--><span class="wikEdTemplTag">';
						insertRight = '</span><!--wikEdTemplTag--></span><!--wikEdParam-->';
						break;
					case 'html':
					case 'tr':
					case 'td':
					case 'th':
					case 'col':
					case 'thead':
					case 'tfoot':
					case 'tbody':
					case 'colgroup':
					case 'caption':
					case 'big':
					case 'blockquote':
					case 'center':
					case 'code':
					case 'del':
					case 'div':
					case 'font':
					case 'ins':
					case 'small':
					case 'span':
					case 'strike':
					case 'tt':
					case 'rb':
					case 'rp':
					case 'rt':
					case 'ruby':
					case 'nowiki':
					case 'math':
					case 'noinclude':
					case 'includeonly':
					case 'gallery':
					case 'categorytree':
					case 'charinsert':
					case 'hiero':
					case 'imagemap':
					case 'inputbox':
					case 'poem':
					case 'source':
					case 'syntaxhighlight':
					case 'timeline':
						insertLeft = '<span class="wikEdHtmlTag">';
						pushRight = '</span><!--wikEdHtmlTag--></span><!--wikEdHtml-->';
						break;
					case 'u':
						insertLeft = '</span><!--wikEdIns--><span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTagButtons-->';
						break;
					case 's':
						insertLeft = '</span><!--wikEdDel--><span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTagButtons-->';
						break;
					case 'sub':
						insertLeft = '<span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTagButtons--></span><!--wikEdSubscript-->';
						break;
					case 'sup':
						insertLeft = '<span class="wikEdHtmlTagButtons">';
						pushRight = '</span><!--wikEdHtmlTagButtons--></span><!--wikEdSuperscript-->';
						break;
					case 'p':
						insertLeft = '<span class="wikEdHtmlUnknown" title="' + wikEd.config.text.wikEdErrorHtmlUnknown + '">';
						pushRight = '</span><!--wikEdHtmlUnknown-->';
						break;
					case 'ref':
						insertLeft = '<span class="wikEdHtmlTag">';
						pushRight = '</span><!--wikEdHtmlTag--></span><!--wikEdRef-->';
						break;
					case 'references':
						insertLeft = '<span class="wikEdReferencesTag">';
						pushRight = '</span><!--wikEdReferencesTag--></span><!--wikEdRefList-->';
						break;
					case 'heading':
						insertRight = '</span><!--wikEdHeading/WP-->';
						break;
					case 'table':
						if (parseObj.tableMode == true) {
							insertLeft = '</table><!--wikEdTableMode';
							pushRight = '-->';
						}
						else {
							insertLeft = '<span class="wikEdTableTag">';
							insertRight = '</span><!--wikEdTableTag--></span><!--wikEdTable-->';
						}
						break;
				}
				break;
			case 'block':
				switch (tag) {

// pushRight instead of insertRight if enclosed text can contain other highlighting, e.g. single character highlighting
					case 'linkNamespace':
						insertLeft = '<span class="wikEdLinkNs">';
						pushRight = '</span><!--wikEdLinkNs-->';
						break;
					case 'linkInter':
						insertLeft = '<span class="wikEdLinkInter">';
						pushRight = '</span><!--wikEdLinkInter-->';
						break;
					case 'inlineURL':
						var url = '';
						var regExpMatch;
						if ( (regExpMatch = /\w\S+/.exec(tagMatch)) != null) {
							url = regExpMatch[0];
						}
						insertLeft = '<span class="wikEdURLName" ' + wikEd.HighlightLinkify('', '', url) + '>';
						pushRight = '</span><!--wikEdURLName-->';
						break;
					case 'externalURL':
						insertLeft = '<span class="wikEdURLTarget">';
						pushRight = '</span><!--wikEdURLTarget-->';
						break;
					case 'templateModifier':
						insertLeft = '<span class="wikEdTemplMod">';
						pushRight = '</span><!--wikEdTemplMod-->';
						break;
					case 'templateNamespace':
						insertLeft = '<span class="wikEdTemplNs">';
						pushRight = '</span><!--wikEdTemplNs-->';
						break;
					case 'templateParserFunct':
						insertLeft = '<span class="wikEdParserFunct">';
						pushRight = '</span><!--wikEdParserFunct-->';
						break;
					case 'PMID':
						var idNumber = '';
						var regExpMatch;
						if ( (regExpMatch = /\d+/.exec(tagMatch)) != null) {
							idNumber = regExpMatch[0];
						}
						insertLeft = '<span class="wikEdPMID" ' + wikEd.HighlightLinkify('', '', 'http://www.ncbi.nlm.nih.gov/pubmed/' + idNumber) + '>';
						insertRight = '</span><!--wikEdPMID-->';
						break;
					case 'ISBN':
						var idNumber = '';
						var regExpMatch;
						if ( (regExpMatch = /\d[\s\d\-]+x?/.exec(tagMatch)) != null) {
							idNumber = regExpMatch[0].replace(/\D/g, '');
						}
						insertLeft = '<span class="wikEdISBN" ' + wikEd.HighlightLinkify('', 'Special:BookSources/' + idNumber) + '>';
						pushRight = '</span><!--wikEdISBN-->';
						break;
					case 'RFC':
						var idNumber = '';
						var regExpMatch;
						if ( (regExpMatch = /\d[\s\d\-]+x?/.exec(tagMatch)) != null) {
							idNumber = regExpMatch[0].replace(/\D/g, '');
						}
						insertLeft = '<span class="wikEdISBN" ' + wikEd.HighlightLinkify('', '', 'http://tools.ietf.org/html/rfc' + idNumber) + '>';
						pushRight = '</span><!--wikEdISBN-->';
						break;
					case 'magic':
						insertLeft = '<span class="wikEdMagic">';
						insertRight = '</span><!--wikEdMagic-->';
						break;
					case 'signature':
						var title = wikEd.config.text['wikEdSignature' + tagLength];
						insertLeft = '<span class="wikEdSignature" title="' + title + '">';
						insertRight = '</span><!--wikEdSignature-->';
						break;
					case 'hr':
						pushLeft = '<span class="wikEdHr">';
						pushRight = '</span><!--wikEdHr-->';
						break;
					case 'linkParam':
						insertLeft = '</span><!--wikEdLinkTarget/CatName--><span class="wikEdLinkTag">';
						insertRight = '</span><!--wikEdLinkTag--><span class="wikEdLinkText">';
						break;
					case 'fileParam':

// make text parameters a caption
						var params = '';
						if (pairedTagPos != null) {
							params = obj.html.substring(tagFrom + 1, parseObj.tree[node.parent].pairedTagPos - 1);
						}
						if (/^\s*(thumb|thumbnail|frame|right|left|center|none|\d+px|\d+x\d+px|link\=.*?|upright|border)\s*(\||$)/.test(params) == true) {
							insertLeft = '</span><!--wikEdFileName/Param--><span class="wikEdFileTag">';
							insertRight = '</span><!--wikEdFileTag--><span class="wikEdFileParam">';
						}
						else {
							insertLeft = '</span><!--wikEdFileName/Param--><span class="wikEdFileTag">';
							insertRight = '</span><!--wikEdFileTag--><span class="wikEdFileCaption">';
						}
						break;
					case 'redirect':
						insertLeft = '<span class="wikEdRedir">';
						pushRight = '</span><!--wikEdRedir-->';
						break;
					case 'templateParam':
						insertLeft = '</span><!--wikEdTemplateName/Param--><span class="wikEdTemplTag">';
						pushRight = '</span><!--wikEdTemplTag--><span class="wikEdTemplParam">';
						break;
					case 'parameterDefault':
						insertLeft = '</span><!--wikEdParamName--><span class="wikEdTemplTag">';
						insertRight = '</span><!--wikEdTemplTag--><span class="wikEdParamDefault">';
						break;
					case 'br'://inlineTag class
					case 'html':
					case 'htmlEmpty':
						insertLeft = '<span class="wikEdHtml"><span class="wikEdHtmlTag">';
						pushRight = '</span><!--wikEdHtmlTag--></span><!--wikEdHtml-->';
						break;
					case 'htmlUnknown':
						insertLeft = '<span class="wikEdHtmlUnknown" title="' + wikEd.config.text.wikEdErrorHtmlUnknown + '">';
						pushRight = '</span><!--wikEdHtmlUnknown-->';
						break;
					case 'ref':
						var refName = '';
						var regExpMatch;
						if ( (regExpMatch = /(\bname\s*=\s*('|"))([^\x01]+?)\2/i.exec(tagMatch)) != null) {
							refName = regExpMatch[3];
							wikEd.HighlightBuildTree('refName', 'block', tagFrom + regExpMatch.index + regExpMatch[1].length, regExpMatch[3].length, parseObj);
						}
						else if ( (regExpMatch = /(\bname\s*=\s*)(\w+)/i.exec(tagMatch)) != null) {
							refName = regExpMatch[2];
							wikEd.HighlightBuildTree('refName', 'block', tagFrom + regExpMatch.index + regExpMatch[1].length, regExpMatch[2].length, parseObj);
						}
						if (wikEd.refHide == true) {
							if (refName != '') {
								insertLeft = '<span class="wikEdRefContainer"><button class="wikEdRefButton' + wikEd.referenceArray.length + '" title="' + wikEd.config.text.wikEdRefButtonTooltip + '"></button><!--wikEdRefButton--></span><!--wikEdRefContainer-->';
								wikEd.referenceArray.push( {'text': refName + ' ↑', 'added': false} );
							}
							else {
								insertLeft = '<span class="wikEdRefContainer"><button class="wikEdRefButton" title="' + wikEd.config.text.wikEdRefButtonTooltip + '"></button><!--wikEdRefButton--></span><!--wikEdRefContainer-->';
							}
						}
						insertLeft += '<span class="wikEdRef"><span class="wikEdHtmlTag">';
						pushRight = '</span><!--wikEdHtmlTag--></span><!--wikEdRef-->';
						break;
					case 'references':
						insertLeft = '<span class="wikEdReferences"><span class="wikEdReferencesTag">';
						pushRight = '</span><!--wikEdReferencesTag--></span><!--wikEdReferences-->';
						break;
					case 'pre':
						insertLeft = '<span class="wikEdPre">';
						pushRight = '</span><!--wikEdPre-->';
						break;
					case 'math':
						insertLeft = '<span class="wikEdMath">';
						pushRight = '</span><!--wikEdMath-->';
						break;
					case 'nowiki':
						insertLeft = '<span class="wikEdNowiki">';
						pushRight = '</span><!--wikEdNowiki-->';
						break;
					case 'listTag':
						insertLeft = '<span class="wikEdListTag">';
						insertRight = '</span><!--wikEdListTag-->';
						break;
					case 'preformTag':
						insertLeft = '<span class="wikEdSpaceTag">';
						insertRight = '</span><!--wikEdSpaceTag-->';
						break;
					case 'refName':
						insertLeft = '<span class="wikEdRefName">';
						pushRight = '</span><!--wikEdRefName-->';
						break;
					case 'list':
						pushLeft = '<span class="wikEdList">';
						pushRight = '</span><!--wikEdList-->';
						break;
					case 'preform':
						pushLeft = '<span class="wikEdSpace">';
						pushRight = '</span><!--wikEdSpace-->';
						break;
					case 'caption':
					case 'row':
					case 'header':
					case 'headerParam':
					case 'headerSep':
					case 'cell':
/*
						if (parseObj.tableMode == true) {
							var regExpTable = /\| *((\w+ *= *('|")[^\n'"]*\3 *)*)\|\|/gi;
							regExpTable.lastIndex = tagFrom;
							var regExpMatch;
							if ( (regExpMatch = regExpTable.exec(obj.html) ) != null) {
								if (regExpMatch.index == tagFrom) {
									var params = regExpMatch[1];
									if (params != '') {
										params += ' ';
									}
									insertLeft = '<table ' + params + ' border="1" class="wikEdTableEdit"><!--wikEdTableMode';
									pushRight2 = '-->';
									pushRightPos2 = regExpMatch.index + regExpMatch[0].length;
								}
								else {
									parseObj.tableMode = false;
								}
							}
							else {
								parseObj.tableMode = false;
							}
						}
						if (parseObj.tableMode == false) {
							insertLeft = '<span class="wikEdTable"><span class="wikEdTableTag">';
							insertRight = '</span><!--wikEdTableTag-->';
						}
*/
						break;
					case 'cellParam':
					case 'cellSep':
						insertLeft = '<span class="wikEdTableTag">';
						insertRight = '</span><!--wikEdTableTag-->';
						break;
					case 'colorLight':
						insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsLight">';
						insertRight = '</span><!--wikEdColorsLight-->';
						break;
					case 'colorDark':
						insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsDark">';
						insertRight = '</span><!--wikEdColorsDark-->';
						break;
					case 'colorHex3':
						var regExpMatch = /([0-9a-f])([0-9a-f])([0-9a-f])/i.exec(tagMatch);
						if ( (regExpMatch[1] > 255) || (regExpMatch[2] > 255) || (regExpMatch[3] > 255) ) {
							break;
						}
						var luminance = parseInt(regExpMatch[1], 16) * 16 * 0.299 + parseInt(regExpMatch[2], 16) * 16 * 0.587 + parseInt(regExpMatch[3], 16) * 16  * 0.114;
						if (luminance > 128) {
							insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsLight">';
							insertRight = '</span><!--wikEdColorsLight-->';
						}
						else {
							insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsDark">';
							insertRight = '</span><!--wikEdColorsDark-->';
						}
						break;
					case 'colorHex6':
						var regExpMatch = /([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i.exec(tagMatch);
						if ( (regExpMatch[1] > 255) || (regExpMatch[2] > 255) || (regExpMatch[3] > 255) ) {
							break;
						}
						var luminance = parseInt(regExpMatch[1], 16) * 0.299 + parseInt(regExpMatch[2], 16) * 0.587 + parseInt(regExpMatch[3], 16) * 0.114;
						if (luminance > 128) {
							insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsLight">';
							insertRight = '</span><!--wikEdColorsLight-->';
						}
						else {
							insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsDark">';
							insertRight = '</span><!--wikEdColorsDark-->';
						}
						break;
					case 'colorDec':
						var regExpMatch = /(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(tagMatch);
						if ( (regExpMatch[1] > 255) || (regExpMatch[2] > 255) || (regExpMatch[3] > 255) ) {
							break;
						}
						var luminance = regExpMatch[1] * 0.299 + regExpMatch[2] * 0.587 + regExpMatch[3] * 0.114;
						if (luminance > 128) {
							insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsLight">';
							insertRight = '</span><!--wikEdColorsLight-->';
						}
						else {
							insertLeft = '<span style="background: ' + tagMatch + '" class="wikEdColorsDark">';
							insertRight = '</span><!--wikEdColorsDark-->';
						}
						break;
					case 'ctrl':
						insertLeft = '<span class="wikEdCtrl" title="' + wikEd.controlCharHighlighting[tagMatch.charCodeAt(0).toString()] + '">';
						insertRight = '</span><!--wikEdCtrl-->';
						break;
					case 'char':
						var charName = wikEd.charHighlighting[tagMatch.charCodeAt(0).toString()];
						var charClass = 'wikEd' + charName;
						insertLeft = '<span class="' + charClass + '" title="' + wikEd.config.text[charName] + '">';
						insertRight = '</span><!--' + charClass + '-->';
						break;
					case 'charEntity':
						var regExpMatch = /&(\w+);/i.exec(tagMatch);
						var character = wikEd.charEntitiesByName[ regExpMatch[1] ];
						if (character != null) {
							if (wikEd.refHide == true) {
								insertLeft = '<span class="wikEdCharEntityContainer"><button class="wikEdCharEntityButton' + wikEd.charEntityArray.length + '" title="' + wikEd.config.text.wikEdCharEntityButtonTooltip + '"></button><!--wikEdCharEntityButton--></span><!--wikEdCharEntityContainer-->';
								wikEd.charEntityArray.push( {'text': character, 'added': false} );
							}
							insertLeft += '<span class="wikEdCharEntity">';
							insertRight = '</span><!--wikEdCharEntity-->';
						}
						break;
				}
				break;
			case 'comment':
				insertLeft = '<span class="wikEdComment">' + node.left + '</span><!--wikEdComment-->';
				break;
			case 'keep':
				insertLeft = '<span class="wikEdKeep">' + node.left + '</span><!--wikEdKeep-->';
				break;
			case 'error':
				insertLeft = '<span class="wikEdError" title="' + node.left + '">';
				if (wikEd.config.highlightError == true) {
					insertLeft += '<span class="wikEdHighlightError">' + node.left + '</span><!--wikEdHighlightError-->';
				}
				pushRight = '</span><!--wikEdError-->';
				break;
			case 'note': // for debugging
				insertLeft = '<span class="wikEdParsingNote">' + node.tagLength + '</span><!--wikEdParsingNote-->';
				break;
			case 'root':
				break;
		}

// add left html into existing entry
		if (insertLeft != '') {
			node.left = insertLeft;
			node.index = i;
		}

// add left html as new array element to allow for overlapping highlighting as in hr
		else if (pushLeft != '') {
			parseObj.tree.push( { 'start': tagFrom, 'tagLength': 0, 'left': pushLeft, 'index': i - 0.5 } );
		}

// add right html into existing entry
		if (insertRight != '') {
			node.right = insertRight;
			node.index = i;
		}

// add right html as new array element to allow for overlapping highlighting as in html-like tags and urls
		else if (pushRight != '') {
			parseObj.tree.push( { 'start': tagTo, 'tagLength': 0, 'right': pushRight, 'index': i + 0.5 } );
		}
		if (pushRight2 != '') {
			parseObj.tree.push( { 'start': pushRightPos2, 'tagLength': 0, 'right': pushRight2, 'index': i + 0.5 } );
		}


		from = tagTo;
		i ++;
	}

	return;
};


//
// wikEd.HighlightMergeHtml: merge parse tree highlighting html code with article text
//

wikEd.HighlightMergeHtml = function(parseObj, obj) {

	if (parseObj.tree.length <= 1) {
		return;
	}

// sort parse array by position, length, and index
	parseObj.tree.sort(
		function(a, b) {

// by start position
			if (a.start != b.start) {
				return(a.start - b.start);
			}

// by length
			if (a.tagLength != b.tagLength) {
				return(a.tagLength - b.tagLength);
			}

// by index
			return(a.index - b.index);
		}
	);

// add comments and highlighting
	var from = 0;
	var htmlArray = [];

// cycle through parse array and assemble html array
	for (var i = 0; i < parseObj.tree.length; i ++) {
		var node = parseObj.tree[i];
		var tagFrom = node.start;
		var tagLength = node.tagLength;
		var htmlLeft = node.left;
		var htmlRight = node.right;
		var tagTo = tagFrom + tagLength;

// drop overlapping highlighting //// |- in tables?!
		if (tagFrom < from) {
			continue;
		}

// ignore root
		if (tagFrom == null) {
			continue;
		}

// push leading plain text
		htmlArray.push(obj.html.substring(from, tagFrom));

// push left html
		if (htmlLeft != null) {
			htmlArray.push(htmlLeft);
		}

// push right html
		if (htmlRight != null) {
			htmlArray.push(obj.html.substring(tagFrom, tagTo));
			htmlArray.push(htmlRight);
			from = tagTo;
		}
		else {
			from = tagFrom;
		}
	}
	htmlArray.push(obj.html.substring(from));

// join html array
	obj.html = htmlArray.join('');

// display highlighted html:
// WED(obj.html.replace(/\x00/g, '&lt;').replace(/\x01/g, '&gt;'));

	return;
};


//
// wikEd.HighlightLinkify: prepare the span tag parameters for ctrl-click opening of highlighted links
//

wikEd.HighlightLinkify = function(linkPrefix, linkTitle, linkUrl) {

	if (wikEd.config.linkify != true) {
		return('');
	}
	var linkName = '';
	var subpage = false;

// generate url from interlanguage or namespace prefix and title
	if (linkUrl == null) {

// test for illegal characters
		if ( (/[\{\|\}\[\]<>#]/.test(linkPrefix) == true) || (/[<>]/.test(linkUrl) == true) ) {
			return('');
		}

// remove highlighting code
		linkPrefix = linkPrefix.replace(/<.*?>/g, '');
		linkTitle = linkTitle.replace(/<.*?>/g, '');

// remove control chars
		var regExp = new RegExp('[' + wikEd.controlCharHighlightingStr + '\t\n\r]', 'g');
		linkPrefix = linkPrefix.replace(regExp, '');
		linkTitle = linkTitle.replace(regExp, '');

// fix strange white spaces, leading colons
		linkPrefix = linkPrefix.replace(/\s/g, ' ');
		linkPrefix = linkPrefix.replace(/^ +/, '');
		linkPrefix = linkPrefix.replace(/^:+ *()/, '');
		linkPrefix = linkPrefix.replace(/ +/g, '_');

		linkTitle = linkTitle.replace(/\s/g, ' ');
		linkTitle = linkTitle.replace(/ +$/, '');
		linkTitle = linkTitle.replace(/^:+ *()/, '');
		linkTitle = linkTitle.replace(/ +/g, '_');

		linkName = linkPrefix + linkTitle;

// character accentuation for Esperanto, see [[Help:Special_characters#Esperanto]]
		if (wikEd.wikiGlobals.wgContentLanguage == 'eo') {
			linkTitle = linkTitle.replace(/([cghjsu])(x+)/gi,
				function (p, p1, p2) {
					var accentChar = p1;
					var xString = p2;
					var xLength = xString.length;
					var xCount = Math.floor(xLength / 2);
					if ( (xLength / 2 - xCount) > 0) {
						var pos = 'CGHJSUcghjsu'.indexOf(accentChar);
						accentChar = 'ĈĜĤĴŜŬĉĝĥĵŝŭ'.substr(pos, 1);
						xString = xString.replace(/^x|(x)x/gi, '$1');
					}
					else {
						xString = xString.replace(/(x)x/gi, '$1');
					}
					return(accentChar + xString);
				}
			);
		}

// [[/subpage]] refers to a subpage of the current page, [[#section]] to a section of the current page
		if ( (linkPrefix == '') && ( (linkTitle.indexOf('/') == 0) || (linkTitle.indexOf('#') == 0) ) ) {
			subpage = true;
		}

// Wiktionary differentiates between lower and uppercased titles, interwiki should not be uppercased
		if (subpage == true) {
			linkUrl = linkPrefix + wikEd.pageName + linkTitle;
		}
		else {
			linkUrl = linkPrefix + linkTitle;
		}
		linkUrl = encodeURI(linkUrl);
		linkUrl = linkUrl.replace(/%25(\d\d)/g, '%$1');
		linkUrl = linkUrl.replace(/'/g, '%27');
		linkUrl = linkUrl.replace(/#/g, '%23');
		if (wikEd.config.LinkifyArticlePath != null) {
			linkUrl = wikEd.config.LinkifyArticlePath.replace(/\$1/, linkUrl);
		}
		else if (wikEd.wikiGlobals.wgArticlePath != null) {
			linkUrl = wikEd.wikiGlobals.wgArticlePath.replace(/\$1/, linkUrl);
		}
		else {
			linkUrl = '';
		}
	}

// url provided
	else {

// test for templates
		if (/\{|\}/.test(linkUrl) == true) {
			return('');
		}
		linkName = linkUrl;
		linkUrl = encodeURI(linkUrl);
		linkUrl = linkUrl.replace(/%25(\d\d)/g, '%$1');
		linkUrl = linkUrl.replace(/'/g, '%27');
	}
	var linkPopup = linkName;
	if (subpage == true) {
		linkPopup = wikEd.pageName + linkPopup;
	}
	linkPopup = linkPopup.replace(/</g, '&lt;');
	linkPopup = linkPopup.replace(/>/g, '&gt;');
	linkPopup = linkPopup.replace(/"/g, '&quot;');
	var linkParam = '';
	if (linkUrl != '') {
		var titleClick;
		if (wikEd.platform == 'mac') {
			titleClick = wikEd.config.text.followLinkMac;
		}
		else {
			titleClick = wikEd.config.text.followLink;
		}
		linkParam += 'id="wikEdLinkify' + wikEd.linkifyArray.length + '" title="' + linkPopup + ' ' + titleClick + '"';
		wikEd.linkifyArray.push(linkUrl);
	}
	return(linkParam);
};


//
// wikEd.UpdateTextarea: copy frame content or provided text to textarea
//

wikEd.UpdateTextarea = function(text) {

	var obj = {};
	if (text != null) {
		obj.html = text;
	}

// get frame content, remove dynamically inserted nodes by other scripts
	else {
		wikEd.CleanNodes(wikEd.frameDocument);
		obj.html = wikEd.frameBody.innerHTML;
	}

// remove trailing blanks and newlines at end of text
	obj.html = obj.html.replace(/((<br\b[^>]*>)|\s)+$/g, '');

// remove leading spaces in lines
	obj.html = obj.html.replace(/(<br\b[^>]*>)\n* *()/g, '$1');

// textify so that no html formatting is submitted
	wikEd.Textify(obj);
	obj.plain = obj.plain.replace(/&nbsp;|&#160;|\xa0/g, ' ');
	obj.plain = obj.plain.replace(/&lt;/g, '<');
	obj.plain = obj.plain.replace(/&gt;/g, '>');
	obj.plain = obj.plain.replace(/&amp;/g, '&');

// copy to textarea
	wikEd.textarea.value = obj.plain;

// remember frame scroll position
	wikEd.frameScrollTop = wikEd.frameBody.scrollTop;

	return;
};


//
// wikEd.UpdateFrame: copy textarea content or provided html to frame
//

wikEd.UpdateFrame = function(html) {

// get textarea content
	var obj = {};
	if (html != null) {
		obj.html = html;
	}
	else {
		obj.html = wikEd.textarea.value;
		obj.html = obj.html.replace(/&/g, '&amp;');
		obj.html = obj.html.replace(/>/g, '&gt;');
		obj.html = obj.html.replace(/</g, '&lt;');
	}

// Opera 0.9.51
	obj.html = obj.html.replace(/\r\n|\n\r|\r/g, '\n');

// highlight the syntax
	if (wikEd.highlightSyntax == true) {
		obj.whole = true;
		wikEd.HighlightSyntax(obj);
	}

// at least display tabs
	else {
		obj.html = obj.html.replace(/(\t)/g, '<span class="wikEdTabPlain">$1</span><!--wikEdTabPlain-->');
	}

// multiple blanks to blank-&nbsp;
	obj.html = obj.html.replace(/(^|\n) /g, '$1&nbsp;');
	obj.html = obj.html.replace(/ (\n|$)/g, '&nbsp;$1');
	obj.html = obj.html.replace(/ {2}/g, '&nbsp; ');
	obj.html = obj.html.replace(/ {2}/g, '&nbsp; ');

// newlines to <br>
	obj.html = obj.html.replace(/\n/g, '<br>');

// select the whole text after replacing the whole text and scroll to same height
	if (wikEd.msie == true) {

	}
	else {
		obj.sel = wikEd.GetSelection();
		wikEd.RemoveAllRanges(obj.sel);
	}

// insert content into empty frame
	if ( (wikEd.frameBody.firstChild == null) || (/^<br[^>]*>\s*$/.test(wikEd.frameBody.innerHTML) == true) ) {
		wikEd.frameBody.innerHTML = obj.html;
	}

// insert content into frame, preserve history
	else {
		var range = wikEd.frameDocument.createRange();
		range.setStartBefore(wikEd.frameBody.firstChild);
		range.setEndAfter(wikEd.frameBody.lastChild);
		obj.sel.addRange(range);

// replace the frame content with the new text, do not scroll
		var scrollOffset = window.pageYOffset || document.body.scrollTop;
		if (obj.html != '') {
			wikEd.FrameExecCommand('inserthtml', obj.html);
		}
		else {
			wikEd.FrameExecCommand('delete');
		}
		window.scroll(0, scrollOffset);
		wikEd.RemoveAllRanges(obj.sel);

// scroll to previous position
		if (wikEd.frameScrollTop != null) {
			wikEd.frameBody.scrollTop = wikEd.frameScrollTop;
		}
	}
	wikEd.frameScrollTop = null;

// add event handlers and labels
	if (wikEd.highlightSyntax == true) {

// name ref and template buttons
		wikEd.HighlightNamedHideButtons();

// add event handlers to unhide refs and templates
		wikEd.HideAddHandlers();

// add event handlers to make highlighted frame links ctrl-clickable
		wikEd.LinkifyAddHandlers();
	}

	return;
};


//
// wikEd.KeyHandler: event handler for keydown events in main document and frame
//   detects emulated accesskey and traps enter in find/replace input elements
//

wikEd.KeyHandler = function(event) {

// event compatibility fixes
	event = wikEd.EventWrapper(event, this);
	if (event == null) {
		return;
	}

	if (wikEd.useWikEd == true) {

// trap enter in find/replace input elements
		if ( (event.type == 'keydown') && (event.keyCode == 13) ) {
			if (event.target.id == 'wikEdFindText') {
				event.preventDefault();
				event.stopPropagation();
				if (event.shiftKey == true) {
					wikEd.EditButton(null, 'wikEdFindPrev');
				}
				else if (event.ctrlKey == true) {
					wikEd.EditButton(null, 'wikEdFindAll');
				}
				else {
					wikEd.EditButton(null, 'wikEdFindNext');
				}
			}
			else if (event.target.id == 'wikEdReplaceText') {
				event.preventDefault();
				event.stopPropagation();
				if (event.shiftKey == true) {
					wikEd.EditButton(null, 'wikEdReplacePrev');
				}
				else if (event.ctrlKey == true) {
					wikEd.EditButton(null, 'wikEdReplaceAll');
				}
				else {
					wikEd.EditButton(null, 'wikEdReplaceNext');
				}
			}
		}

// detect emulated accesskeys
		else if ( (event.shiftKey == true) && (event.ctrlKey == false) && (event.altKey == true) && (event.metaKey == false) ) {

// get wikEd button id from keycode
			var buttonId = wikEd.buttonKeyCode[event.keyCode];
			if (buttonId != null) {
				event.preventDefault();
				event.stopPropagation();

// execute the button click handler code
				var obj = document.getElementById(buttonId);
				objId = obj.id;
				eval(wikEd.editButtonHandler[buttonId]);
			}
		}
	}
	return;
};


//
// wikEd.FrameExecCommand: wrapper for execCommand method
//

wikEd.FrameExecCommand = function(command, option) {

	if (typeof(wikEd.frameDocument.execCommand) == 'function') {
		wikEd.frameDocument.execCommand(command, false, option);
	}

// MSIE workaround, breaks the undo history
	else if (command == 'inserthtml') {
		wikEd.frameDocument.selection.createRange().pasteHTML(option);
	}
	return;
};


//
// wikEd.FindAhead: find-as-you-type, event handler for find field, supports insensitive and regexp settings
//

wikEd.FindAhead = function() {

	if (wikEd.GetAttribute(wikEd.findAhead, 'checked') == 'true') {

// get the find text
		var findText = wikEd.findText.value;
		if (findText == '') {
			return;
		}

// remember input field selection
		var findTextSelectionStart = wikEd.findText.selectionStart;
		var findTextSelectionEnd = wikEd.findText.selectionEnd;

// remember frame selection
		var sel = wikEd.GetSelection();
		var range = sel.getRangeAt(sel.rangeCount - 1).cloneRange();
		var rangeClone = range.cloneRange();
		var scrollTop = wikEd.frameBody.scrollTop;

// collapse selection to the left
		wikEd.RemoveAllRanges(sel);
		range.collapse(true);
		range = sel.addRange(range);

// create obj for regexp search
		var obj = {};

// get the replace text
		var replaceText = wikEd.inputElement.replace.value;

// get insensitive and regexp button states
		var regExpChecked = wikEd.GetAttribute(wikEd.regExp, 'checked');
		var caseSensitiveChecked = wikEd.GetAttribute(wikEd.caseSensitive, 'checked');

// get case sensitive setting
		var caseSensitive = false;
		if (caseSensitiveChecked == 'true') {
			caseSensitive = true;
		}

// get regexp setting
		var useRegExp = false;
		if (regExpChecked == 'true') {
			useRegExp = true;
		}

// parameters: obj, findText, caseSensitive, backwards, wrap, useRegExp
		found = wikEd.Find(obj, findText, caseSensitive, false, true, useRegExp);

// restore original frame selection
		if (found == false) {
			wikEd.frameBody.scrollTop = scrollTop;
			wikEd.RemoveAllRanges(sel);
			sel.addRange(rangeClone);
		}
		else {
			wikEd.RemoveAllRanges(obj.sel);
			obj.sel.addRange(obj.changed.range);

// scroll to selection
			wikEd.ScrollToSelection();
		}
	}

// restore input field selection (needed for FF 3.6)
	wikEd.findText.select();
	wikEd.findText.setSelectionRange(findTextSelectionStart, findTextSelectionEnd);

	return;
};


//
// wikEd.MainSwitch: click handler for program logo
//

wikEd.MainSwitch = function() {

// disable function if browser is incompatible
	if (wikEd.browserNotSupported == true) {
		return;
	}

// enable wikEd
	if (wikEd.disabled == true) {
		wikEd.disabled = false;
		wikEd.SetPersistent('wikEdDisabled', '0', 0, '/');

// turn rich text frame on
		if (wikEd.turnedOn == false) {

// setup wikEd
			wikEd.TurnOn(false);
		}
		else {
			wikEd.SetLogo();
			var useWikEd = false;
			if (wikEd.GetAttribute(document.getElementById('wikEdUseWikEd'), 'checked') == 'true') {
				useWikEd = true;
			}
			wikEd.SetEditArea(useWikEd);
			wikEd.useWikEd = useWikEd;
			if (wikEd.useWikEd == true) {
				wikEd.UpdateFrame();
			}
			wikEd.buttonBarWrapper.style.display = 'block';
			wikEd.buttonBarPreview.style.display = 'block';
			if (wikEd.buttonBarJump != null) {
				wikEd.buttonBarJump.style.display = 'block';
			}

// run scheduled custom functions
			wikEd.ExecuteHook(wikEd.config.onHook);
		}
	}

// disable wikEd
	else {
		wikEd.SetPersistent('wikEdDisabled', '1', 0, '/');
		if (wikEd.turnedOn == false) {
			wikEd.useWikEd = false;
			wikEd.disabled = true;
			wikEd.SetLogo();
		}
		else {
			if (wikEd.fullScreenMode == true) {
				wikEd.FullScreen(false);
			}

// turn classic textarea on
			if (wikEd.useWikEd == true) {
				wikEd.UpdateTextarea();
			}
			wikEd.SetEditArea(false);

// reset textarea dimensions
			wikEd.textarea.style.height = (wikEd.textareaOffsetHeightInitial - wikEd.frameBorderHeight) + 'px';
			wikEd.textarea.style.width = '100%';

			wikEd.frameHeight = (wikEd.textareaOffsetHeightInitial - wikEd.frameBorderHeight) + 'px';
			wikEd.frameWidth = (wikEd.editorWrapper.clientWidth - wikEd.frameBorderWidth) + 'px';
			wikEd.frame.style.height = wikEd.frameHeight;
			wikEd.frame.style.width = wikEd.frameWidth;

			wikEd.buttonBarWrapper.style.display = 'none';
			wikEd.buttonBarPreview.style.display = 'none';
			wikEd.localPrevWrapper.style.display = 'none';
			wikEd.previewBox.style.height = 'auto';
			if (wikEd.buttonBarJump != null) {
				wikEd.buttonBarJump.style.display = 'none';
			}

			wikEd.useWikEd = false;
			wikEd.disabled = true;
			wikEd.SetLogo();

// run scheduled custom functions
			wikEd.ExecuteHook(wikEd.config.offHook);
		}
	}
	return;
};


//
// wikEd.FullScreen: change to fullscreen edit area or back to normal view
//

wikEd.FullScreen = function(fullscreen, notFrame) {

// hide or show elements
	var displayStyle;
	if (fullscreen == true) {
		displayStyle = 'none';
	}
	else {
		displayStyle = 'block';
	}

// elements above input wrapper
	var node = document.getElementById('editform').previousSibling;
	while (node != null) {
		if ( (node.nodeName == 'DIV') || (node.nodeName == 'H3') ) {
			node.style.display = displayStyle;
		}
		node = node.previousSibling;
	}
	document.getElementsByTagName('h1')[0].style.display = displayStyle;

// divs below input wrapper
	var node = wikEd.inputWrapper.nextSibling;
	while (node != null) {
		if (node.nodeName == 'DIV') {
			node.style.display = displayStyle;
		}
		node = node.nextSibling;
	}

// divs below input wrapper, some levels up
	var node = document.getElementById('column-one');
	while (node != null) {
		if (node.nodeName == 'DIV') {
			node.style.display = displayStyle;
		}
		node = node.nextSibling;
	}

// insert wrapper
	document.getElementById('wikEdInsertWrapper').style.display = displayStyle;

// change styles
	if (fullscreen == true) {
		if (notFrame != true) {
			wikEd.inputWrapper.className = 'wikEdInputWrapperFull';
		}
		wikEd.buttonBarPreview.className = 'wikEdButtonBarPreviewFull';
	}
	else {
		if (notFrame != true) {
			wikEd.inputWrapper.className = 'wikEdInputWrapper';
		}
		wikEd.buttonBarPreview.className = 'wikEdButtonBarPreview';
	}

// resize the frame
	if (fullscreen == true) {

// end frame resizing
		wikEd.RemoveEventListener(wikEd.frameDocument, 'mouseup', wikEd.ResizeStopHandler, true);
		wikEd.RemoveEventListener(document, 'mouseup', wikEd.ResizeStopHandler, true);
		wikEd.RemoveEventListener(wikEd.frameDocument, 'mousemove', wikEd.ResizeDragHandlerFrame, true);
		wikEd.RemoveEventListener(document, 'mousemove', wikEd.ResizeDragHandlerDocument, true);
		wikEd.resizeFrameMouseOverGrip = false;
		wikEd.RemoveEventListener(wikEd.frameDocument, 'mousedown', wikEd.ResizeStartHandler, true);
		wikEd.frameBody.style.cursor = 'auto';
		wikEd.resizeFrameActive = false;

		var consoleTop = wikEd.GetOffsetTop(wikEd.consoleWrapper);
		var consoleHeight = wikEd.consoleWrapper.offsetHeight;
		var frameHeight = wikEd.frame.offsetHeight;
		var windowHeight = wikEd.GetWindowInnerHeight();

		wikEd.frame.style.height = (frameHeight + (windowHeight - (consoleTop + consoleHeight) ) - 2) + 'px';
		wikEd.frame.style.width = (wikEd.editorWrapper.clientWidth - wikEd.frameBorderWidth) + 'px';
	}
	else {
		if (wikEd.frameHeight == 0) {
			wikEd.frameHeight = (wikEd.textareaOffsetHeightInitial - wikEd.frameBorderHeight) + 'px';
			wikEd.frameWidth = (wikEd.editorWrapper.clientWidth - wikEd.frameBorderWidth) + 'px';
		}
		wikEd.frame.style.height = wikEd.frameHeight;
		wikEd.frame.style.width = wikEd.frameWidth;
	}

// scroll to edit-frame
	if (fullscreen == false) {
		window.scroll(0, wikEd.GetOffsetTop(wikEd.inputWrapper) - 2);
	}

// set the fullscreen button state
	wikEd.Button(document.getElementById('wikEdFullScreen'), 'wikEdFullScreen', null, fullscreen);

// grey out or re-activate scroll-to buttons
	var hideButtonClass;
	if (fullscreen == true) {
		hideButtonClass = 'wikEdButtonInactive';
	}
	else {
		hideButtonClass = 'wikEdButton';
	}
	document.getElementById('wikEdScrollToPreview').className = hideButtonClass;
	document.getElementById('wikEdScrollToPreview2').className = hideButtonClass;
	document.getElementById('wikEdScrollToEdit').className = hideButtonClass;
	document.getElementById('wikEdScrollToEdit2').className = hideButtonClass;

// resize the summary field
	wikEd.ResizeSummary();

	wikEd.fullScreenMode = fullscreen;

	return;
};


//
// wikEd.ResizeSummary: recalculate the summary width after resizing the window
//

wikEd.ResizeSummary = function() {

// check if combo field exists
	if (wikEd.summarySelect == null) {
		return;
	}

	wikEd.summaryText.style.width = '';
	wikEd.summarySelect.style.width = '';

	wikEd.summaryTextWidth = wikEd.summaryWrapper.clientWidth - ( wikEd.GetOffsetLeft(wikEd.summaryText) - wikEd.GetOffsetLeft(wikEd.summaryWrapper) );
	if (wikEd.summaryTextWidth < 150) {
		wikEd.summaryTextWidth = 150;
	}
	wikEd.summaryText.style.width = wikEd.summaryTextWidth + 'px';
	wikEd.ResizeComboInput('summary');
	return;
};


//
// wikEd.ResizeComboInput: set the size of the background select boxes so that the button is visible
//   calculates the select button width as the difference between select and option width
//   adjusts widths so that only the select button is visible behind the input field
//

wikEd.ResizeComboInput = function(field) {

// check if combo field exists
	if (wikEd.selectElement[field] == null) {
		return;
	}

// detect browser for MS IE fixes
	var standardBrowser = true;
	if (wikEd.selectElement[field].options.offsetWidth != null ) {
		standardBrowser = false;
	}

// set select height and top
	if (standardBrowser == false) {
		wikEd.selectElement[field].style.height = (wikEd.inputElement[field].clientHeight + 6) + 'px';
		wikEd.selectElement[field].style.top = '3px';
		wikEd.inputElement[field].style.top = '3px';
	}

// add a dummy option if no option exists yet
	var dummy;
	var testOption = 1;
	if (standardBrowser == true) {
		if (wikEd.selectElement[field].options.length == 0) {
			testOption = 0;
			wikEd.selectElement[field].options[0] = new Option('');
			dummy = true;
		}
	}

// set option widths to 0
	if (standardBrowser == true) {
		for (var i = 0; i < wikEd.selectElement[field].options.length; i ++) {
			wikEd.selectElement[field].options[i].style.width = '0';
		}
	}

// get input width
	var inputBorder = (wikEd.inputElement[field].offsetWidth - wikEd.inputElement[field].clientWidth);
	var inputWidthInner = wikEd.inputElement[field].clientWidth;
	var inputWidthOuter = wikEd.inputElement[field].offsetWidth;

// get select width
	var selectWidthInner = wikEd.selectElement[field].clientWidth;
	var selectWidthOuter = wikEd.selectElement[field].offsetWidth;

// get option width and calculate button width
	var optionWidthInner;
	var buttonWidth;
	if (standardBrowser == true) {

// Firefox < 3.0
		if ( typeof(wikEd.selectElement[field].options[testOption].clientLeft) == 'undefined' ) {
			optionWidthInner = wikEd.selectElement[field].options[testOption].clientWidth;
			buttonWidth = selectWidthInner - optionWidthInner - 6;
		}

// Firefox >= 3.0
		else {
			optionWidthInner = wikEd.selectElement[field].options[testOption].clientWidth;
			buttonWidth = selectWidthInner - optionWidthInner;
		}
	}
	else {
		buttonWidth = selectWidthOuter - selectWidthInner - 4;
	}

// for long fields shorten input
	if (inputWidthOuter + buttonWidth > 150) {
		wikEd.inputElement[field].style.width = (inputWidthInner - inputBorder - buttonWidth) + 'px';
		wikEd.selectElement[field].style.width = (inputWidthInner) + 'px';
	}

// otherwise increase select width
	else {
		wikEd.selectElement[field].style.width = (inputWidthOuter + buttonWidth) + 'px';
	}

// delete dummy option
	if (dummy == true) {
		wikEd.selectElement[field].options[0] = null;
	}

// set option widths to auto
	if (standardBrowser == true) {
		for (var i = 0; i < wikEd.selectElement[field].options.length; i ++) {
			wikEd.selectElement[field].options[i].style.width = 'auto';
		}
	}
	return;
};


//
// wikEd.ChangeComboInput: sets the input value to selected option; onchange event handler for select boxes
//

wikEd.ChangeComboInput = function(field) {

// get selection index (-1 for unselected)
	var selected = wikEd.selectElement[field].selectedIndex;
	if (selected >= 0) {
		wikEd.selectElement[field].selectedIndex = -1;

// get selected option
		var option = wikEd.selectElement[field].options[selected];
		if (option.text != '') {

// jump to heading
			if ( (field == 'find') && (/^=.*?=$/.test(option.value) == true) ) {
				var obj = {};
				var findText = option.value.replace(/([\\^$*+?.()\[\]{}:=!|,\-])/g, '\\$1');
				findText = '^' + findText + '$';

// find and select heading text
				var found = wikEd.Find(obj, findText, true, false, true, true);
				wikEd.RemoveAllRanges(obj.sel);
				obj.sel.addRange(obj.changed.range);

// and scroll it into the viewport
				wikEd.ScrollToSelection();
				return;
			}

// update input field
			else {

// add a tag to the summary box
				if (field == 'summary') {
					wikEd.inputElement[field].value = wikEd.AppendToSummary(wikEd.inputElement[field].value, option.text);
				}

// add case and regexp checkboxes to find / replace fields
				else if (option.value == 'setcheck') {
					wikEd.Button(document.getElementById('wikEdCaseSensitive'), 'wikEdCaseSensitive', null, (option.text.charAt(0) == wikEd.checkMarker[true]) );
					wikEd.Button(document.getElementById('wikEdRegExp'), 'wikEdRegExp', null, (option.text.charAt(1) == wikEd.checkMarker[true]) );
					wikEd.inputElement[field].value = option.text.substr(3);
				}

// add option text
				else {
					wikEd.inputElement[field].value = option.text;
				}

// find the new text
				if ( (field == 'find') && (wikEd.GetAttribute(wikEd.findAhead, 'checked') == 'true') ) {
					wikEd.FindAhead();
				}
			}
		}
	}
	wikEd.inputElement[field].focus();

	return;
};


//
// wikEd.AppendToSummary: append a phrase to the summary text
//

wikEd.AppendToSummary = function(summary, append) {

	summary = summary.replace(/^[, ]+/, '');
	summary = summary.replace(/[, ]+$/, '');
	if (summary != '') {
		if (summary.match(/ \*\/$/) != null) {
			summary += ' ';
		}
		else if (summary.match(/[\.\;\:]$/) != null) {
			summary += ' ';
		}
		else {
			var regExp = new RegExp('^[' + wikEd.letters + '_()"\'+\\-]', '');
			if (summary.match(regExp) == null) {
				summary += ' ';
			}
			else {
				summary += ', ';
			}
		}
	}
	summary += append;

	return(summary);
};


//
// wikEd.AddToHistory: add an input value to the saved history
//

wikEd.AddToHistory = function(field) {

	if (wikEd.inputElement[field].value != '') {

// load history from saved settings
		wikEd.LoadHistoryFromSettings(field);

// add current value to history
		wikEd.fieldHist[field].unshift(wikEd.inputElement[field].value);

// add case and regexp checkboxes to find / replace value
		if ( (field == 'find') || (field == 'replace') ) {
			wikEd.fieldHist[field][0] =
				wikEd.checkMarker[ (wikEd.GetAttribute(wikEd.caseSensitive, 'checked') == 'true') ] +
				wikEd.checkMarker[ (wikEd.GetAttribute(wikEd.regExp, 'checked') == 'true') ] +
				' ' + wikEd.fieldHist[field][0];
		}

// remove paragraph names from summary
		if (field == 'summary') {
			wikEd.fieldHist[field][0] = wikEd.fieldHist[field][0].replace(/^\/\* .*? \*\/ *()/, '');
		}

// remove multiple old copies from history
		var i = 1;
		while (i < wikEd.fieldHist[field].length) {
			if (wikEd.fieldHist[field][i] == wikEd.fieldHist[field][0]) {
				wikEd.fieldHist[field].splice(i, 1);
			}
			else {
				i ++;
			}
		}

// remove new value if it is a preset value
		if (wikEd.config.comboPresetOptions[field] != null) {
			var i = 0;
			while (i < wikEd.config.comboPresetOptions[field].length) {
				if (wikEd.config.comboPresetOptions[field][i] == wikEd.fieldHist[field][0]) {
					wikEd.fieldHist[field].shift();
					break;
				}
				else {
					i ++;
				}
			}
		}

// cut history number to maximal history length
		wikEd.fieldHist[field] = wikEd.fieldHist[field].slice(0, wikEd.config.historyLength[field]);

// save history to settings
		if (wikEd.fieldHist[field][0] != '') {
			wikEd.SaveHistoryToSetting(field);
		}
	}
	return;
};


//
// wikEd.SetComboOptions: generate the select options from saved history; onfocus handler for select box
//

wikEd.SetComboOptions = function(field) {

// load history from saved settings
	wikEd.LoadHistoryFromSettings(field);

	var option = {};
	var selectedOption = null;

// delete options
	var options = wikEd.selectElement[field].options;
	for (var i = 0; i < options.length; i ++) {
		wikEd.selectElement[field].remove(i);
	}

// delete optgroup
	option = document.getElementById(field + 'Optgroup');
	if (option != null) {
		wikEd.selectElement[field].removeChild(option);
	}

// workaround for onchange not firing when selecting first option from unselected dropdown
	option = document.createElement('option');
	option.style.display = 'none';
	j = 0;
	wikEd.selectElement[field].options[j++] = option;

// add history entries
	for (var i = 0; i < wikEd.fieldHist[field].length; i ++) {
		if (wikEd.fieldHist[field][i] != null) {
			if (wikEd.fieldHist[field][i] == wikEd.inputElement[field].value) {
				selectedOption = j;
			}
			option = document.createElement('option');

// replace spaces with nbsp to allow for multiple, leading, and trailing spaces
			option.text = wikEd.fieldHist[field][i].replace(/ /g, '\xa0');
			if ( (field == 'find') || (field == 'replace') ) {
				option.value = 'setcheck';
			}
			wikEd.selectElement[field].options[j++] = option;
		}
	}

// add preset entries
	var startPreset = 0;
	if (wikEd.config.comboPresetOptions[field] != null) {
		startPreset = j;
		for (var i = 0; i < wikEd.config.comboPresetOptions[field].length; i ++) {
			if (wikEd.config.comboPresetOptions[field][i] != null) {

// replace spaces with nbsp to allow for multiple, leading, and trailing spaces
				wikEd.config.comboPresetOptions[field][i] = wikEd.config.comboPresetOptions[field][i].replace(/ /g, '\xa0');

// select a dropdown value
				if (wikEd.config.comboPresetOptions[field][i] == wikEd.inputElement[field].value) {
					selectedOption = j;
				}

				option = document.createElement('option');
				option.text = wikEd.config.comboPresetOptions[field][i].replace(/ /g, '\xa0');
				if (field == 'summary') {
					option.text = option.text.replace(/\{wikEdUsing\}/g, wikEd.config.summaryUsing);
				}
				wikEd.selectElement[field].options[j++] = option;
			}
		}
	}

// set the selection
	wikEd.selectElement[field].selectedIndex = selectedOption;

// add a blank preset separator
	if ( (startPreset > 1) && (startPreset < j) ) {
		option = document.createElement('optgroup');
		option.label = '\xa0';
		option.id = field + 'Optgroup';
		wikEd.selectElement[field].insertBefore(option, wikEd.selectElement[field].options[startPreset]);
	}

// add the TOC jumper to the find field
	var startTOC = 0;
	if (field == 'find') {
		startTOC = j;

// get the whole plain text
		var plain = wikEd.frameBody.innerHTML;
		plain = plain.replace(/<br\b[^>]*>/g, '\n');
		plain = plain.replace(/<.*?>/g, '');
		plain = plain.replace(/&nbsp;/g, '\xa0');
		plain = plain.replace(/&gt;/g, '>');
		plain = plain.replace(/&lt;/g, '<');
		plain = plain.replace(/&amp;/g, '&');

// cycle through the headings
		var heading = plain.match(/(^|\n)=+.+?=+[^\n=]*[ =\t]*(?=(\n|$))/g);
		if (heading != null) {
			for (var i = 0; i < heading.length; i ++) {
				var headingMatch = heading[i].match(/\n?((=+) *(.+?)( *\2))/);
				var headingIndent = headingMatch[2];
				headingIndent = headingIndent.replace(/^=/g, '');
				headingIndent = headingIndent.replace(/\=/g, '\xa0');

// add headings to the select element
				option = document.createElement('option');
				option.text = '\u21d2' + headingIndent + headingMatch[3];
				option.value = headingMatch[1];
				wikEd.selectElement[field].options[j++] = option;
			}
		}
	}

// add a blank TOC separator
	if ( (startTOC > 1) && (startTOC < j) ) {
		option = document.createElement('optgroup');
		option.label = '\xa0';
		option.id = field + 'Optgroup';
		wikEd.selectElement[field].insertBefore(option, wikEd.selectElement[field].options[startTOC]);
	}

	return;
};


//
// wikEd.ClearHistory: clear the history of combo input fields
//

wikEd.ClearHistory = function(field) {

	wikEd.SetPersistent(wikEd.savedName[field], '', 0, '/');
	wikEd.SetComboOptions(field);
	return;
};


//
// wikEd.LoadHistoryFromSettings: get the input box history from the respective saved settings
//

wikEd.LoadHistoryFromSettings = function(field) {

	var setting = wikEd.GetPersistent(wikEd.savedName[field]);
	if ( (setting != '') && (setting != null) ) {
		setting = decodeURIComponent(setting);
		wikEd.fieldHist[field] = setting.split('\n');
	}
	else {
		wikEd.fieldHist[field] = [];
	}
	return;
};


//
// wikEd.SaveHistoryToSetting: save the input box history to the respective saved settings
//

wikEd.SaveHistoryToSetting = function(field) {

	var setting = '';
	setting = wikEd.fieldHist[field].join('\n');
	setting = setting.replace(/\n$/, '');
	setting = encodeURIComponent(setting);
	wikEd.SetPersistent(wikEd.savedName[field], setting, 0, '/');
	return;
};


//
// wikEd.GetSelection: cross-browser method to get the current iframe selection
//

wikEd.GetSelection = function() {

// standard
	var sel;
	if (typeof(wikEd.frameWindow.getSelection) == 'function') {
		sel = wikEd.frameWindow.getSelection();
	}

// MS IE compatibility
	else if (typeof(wikEd.frameDocument.selection) == 'object') {
		sel = wikEd.frameDocument.selection;
	}

// make sure there is at least an empty range
	if (sel.rangeCount == 0) {
		sel.collapse(wikEd.frameBody, 0);
	}

	return(sel);
};


//
// wikEd.ClearSelection: cross-browser method to clear the currently selected text
//

wikEd.RemoveAllRanges = function(sel) {

	if (typeof(sel.removeAllRanges) == 'function') {
		sel.removeAllRanges();
	}

// MS IE compatibility
	else if (typeof(sel.empty) == 'function') {
		sel.empty();
	}
	return;
};


//
// wikEd.SetRange: set a range, control for non-text nodes (Opera 10.50 beta bug)
//

wikEd.SetRange = function(range, startNode, startOffset, endNode, endOffset) {

	wikEd.SetRangeStart(range, startNode, startOffset);
	wikEd.SetRangeEnd(range, endNode, endOffset);
	return;
};


//
// wikEd.SetRangeStart: set range start
//

wikEd.SetRangeStart = function(range, startNode, startOffset) {

	if ( (startNode.childNodes.length > 0) && (startOffset < startNode.childNodes.length) ) {
		startNode = startNode.childNodes.item(startOffset);
		startOffset = 0;
	}
	if (startNode.nodeName == '#text') {
		range.setStart(startNode, startOffset);
	}
	else {
		range.setStartAfter(startNode);
	}
	return;
};


//
// wikEd.SetRangeEnd: set range end
//

wikEd.SetRangeEnd = function(range, endNode, endOffset) {

	if ( (endNode.childNodes.length > 0) && (endOffset < endNode.childNodes.length) ) {
		endNode = endNode.childNodes.item(endOffset);
		endOffset = 0;
	}
	if (endNode.nodeName == '#text') {
		range.setEnd(endNode, endOffset);
	}
	else {
		range.setEndBefore(endNode);
	}
	return;
};


//
// wikEd.GetSavedSetting: get a wikEd setting
//

wikEd.GetSavedSetting = function(settingName, preset) {

	var setting = wikEd.GetPersistent(settingName);
	if (setting == '') {
		setting = preset;
	}
	else if (setting == '1') {
		setting = true;
	}
	else {
		setting = false;
	}
	return(setting);
};


//
// wikEd.GetPersistent: get a cookie or a Greasemonkey persistent value (code copied to wikEdDiff.js)
//

wikEd.GetPersistent = function(name) {

	var getStr = '';

// check for web storage
	if ( (wikEdTypeofLocalStorage == 'object') || (wikEd.wikiGlobals.wikEdTypeofLocalStorage == 'object') ) {
		wikEd.webStorage = true;
	}

// get a value from web storage
	if (wikEd.webStorage == true) {
		getStr = window.localStorage.getItem(name);
	}

// get a Greasemonkey persistent value
	else if (wikEd.greasemonkey == true) {
		getStr = GM_getValue(name, '');
	}

// get a cookie value
	else {
		getStr = wikEd.GetCookie(name);
	}
	return(getStr);
};


//
// wikEd.SetPersistent: set a cookie or a Greasemonkey persistent value, deletes the value for expire = -1
//

wikEd.SetPersistent = function(name, value, expires, path, domain, secure) {

// check for web storage
	if ( (wikEdTypeofLocalStorage == 'object') || (wikEd.wikiGlobals.wikEdTypeofLocalStorage == 'object') ) {
		wikEd.webStorage = true;
	}

// set a value in web storage
	if (wikEd.webStorage == true) {
		if (expires == -1) {
			value = '';
		}
		window.localStorage.setItem(name, value);
	}

// set a Greasemonkey persistent value
	else if (wikEd.greasemonkey == true) {
		if (expires == -1) {
			value = '';
		}

// see http://wiki.greasespot.net/Greasemonkey_access_violation
		setTimeout(function() {
			GM_setValue(name, value);
		}, 0);
	}

// set a cookie value
	else {
		wikEd.SetCookie(name, value, expires, path, domain, secure);
	}
	return;
};


//
// wikEd.GetCookie: get a cookie (code copied to wikEdDiff.js)
//

wikEd.GetCookie = function(cookieName) {

	var cookie = ' ' + document.cookie;
	var search = ' ' + cookieName + '=';
	var cookieValue = '';
	var offset = 0;
	var end = 0;
	offset = cookie.indexOf(search);
	if (offset != -1) {
		offset += search.length;
		end = cookie.indexOf(';', offset);
		if (end == -1) {
			end = cookie.length;
		}
		cookieValue = cookie.substring(offset, end);
		cookieValue = cookieValue.replace(/\\+/g, ' ');
		cookieValue = decodeURIComponent(cookieValue);
	}
	return(cookieValue);
};


//
// wikEd.SetCookie: set a cookie, deletes a cookie for expire = -1
//

wikEd.SetCookie = function(name, value, expires, path, domain, secure) {

	var cookie = name + '=' + encodeURIComponent(value);

	if (expires != null) {

// generate a date 1 hour ago to delete the cookie
		if (expires == -1) {
			var cookieExpire = new Date();
			expires = cookieExpire.setTime(cookieExpire.getTime() - 60 * 60 * 1000);
			expires = cookieExpire.toUTCString();
		}

// get date from expiration preset
		else if (expires == 0) {
			var cookieExpire = new Date();
			expires = cookieExpire.setTime(cookieExpire.getTime() + wikEd.config.cookieExpireSec * 1000);
			expires = cookieExpire.toUTCString();
		}
		cookie += '; expires=' + expires;
	}
	if (path != null) {
		cookie += '; path=' + path;
	}
	if (domain != null)  {
		cookie += '; domain=' + domain;
	}
	if (secure != null) {
		cookie += '; secure';
	}
	document.cookie = cookie;
	return;
};


//
// wikEd.GetOffsetTop: get element offset relative to window top (code copied to wikEdDiff.js)
//

wikEd.GetOffsetTop = function(element) {
	var offset = 0;
	do {
		offset += element.offsetTop;
	} while ( (element = element.offsetParent) != null );
	return(offset);
};


//
// wikEd.GetOffsetLeft: get element offset relative to left window border
//

wikEd.GetOffsetLeft = function(element) {
	var offset = 0;
	do {
		offset += element.offsetLeft;
	} while ( (element = element.offsetParent) != null );
	return(offset);
};


//
// wikEd.AppendScript: append script to head
//

wikEd.AppendScript = function(scriptUrl, onLoadFunction) {

	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', scriptUrl);
	wikEd.head.appendChild(script);
	if (onLoadFunction != null) {
		wikEd.AddEventListener(script, 'load', onLoadFunction, false);
	}
	return;
};


//
// wikEd.CleanNodes: remove DOM elements dynamically inserted by other scripts
//

wikEd.CleanNodes = function(node) {

	if (wikEd.cleanNodes == false) {
		return;
	}

// remove Web of Trust (WOT) tags
	var divs = node.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i ++) {
		var div = divs[i];

// test for WOT class names
		var divClass = div.className;
		if (/^wot-/.test(divClass) == true) {
			var divParent = div.parentNode;
			if (divParent != null) {
				divParent.removeChild(div);
			}
			continue;
		}

// test for WOT attributes
		var divAttrs = div.attributes;
		for (var j = 0; j < divAttrs.length; ++ j) {
			var attr = divAttrs.item(j);
			if ( (attr.nodeName == 'wottarget') || (/^link[0-9a-f]{30,}/.test(attr.nodeName) == true) ) {
				var divParent = div.parentNode;
				if (divParent != null) {
					divParent.removeChild(div);
				}
				break;
			}
		}
	}
	return;
};


//
// wikEd.ParseDOM: parses a DOM subtree into a linear array of plain text fragments
//

wikEd.ParseDOM = function(obj, topNode) {

	obj.plainLength = 0;
	obj.plainArray = [];
	obj.plainNode = [];
	obj.plainStart = [];
	obj.plainPos = [];

	var anchorNode = obj.sel.anchorNode;
	var	focusNode = obj.sel.focusNode;
	var anchorOffset = obj.sel.anchorOffset;
	var focusOffset = obj.sel.focusOffset;

	wikEd.ParseDOMRecursive(obj, topNode, anchorNode, anchorOffset, focusNode, focusOffset);
	obj.plain = obj.plainArray.join('');
	return;
};


//
// wikEd.ParseDOMRecursive: parses a DOM subtree into a linear array of plain text fragments
//

wikEd.ParseDOMRecursive = function(obj, currentNode, anchorNode, anchorOffset, focusNode, focusOffset) {

// cycle through the child nodes of currentNode
	var childNodes = currentNode.childNodes;
	for (var i = 0; i < childNodes.length; i ++) {
		var childNode = childNodes.item(i);

// check for selection, non-text nodes
		if ( (currentNode == anchorNode) && (i == anchorOffset) ) {
			obj.plainAnchor = obj.plainLength;
		}
		if ( (currentNode == focusNode) && (i == focusOffset) ) {
			obj.plainFocus = obj.plainLength;
		}

// check for selection, text nodes
		if (childNode == obj.sel.anchorNode) {
			obj.plainAnchor = obj.plainLength + obj.sel.anchorOffset;
		}
		if (childNode == obj.sel.focusNode) {
			obj.plainFocus = obj.plainLength + obj.sel.focusOffset;
		}

// get text of child node
		var value = null;
		switch (childNode.nodeType) {
			case childNode.ELEMENT_NODE:

// skip hidden elements
				if (wikEd.GetStyle(childNode, 'display') == 'none') {
					continue;
				}
				if ( (childNode.childNodes.length == 0) && (wikEd.leafElements[childNode.nodeName] == true) ) {
					if (childNode.nodeName == 'BR') {
						value = '\n';
					}
				}
				else {
					wikEd.ParseDOMRecursive(obj, childNode, anchorNode, anchorOffset, focusNode, focusOffset);
				}
				break;
			case childNode.TEXT_NODE:
				value = childNode.nodeValue;
				value = value.replace(/\n/g, ' ');
				break;
			case childNode.ENTITY_REFERENCE_NODE:
				value = '&' + childNode.nodeName + ';';
				break;
		}

// add text to text object
		if (value != null) {

// array of text fragments
			obj.plainArray.push(value);

// array of text fragment node references
			obj.plainNode.push(childNode);

// array of text fragment text positions
			obj.plainStart.push(obj.plainLength);

// node references containing text positions
			obj.plainPos[childNode] = obj.plainLength;

// current text length
			obj.plainLength += value.length;
		}
	}
	return;
};


//
// wikEd.GetInnerHTML: get the innerHTML of a document fragment
//

wikEd.GetInnerHTML = function(obj, currentNode) {

// initialize string
	if (obj.html == null) {
		obj.html = '';
	}
	if (obj.plain == null) {
		obj.plain = '';
	}
	if (obj.plainArray == null) {
		obj.plainArray = [];
		obj.plainNode = [];
		obj.plainStart = [];
	}

	var childNodes = currentNode.childNodes;
	for (var i = 0; i < childNodes.length; i ++) {
		var childNode = childNodes.item(i);
		switch (childNode.nodeType) {
			case childNode.ELEMENT_NODE:
				obj.html += '<' + childNode.nodeName.toLowerCase();
				for (var j = 0; j < childNode.attributes.length; j ++) {
					if (childNode.attributes.item(j).nodeValue != null) {
						obj.html += ' ' + childNode.attributes.item(j).nodeName + '="' + childNode.attributes.item(j).nodeValue.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '"';
					}
				}
				if ( (childNode.childNodes.length == 0) && (wikEd.leafElements[childNode.nodeName] == true) ) {
					obj.html += '>';
					if (childNode.nodeName == 'BR') {
						obj.plainArray.push('\n');
						obj.plainNode.push(childNode);
						obj.plainStart.push(obj.plain.length);
						obj.plain += '\n';
					}
				}
				else {
					obj.html += '>';
					wikEd.GetInnerHTML(obj, childNode);
					obj.html += '</' + childNode.nodeName.toLowerCase() + '>';
				}
				break;
			case childNode.TEXT_NODE:
				var value = childNode.nodeValue;
				value = value.replace(/\n/g, ' '); // important for pasted page content
				obj.plainArray.push(value);        // plain array contains & < > instead of &amp; &lt; &gt;
				obj.plainNode.push(childNode);
				obj.plainStart.push(obj.plain.length);
				value = value.replace(/&/g, '&amp;');
				value = value.replace(/</g, '&lt;');
				value = value.replace(/>/g, '&gt;');
				obj.html += value;
				obj.plain += value;
				break;
			case childNode.CDATA_SECTION_NODE:
				obj.html += '<![CDATA[' + childNode.nodeValue + ']]>';
				break;
			case childNode.ENTITY_REFERENCE_NODE:
				var value = '&' + childNode.nodeName + ';';
				obj.plainArray.push(value);
				obj.plainNode.push(childNode);
				obj.plainStart.push(obj.plain.length);
				value = value.replace(/&/g, '&amp;');
				obj.html += value;
				obj.plain += value;
				break;
			case childNode.COMMENT_NODE:
				obj.html += '<!--' + childNode.nodeValue + '-->';
				break;
		}
	}
	return;
};


//
// wikEd.GetNextNode: recurse through DOM to next text-like node for anti-highlight bleeding
//

wikEd.GetNextTextNode = function(obj, currentNode, currentLevel) {

// ascend until there is a sibling
	while (currentNode != wikEd.frameBody) {

// check for sibling
		var nextNode = null;
		if ( (obj.backwards == true) && (currentNode.previousSibling != null) ) {
			nextNode = currentNode.previousSibling;
		}
		else if ( (obj.backwards != true) && (currentNode.nextSibling != null) ) {
			nextNode = currentNode.nextSibling
		}

// found sibling
		if (nextNode != null) {
			currentNode = nextNode;

// found text-like node
			if (
				(currentNode.nodeName == '#text') ||
				(currentNode.nodeType == currentNode.ENTITY_REFERENCE_NODE) ||
				(wikEd.leafElements[currentNode.nodeName] == true)
			) {
				obj.foundNode = currentNode;
				obj.foundLevel = currentLevel;
				return;
			}

// recurse into child nodes
			if ( (currentNode.nodeType == currentNode.ELEMENT_NODE) && (/wikEd.scroll(Before|After)/.test(currentNode.className) != true) ) {
				wikEd.GetNextTextNodeChilds(obj, currentNode, currentLevel - 1);
				if (obj.foundNode != null) {
					return;
				}
			}
		}

// no sibling, ascend to parent
		else {
			currentNode = currentNode.parentNode;
			currentLevel ++;
		}
	}
	return;
};


// wikEd.GetNextTextNodeChilds: recurse through child nodes to next text-like node for anti-highlight bleeding

wikEd.GetNextTextNodeChilds = function(obj, currentNode, currentLevel) {

// set direction
	var childNodes = currentNode.childNodes;
	if (childNodes.length == 0) {
		return;
	}
	var start = 0;
	var add = 1;
	if (obj.backwards == true) {
		start = childNodes.length - 1;
		add = -1;
	}

// cycle through child nodes (left or right)
	for (var i = start; ( (obj.backwards == true) && (i >= 0) ) || ( (obj.backwards != true) && (i < childNodes.length) ); i = i + add) {
		var currentNode = childNodes.item(i);

// found text-like node
		if (
			(currentNode.nodeName == '#text') ||
			(currentNode.nodeType == currentNode.ENTITY_REFERENCE_NODE) ||
			(wikEd.leafElements[currentNode.nodeName] == true)
		) {
			obj.foundNode = currentNode;
			obj.foundLevel = currentLevel;
			return;
		}

// recurse into child nodes
			if ( (currentNode.nodeType == currentNode.ELEMENT_NODE) && (/wikEd.scroll(Before|After)/.test(currentNode.className) != true) ) {
			wikEd.GetNextTextNodeChilds(obj, currentNode, currentLevel - 1);
			if (obj.foundNode != null) {
				return;
			}
		}
	}
	return;
};


//
// wikEd.ApplyCSS: Attach css rules to document
//

wikEd.ApplyCSS = function(cssDocument, cssRules) {

	var stylesheet = new wikEd.StyleSheet(cssDocument);
	var rules = '';
	for (var ruleName in cssRules) {
		if (cssRules.hasOwnProperty(ruleName) == true) {
			var ruleStyle = cssRules[ruleName];

// replace {wikedImage:image} in css rules with image path
			ruleStyle = ruleStyle.replace(/\{wikEdImage:(\w+)\}/g,
				function (p, p1) {
					return(wikEd.config.image[p1]);
				}
			);

// replace {wikedText:text} in css rules with translation
			ruleStyle = ruleStyle.replace(/\{wikEdText:(\w+)\}/g,
				function (p, p1) {
					return(wikEd.config.text[p1]);
				}
			);

			rules += ruleName + ' {' + ruleStyle + '}\n';
		}
	}
	stylesheet.AddCSSRules(rules);
	return;
};


//
// wikEd.StyleSheet: create a new style sheet object (code copied to wikEdDiff.js)
//

wikEd.StyleSheet = function(contextObj) {

	if (contextObj == null) {
		contextObj = document;
	}
	this.styleElement = null;

// MS IE compatibility
	if (contextObj.createStyleSheet) {
		this.styleElement = contextObj.createStyleSheet();
	}

// standards compliant browsers
	else {
		this.styleElement = contextObj.createElement('style');
		this.styleElement.from = 'text/css';
		var insert = contextObj.getElementsByTagName('head')[0];
		if (insert != null) {
			this.styleElement.appendChild(contextObj.createTextNode('')); // Safari 3 fix
			insert.appendChild(this.styleElement);
		}
	}

//
// wikEd.StyleSheet.AddCSSRule: add one rule at the time using DOM method, very slow
//

	this.AddCSSRule = function(selector, declaration) {

// MS IE compatibility
		if (this.styleElement.addRule != null) {
			if (declaration.length > 0) {
				this.styleElement.addRule(selector, declaration);
			}
		}

// standards compliant browsers
		else {
			if (this.styleElement.sheet != null) {
				if (this.styleElement.sheet.insertRule != null) {
					this.styleElement.sheet.insertRule(selector + ' { ' + declaration + ' } ', 0);
				}
			}
		}
	};


//
// wikEd.StyleSheet.AddCSSRules: add or replace all rules at once, much faster
//

	this.AddCSSRules = function(rules) {

// MS IE compatibility
		if (this.styleElement.innerHTML == null) {
			this.styleElement.cssText = rules;
		}

// Safari, Chrome, WebKit
		else if ( (wikEd.safari == true) || (wikEd.chrome == true) || (wikEd.webkit == true) ) {
			if (this.styleElement.firstChild != null) {
				this.styleElement.removeChild(this.styleElement.firstChild);
			}
			this.styleElement.appendChild(contextObj.createTextNode(rules));
		}

// via innerHTML
		else {
			this.styleElement.innerHTML = rules;
		}
		return;
	};
};


//
// wikEd.GetStyle: get computed style properties for non-inline css definitions
//

wikEd.GetStyle = function(element, styleProperty) {

	var styleDocument = element.ownerDocument;

	var style;
	if (element != null) {
		if ( (styleDocument.defaultView != null) && (styleDocument.defaultView.getComputedStyle != null) ) {
			style = styleDocument.defaultView.getComputedStyle(element, null)[styleProperty];
		}

// MS IE compatibility
		else if (element.currentStyle != null) {
			style = element.currentStyle[styleProperty];

// recurse up trough the DOM tree
			if (style == 'inherit') {
				style = wikEd.GetStyle(element.parentNode, styleProperty);
			}
		}
		else {
			style = element.style[styleProperty];
		}
	}
	return(style);
};


//
// wikEd.AjaxPreview: get rendered page text using an Ajax non-api POST call
//

wikEd.AjaxPreview = function(textValue, ResponseHandler, livePreview) {

// prepare the url
	var requestUrl;
	if ( (wikEd.uploadEdit != true) && (wikEd.watchlistEdit != true) && (wikEd.viewDeleted != true) ) {
		requestUrl = wikEd.editForm.action.replace(/\?.*()/, '');
		if (/:\/\/()/.test(requestUrl) == false) {
			requestUrl = window.location.protocol + '//' + window.location.host + requestUrl;
		}
	}
	else if (wikEd.wikiGlobals.wgScriptPath != null) {
		requestUrl = wikEd.wikiGlobals.wgScriptPath + '/index.php';
	}
	else {
		requestUrl = window.location.href;
		requestUrl = requestUrl.replace(/\?.*()/, '');
		requestUrl = requestUrl.replace(/\/[\w\.]*$/, '/index.php');
	}

// prepare the form fields
	var postFields = {};
	if ( (wikEd.pageName != null) && (wikEd.wikiGlobals.wgCanonicalNamespace != 'Special') ) {
		postFields['title'] = wikEd.pageName;
	}
	else {
		postFields['title'] = 'wikEd_preview';
	}
	postFields['action'] = 'submit';
	postFields['wpTextbox1'] = textValue;

	if (wikEd.starttime != null) {
		postFields['wpStarttime'] = wikEd.starttime;
	}
	if (wikEd.edittime != null) {
		postFields['wpEdittime'] = wikEd.edittime;
	}
	if (wikEd.editToken != null) {
		postFields['wpEditToken'] = wikEd.editToken;
	}
	if (wikEd.autoSummary != null) {
		postFields['wpAutoSummary'] = wikEd.autoSummary;
	}

	postFields['wpPreview'] = 'true';
	if (livePreview != false) {
		postFields['live'] = 'true';
	}

// make the ajax request
	wikEd.AjaxRequest('POST', requestUrl, postFields, 'text/plain', ResponseHandler);

	return;
};


//
// wikEd.AjaxRequest: cross browser wrapper for Ajax requests (code copied to wikEdDiff.js)
//

wikEd.AjaxRequest = function(requestMethod, requestUrl, postFields, overrideMimeType, ResponseHandler) {

	var request;
	var headers = {};
	var formData;

// prepare POST request
	if (requestMethod == 'POST') {

// assemble string body
		if (typeof(FormData) != 'function') {

// create boundary
			var boundary = wikEd.CreateRandomString(12);

// POST header
			headers['Content-Type'] = 'multipart/form-data; boundary=' + boundary;

// assemble body data
			formData = '';
			for (var fieldName in postFields) {
				if (postFields.hasOwnProperty(fieldName) == true) {
					formData += '--' + boundary + '\r\n';
					formData += 'Content-Disposition: form-data; name="' + fieldName + '"\r\n\r\n' +  postFields[fieldName] + '\r\n';
				}
			}
			formData += '--' + boundary + '--\r\n';
		}

// use FormData object
		else {
			formData = new FormData();
			for (var fieldName in postFields) {
				if (postFields.hasOwnProperty(fieldName) == true) {
					formData.append(fieldName, postFields[fieldName]);
				}
			}
		}
	}

// send the request using Greasemonkey GM_xmlhttpRequest
	if (wikEd.greasemonkey == true) {
		headers['User-Agent'] = navigator.userAgent;

// workaround for Error: Greasemonkey access violation: unsafeWindow cannot call GM_xmlhttpRequest.
// see http://wiki.greasespot.net/Greasemonkey_access_violation
		setTimeout(function() {
			new GM_xmlhttpRequest({
				'method':  requestMethod,
				'url':     requestUrl,
				'overrideMimeType': overrideMimeType,
				'headers': headers,
				'data':    formData,
				'onreadystatechange':
					function(ajax) {
						if (ajax.readyState != 4) {
							return;
						}
						ResponseHandler(ajax);
						return;
					}
			});
		}, 0);
	}

// use standard XMLHttpRequest
	else {

// allow ajax request from local copy for testing
		if (wikEd.config.allowLocalAjax == true) {
			if (typeof(netscape) == 'object') {
				netscape.security.PrivilegeManager.enablePrivilege('UniversalBrowserRead');
			}
		}

// create new XMLHttpRequest object
		if (typeof(XMLHttpRequest) == 'function') {
			request = new XMLHttpRequest();
		}

// IE
		else if (typeof(ActiveXObject) == 'object') {

// IE 6
			try {
				request = new ActiveXObject('Microsoft.XMLHTTP');
			}

// IE 5.5
			catch(err) {
				try {
					request = new ActiveXObject('Msxml2.XMLHTTP');
				}
				catch(err) {
					return;
				}
			}
		}
		if (request == null) {
			return;
		}

// open the request
		request.open(requestMethod, requestUrl, true);

// set the headers
		for (var headerName in headers) {
			if (headers.hasOwnProperty(headerName) == true) {
				request.setRequestHeader(headerName, headers[headerName]);
			}
		}

// set the mime type
		if ( (request.overrideMimeType != null) && (overrideMimeType != null) ) {
			request.overrideMimeType(overrideMimeType);
		}

// send the request, catch security violations Opera 0.9.51
		try {
			request.send(formData);
		}
		catch(err) {
			return;
		}

// wait for the data
		request.onreadystatechange = function() {
			if (request.readyState != 4) {
				return;
			}
			ResponseHandler(request);
			return;
		};
	}
	return;
};


//
// wikEd.GetGlobals: parse global context variables (code copied to wikEdDiff.js)
//   uses postMessage, head script, and JSON encoding for Greasemonkey global to GM context access

wikEd.GetGlobals = function(names, gotGlobalsHook) {

	if (gotGlobalsHook != null) {
		wikEd.gotGlobalsHook.push(gotGlobalsHook);
	}

// code already running in global context
	if (wikEd.greasemonkey != true) {
		var globalScopeCode = '';
		for (var i = 0; i < names.length; i ++) {
			globalScopeCode += ''
			+ 'if (typeof(' + names[i] + ') != \'undefined\') {'
			+ '  wikEd.wikiGlobals.' + names[i] + ' = ' + names[i] + ';'
			+ '}';
		}
		if (gotGlobalsHook != null) {
			globalScopeCode += 'wikEd.ExecuteHook(wikEd.gotGlobalsHook[' + (wikEd.gotGlobalsHook.length - 1) + '], true);';
		}
		eval(globalScopeCode);
		return;
	}

// prepare code to be executed in global context for Greasemonkey
	if ( (typeof(window.postMessage) == 'undefined') || (typeof(JSON) != 'object') ) {
		return;
	}
	var globalScopeCode = 'var globalObj = {};';
	if (gotGlobalsHook != null) {
		wikEd.gotGlobalsHook.push(gotGlobalsHook);
		globalScopeCode += 'globalObj.hookNumber = ' + (wikEd.gotGlobalsHook.length - 1) + ';';
	}
	globalScopeCode += 'globalObj.scriptId = \'wikEdGetGlobalScript' + wikEd.getGlobalsCounter + '\';';
	globalScopeCode += 'globalObj.wikEdGetGlobals = {};';

// add global scope variables
	for (var i = 0; i < names.length; i ++) {
		globalScopeCode += ''
		+ 'if (typeof(' + names[i] + ') != \'undefined\') {'
		+ '  globalObj.wikEdGetGlobals[\'' + names[i] + '\'] = ' + names[i] + ';'
		+ '}';
	}
	globalScopeCode += 'var globalObjStr = JSON.stringify(globalObj);';
	var origin = wikEd.pageOrigin;
	if (origin == 'file://') {
		origin = '*';
	}
	globalScopeCode += 'window.postMessage(globalObjStr, \'' + origin + '\');';

// create head script to execute the code
	var script = document.createElement('script');
	script.id = 'wikEdGetGlobalScript' + wikEd.getGlobalsCounter;
	wikEd.getGlobalsCounter ++;
	if (typeof(script.innerText) != 'undefined') {
		script.innerText = globalScopeCode;
	}
	else {
		script.textContent = globalScopeCode;
	}
	wikEd.head.appendChild(script);

	return;
};


//
// wikEd.GetGlobalsReceiver: event handler for wikEd.GetGlobals postMessage (code copied to wikEdDiff.js)
//

wikEd.GetGlobalsReceiver = function(event) {

	if (event.source != window) {
		return;
	}
	if ( (event.origin != 'null') && (event.origin != wikEd.pageOrigin) ) {
		return;
	}
	if (event.data != '') {
		var globalObj = JSON.parse(event.data);
		var globals = globalObj.wikEdGetGlobals;
		if (globals != null) {
			for (var key in globals) {
				if (globals.hasOwnProperty(key) == true) {
					wikEd.wikiGlobals[key] = globals[key];
				}
			}

// run scheduled functions only once
			if (globalObj.hookNumber != null) {
				wikEd.ExecuteHook(wikEd.gotGlobalsHook[globalObj.hookNumber], true);
			}

// clean up head script
			var script = document.getElementById(globalObj.scriptId);
			wikEd.head.removeChild(script);
		}
	}
	return;
};


//
// wikEd.GetAttribute: MS IE compatibility wrapper for element.getAttribute()
//

wikEd.GetAttribute = function(element, attribName) {

	var attribValue = element.getAttribute(attribName);

// MS IE compatibility for checked
	if (attribName == 'checked') {
		if ( typeof(attribValue) == 'boolean' ) {
			if (attribValue == true) {
				attribValue = 'true';
			}
			else {
				attribValue = 'false';
			}
		}
	}
	return(attribValue);
};


//
// wikEd.GetWindowInnerHeight: MS IE compatibility wrapper for window.innerHeight
//

wikEd.GetWindowInnerHeight = function() {

	var value = window.innerHeight;
	if (value == null) {
		if (document.documentElement != null) {
			value = document.documentElement.clientHeight;
		}
		if ( (value == null) || (value == 0) ) {
			value = document.body.clientHeight;
		}
	}
	return(value);
};


//
// wikEd.GetWindowInnerWidth: MS IE compatibility wrapper for window.innerWidth
//

wikEd.GetWindowInnerWidth = function() {

	var value = window.innerWidth;
	if (value == null) {
		if (document.documentElement != null) {
			value = document.documentElement.clientWidth;
		}
		if ( (value == null) || (value == 0) ) {
			value = document.body.clientWidth;
		}
	}
	return(value);
};


//
// wikEd.AddEventListener: wrapper for addEventListener (http://ejohn.org/projects/flexible-javascript-events/) (code copied to wikEdDiff.js)
//

wikEd.AddEventListener = function(domElement, eventType, eventHandler, useCapture) {

	if (domElement == null) {
		return;
	}
	if (typeof(domElement.addEventListener) == 'function') {
		domElement.addEventListener(eventType, eventHandler, useCapture);
	}
	else {
		domElement['wikEd' + eventType + eventHandler] = eventHandler;
		domElement[eventType + eventHandler] = function() {
			var eventRootElement = document;
			if (document.addEventListener == null) {
				eventRootElement = window;
			}
			domElement['wikEd' + eventType + eventHandler](eventRootElement.event);
		};
		domElement.attachEvent('on' + eventType, domElement[eventType + eventHandler] );
	}
	return;
};


//
// wikEd.RemoveEventListener: wrapper for removeEventListener
//

wikEd.RemoveEventListener = function(domElement, eventType, eventHandler, useCapture) {

	if (domElement == null) {
		return;
	}
	if (typeof(domElement.removeEventListener) == 'function') {
		domElement.removeEventListener(eventType, eventHandler, useCapture);
	}
	else {
		domElement.detachEvent('on' + eventType, domElement[eventType + eventHandler]);
		domElement[eventType + eventHandler] = null;
	}
	return;
};


//
// wikEd.EventWrapper: MS IE and Mozilla compatibility fix for event object
//

wikEd.EventWrapper = function(event, thisElement) {

	var eventAlt;
	if (window.event != null) {
		eventAlt = window.event;
	}
	else if (wikEd.frameWindow != null) {
		if (typeof(wikEd.frameWindow.event) != 'undefined') {
			eventAlt = wikEd.frameWindow.event;
		}
	}
	if (eventAlt != null) {
		event = eventAlt;
		event.stopPropagation = function() {
			event.cancelBubble = true;
		};
		event.preventDefault = function() {
			event.returnValue = false;
		};
		if (event.target == null) {
			event.target = event.srcElement;
		}
		if (event.currentTarget == null) {
			event.currentTarget = thisElement;
		}
		if (event.relatedTarget == null) {
			if (event.type == 'mouseout') {
				event.relatedTarget = event.toElement;
			}
			else if (event.type == 'mouseover') {
				event.relatedTarget = event.fromElement;
			}
		}
	}

// avoid strange Mozilla security error https://bugzilla.mozilla.org/show_bug.cgi?id=101197, fixed in FF3.6
	if ( (event.type == 'mouseout') || (event.type == 'mouseover') ) {
		event.safeRelatedTarget = event.relatedTarget;
		if (wikEd.mozilla == true) {
			try {
				event.safeRelatedTarget.toString();
			}
			catch(error) {
				event.safeRelatedTarget = null;
			}
		}
	}
	return(event);
};


//
// wikEd.GetElementsByClassName: cross browser / backwards compatibility wrapper
//

wikEd.GetElementsByClassName = function(className, tagName, parent) {

	if (parent == null) {
		parent = document.body;
	}

// new browsers
	var nodeList = [];
	if (document.getElementsByClassName != null) {
		nodeList = parent.getElementsByClassName(className);
	}

// querySelector (IE8 standards mode)
	else if (parent.querySelectorAll != null) {
		nodeList = parent.querySelectorAll(tagName + '.' + className);
	}

// all others (slow)
	else {
		var tags = parent.getElementsByTagName(tagName);
		for (var i = 0; i < tags.length; i ++) {
			if (tags[i].className == className) {
				nodeList.push(tags[i]);
			}
		}
	}
	return(nodeList);
};


//
// wikEd.GetPreviousSiblingNode: getPreviousSibling, ignore non-element nodes such as comments
//

wikEd.GetPreviousSiblingNode = function(node) {

	while (node != null) {
		node = node.previousSibling;
		if (node == null) {
			break;
		}
		if (node.nodeType == node.ELEMENT_NODE) {
			break;
		}
	}
	return(node);
};


//
// wikEd.GetNextSiblingNode: getNextSibling, ignore non-element nodes such as comments
//

wikEd.GetNextSiblingNode = function(node) {

	while (node != null) {
		node = node.nextSibling;
		if (node == null) {
			break;
		}
		if (node.nodeType == node.ELEMENT_NODE) {
			break;
		}
	}
	return(node);
};


//
// wikEd.GetFirstChildNode: getFirstChild, ignore non-element nodes such as comments
//

wikEd.GetFirstChildNode = function(node) {

	if (node != null) {
		node = node.firstChild;
		wikEd.GetNextSiblingNode(node);
	}
	return(node);
};


//
// wikEd.GetLastChildNode: getLastChild, ignore non-element nodes such as comments
//

wikEd.GetLastChildNode = function(node) {

	if (node != null) {
		node = node.lastChild;
		wikEd.GetPreviousSiblingNode(node);
		return(node);
	}
};


//
// wikEd.CreateRandomString: create random string of specified length and character set (code copied to wikEdDiff.js)
//

wikEd.CreateRandomString = function(strLength, charSet) {

	if (charSet == null) {
		charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789';
	}
	var str = '';
	for (var i = 0; i < strLength; i ++) {
		str += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}
	return(str);
};


//
// wikEd.Debug: print the value of variables
//   use either a single value or a description followed by a value
//   popup = true: use alert popup if debug textarea is not yet setup
//

wikEd.Debug = function(objectName, object, usePopup) {

// string
	var value = '';
	if (typeof(object) == 'string') {
		value = ': ' + '"' + object + '"';
	}

// objects
	else if (typeof(object) == 'object') {

// null
		if (object == null) {
			value = ': [null]';
		}

// whole parse tree array
// { 'tag': , 'parent': , 'firstChild': , 'nextSibling': , 'start': , 'tagLength': , 'type': , 'pairedTagPos': , 'left': , 'right': , 'index': }
		else if ( (typeof(object[0]) == 'object') && (typeof(object[0].type) == 'string') ) {
			value = ': Parse tree full:\n';
			for (var i = 0; i < object.length; i ++) {
				value += i + ': ';
				var node = object[i];
				if (node == null) {
					value += '(null)\n';
				}
				else {
					if (node.type == 'root') {
						value += '[type: "' + node.type + '"]\n';
					}
					else {
						value += '[type: "' + node.type + '", tag: "' + node.tag + '", start: ' + node.start + ', tagLength: ' + node.tagLength + ', parent: ' + node.parent;
						if (typeof(node.left) == 'string') {
							value += ', left: "' + node.left + '", right: "' + node.right + '"';
						}
						value += '],\n';
					}
				}
			}
		}

// whole parse tree up
		else if ( (typeof(object.tree) == 'object') && (typeof(object.lastOpenNode) == 'number') ) {
			value = ': Parse tree upwards:\n';
			var parseTreeIndex = object.lastOpenNode;
			var node = object.tree[parseTreeIndex];
			while (node != null) {
				if (node.type == 'root') {
					value += parseTreeIndex + ': [type: "' + node.type + '"]\n';
				}
				else {
					value += parseTreeIndex + ': [type: "' + node.type + '", tag: "' + node.tag + '", start: ' + node.start + ', tagLength: ' + node.tagLength + ', parent: ' + node.parent;
					if (typeof(node.left) == 'string') {
						value += ', left: "' + node.left + '", right: "' + node.right + '"';
					}
					value += '],\n';
				}
				if (node.parent == parseTreeIndex) {
					value += '(circular reference, break)';
					break;
				}
				parseTreeIndex = node.parent;
				node = object.tree[node.parent];
			}
		}

// parse tree node
// { 'tag': , 'parent': , 'firstChild': , 'nextSibling': , 'start': , 'tagLength': , 'type': , 'pairedTagPos': , 'left': , 'right': , 'index': }
		else if (typeof(object.type) == 'string') {
			var node = object;
			if (node.type == 'root') {
				value = ': [type: "' + node.type + '"]';
			}
			else {
				value = ': [tag: "' + node.tag + '", type: "' + node.type + '", start: ' + node.start + ', tagLength: ' + node.tagLength + ', parent: ' + node.parent + ']';
			}
		}

// DOM nodes
		else if (typeof(object.nodeName) == 'string') {
			value = ': [node; nodeName: ' + object.nodeName;
			if (typeof(object.id) == 'string') {
				if (object.id != '') {
					value += ', id: "' + object.id + '"';
				}
			}
			if (typeof(object.className) == 'string') {
				if (object.className != '') {
					value += ', class: "' + object.className + '"';
				}
			}
			if (typeof(object.nodeValue) == 'string') {
				value += ', nodeValue: "' + object.nodeValue + '"';
			}
			if ( (object.innerHTML != null) && (object.innerHTML != '') ) {
				var html = object.innerHTML;
				if (html.length > wikEd.config.debugInnerHtmlLength) {
					html = html.substr(0, wikEd.config.debugInnerHtmlLength - 3) + '...';
				}
				value += ', innerHTML: "' + html + '"';
			}
			value += ']';
		}

// default
		else {
			value = ': [' + object + ']';
		}
	}

// undefined
	else if (typeof(object) == 'undefined') {
		value = '';
	}

// default
	else {
		value = ': ' + object;
	}

// use debug textarea
	var useDebug = false;
	if (typeof(wikEd.debug) != 'undefined') {
		if (wikEd.debug != null) {
			useDebug = true;
		}
	}
	if (useDebug == true) {
		if (wikEd.debugOpen == false) {
			wikEd.debugWrapper.style.visibility = 'visible';
			wikEd.debug.style.display = 'block';
			window.scroll(0, wikEd.GetOffsetTop(wikEd.debug));
			wikEd.debugOpen = true;
		}
		if (objectName == null) {
			wikEd.debug.value = '';
		}
		else {

// cut text if having reached maximum length
			value = objectName + value + '\n';
			if (wikEd.debug.value.length > wikEd.config.debugMaxLength) {
				wikEd.debug.value = value + wikEd.debug.value.substr(0, wikEd.config.debugMaxLength * 2 / 3);
			}
			else {
				wikEd.debug.value = value + wikEd.debug.value;
			}
		}
	}

// use popup alert
	else if (usePopup == true) {
		if (object == null) {
			alert(objectName);
		}
		else {
			alert(objectName + ': ' + value);
		}
	}

// use error console
	else {
		var msg;
		if (object == null) {
			msg = objectName + '';
		}
		else {
			msg = objectName + ': ' + value;
		}
		msg = msg.replace(/'/g, '\\\'');
		setTimeout('throw new Error(\'wikEd.Debug: ' + msg + '\')', 0);
	}
	return;
};


//
// wikEd.DebugTimer: show all measured timepoints
//   add a new time measurement: wikEd.debugTimer.push([1234, new Date]);

wikEd.DebugTimer = function() {
	var times = '';
	var start = wikEd.debugTimer[0][1].getTime();
	var prev = 0;
	for (var i = 0; i < wikEd.debugTimer.length; i ++) {
		var curr = wikEd.debugTimer[i][1].getTime() - start;
		var diff = curr - prev;
		prev = curr;
		times += wikEd.debugTimer[i][0] + ': ' + curr + ' ms (+ ' + diff + ' ms)\n';
	}
	wikEd.Debug(times);
	wikEd.debugTimer = [];
};


//
// wikEd.InsertTags: overrides the insertTags function in wikibits.js used by the standard button toolbar and the editpage special chars
//

wikEd.InsertTags = function(openTag, closeTag, sampleText) {

	if (wikEd.useWikEd == true) {
		wikEd.EditButton(document.getElementById('wikEdInsertTags'), 'wikEdInsertTags', [openTag, closeTag, sampleText]);
	}
	else if (wikEd.InsertTagsOriginal != null) {
		wikEd.InsertTagsOriginal(openTag, closeTag, sampleText);
	}
	return;
};


//
// wikEd.InsertAtCursor: overrides the insertAtCursor function in wikia.com MediaWiki:Functions.js
//

wikEd.InsertAtCursor = function(myField, myValue) {

	if (wikEd.useWikEd == true) {
		if (myField == wikEd.textarea) {
			wikEd.EditButton(document.getElementById('wikEdInsertTags'), 'wikEdInsertTags', [ myValue ]);
		}
	}
	else if (wikEd.InsertAtCursorOriginal != null) {
		wikEd.InsertAtCursorOriginal(myField, myValue);
	}
	return;
};


//
// wikEd.ExecuteHook: executes scheduled custom functions from functionsHook array (code copied to wikEdDiff.js)
//

wikEd.ExecuteHook = function(functionsHook, onlyOnce) {

	for (var i = 0; i < functionsHook.length; i ++) {
		if (typeof(functionsHook[i]) == 'function') {
			functionsHook[i]();
		}
	}
	if (onlyOnce == true) {
		functionsHook = [];
	}
	return;
};


//
// wikEd.InitUnicode: define character tables used in wikEd.FixUnicode()
//   see http://kmi.open.ac.uk/projects/ceryle/doc/docs/NOTE-charents.html

wikEd.InitUnicode = function() {

// define only once
	if (wikEd.supportedChars != null) {
		return;
	}

// supported chars in Mozilla and IE
	wikEd.supportedChars = [
		[  'a1', 'iexcl'],  // ¡
		[  'a2', 'cent'],   // ¢
		[  'a3', 'pound'],  // £
		[  'a4', 'curren'], // ¤
		[  'a5', 'yen'],    // ¥
		[  'a6', 'brvbar'], // ¦
		[  'a7', 'sect'],   // §
		[  'a8', 'uml'],    // ¨
		[  'a9', 'copy'],   // ©
		[  'aa', 'ordf'],   // ª
		[  'ab', 'laquo'],  // «
		[  'ac', 'not'],    // ¬
		[  'ae', 'reg'],    // ®
		[  'af', 'macr'],   // ¯
		[  'b0', 'deg'],    // °
		[  'b1', 'plusmn'], // ±
		[  'b2', 'sup2'],   // ²
		[  'b3', 'sup3'],   // ³
		[  'b4', 'acute'],  // ´
		[  'b5', 'micro'],  // µ
		[  'b6', 'para'],   // ¶
		[  'b7', 'middot'], // ·
		[  'b8', 'cedil'],  // ¸
		[  'b9', 'sup1'],   // ¹
		[  'ba', 'ordm'],   // º
		[  'bb', 'raquo'],  // »
		[  'bc', 'frac14'], // ¼
		[  'bd', 'frac12'], // ½
		[  'be', 'frac34'], // ¾
		[  'bf', 'iquest'], // ¿
		[  'c0', 'Agrave'], // À
		[  'c1', 'Aacute'], // Á
		[  'c2', 'Acirc'],  // Â
		[  'c3', 'Atilde'], // Ã
		[  'c4', 'Auml'],   // Ä
		[  'c5', 'Aring'],  // Å
		[  'c6', 'AElig'],  // Æ
		[  'c7', 'Ccedil'], // Ç
		[  'c8', 'Egrave'], // È
		[  'c9', 'Eacute'], // É
		[  'ca', 'Ecirc'],  // Ê
		[  'cb', 'Euml'],   // Ë
		[  'cc', 'Igrave'], // Ì
		[  'cd', 'Iacute'], // Í
		[  'ce', 'Icirc'],  // Î
		[  'cf', 'Iuml'],   // Ï
		[  'd0', 'ETH'],    // Ð
		[  'd1', 'Ntilde'], // Ñ
		[  'd2', 'Ograve'], // Ò
		[  'd3', 'Oacute'], // Ó
		[  'd4', 'Ocirc'],  // Ô
		[  'd5', 'Otilde'], // Õ
		[  'd6', 'Ouml'],   // Ö
		[  'd7', 'times'],  // ×
		[  'd8', 'Oslash'], // Ø
		[  'd9', 'Ugrave'], // Ù
		[  'da', 'Uacute'], // Ú
		[  'db', 'Ucirc'],  // Û
		[  'dc', 'Uuml'],   // Ü
		[  'dd', 'Yacute'], // Ý
		[  'de', 'THORN'],  // Þ
		[  'df', 'szlig'],  // ß
		[  'e0', 'agrave'], // à
		[  'e1', 'aacute'], // á
		[  'e2', 'acirc'],  // â
		[  'e3', 'atilde'], // ã
		[  'e4', 'auml'],   // ä
		[  'e5', 'aring'],  // å
		[  'e6', 'aelig'],  // æ
		[  'e7', 'ccedil'], // ç
		[  'e8', 'egrave'], // è
		[  'e9', 'eacute'], // é
		[  'ea', 'ecirc'],  // ê
		[  'eb', 'euml'],   // ë
		[  'ec', 'igrave'], // ì
		[  'ed', 'iacute'], // í
		[  'ee', 'icirc'],  // î
		[  'ef', 'iuml'],   // ï
		[  'f0', 'eth'],    // ð
		[  'f1', 'ntilde'], // ñ
		[  'f2', 'ograve'], // ò
		[  'f3', 'oacute'], // ó
		[  'f4', 'ocirc'],  // ô
		[  'f5', 'otilde'], // õ
		[  'f6', 'ouml'],   // ö
		[  'f7', 'divide'], // ÷
		[  'f8', 'oslash'], // ø
		[  'f9', 'ugrave'], // ù
		[  'fa', 'uacute'], // ú
		[  'fb', 'ucirc'],  // û
		[  'fc', 'uuml'],   // ü
		[  'fd', 'yacute'], // ý
		[  'fe', 'thorn'],  // þ
		[  'ff', 'yuml'],   // ÿ
		[  '27', 'apos'],   // '
		[  '22', 'quot'],   // "
		[ '152', 'OElig'],  // Œ
		[ '153', 'oelig'],  // œ
		[ '160', 'Scaron'], // Š
		[ '161', 'scaron'], // š
		[ '178', 'Yuml'],   // Ÿ
		[ '2c6', 'circ'],   // ˆ
		[ '2dc', 'tilde'],  // ˜
		['2013', 'ndash'],  // –
		['2014', 'mdash'],  // —
		['2018', 'lsquo'],  // ‘
		['2019', 'rsquo'],  // ’
		['201a', 'sbquo'],  // ‚
		['201c', 'ldquo'],  // “
		['201d', 'rdquo'],  // ”
		['201e', 'bdquo'],  // „
		['2020', 'dagger'], // †
		['2021', 'Dagger'], // ‡
		['2030', 'permil'], // ‰
		['2039', 'lsaquo'], // ‹
		['203a', 'rsaquo'], // ›
		['20ac', 'euro'],   // €
		[ '192', 'fnof'],   // ƒ
		[ '391', 'Alpha'],  // Α
		[ '392', 'Beta'],   // Β
		[ '393', 'Gamma'],  // Γ
		[ '394', 'Delta'],  // Δ
		[ '395', 'Epsilon'],// Ε
		[ '396', 'Zeta'],   // Ζ
		[ '397', 'Eta'],    // Η
		[ '398', 'Theta'],  // Θ
		[ '399', 'Iota'],   // Ι
		[ '39a', 'Kappa'],  // Κ
		[ '39b', 'Lambda'], // Λ
		[ '39c', 'Mu'],     // Μ
		[ '39d', 'Nu'],     // Ν
		[ '39e', 'Xi'],     // Ξ
		[ '39f', 'Omicron'],// Ο
		[ '3a0', 'Pi'],     // Π
		[ '3a1', 'Rho'],    // Ρ
		[ '3a3', 'Sigma'],  // Σ
		[ '3a4', 'Tau'],    // Τ
		[ '3a5', 'Upsilon'],// Υ
		[ '3a6', 'Phi'],    // Φ
		[ '3a7', 'Chi'],    // Χ
		[ '3a8', 'Psi'],    // Ψ
		[ '3a9', 'Omega'],  // Ω
		[ '3b1', 'alpha'],  // α
		[ '3b2', 'beta'],   // β
		[ '3b3', 'gamma'],  // γ
		[ '3b4', 'delta'],  // δ
		[ '3b5', 'epsilon'],// ε
		[ '3b6', 'zeta'],   // ζ
		[ '3b7', 'eta'],    // η
		[ '3b8', 'theta'],  // θ
		[ '3b9', 'iota'],   // ι
		[ '3ba', 'kappa'],  // κ
		[ '3bb', 'lambda'], // λ
		[ '3bc', 'mu'],     // μ
		[ '3bd', 'nu'],     // ν
		[ '3be', 'xi'],     // ξ
		[ '3bf', 'omicron'],// ο
		[ '3c0', 'pi'],     // π
		[ '3c1', 'rho'],    // ρ
		[ '3c2', 'sigmaf'], // ς
		[ '3c3', 'sigma'],  // σ
		[ '3c4', 'tau'],    // τ
		[ '3c5', 'upsilon'],// υ
		[ '3c6', 'phi'],    // φ
		[ '3c7', 'chi'],    // χ
		[ '3c8', 'psi'],    // ψ
		[ '3c9', 'omega'],  // ω
		['2022', 'bull'],   // •
		['2026', 'hellip'], // …
		['2032', 'prime'],  // ′
		['2033', 'Prime'],  // ″
		['203e', 'oline'],  // ‾
		['2044', 'frasl'],  // ⁄
		['2122', 'trade'],  // ™
		['2190', 'larr'],   // ←
		['2191', 'uarr'],   // ↑
		['2192', 'rarr'],   // →
		['2193', 'darr'],   // ↓
		['2194', 'harr'],   // ↔
		['21d2', 'rArr'],   // ⇒
		['21d4', 'hArr'],   // ⇔
		['2200', 'forall'], // ∀
		['2202', 'part'],   // ∂
		['2203', 'exist'],  // ∃
		['2207', 'nabla'],  // ∇
		['2208', 'isin'],   // ∈
		['220b', 'ni'],     // ∋
		['220f', 'prod'],   // ∏
		['2211', 'sum'],    // ∑
		['2212', 'minus'],  // −
		['221a', 'radic'],  // √
		['221d', 'prop'],   // ∝
		['221e', 'infin'],  // ∞
		['2220', 'ang'],    // ∠
		['2227', 'and'],    // ∧
		['2228', 'or'],     // ∨
		['2229', 'cap'],    // ∩
		['222a', 'cup'],    // ∪
		['222b', 'int'],    // ∫
		['2234', 'there4'], // ∴
		['223c', 'sim'],    // ∼
		['2248', 'asymp'],  // ≈
		['2260', 'ne'],     // ≠
		['2261', 'equiv'],  // ≡
		['2264', 'le'],     // ≤
		['2265', 'ge'],     // ≥
		['2282', 'sub'],    // ⊂
		['2283', 'sup'],    // ⊃
		['2286', 'sube'],   // ⊆
		['2287', 'supe'],   // ⊇
		['2295', 'oplus'],  // ⊕
		['25ca', 'loz'],    // ◊
		['2660', 'spades'], // ♠
		['2663', 'clubs'],  // ♣
		['2665', 'hearts'], // ♥
		['2666', 'diams']   // ♦
	];

// reserved for internal wikEd use
	wikEd.reservedChars = [
		[  '26', 'amp'],    // &
		[  '3c', 'lt'],     // <
		[  '3e', 'gt'],     // >
		[  'a0', 'nbsp']    //
	];

// special chars (spaces and invisible characters)
	wikEd.specialChars = [
		['2002', 'ensp'],   //   en space
		[  'ad', 'shy'],    // ­ soft hyphen
		['2003', 'emsp'],   //   em space
		['2009', 'thinsp'], //   thin space
		['200c', 'zwnj'],   // ‌ zero width non-joiner
		['200d', 'zwj'],    // ‍ zero width joiner
		['200e', 'lrm'],    // ‎ left-to-right mark
		['200f', 'rlm']     // ‏ right-to-left mark
	];

// unsupported chars in IE6
	wikEd.problemChars = [
		[ '3d1', 'thetasym'], // ϑ
		[ '3d2', 'upsih'],    // ϒ
		[ '3d6', 'piv'],      // ϖ
		['2118', 'weierp'],   // ℘
		['2111', 'image'],    // ℑ
		['211c', 'real'],     // ℜ
		['2135', 'alefsym'],  // ℵ
		['21b5', 'crarr'],    // ↵
		['21d0', 'lArr'],     // ⇐
		['21d1', 'uArr'],     // ⇑
		['21d3', 'dArr'],     // ⇓
		['2205', 'empty'],    // ∅
		['2209', 'notin'],    // ∉
		['2217', 'lowast'],   // ∗
		['2245', 'cong'],     // ≅
		['2284', 'nsub'],     // ⊄
		['22a5', 'perp'],     // ⊥
		['2297', 'otimes'],   // ⊗
		['22c5', 'sdot'],     // ⋅
		['2308', 'lceil'],    // ⌈
		['2309', 'rceil'],    // ⌉
		['230a', 'lfloor'],   // ⌊
		['230b', 'rfloor'],   // ⌋
		['2329', 'lang'],     // 〈
		['232a', 'rang']      // 〉
	];


// index to all existing 253 HTML/XHTML character entities
	var allCharEntities = wikEd.supportedChars.concat(wikEd.reservedChars, wikEd.specialChars, wikEd.problemChars);
	for (var i = 0; i < allCharEntities.length; i ++) {
		wikEd.charEntitiesByName[ allCharEntities[i][1] ] = String.fromCharCode(parseInt(allCharEntities[i][0], 16));
	}

// syntax highlighting of ASCII control characters and invisibles (decimal value, title)
	wikEd.controlCharHighlighting = {
		'0': 'null',
		'1': 'start of heading',
		'2': 'start of text',
		'3': 'end of text',
		'4': 'end of transmission',
		'5': 'enquiry',
		'6': 'acknowledge',
		'7': 'bell',
		'8': 'backspace',
		'11': 'vertical tab',
		'12': 'form feed, new page',
		'14': 'shift out',
		'15': 'shift in',
		'16': 'data link escape',
		'17': 'device control 1',
		'18': 'device control 2',
		'19': 'device control 3',
		'20': 'device control 4',
		'21': 'negative acknowledge',
		'22': 'synchronous idle',
		'23': 'end of trans. block',
		'24': 'cancel',
		'25': 'end of medium',
		'26': 'substitute',
		'27': 'escape',
		'28': 'file separator',
		'29': 'group separator',
		'30': 'record separator',
		'31': 'unit separator',
		'8204': 'zero width non-joiner', // \u200c
		'8205': 'zero width joiner',     // \u200d
		'8206': 'left-to-right mark',    // \u200e
		'8207': 'right-to-left mark',    // \u200f
		'8232': 'line separator',        // \u2028
		'8233': 'paragraph separator'    // \u2028
	};
	for (var decimalValue in wikEd.controlCharHighlighting) {
		if (wikEd.controlCharHighlighting.hasOwnProperty(decimalValue) == true) {
			wikEd.controlCharHighlightingStr += '\\' + String.fromCharCode(decimalValue);
		}
	}

// character syntax highlighting: strange spaces, hyphens, and dashes (decimal value, class = title)
	wikEd.charHighlighting = {
		'9':     'tab',        // \u0009 '	'
		'8194':  'enSpace',    // \u2002 ' '
		'8195':  'emSpace',    // \u2003 ' '
		'8201':  'thinSpace',  // \u2009 ' '
		'12288': 'ideographicSpace', // \u3000 '　'
		'45':    'hyphenDash', // \u00a0 '-'
		'173':   'softHyphen', // \u00ad '­'
		'8210':  'figureDash', // \u2012 '‒'
		'8211':  'enDash',     // \u2013 '–'
		'8212':  'emDash',     // \u2014 '—'
		'8213':  'barDash',    // \u2015 '―'
		'8722':  'minusDash'   // \u2212 '−'
	};
	for (var decimalValue in wikEd.charHighlighting) {
		if (wikEd.charHighlighting.hasOwnProperty(decimalValue) == true) {
			wikEd.charHighlightingStr += '\\' + String.fromCharCode(decimalValue);
		}
	}

// UniCode support for regexps, from http://xregexp.com/plugins/xregexp-unicode-base.js and /xregexp-unicode-categories.js
	wikEd.letters = '0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC'.replace(/(\w{4})/g, '\\u$1');

	return;
};

// call startup
wikEd.Startup();

// </source>