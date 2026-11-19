import React, { useState } from 'https://esm.sh/react@18.3.1';
import { LANGUAGES, PREBOARDING_A_TEXT, UI_TEXT, isRtlLanguage, cleanBackLabel } from '../data/translations.js?v=216';

const h = React.createElement;

// ============================================================================
// SignInPage — Clean #CF366C background, no red surrounding bubble, no extra sayings/labels.
// Just: Enter Your Username, Enter Your Password, and the Sign In button.
// ============================================================================
export default function SignInPage({
  lang,
  username,
  setUsername,
  password,
  setPassword,
  onBack,
  onSignInUser
}) {
  const pt = PREBOARDING_A_TEXT[lang] || PREBOARDING_A_TEXT.en;
  const langObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMsg('Please enter your username.');
      return;
    }
    if (!password) {
      setErrorMsg('Please enter your password.');
      return;
    }
    const result = onSignInUser({
      username: username.trim(),
      password
    });
    if (result && result.error) {
      setErrorMsg(result.error);
    }
  };

  const t = UI_TEXT[lang] || UI_TEXT.en;
  const isRtl = isRtlLanguage(lang);

  return h(
    'div',
    {
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'min-h-screen w-full flex flex-col justify-between items-center px-4 py-6 select-none',
      style: { backgroundColor: '#CF366C', color: '#FEACEC'}
    },
    // Top-start Back button only (no bubble around it)
    h(
      'div',
      { className: 'w-full max-w-md flex items-center justify-start'},
      h(
        'button',
        {
          type: 'button',
          onClick: onBack,
          className: 'inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer bg-transparent border-0 p-0 hover:opacity-80',
          style: { color: '#FEACEC'}
        },
        h('span', { 'aria-hidden': 'true' }, isRtl ? '→' : '←'),
        h('bdi', null, cleanBackLabel(t.backBtn, lang))
      )
    ),

    // Centered form directly on #CF366C background
    h(
      'form',
      {
        onSubmit: handleSubmit,
        className: 'w-full max-w-md my-auto space-y-5'},
      // 1. Username
      h(
        'div',
        null,
        h(
          'label',
          {
            className: 'block text-xl sm:text-2xl font-bold mb-2.5 text-center',
            style: { color: '#FEACEC'}
          },
          pt.returningUsernameLabel || 'Enter Your Username'),
        h('input', {
          type: 'text',
          value: username,
          onChange: (e) => {
            setUsername(e.target.value);
            setErrorMsg('');
          },
          placeholder: pt.usernamePlaceholder || 'Enter your username...',
          className: 'w-full px-5 py-4 rounded-2xl border-2 outline-none text-base font-bold shadow-md',
          style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC'}
        })
      ),

      // 2. Password
      h(
        'div',
        null,
        h(
          'label',
          {
            className: 'block text-xl sm:text-2xl font-bold mb-2.5 text-center',
            style: { color: '#FEACEC'}
          },
          pt.returningPasswordLabel || 'Enter Your Password'),
        h('input', {
          type: 'password',
          value: password,
          onChange: (e) => {
            setPassword(e.target.value);
            setErrorMsg('');
          },
          placeholder: pt.passwordPlaceholder || 'Enter your password...',
          className: 'w-full px-5 py-4 rounded-2xl border-2 outline-none text-base font-bold shadow-md',
          style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC'}
        })
      ),

      errorMsg &&
        h(
          'div',
          {
            className: 'p-3 rounded-xl text-xs font-bold text-center',
            style: { backgroundColor: '#FFFFFF', color: '#9F133A'}
          },
          errorMsg
        ),

      h(
        'button',
        {
          type: 'submit',
          className: 'w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-lg transition transform hover:scale-[1.01]',
          style: { backgroundColor: '#FEACEC', color: '#9F133A'}
        },
        pt.continueReturningBtn || 'Sign In & Continue →')
    ),

    h('div', { className: 'h-6'})
  );
}
