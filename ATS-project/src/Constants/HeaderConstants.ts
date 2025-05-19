export const header_menue = [
  {
    label: 'AST Explorer',
    type: 'title',
  },
  // {
  //   label: 'Snippet',
  //   icon: 'code',
  //   type: 'button',
  //   action: 'openSnippet',
  // },
  // {
  //   label: 'Save',
  //   icon: 'save',
  //   type: 'button',
  //   action: 'saveSnippet',
  // },
  {
    label: 'JavaScript',
    icon: 'js',
    type: 'dropdown',
    isPopoverVisible: false,
    options: ['JavaScript', 'TypeScript', 'Flow'],
    action: 'selectLanguage',
  },
  // {
  //   label: 'acorn',
  //   icon: 'code',
  //   type: 'dropdown',
  //   options: ['acorn', 'babel', 'espree', 'typescript'],
  //   action: 'selectParser',
  // },
  // {
  //   label: 'Transform',
  //   type: 'toggle',
  //   valueKey: 'isTransformEnabled',
  //   icon: 'switch',
  // },
  {
    label: 'default',
    icon: 'keyboard',
    type: 'dropdown',
    isPopoverVisible: false,
    options: ['default', 'custom', 'plugin'],
    action: 'selectTransformPreset',
  },
  // {
  //   label: 'Help',
  //   icon: 'help',
  //   type: 'button',
  //   action: 'openHelp',
  // },
];
