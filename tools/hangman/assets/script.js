const _0x4216e3 = _0x30ae; (function (_0x5f4aaf, _0x57d6c7) { const _0x175069 = _0x30ae, _0x2a2b2f = _0x5f4aaf(); while (!![]) { try { const _0x3a49b6 = parseInt(_0x175069(0xbd)) / 0x1 + parseInt(_0x175069(0xcf)) / 0x2 + parseInt(_0x175069(0xc2)) / 0x3 + -parseInt(_0x175069(0xb5)) / 0x4 + -parseInt(_0x175069(0xb1)) / 0x5 * (parseInt(_0x175069(0xcd)) / 0x6) + -parseInt(_0x175069(0xb6)) / 0x7 + -parseInt(_0x175069(0xc9)) / 0x8 * (-parseInt(_0x175069(0xcc)) / 0x9); if (_0x3a49b6 === _0x57d6c7) break; else _0x2a2b2f['push'](_0x2a2b2f['shift']()); } catch (_0x716845) { _0x2a2b2f['push'](_0x2a2b2f['shift']()); } } }(_0x449e, 0x4030d)); function _0x449e() { const _0x2685b0 = ['44476aocFCu', 'javascript', '28710CSGBsD', 'fill', 'test', 'code', '667200FiyQLj', '609343YFuRIv', 'css', 'random', 'Congratulations!\x20You\x20guessed\x20the\x20word!', 'floor', 'programming', 'length', '191406rUPUOD', 'html', 'value', 'developer', 'includes', '1497510lmIogU', 'feedback', 'disabled', 'style', 'join', 'getElementById', 'Game\x20over.\x20The\x20word\x20was\x20\x22', '2152496XnWrlp', 'guess-input', 'hangman', '9OTtgwn', '486exsMge', 'textContent']; _0x449e = function () { return _0x2685b0; }; return _0x449e(); } const words = [_0x4216e3(0xcb), _0x4216e3(0xd0), _0x4216e3(0xc0), _0x4216e3(0xbb), _0x4216e3(0xbe), _0x4216e3(0xb7), _0x4216e3(0xb4)], selectedWord = words[Math[_0x4216e3(0xba)](Math[_0x4216e3(0xb8)]() * words[_0x4216e3(0xbc)])], wordDisplay = document[_0x4216e3(0xc7)]('word-display'), guessInput = document[_0x4216e3(0xc7)](_0x4216e3(0xca)), feedback = document[_0x4216e3(0xc7)](_0x4216e3(0xc3)), attemptsLeft = document[_0x4216e3(0xc7)]('attempts-left'); let displayedWord = Array(selectedWord[_0x4216e3(0xbc)])[_0x4216e3(0xb2)]('_'), attempts = 0x6; attemptsLeft['textContent'] = attempts; function updateWordDisplay() { const _0x273ba5 = _0x4216e3; wordDisplay['textContent'] = displayedWord[_0x273ba5(0xc6)]('\x20'); } function makeGuess() { const _0x47897e = _0x4216e3, _0x2d30aa = guessInput[_0x47897e(0xbf)]['toLowerCase'](); guessInput[_0x47897e(0xbf)] = ''; if (_0x2d30aa[_0x47897e(0xbc)] !== 0x1 || !/^[a-z]$/[_0x47897e(0xb3)](_0x2d30aa)) { feedback[_0x47897e(0xce)] = 'Enter\x20a\x20valid\x20single\x20letter.'; return; } if (selectedWord[_0x47897e(0xc1)](_0x2d30aa)) for (let _0x4a01c6 = 0x0; _0x4a01c6 < selectedWord[_0x47897e(0xbc)]; _0x4a01c6++) { selectedWord[_0x4a01c6] === _0x2d30aa && (displayedWord[_0x4a01c6] = _0x2d30aa); } else attempts--, feedback[_0x47897e(0xce)] = 'Incorrect\x20guess.\x20Try\x20again.', attemptsLeft['textContent'] = attempts; updateWordDisplay(); if (displayedWord[_0x47897e(0xc6)]('') === selectedWord) feedback['textContent'] = _0x47897e(0xb9), feedback[_0x47897e(0xc5)]['color'] = 'green', guessInput[_0x47897e(0xc4)] = !![], setTimeout(() => { window['location']['reload'](); }, 0x1388); else attempts === 0x0 && (feedback['textContent'] = _0x47897e(0xc8) + selectedWord + '\x22.', guessInput[_0x47897e(0xc4)] = !![]); } function _0x30ae(_0x267697, _0x42db79) { const _0x449e80 = _0x449e(); return _0x30ae = function (_0x30ae75, _0x3a4854) { _0x30ae75 = _0x30ae75 - 0xb1; let _0x336b5f = _0x449e80[_0x30ae75]; return _0x336b5f; }, _0x30ae(_0x267697, _0x42db79); } updateWordDisplay();