import React, { useState } from 'https://esm.sh/react@18.3.1';
import { isRtlLanguage } from '../data/translations.js?v=286';
import {
  renderGearHeartIcon,
  encryptCycleDataWithPassword,
  decryptCycleDataWithPassword,
  hashAccountCredential,
  isAnonymousCycleUser
} from '../data/cycleCalendarData.js?v=286';

const h = React.createElement;

// Option 1 Custom Cartoon Neon-Pink Padlock with Heart Keyhole (No emojis!)
export function renderNeonPinkHeartLockIcon(size = 22) {
  return h(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 100 100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': 'true',
      className: 'shrink-0 inline-block',
      style: {
        filter: 'drop-shadow(0 0 4px rgba(255, 30, 142, 0.55))'
      }
    },
    // Outer U-shackle arch in pastel pink with bold black cartoon outline
    h('path', {
      d: 'M31 44 V29 C31 17.5 40 10 50 10 C60 10 69 17.5 69 29 V44 H59 V29 C59 23 55 19.5 50 19.5 C45 19.5 41 23 41 29 V44 Z',
      fill: '#FFD1EC',
      stroke: '#000000',
      strokeWidth: '5.5',
      strokeLinejoin: 'round'
    }),
    // Chubby cartoon neon-pink padlock body
    h('rect', {
      x: '18',
      y: '39',
      width: '64',
      height: '51',
      rx: '16',
      fill: '#FF1E8E',
      stroke: '#000000',
      strokeWidth: '5.5'
    }),
    // Inner bright neon pink highlight body
    h('rect', {
      x: '22.5',
      y: '43.5',
      width: '55',
      height: '42',
      rx: '12',
      fill: '#FF3FA4'
    }),
    // Cartoon glossy white shine pill + dot on top-left
    h('rect', {
      x: '27',
      y: '47.5',
      width: '15',
      height: '5',
      rx: '2.5',
      fill: '#FFFFFF'
    }),
    h('circle', {
      cx: '46.5',
      cy: '50',
      r: '2.5',
      fill: '#FFFFFF'
    }),
    // Keyhole slot below heart
    h('rect', {
      x: '47',
      y: '66',
      width: '6',
      height: '13',
      rx: '3',
      fill: '#111111'
    }),
    // Center Heart Keyhole with white rim + black heart center (exact Option 1 design!)
    h('path', {
      d: 'M50 70.5 C50 70.5 39.5 63.5 39.5 57.2 C39.5 53.6 42.3 51.2 45.5 51.2 C47.5 51.2 49.1 52.3 50 53.8 C50.9 52.3 52.5 51.2 54.5 51.2 C57.7 51.2 60.5 53.6 60.5 57.2 C60.5 63.5 50 70.5 50 70.5 Z',
      fill: '#111111',
      stroke: '#FFFFFF',
      strokeWidth: '2.4',
      strokeLinejoin: 'round'
    })
  );
}

// Clickable Star SVG that turns bright yellow (#FACC15) when favorited
function renderFavoriteStarIcon(isFavorited, onClickStar) {
  return h(
    'span',
    {
      role: 'button',
      tabIndex: 0,
      onClick: (e) => {
        e.stopPropagation();
        onClickStar();
      },
      onKeyDown: (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          onClickStar();
        }
      },
      title: isFavorited ? 'Unfavorite' : 'Favorite (Move to top)',
      className:
        'inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 transition-transform active:scale-90 cursor-pointer shrink-0'
    },
    h(
      'svg',
      {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: isFavorited ? '#FACC15' : '#FFFFFF',
        stroke: isFavorited ? '#B45309' : '#6B7280',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
      h('polygon', {
        points:
          '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'
      })
    )
  );
}

// ============================================================================
// Helper: Load & save user's Favorites star order
// ============================================================================
function loadProfileFavoritesState(usernameKey) {
  const defaultState = {
    favTimestamps: {}, // itemId -> timestamp when favorited (so favorited items rise to top)
    docFavTimestamps: {} // docCategoryId -> timestamp when favorited
  };
  if (isAnonymousCycleUser(usernameKey)) {
    return defaultState;
  }
  try {
    const cleanUser = String(usernameKey).trim().toLowerCase();
    const raw = localStorage.getItem(`fempowher_profile_favs_v1_${cleanUser}`);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      favTimestamps: (parsed && parsed.favTimestamps) || {},
      docFavTimestamps: (parsed && parsed.docFavTimestamps) || {}
    };
  } catch (_) {
    return defaultState;
  }
}

function saveProfileFavoritesState(usernameKey, stateObj) {
  if (isAnonymousCycleUser(usernameKey)) return;
  try {
    const cleanUser = String(usernameKey).trim().toLowerCase();
    localStorage.setItem(`fempowher_profile_favs_v1_${cleanUser}`, JSON.stringify(stateObj));
  } catch (_) {}
}

// ============================================================================
// Helper: Password-Encrypted Health Documents Vault Storage
// ============================================================================
function getHealthDocsHashKey(usernameKey) {
  const cleanUser = String(usernameKey || 'anon').trim().toLowerCase() || 'anon';
  return `fempowher_health_docs_pw_hash_v1_${cleanUser}`;
}

function getHealthDocsVaultKey(usernameKey) {
  const cleanUser = String(usernameKey || 'anon').trim().toLowerCase() || 'anon';
  return `fempowher_health_docs_vault_v1_${cleanUser}`;
}

export default function YourProfileHomePage1({
  UserNameChoiceInsert1 = 'User',
  UserLanguageChoice1 = null,
  lang = 'en',
  t = {},
  writtenLanguage = 'English',
  handleGlobalLanguageChange = () => {},
  ageGroup = '20-25',
  setAgeGroup = () => {},
  AGE_GROUPS = [],
  userNationVariable1 = 'Your Country',
  onBackToMap = () => {},
  onOpenCycleCalendarFromProfile = () => {},
  onOpenFamilyPlanningFromProfile = () => {}
}) {
  const tr = (key, fallback) => {
    if (UserLanguageChoice1 && typeof UserLanguageChoice1.translate === 'function') {
      return UserLanguageChoice1.translate(key, t[key] || fallback);
    }
    return t[key] || fallback;
  };
  const isRtl = isRtlLanguage(lang, writtenLanguage);

  // Sub-page inside Your Profile:
  // - 'main' (Default 3 bubbles view)
  // - 'GeneralSettingsHomePage1' (Opened by the big Gear-Heart Settings button in the top bubble)
  // - 'HealthDocumentsPasswordGate' (Password prompt / setup before entering Health Documents)
  // - 'HealthDocumentsVaultSpace' (Unlocked space with My Documents, Family Documents, and Health ID)
  const [profileSubPage, setProfileSubPage] = useState('main');

  // Favorites star state (persisted for logged-in user, session-only for anonymous)
  const [favState, setFavState] = useState(() =>
    loadProfileFavoritesState(UserNameChoiceInsert1)
  );

  const toggleMainFavoriteStar = (itemId) => {
    setFavState((prev) => {
      const nextFavs = { ...(prev.favTimestamps || {}) };
      if (nextFavs[itemId]) {
        delete nextFavs[itemId];
      } else {
        nextFavs[itemId] = Date.now();
      }
      const nextState = { ...prev, favTimestamps: nextFavs };
      saveProfileFavoritesState(UserNameChoiceInsert1, nextState);
      return nextState;
    });
  };

  const toggleDocCategoryFavoriteStar = (catId) => {
    setFavState((prev) => {
      const nextDocFavs = { ...(prev.docFavTimestamps || {}) };
      if (nextDocFavs[catId]) {
        delete nextDocFavs[catId];
      } else {
        nextDocFavs[catId] = Date.now();
      }
      const nextState = { ...prev, docFavTimestamps: nextDocFavs };
      saveProfileFavoritesState(UserNameChoiceInsert1, nextState);
      return nextState;
    });
  };

  // Health Documents Password & Encrypted Vault State
  const cleanUserKey = String(UserNameChoiceInsert1 || 'anon').trim().toLowerCase() || 'anon';
  const [storedDocsPassHash, setStoredDocsPassHash] = useState(() => {
    try {
      return localStorage.getItem(getHealthDocsHashKey(cleanUserKey)) || '';
    } catch (_) {
      return '';
    }
  });
  const [unlockedDocsPassword, setUnlockedDocsPassword] = useState('');
  const [passwordInputVal, setPasswordInputVal] = useState('');
  const [passwordConfirmVal, setPasswordConfirmVal] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [activeDocCategory, setActiveDocCategory] = useState('my-documents');

  // Vault contents (only decrypted in memory while unlockedDocsPassword is set!)
  const [vaultData, setVaultData] = useState({
    'my-documents': [],
    'family-documents': [],
    'health-id': []
  });

  // Form states for uploading a new document or ID inside the unlocked vault
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocNotes, setNewDocNotes] = useState('');
  const [uploadStatusMsg, setUploadStatusMsg] = useState('');

  const handleRequestOpenHealthDocs = (targetCategory = 'my-documents') => {
    setActiveDocCategory(targetCategory);
    setPasswordInputVal('');
    setPasswordConfirmVal('');
    setPasswordErrorMsg('');
    // Always require password entry when opening Health Documents from the profile tab
    setUnlockedDocsPassword('');
    setProfileSubPage('HealthDocumentsPasswordGate');
  };

  const handleUnlockOrCreateHealthDocsPassword = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const pass = passwordInputVal.trim();
    if (!pass || pass.length < 3) {
      setPasswordErrorMsg(
        tr('healthDocsPassTooShort', 'Please enter a password of at least 3 characters.')
      );
      return;
    }

    if (!storedDocsPassHash) {
      // Setting up password for the first time
      if (pass !== passwordConfirmVal.trim()) {
        setPasswordErrorMsg(
          tr('healthDocsPassMismatch', 'Passwords do not match. Please type the same password twice.')
        );
        return;
      }
      const newHash = hashAccountCredential(`health_docs_${cleanUserKey}`, pass);
      try {
        localStorage.setItem(getHealthDocsHashKey(cleanUserKey), newHash);
      } catch (_) {}
      setStoredDocsPassHash(newHash);
      setUnlockedDocsPassword(pass);
      const initialEmptyVault = {
        'my-documents': [],
        'family-documents': [],
        'health-id': []
      };
      setVaultData(initialEmptyVault);
      try {
        const enc = encryptCycleDataWithPassword(
          initialEmptyVault,
          `hdocs_${cleanUserKey}`,
          pass
        );
        if (enc) {
          localStorage.setItem(getHealthDocsVaultKey(cleanUserKey), enc);
        }
      } catch (_) {}
      setPasswordInputVal('');
      setPasswordConfirmVal('');
      setPasswordErrorMsg('');
      setProfileSubPage('HealthDocumentsVaultSpace');
      return;
    }

    // Verifying existing password
    const checkHash = hashAccountCredential(`health_docs_${cleanUserKey}`, pass);
    if (checkHash !== storedDocsPassHash) {
      setPasswordErrorMsg(
        tr('healthDocsWrongPassword', 'Incorrect password. Your Health Documents remain locked.')
      );
      return;
    }

    // Decrypt vault with the verified password
    let loadedVault = {
      'my-documents': [],
      'family-documents': [],
      'health-id': []
    };
    try {
      const rawCipher = localStorage.getItem(getHealthDocsVaultKey(cleanUserKey));
      if (rawCipher) {
        const dec = decryptCycleDataWithPassword(
          rawCipher,
          `hdocs_${cleanUserKey}`,
          pass
        );
        if (dec && typeof dec === 'object') {
          loadedVault = {
            'my-documents': Array.isArray(dec['my-documents']) ? dec['my-documents'] : [],
            'family-documents': Array.isArray(dec['family-documents']) ? dec['family-documents'] : [],
            'health-id': Array.isArray(dec['health-id']) ? dec['health-id'] : []
          };
        }
      }
    } catch (_) {}

    setUnlockedDocsPassword(pass);
    setVaultData(loadedVault);
    setPasswordInputVal('');
    setPasswordErrorMsg('');
    setProfileSubPage('HealthDocumentsVaultSpace');
  };

  const persistEncryptedVault = (nextVault) => {
    setVaultData(nextVault);
    if (!unlockedDocsPassword) return;
    try {
      const enc = encryptCycleDataWithPassword(
        nextVault,
        `hdocs_${cleanUserKey}`,
        unlockedDocsPassword
      );
      if (enc) {
        localStorage.setItem(getHealthDocsVaultKey(cleanUserKey), enc);
      }
    } catch (_) {}
  };

  const handleFileUpload = (e) => {
    const files = Array.from((e.target && e.target.files) || []);
    if (!files.length) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target && ev.target.result ? String(ev.target.result) : '';
        const entry = {
          id: `doc_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          title: newDocTitle.trim() || file.name,
          fileName: file.name,
          mimeType: file.type || 'application/octet-stream',
          sizeKb: Math.max(1, Math.round((file.size || 0) / 1024)),
          notes: newDocNotes.trim(),
          uploadedAt: new Date().toISOString().slice(0, 10),
          dataUrl
        };
        setVaultData((prev) => {
          const catList = Array.isArray(prev[activeDocCategory]) ? prev[activeDocCategory] : [];
          const nextVault = {
            ...prev,
            [activeDocCategory]: [entry, ...catList]
          };
          if (unlockedDocsPassword) {
            try {
              const enc = encryptCycleDataWithPassword(
                nextVault,
                `hdocs_${cleanUserKey}`,
                unlockedDocsPassword
              );
              if (enc) {
                localStorage.setItem(getHealthDocsVaultKey(cleanUserKey), enc);
              }
            } catch (_) {}
          }
          return nextVault;
        });
        setNewDocTitle('');
        setNewDocNotes('');
        setUploadStatusMsg(
          tr('healthDocSavedSuccess', 'Encrypted & saved to your Health Documents vault!')
        );
        setTimeout(() => setUploadStatusMsg(''), 3500);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const handleAddTextOnlyNoteOrId = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!newDocTitle.trim() && !newDocNotes.trim()) return;
    const entry = {
      id: `doc_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      title: newDocTitle.trim() || tr('healthIdRecordDefaultTitle', 'Health ID / Medical Record'),
      fileName: '',
      mimeType: 'text/plain',
      sizeKb: 1,
      notes: newDocNotes.trim(),
      uploadedAt: new Date().toISOString().slice(0, 10),
      dataUrl: ''
    };
    const catList = Array.isArray(vaultData[activeDocCategory]) ? vaultData[activeDocCategory] : [];
    const nextVault = {
      ...vaultData,
      [activeDocCategory]: [entry, ...catList]
    };
    persistEncryptedVault(nextVault);
    setNewDocTitle('');
    setNewDocNotes('');
    setUploadStatusMsg(
      tr('healthDocSavedSuccess', 'Encrypted & saved to your Health Documents vault!')
    );
    setTimeout(() => setUploadStatusMsg(''), 3500);
  };

  const handleDeleteVaultDocument = (docId) => {
    const catList = Array.isArray(vaultData[activeDocCategory]) ? vaultData[activeDocCategory] : [];
    const nextVault = {
      ...vaultData,
      [activeDocCategory]: catList.filter((d) => d.id !== docId)
    };
    persistEncryptedVault(nextVault);
  };

  // ==========================================================================
  // 1. SUB-PAGE: GeneralSettingsHomePage1 (Opened from the big Settings button)
  // ==========================================================================
  if (profileSubPage === 'GeneralSettingsHomePage1') {
    return h(
      'div',
      {
        id: 'GeneralSettingsHomePage1',
        dir: isRtl ? 'rtl' : 'ltr',
        className: 'max-w-xl w-full mx-auto p-4 sm:p-6 space-y-5 select-none'
      },
      h(
        'div',
        {
          className: 'bg-white rounded-3xl p-6 border-[2.5px] border-black shadow-md space-y-5'
        },
        // Header with Back button to Your Profile
        h(
          'div',
          { className: 'flex items-center justify-between gap-3 flex-wrap border-b-2 border-black pb-4' },
          h(
            'div',
            { className: 'flex items-center gap-3' },
            renderGearHeartIcon(h, 40, '#000000', '#CF366C'),
            h(
              'div',
              null,
              h(
                'div',
                { className: 'text-xs font-extrabold uppercase tracking-wider text-black/70' },
                `${UserNameChoiceInsert1} • FemPowHer`
              ),
              h(
                'h2',
                { className: 'text-xl sm:text-2xl font-black text-[#9F133A]' },
                tr('generalSettingsPageTitle', 'General Settings')
              )
            )
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: () => setProfileSubPage('main'),
              className:
                'px-3.5 py-1.5 rounded-xl border-2 border-black bg-[#FFF0FA] hover:bg-[#FCE4F4] text-xs sm:text-sm font-black text-[#9F133A] cursor-pointer'
            },
            `${isRtl ? '→' : '←'} ${tr('backToProfileBtn', 'Back to Your Profile')}`
          )
        ),

        // Setting 1: Written Language
        h(
          'div',
          { className: 'p-4 rounded-2xl border-2 border-black bg-[#FFF9FC] space-y-2' },
          h(
            'label',
            { className: 'block text-xs sm:text-sm font-black uppercase text-[#9F133A]' },
            t.languageLabel || tr('writtenLanguageSettingLabel', 'Written Language')
          ),
          h('input', {
            type: 'text',
            list: 'main-world-languages-datalist',
            value: writtenLanguage,
            onChange: (e) => handleGlobalLanguageChange(e.target.value),
            placeholder: t.selectLanguagePlaceholder || 'Select or type language...',
            className:
              'w-full px-4 py-3 rounded-xl border-2 border-black outline-none text-sm sm:text-base font-extrabold bg-white text-[#9F133A]'
          })
        ),

        // Setting 2: Age Group
        AGE_GROUPS &&
          AGE_GROUPS.length > 0 &&
          h(
            'div',
            { className: 'p-4 rounded-2xl border-2 border-black bg-[#FFF9FC] space-y-2' },
            h(
              'label',
              { className: 'block text-xs sm:text-sm font-black uppercase text-[#9F133A]' },
              tr('ageGroupSettingLabel', 'Age Group')
            ),
            h(
              'div',
              { className: 'flex flex-wrap gap-2' },
              AGE_GROUPS.map((ag) => {
                const active = ageGroup === ag.id;
                return h(
                  'button',
                  {
                    key: ag.id,
                    type: 'button',
                    onClick: () => setAgeGroup(ag.id),
                    className:
                      'px-3.5 py-1.5 rounded-xl border-2 border-black text-xs sm:text-sm font-black cursor-pointer transition-transform active:scale-95',
                    style: {
                      backgroundColor: active ? '#9F133A' : '#FFFFFF',
                      color: active ? '#FFFFFF' : '#000000'
                    }
                  },
                  ag.label
                );
              })
            )
          ),

        // Setting 3: Current Profile Summary
        h(
          'div',
          { className: 'p-4 rounded-2xl border-2 border-black bg-white space-y-1.5' },
          h(
            'div',
            { className: 'text-xs sm:text-sm font-black text-[#9F133A]' },
            tr('activeAccountSummaryHeader', 'Active Profile & Location')
          ),
          h(
            'p',
            { className: 'text-xs sm:text-sm font-bold text-black/85' },
            `${tr('usernameLabel', 'Username')}: ${UserNameChoiceInsert1}`
          ),
          h(
            'p',
            { className: 'text-xs sm:text-sm font-bold text-black/85' },
            `${tr('countryRegionLabel', 'Current Country / Region')}: ${userNationVariable1}`
          )
        )
      )
    );
  }

  // ==========================================================================
  // 2. SUB-PAGE: HealthDocumentsPasswordGate (Password Always Required!)
  // ==========================================================================
  if (profileSubPage === 'HealthDocumentsPasswordGate') {
    return h(
      'div',
      {
        id: 'HealthDocumentsPasswordGate1',
        dir: isRtl ? 'rtl' : 'ltr',
        className: 'max-w-xl w-full mx-auto p-4 sm:p-6 space-y-5 select-none'
      },
      h(
        'div',
        {
          className: 'bg-white rounded-3xl p-6 border-[2.5px] border-black shadow-md space-y-4'
        },
        h(
          'div',
          { className: 'flex items-center justify-between gap-2 flex-wrap border-b-2 border-black pb-3' },
          h(
            'h2',
            { className: 'text-lg sm:text-xl font-black text-[#9F133A] flex items-center gap-2' },
            renderNeonPinkHeartLockIcon(26),
            h('span', null, `${UserNameChoiceInsert1}'s Health Documents`)
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: () => setProfileSubPage('main'),
              className:
                'px-3 py-1 rounded-xl border-2 border-black bg-white hover:bg-black/5 text-xs font-black text-black cursor-pointer'
            },
            `${isRtl ? '→' : '←'} ${tr('backBtnLabel', 'Back')}`
          )
        ),
        h(
          'p',
          { className: 'text-xs sm:text-sm font-bold text-black/85 leading-relaxed' },
          storedDocsPassHash
            ? tr(
                'enterHealthDocsPassPrompt',
                'A password is always required to open your Health Documents vault. Enter your password below to unlock My Documents, Family Documents, and Health ID.'
              )
            : tr(
                'createHealthDocsPassPrompt',
                'Create a private password to lock your Health Documents vault. You will need this password every time you open My Documents, Family Documents, or Health ID.'
              )
        ),
        h(
          'form',
          { onSubmit: handleUnlockOrCreateHealthDocsPassword, className: 'space-y-3' },
          h(
            'div',
            { className: 'space-y-1' },
            h(
              'label',
              { className: 'block text-xs font-black uppercase text-[#9F133A]' },
              storedDocsPassHash
                ? tr('enterVaultPasswordLabel', 'Health Documents Password')
                : tr('createVaultPasswordLabel', 'Create Health Documents Password')
            ),
            h('input', {
              type: 'password',
              value: passwordInputVal,
              onChange: (e) => setPasswordInputVal(e.target.value),
              placeholder: tr('typePasswordPlaceholder', 'Type your password...'),
              autoFocus: true,
              className:
                'w-full px-4 py-3 rounded-xl border-2 border-black bg-white text-black font-bold text-sm outline-none'
            })
          ),
          !storedDocsPassHash &&
            h(
              'div',
              { className: 'space-y-1' },
              h(
                'label',
                { className: 'block text-xs font-black uppercase text-[#9F133A]' },
                tr('confirmVaultPasswordLabel', 'Confirm Password')
              ),
              h('input', {
                type: 'password',
                value: passwordConfirmVal,
                onChange: (e) => setPasswordConfirmVal(e.target.value),
                placeholder: tr('retypePasswordPlaceholder', 'Type your password again...'),
                className:
                  'w-full px-4 py-3 rounded-xl border-2 border-black bg-white text-black font-bold text-sm outline-none'
              })
            ),
          passwordErrorMsg &&
            h(
              'div',
              {
                className:
                  'p-3 rounded-xl border-2 border-black bg-[#FFE4E6] text-xs font-black text-[#9F133A]'
              },
              passwordErrorMsg
            ),
          h(
            'button',
            {
              type: 'submit',
              className:
                'w-full py-3.5 px-5 rounded-2xl border-2 border-black text-white font-black text-sm sm:text-base shadow-md cursor-pointer transition-transform active:scale-98 flex items-center justify-center gap-2.5',
              style: {
                background: 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)'
              }
            },
            renderNeonPinkHeartLockIcon(24),
            h(
              'span',
              null,
              storedDocsPassHash
                ? tr('unlockHealthDocsBtn', 'Unlock Health Documents')
                : tr('setPasswordAndOpenBtn', 'Set Password & Open Health Documents')
            )
          )
        )
      )
    );
  }

  // ==========================================================================
  // 3. SUB-PAGE: HealthDocumentsVaultSpace (Unlocked 3-Button Space:
  //    My Documents, Family Documents, and Health ID + Document Upload & Saver)
  // ==========================================================================
  const rawDocCategories = [
    {
      id: 'my-documents',
      label: tr('myDocumentsBtnLabel', 'My Documents'),
      desc: tr(
        'myDocumentsCategoryDesc',
        'Upload and save your personal clinic papers, prescriptions, lab results, maternity cards, or vaccination records.'
      )
    },
    {
      id: 'family-documents',
      label: tr('familyDocumentsBtnLabel', 'Family Documents'),
      desc: tr(
        'familyDocumentsCategoryDesc',
        'Upload and save your children’s or family members’ birth records, immunization cards, and clinic papers.'
      )
    },
    {
      id: 'health-id',
      label: tr('healthIdBtnLabel', 'Health ID'),
      desc: tr(
        'healthIdCategoryDesc',
        'Upload photos of your Health ID, refugee / UNHCR registration card, clinic ID card, blood type, and emergency medical notes.'
      )
    }
  ];

  // Sort the 3 Health Document category buttons so favorited (yellow star) buttons rise vertically to the top!
  const sortedDocCategories = [...rawDocCategories].sort((a, b) => {
    const tA = (favState.docFavTimestamps && favState.docFavTimestamps[a.id]) || 0;
    const tB = (favState.docFavTimestamps && favState.docFavTimestamps[b.id]) || 0;
    if (tA && !tB) return -1;
    if (!tA && tB) return 1;
    if (tA && tB) return tA - tB;
    return 0;
  });

  if (profileSubPage === 'HealthDocumentsVaultSpace') {
    const activeCatObj =
      rawDocCategories.find((c) => c.id === activeDocCategory) || rawDocCategories[0];
    const currentDocsList = Array.isArray(vaultData[activeCatObj.id])
      ? vaultData[activeCatObj.id]
      : [];

    return h(
      'div',
      {
        id: 'HealthDocumentsVaultSpace1',
        dir: isRtl ? 'rtl' : 'ltr',
        className: 'max-w-2xl w-full mx-auto p-4 sm:p-6 space-y-5 select-none'
      },
      h(
        'div',
        {
          className: 'bg-white rounded-3xl p-5 sm:p-6 border-[2.5px] border-black shadow-md space-y-5'
        },
        // Header with Lock & Back button
        h(
          'div',
          { className: 'flex items-center justify-between gap-2 flex-wrap border-b-2 border-black pb-3.5' },
          h(
            'div',
            null,
            h(
              'h2',
              { className: 'text-xl sm:text-2xl font-black text-[#9F133A]' },
              `${UserNameChoiceInsert1}'s Health Documents`
            ),
            h(
              'p',
              { className: 'text-xs font-bold text-black/75' },
              tr(
                'healthDocsVaultSub',
                'Password-locked personal & family healthcare document keeper (auto-locks when you leave).'
              )
            )
          ),
          h(
            'button',
            {
              type: 'button',
              onClick: () => {
                setUnlockedDocsPassword('');
                setProfileSubPage('main');
              },
              className:
                'px-3.5 py-1.5 rounded-xl border-2 border-black bg-[#FFF0FA] hover:bg-[#FCE4F4] text-xs font-black text-[#9F133A] cursor-pointer inline-flex items-center gap-2'
            },
            renderNeonPinkHeartLockIcon(20),
            h('span', null, tr('lockAndBackBtn', 'Lock & Back to Profile'))
          )
        ),

        // The 3 Buttons inside the unlocked space: My Documents, Family Documents, and Health ID
        h(
          'div',
          { className: 'flex flex-col gap-2.5' },
          sortedDocCategories.map((cat) => {
            const isFav = Boolean(favState.docFavTimestamps && favState.docFavTimestamps[cat.id]);
            const isSelected = activeCatObj.id === cat.id;
            const docCount = Array.isArray(vaultData[cat.id]) ? vaultData[cat.id].length : 0;
            return h(
              'button',
              {
                key: cat.id,
                type: 'button',
                onClick: () => setActiveDocCategory(cat.id),
                className:
                  'w-full px-4 py-3 rounded-full border-[2.5px] flex items-center justify-between gap-3 cursor-pointer transition-transform active:scale-[0.99] shadow-sm',
                style: {
                  borderColor: isSelected ? '#000000' : '#CF366C',
                  backgroundColor: isSelected ? '#FCE4F4' : '#FFFFFF',
                  boxShadow: isSelected ? '0 0 0 2px #9F133A' : 'none'
                }
              },
              h(
                'div',
                { className: 'flex items-center gap-2.5 min-w-0' },
                renderFavoriteStarIcon(isFav, () => toggleDocCategoryFavoriteStar(cat.id)),
                h(
                  'span',
                  { className: 'text-base sm:text-lg font-black text-[#9F133A] truncate' },
                  cat.label
                )
              ),
              h(
                'span',
                {
                  className:
                    'px-2.5 py-0.5 rounded-full border border-black bg-white text-xs font-black text-black shrink-0'
                },
                `${docCount} ${docCount === 1 ? 'doc' : 'docs'}`
              )
            );
          })
        ),

        // Active Category Upload & Record Area
        h(
          'div',
          {
            className: 'p-4 sm:p-5 rounded-3xl border-2 border-black bg-[#FFF9FC] space-y-4'
          },
          h(
            'div',
            { className: 'space-y-1' },
            h(
              'h3',
              { className: 'text-base sm:text-lg font-black text-[#9F133A]' },
              activeCatObj.label
            ),
            h('p', { className: 'text-xs font-bold text-black/80' }, activeCatObj.desc)
          ),

          // Title & Optional Notes inputs + File Upload Trigger
          h(
            'div',
            { className: 'space-y-2.5 bg-white p-4 rounded-2xl border-2 border-black' },
            h(
              'div',
              { className: 'text-xs font-black uppercase text-[#9F133A]' },
              tr('addOrUploadDocHeader', 'Upload a Document Photo / PDF or Save a Health Record:')
            ),
            h('input', {
              type: 'text',
              value: newDocTitle,
              onChange: (e) => setNewDocTitle(e.target.value),
              placeholder: tr(
                'docTitlePlaceholder',
                'Document title (e.g., Vaccination Card, Clinic ID, Child Birth Record)...'
              ),
              className:
                'w-full px-3.5 py-2 rounded-xl border-2 border-black text-xs sm:text-sm font-bold text-black outline-none'
            }),
            h('textarea', {
              rows: 2,
              value: newDocNotes,
              onChange: (e) => setNewDocNotes(e.target.value),
              placeholder: tr(
                'docNotesPlaceholder',
                'Optional notes (e.g., ID number, blood type, clinic name, date, medicine dose)...'
              ),
              className:
                'w-full px-3.5 py-2 rounded-xl border-2 border-black text-xs sm:text-sm font-bold text-black outline-none resize-y'
            }),
            h(
              'div',
              { className: 'flex flex-wrap items-center gap-2.5 pt-1' },
              h(
                'label',
                {
                  className:
                    'px-4 py-2.5 rounded-2xl border-2 border-black text-white font-black text-xs sm:text-sm cursor-pointer shadow-sm inline-flex items-center gap-2',
                  style: {
                    background: 'linear-gradient(135deg, #9F133A 0%, #CF366C 100%)'
                  }
                },
                h('span', null, '+'),
                h('span', null, tr('uploadFileOrPhotoBtn', 'Upload Document / Photo')),
                h('input', {
                  type: 'file',
                  accept: 'image/*,.pdf,.doc,.docx,.txt',
                  multiple: true,
                  onChange: handleFileUpload,
                  className: 'hidden'
                })
              ),
              h(
                'button',
                {
                  type: 'button',
                  onClick: handleAddTextOnlyNoteOrId,
                  className:
                    'px-4 py-2.5 rounded-2xl border-2 border-black bg-[#FFF0FA] hover:bg-[#FCE4F4] text-[#9F133A] font-black text-xs sm:text-sm cursor-pointer'
                },
                tr('saveWrittenRecordBtn', 'Save Written Record / ID Note')
              )
            ),
            uploadStatusMsg &&
              h(
                'div',
                {
                  className:
                    'p-2.5 rounded-xl border border-[#059669] bg-[#ECFDF5] text-xs font-black text-[#065F46]'
                },
                `✓ ${uploadStatusMsg}`
              )
          ),

          // Saved Documents List inside this category
          h(
            'div',
            { className: 'space-y-2.5' },
            h(
              'div',
              { className: 'text-xs font-black uppercase text-black/75' },
              `${tr('savedInCategoryLabel', 'Saved in')} ${activeCatObj.label} (${currentDocsList.length}):`
            ),
            currentDocsList.length === 0
              ? h(
                  'div',
                  {
                    className:
                      'p-4 rounded-2xl border-2 border-dashed border-black/30 bg-white text-center text-xs font-bold text-black/65'
                  },
                  tr(
                    'noDocsUploadedYetMsg',
                    'No documents saved here yet. Use "Upload Document / Photo" above to add one.'
                  )
                )
              : currentDocsList.map((doc) =>
                  h(
                    'div',
                    {
                      key: doc.id,
                      className:
                        'p-3.5 rounded-2xl border-2 border-black bg-white flex flex-col gap-2 shadow-xs'
                    },
                    h(
                      'div',
                      { className: 'flex items-start justify-between gap-2' },
                      h(
                        'div',
                        { className: 'min-w-0' },
                        h(
                          'div',
                          { className: 'text-sm font-black text-[#9F133A] break-words' },
                          doc.title
                        ),
                        h(
                          'div',
                          { className: 'text-[11px] font-bold text-black/65' },
                          `${doc.uploadedAt}${doc.fileName ? ` • ${doc.fileName} (${doc.sizeKb} KB)` : ''}`
                        )
                      ),
                      h(
                        'div',
                        { className: 'flex items-center gap-1.5 shrink-0' },
                        doc.dataUrl &&
                          h(
                            'a',
                            {
                              href: doc.dataUrl,
                              download: doc.fileName || `${doc.title}.dat`,
                              className:
                                'px-2.5 py-1 rounded-lg border border-black bg-[#FFF0FA] text-[11px] font-black text-[#9F133A] no-underline'
                            },
                            tr('downloadDocBtn', 'Download')
                          ),
                        h(
                          'button',
                          {
                            type: 'button',
                            onClick: () => handleDeleteVaultDocument(doc.id),
                            className:
                              'px-2 py-1 rounded-lg border border-black bg-white hover:bg-black/5 text-[11px] font-black text-black cursor-pointer'
                          },
                          '✕'
                        )
                      )
                    ),
                    doc.notes &&
                      h(
                        'p',
                        {
                          className:
                            'text-xs font-bold text-black/85 bg-[#FFF9FC] p-2.5 rounded-xl border border-black/15 whitespace-pre-wrap break-words'
                        },
                        doc.notes
                      ),
                    doc.dataUrl &&
                      doc.mimeType &&
                      doc.mimeType.startsWith('image/') &&
                      h('img', {
                        src: doc.dataUrl,
                        alt: doc.title,
                        className:
                          'max-h-56 w-auto rounded-xl border border-black/30 object-contain mx-auto mt-1'
                      })
                  )
                )
          )
        )
      )
    );
  }

  // ==========================================================================
  // DEFAULT PROFILE VIEW: 3 Main Bubbles Matching User's Drawing
  // 1. Existing Bubble (without 100% local-first privacy text) + Big Gear-Heart "Settings" button
  // 2. "{UserNameChoiceInsert1} Favorites" Bubble (with Yellow-Star Rise-to-Top buttons + 2 extra section titles)
  // 3. "{UserNameChoiceInsert1}'s Health Documents" Bubble (Password Protected!)
  // ==========================================================================
  const rawFavoriteButtons = [
    {
      id: 'my-cycle-calendar',
      label: tr('favBtnMyCycleCalendar', 'My Cycle Calendar'),
      // Styled in warm golden-orange matching the top button in the user's hand-drawn sketch!
      borderHex: '#F59E0B',
      bgHex: '#FFFBEB',
      textHex: '#D97706',
      onClickButton: () => {
        if (typeof onOpenCycleCalendarFromProfile === 'function') {
          onOpenCycleCalendarFromProfile();
        }
      }
    },
    {
      id: 'my-fertility-wheel',
      label: tr('favBtnMyFertilityWheel', 'My Fertility Wheel'),
      // Styled in berry-pink matching the second button in the user's hand-drawn sketch!
      // Does NOT navigate anywhere yet as requested ("the my fertility shouldnt go anywhere yet as i havent fixed it")
      borderHex: '#CF366C',
      bgHex: '#FFF5FA',
      textHex: '#9F133A',
      onClickButton: () => {}
    },
    {
      id: 'my-family-planning',
      label: tr('favBtnMyFamilyPlanning', 'My Family Planning'),
      // Styled in deep berry-crimson matching the third button in the user's hand-drawn sketch!
      borderHex: '#9F133A',
      bgHex: '#FFF0F6',
      textHex: '#880E32',
      onClickButton: () => {
        if (typeof onOpenFamilyPlanningFromProfile === 'function') {
          onOpenFamilyPlanningFromProfile();
        }
      }
    }
  ];

  // Sort vertically so any button whose star is clicked turns yellow and rises to the top!
  const sortedFavoriteButtons = [...rawFavoriteButtons].sort((a, b) => {
    const tA = (favState.favTimestamps && favState.favTimestamps[a.id]) || 0;
    const tB = (favState.favTimestamps && favState.favTimestamps[b.id]) || 0;
    if (tA && !tB) return -1;
    if (!tA && tB) return 1;
    if (tA && tB) return tA - tB;
    return 0;
  });

  return h(
    'div',
    {
      id: 'YourProfileHomePage1',
      dir: isRtl ? 'rtl' : 'ltr',
      className: 'max-w-xl w-full mx-auto p-4 sm:p-6 space-y-5 pb-12 select-none'
    },

    // ========================================================================
    // BUBBLE 1: Existing Top Profile Bubble (100% Local-First Privacy removed +
    //           Big Gear-Heart "Settings" button opening GeneralSettingsHomePage1)
    // ========================================================================
    h(
      'div',
      {
        id: 'YourProfileTopBubble1',
        className: 'bg-white rounded-[32px] p-6 border-[2.5px] shadow-sm space-y-5',
        style: { borderColor: '#CF366C' }
      },
      h(
        'div',
        { className: 'flex items-center justify-between flex-wrap gap-2' },
        h(
          'h2',
          { className: 'text-xl sm:text-2xl font-black', style: { color: '#9F133A' } },
          t.profileTitle || 'Your Profile'
        ),
        h(
          'button',
          {
            type: 'button',
            onClick: onBackToMap,
            className:
              'inline-flex items-center gap-1.5 text-sm font-bold cursor-pointer bg-transparent border-0 p-0 hover:opacity-80',
            style: { color: '#9F133A' }
          },
          h('span', { 'aria-hidden': 'true' }, isRtl ? '→' : '←'),
          h('bdi', null, t.backBtn || 'Back')
        )
      ),

      // Written Language quick selector
      h(
        'div',
        null,
        h(
          'label',
          { className: 'block text-xs font-bold uppercase mb-2', style: { color: '#9F133A' } },
          t.languageLabel || 'Written Language'
        ),
        h('input', {
          type: 'text',
          list: 'main-world-languages-datalist',
          value: writtenLanguage,
          onChange: (e) => handleGlobalLanguageChange(e.target.value),
          placeholder: t.selectLanguagePlaceholder || 'Select or type language...',
          className:
            'w-full px-5 py-3.5 rounded-2xl border-2 outline-none text-base font-bold shadow-sm',
          style: { backgroundColor: '#FFFFFF', color: '#9F133A', borderColor: '#FEACEC' }
        })
      ),

      // Big Gear-Heart "Settings" Button (opens GeneralSettingsHomePage1)
      h(
        'button',
        {
          id: 'ProfileBigGeneralSettingsButton1',
          type: 'button',
          onClick: () => setProfileSubPage('GeneralSettingsHomePage1'),
          className:
            'w-full py-3.5 px-6 rounded-full border-[2.5px] border-black bg-white hover:bg-[#FFF5FA] shadow-md flex items-center justify-center gap-3 cursor-pointer transition-transform active:scale-98'
        },
        renderGearHeartIcon(h, 34, '#000000', '#CF366C'),
        h(
          'span',
          { className: 'text-lg sm:text-xl font-black text-black tracking-tight' },
          tr('generalSettingsBigBtnLabel', 'Settings')
        )
      )
    ),

    // ========================================================================
    // BUBBLE 2: "{UserNameChoiceInsert1} Favorites" Bubble
    // Matches the user's hand-drawn sketch:
    // - My Cycle Calendar (golden-orange pill, opens InteractiveCalendarHomePage1)
    // - My Fertility Wheel (berry-pink pill, does not navigate anywhere yet)
    // - My Family Planning (deep crimson-pink pill)
    // - Clicking the star on any button fills it yellow (#FACC15) and moves
    //   that button vertically to the top of the list!
    // - Followed by the 2 section titles:
    //   1. "{UserNameChoiceInsert1} Favorite Info"
    //   2. "{UserNameChoiceInsert1} Favorite Places"
    // ========================================================================
    h(
      'div',
      {
        id: 'UserFavoritesBubble1',
        className: 'bg-white rounded-[32px] p-6 border-[2.5px] shadow-sm space-y-4',
        style: { borderColor: '#CF366C' }
      },
      h(
        'h3',
        {
          className: 'text-xl sm:text-2xl font-black text-center',
          style: { color: '#9F133A' }
        },
        `${UserNameChoiceInsert1} ${tr('favoritesTitleSuffix', 'Favorites')}`
      ),

      // Vertical list of favoritable pill buttons
      h(
        'div',
        { className: 'flex flex-col items-center gap-3 pt-1' },
        sortedFavoriteButtons.map((btn) => {
          const isFav = Boolean(favState.favTimestamps && favState.favTimestamps[btn.id]);
          return h(
            'div',
            {
              key: btn.id,
              onClick: btn.onClickButton,
              className:
                'w-full max-w-md px-5 py-3.5 rounded-full border-[2.5px] flex items-center gap-3 shadow-sm cursor-pointer transition-transform active:scale-[0.99]',
              style: {
                borderColor: btn.borderHex,
                backgroundColor: btn.bgHex
              }
            },
            renderFavoriteStarIcon(isFav, () => toggleMainFavoriteStar(btn.id)),
            h(
              'span',
              {
                className: 'text-base sm:text-lg font-black leading-tight',
                style: { color: btn.textHex }
              },
              btn.label
            )
          );
        })
      ),

      // Second and Third Titles inside the Favorites bubble (just these two titles for now, as requested!)
      h(
        'div',
        { className: 'pt-4 border-t-2 border-[#FCE4F4] space-y-3 text-center' },
        h(
          'h4',
          {
            className: 'text-lg sm:text-xl font-black',
            style: { color: '#9F133A' }
          },
          `${UserNameChoiceInsert1} ${tr('favoriteInfoTitleSuffix', 'Favorite Info')}`
        ),
        h(
          'h4',
          {
            className: 'text-lg sm:text-xl font-black pt-1',
            style: { color: '#9F133A' }
          },
          `${UserNameChoiceInsert1} ${tr('favoritePlacesTitleSuffix', 'Favorite Places')}`
        )
      )
    ),

    // ========================================================================
    // BUBBLE 3: "{UserNameChoiceInsert1}'s Health Documents" Bubble
    // Password Protected Vault for My Documents, Family Documents, and Health ID
    // ========================================================================
    h(
      'div',
      {
        id: 'UserHealthDocumentsBubble1',
        className: 'bg-white rounded-[32px] p-6 border-[2.5px] shadow-sm space-y-4',
        style: { borderColor: '#CF366C' }
      },
      h(
        'div',
        { className: 'text-center space-y-1' },
        h(
          'h3',
          {
            className: 'text-xl sm:text-2xl font-black',
            style: { color: '#9F133A' }
          },
          `${UserNameChoiceInsert1}'s ${tr('healthDocumentsTitleSuffix', 'Health Documents')}`
        ),
        h(
          'div',
          {
            className:
              'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black bg-[#FFF0FA] text-[11px] font-black text-[#9F133A]'
          },
          renderNeonPinkHeartLockIcon(18),
          h('span', null, 'Password Always Required to Open')
        )
      ),

      // 3 Favoritable Buttons that trigger the required Password Gate before opening that section
      h(
        'div',
        { className: 'flex flex-col items-center gap-3 pt-1' },
        sortedDocCategories.map((cat) => {
          const isFav = Boolean(favState.docFavTimestamps && favState.docFavTimestamps[cat.id]);
          return h(
            'div',
            {
              key: `preview-${cat.id}`,
              onClick: () => handleRequestOpenHealthDocs(cat.id),
              className:
                'w-full max-w-md px-5 py-3.5 rounded-full border-[2.5px] flex items-center justify-between gap-3 shadow-sm cursor-pointer transition-transform active:scale-[0.99]',
              style: {
                borderColor: '#CF366C',
                backgroundColor: '#FFF5FA'
              }
            },
            h(
              'div',
              { className: 'flex items-center gap-3 min-w-0' },
              renderFavoriteStarIcon(isFav, () => toggleDocCategoryFavoriteStar(cat.id)),
              h(
                'span',
                {
                  className: 'text-base sm:text-lg font-black leading-tight truncate',
                  style: { color: '#9F133A' }
                },
                cat.label
              )
            ),
            renderNeonPinkHeartLockIcon(24)
          );
        })
      )
    )
  );
}
