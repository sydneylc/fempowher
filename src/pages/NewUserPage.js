import React, { useState } from 'https://esm.sh/react@18.3.1';
import { LANGUAGES, PREBOARDING_A_TEXT, UI_TEXT, isRtlLanguage, cleanBackLabel } from '../data/translations.js?v=270';

const h = React.createElement;

export default function NewUserPage({
  lang,
  username,
  setUsername,
  password,
  setPassword,
  email,
  setEmail,
  onBack,
  onRegisterUser
}) {
  const pt = PREBOARDING_A_TEXT[lang] || PREBOARDING_A_TEXT.en;
  const langObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setErrorMsg('Please enter a username.');
      return;
    }
    if (!password) {
      setErrorMsg('Please create a password.');
      return;
    }
    onRegisterUser({
      username: username.trim(),
      password,
      email: email.trim()
    });
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
          { className: 'block text-xl font-bold mb-2 text-center', style: { color: '#FEACEC'} },
          pt.usernameLabel || 'Choose a Username'),
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
          { className: 'block text-xl font-bold mb-2 text-center', style: { color: '#FEACEC'} },
          pt.createPasswordLabel || 'Create a Password'),
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

      // 3. Optional Email
      h(
        'div',
        null,
        h(
          'label',
          { className: 'block text-base font-bold mb-2 text-center', style: { color: '#FEACEC'} },
          pt.emailLabel || 'Email for Verification / Backup (Optional)'),
        h('input', {
          type: 'email',
          value: email,
          onChange: (e) => setEmail(e.target.value),
          placeholder: pt.emailPlaceholder || 'Optional — leave blank if you prefer',
          className: 'w-full px-5 py-4 rounded-2xl border-2 outline-none text-sm font-bold shadow-md',
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
        pt.continueNewBtn || 'Create Username & Continue →')
    ),

    h('div', { className: 'h-6'})
  );
}
