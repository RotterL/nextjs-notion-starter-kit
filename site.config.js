module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'f0e89f6361344d9f88032bbef1abd7b9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '香草杏仁',
  domain: 'xcxr.site',
  author: 'RotterL',

  // open graph metadata (optional)
   description: '基础医学实验技术学习',
   socialImageTitle: 'Rotterl',
   socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'RotterL/biotechcomments',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
   pageUrlOverrides: {
     '/biotech': 'f0e89f6361344d9f88032bbef1abd7b9'
   }
  // pageUrlOverrides: true
}
