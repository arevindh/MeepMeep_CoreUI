export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-screen-desktop',
  },
  {
    title: true,
    name: 'Network Tools'
  },
  {
    name: 'Speedtest',
    url: '',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Test Now',
        url: '/speedtest/live',
        icon: 'icon-speedometer'
      },
      {
        name: 'History',
        url: '/speedtest/history',
        icon: 'icon-list'
      }
      
    ]
  },

  // {
  //   title: true,
  //   name: 'UI elements'
  // },
  // {
  //   name: 'Components',
  //   url: '/components',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/components/buttons',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Social Buttons',
  //       url: '/components/social-buttons',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Cards',
  //       url: '/components/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/components/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/components/modals',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/components/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/components/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/components/tabs',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  {
    divider: true
  },
  {
    title: true,
    name: 'Configuration',
  },
  {
    name: 'Setttings',
    url: '/settings',
    icon: 'icon-star'
   
  },
  
  {
    name: 'Support Us on gihub',
    url: 'https://github.com/deathbybandaid/MeepMeep',
    icon: 'icon-social-github',
    class: 'mt-auto',
    variant: 'success'
  }
];
