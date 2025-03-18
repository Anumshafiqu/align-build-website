import { Component, HostListener , Renderer2} from '@angular/core';
interface MenuItem {
  label: string;
  children?: MenuItem[];
}

interface LogoCategory {
  name: string;
  subcategories?: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  popularKeywords: string[] = [
    '3D', 'Animal', 'Bird', 'Camera', 'Car', 'Circle', 'Crown', 'Eagle',
    'Fire', 'Font', 'Heart', 'House', 'King', 'Leaf', 'Letter', 'Mascot',
    'Minimalist', 'Modern', 'Queen', 'Shield', 'Simple', 'Text', 'Tree', 'Vintage'
  ];

  topIndustries: string[] = [
    'App', 'Architecture', 'Beauty', 'Brand', 'Business', 'Company', 'Construction',
    'DJ', 'Doctor', 'Esports', 'Fashion', 'Fitness', 'Food', 'Gaming', 'Instagram',
    'Medical', 'Music', 'Photography', 'Real Estate', 'Restaurant', 'Social Media',
    'Sports', 'Technology', 'Travel'
  ];
    // Logo Dropdown Data
    logoKeywords: string[] = [
      '3D', 'Colorful', 'Company', 'Cool', 'Creative', 'Cute', 'Elegant',
      'Luxury', 'Minimal', 'Modern', 'Premium', 'Professional', 'Simple', 'Unique'
    ];
  
    logoIndustries: string[] = [
      'Bakery', 'Barber', 'Beauty', 'Cleaning', 'Cleaning Service', 'Construction',
      'Electrician', 'Handyman', 'Insurance', 'Landscaping', 'Lawyer', 'Photography',
      'Real Estate', 'Restaurant'
    ];
  
    // Business Card Dropdown Data
    businessKeywords: string[] = [
      '3D', 'Colorful', 'Company', 'Cool', 'Creative', 'Cute', 'Elegant',
      'Luxury', 'Minimal', 'Modern', 'Premium', 'Professional', 'Simple', 'Unique'
    ];
  
    businessIndustries: string[] = [
      'Bakery', 'Barber', 'Beauty', 'Cleaning', 'Cleaning Service', 'Construction',
      'Electrician', 'Handyman', 'Insurance', 'Landscaping', 'Lawyer', 'Photography',
      'Real Estate', 'Restaurant'
    ];
      // Social Media Covers
  socialCovers: string[] = [
    'Facebook Covers', 'YouTube Banners', 'Twitch Banners', 'LinkedIn Banners',
    'Facebook Event Covers', 'SoundCloud Banners', 'Twitter Headers',
    'Pinterest Board Covers', 'Zoom Backgrounds', 'Etsy Banners', 'Tumblr Banners'
  ];

  // Social Media Posts
  socialPosts: string[] = [
    'Instagram Posts', 'Instagram Stories', 'Facebook Posts', 'Facebook Stories',
    'Facebook Ads', 'Twitter Posts', 'LinkedIn Posts', 'Pinterest Pins',
    'TikTok Videos', 'Instagram Reels', 'YouTube Shorts', 'YouTube Videos',
    'Whatsapp Stories', 'Snapchat Designs'
  ];

  // Social Media Profile Pictures
  socialProfiles: string[] = [
    'Facebook Profile Pictures', 'Instagram Profile Pictures', 'LinkedIn Profile Pictures',
    'Pinterest Profile Pictures', 'SoundCloud Profile Pictures', 'Tumblr Profile Pictures',
    'Twitch Profile Pictures', 'YouTube Channel Icons'
  ];
  socailIndustries: string[] = [
    'mission & purpose',
    'team',
    'careers',
  ];
  starthere: string[] = [
    'home design',
  ];
  learnabout: string[] = [
    'dream home evulation',
    'design journal & articles',
    'dream home workshop',
    'dream home book',
  ];

  moreItems: string[] = [
    'Email Signatures',
    'Letterheads',
    'Posters',
    'Flyers',
    'Invoices',
    'Menus',
    'Postcards',
    'Gift Certificates',
    'Invitations',
    'Thank You Cards',
    'Videos',
    'Animations',
    'T-Shirts',
    'QR Codes',
    'Presentations'
  ];
  aiTools: string[] = [
    'AI Logo Generator',
    'AI Background Remover',
    'AI Business Name Generator',
    'AI Domain Name Generator',
    'AI Website Generator',
    'AI Business Card Generator',
    'AI Poster Generator',
    'AI Flyer Generator',
    'AI Link In Bio Generator'
  ];
  templates = [
    { image: 'https://preview.brand.page/preview/template/e46ffa77-b50d-4256-aab6-dbf32ce14668/logo-template/5d8baabb-dab0-4ff9-9ac9-76a71ca409bd?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/0f117c17-dd62-42ee-a855-d7407de48304/logo-template/9ea33333-53ec-446f-a21c-5cfb10546e1b?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/f7555e10-b9b4-4c3a-a1c5-d60825c83f29/logo-template/aa1a4340-71c2-4451-b04c-d91d6afe8184?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/b7c41bc2-c370-4ed0-abf5-19d78d2cac0f/logo-template/691b5898-c4eb-480c-b9f5-ff74bf966a84?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/31231329-dba2-4305-92e7-f20f9bbdbd1c/logo-template/5740aa54-360f-49b7-a0fe-28fb5fed63b2?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/f0b614bf-2706-42dc-ae56-24d3fa30369b/logo-template/deb001bc-d8a9-49df-8b0e-dcfd74ecc7dc?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/2a7770fd-3195-44a3-a130-53f313b2dd1a/logo-template/08a8452c-2711-4ab2-b935-65c8d2270ec8?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/096dedda-b8fe-4a86-8eb1-05b69f959800/logo-template/5d1b3c03-2c1c-48e2-b697-578b04a7fa27?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/410b0f5e-5fa6-448b-90cd-441519927882/logo-template/c7d1b6e3-541a-473a-ad31-e9dc8ad3a218?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/19257863-c287-42c8-a03a-c2b67786d768/logo-template/2d1dd7b3-0255-4889-a6e9-3b32044c2556?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/edf91801-d30b-48ba-a2ea-b6da04c1e5d2/logo-template/4d426a96-702a-40ba-85fe-991f0cd1f294?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/5c28a385-272f-4777-b39e-5562813f9fee/logo-template/60e57296-16ad-4c79-b2e8-b30113fbaaf0?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/bb311ba6-d5cd-436d-8aa3-2eb7886ce45b/logo-template/6a4ffe67-6141-4b0a-97e0-9989b0c7cc72?deviceType=brandsite-desktop&logoTemplateVersion=1'},
    { image: 'https://preview.brand.page/preview/template/2ba20b5f-5121-455a-b9d5-9f8eacbc37c7/logo-template/ab3254e2-e98b-4c20-9b3f-1b02f41152d3?deviceType=brandsite-desktop&logoTemplateVersion=2'},
    { image: 'https://preview.brand.page/preview/template/20034dee-5b31-43d0-a446-8031a7a577ef/logo-template/3f1aff3a-5e34-4766-9325-10ad913e6cea?deviceType=brandsite-desktop&logoTemplateVersion=1'}
  ]; 
  
  // testimonialss
  testimonials = [
    {
      text: "I am so glad that I came across this website! I am in the middle of creating my business from the bottom up. This company has made the first steps extremely easy for me and I just know that it will continue to support me throughout my journey.",
      name: "Tamara Brown",
      stars: [1, 2, 3, 4, 5]
    },
    {
      text: "Made my logo and banner decision a lot easier and not having to pay someone hundreds is awesome!",
      name: "GuysDetailing",
      stars: [1, 2, 3, 4, 5]
    },
    {
      text: "Great suggestions. Very easy to use. I got many alternative solutions for the business logo. Also, it was very easy to change colors, font, and more while creating the logo. Very affordable",
      name: "Glenda",
      stars: [1, 2, 3, 4, 5]
    },
    {
      text: "Tons of template options for logo creation. Easy to use process for creating a logo.",
      name: "Pil Hill Painting co",
      stars: [1, 2, 3, 4, 5]
    },
    {
      text: "I was surprised at how user friendly it was, and being a first-time business owner I wasn't overwhelmed at all  because now I've signed up to the plan including website development. I have everything I need at my fingertips to add  my logo to my website, business cards, packaging, and stationery. I love it.",
      name: "John Doe",
      stars: [1, 2, 3, 4, 5]
    },
    {
      text: "What was great was the many options that I had to create my logo. Simple to create a professional logo in a matter  of seconds. I highly recommend for anyone to experience the opportunity to create a professional logo—look no further.",
      name: "Sarah Lee",
      stars: [1, 2, 3, 4, 5]
    },
    {
      text: "Extremely helpful! So many templates and fonts to choose from — making design much simpler.",
      name: "John Doe",
      stars: [1, 2, 3, 4, 5]
    },
    {
      text: "I am not very tech-savvy, and your staff has been so helpful. They have answered all my questions and were so gracious. I love the design of my logo and my business cards. I'm beyond happy with my experience, and I will tell everyone I know about you.",
      name: "Sarah Lee",
      stars: [1, 2, 3, 4, 5]
    }
  ];











  mobileMenuOpen = false;
  // menuItems = [
  //   { name: 'Logos', open: false },
  //   { name: 'Business Cards', open: false },
  //   { name: 'Websites', open: false },
  //   { name: 'AI', open: false }
  // ];

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleDropdown( menu: string) {
    // item.open = !item.open;
    this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  }


  isMenuOpen = false; // Controls visibility of the menu

  // Define the main menu structure
  mainMenu: MenuItem[] = [
    // { label: 'Logos', children: [{ label: '3D' }, { label: 'Minimal' },{ label: 'Animal' },
    //   { label: 'Camera' },{ label: 'Car' },
    //   { label: 'Car' },
    //   { label: 'Circle' },{ label: 'Crown' },
    //   { label: 'Eagle' }] },

    { 
      label: 'Logos', 
      children: [
        { 
          label: 'Popular keywords', 
          children: [
            { label: '3D' }, 
            { label: 'Minimal' }, 
            { label: 'Modern' }, 
            { label: 'Luxury' }, 
            { label: 'Professional' }
          ] 
        },
        { 
          label: 'Top industries', 
          children: [
            { label: 'Animal' }, 
            { label: 'Camera' }, 
            { label: 'Car' }, 
            { label: 'Circle' }, 
            { label: 'Crown' }, 
            { label: 'Eagle' }
          ] 
        }
      ] 
    },
    { 
      label: 'Business Cards', 
      children: [
        { 
          label: 'Popular Keywords',
          children: [
            { label: '3D' },
            { label: 'Colorful' },
            { label: 'Company' },
            { label: 'Cool' },
            { label: 'Creative' },
            { label: 'Cute' },
            { label: 'Elegant' },
            { label: 'Luxury' },
            { label: 'Minimal' },
            { label: 'Modern' },
            { label: 'Premium' },
            { label: 'Professional' },
            { label: 'Simple' },
            { label: 'Unique' }
          ]
        },
        { 
          label: 'Top Industries', 
          children: [
            { label: 'View Child Pages Of AI' },
            { label: 'Popular Keywords' },
            { label: 'Top Industries' },
            { label: 'Bakery' },
            { label: 'Barber' },
            { label: 'Beauty' },
            { label: 'Cleaning' },
            { label: 'Cleaning Service' },
            { label: 'Construction' },
            { label: 'Electrician' },
            { label: 'Handyman' },
            { label: 'Insurance' },
            { label: 'Landscaping' },
            { label: 'Lawyer' },
            { label: 'Photography' },
            { label: 'Real Estate' },
            { label: 'Restaurant' }
          ]
        }
      ]
    },
    { 
      label: 'Social', 
      children: [
        { 
          label: 'Social Media Covers', 
          children: [
            { label: 'Facebook Covers' },
            { label: 'YouTube Banners' },
            { label: 'Twitch Banners' },
            { label: 'LinkedIn Banners' },
            { label: 'Facebook Event Covers' },
            { label: 'SoundCloud Banners' },
            { label: 'Twitter Headers' },
            { label: 'Pinterest Board Covers' },
            { label: 'Zoom Backgrounds' },
            { label: 'Etsy Banners' },
            { label: 'Tumblr Banners' }
          ]
        },
        { 
          label: 'Social Media Posts', 
          children: [
            { label: 'Instagram Posts' },
            { label: 'Instagram Stories' },
            { label: 'Facebook Posts' },
            { label: 'Facebook Stories' },
            { label: 'Facebook Ads' },
            { label: 'Twitter Posts' },
            { label: 'LinkedIn Posts' },
            { label: 'Pinterest Pins' },
            { label: 'TikTok Videos' },
            { label: 'Instagram Reels' },
            { label: 'YouTube Shorts' },
            { label: 'YouTube Videos' },
            { label: 'WhatsApp Stories' },
            { label: 'Snapchat Designs' }
          ]
        },
        { 
          label: 'Social Media Profile Pictures', 
          children: [
            { label: 'Facebook Profile Pictures' },
            { label: 'Instagram Profile Pictures' },
            { label: 'LinkedIn Profile Pictures' },
            { label: 'Pinterest Profile Pictures' },
            { label: 'SoundCloud Profile Pictures' },
            { label: 'Tumblr Profile Pictures' },
            { label: 'Twitch Profile Pictures' },
            { label: 'YouTube Channel Icons' }
          ]
        }
      ]
    },
    { 
      label: 'Websites',
      children: [
        { label: 'View Child Pages Of Websites' },
        { label: 'Website Builder' },
        { label: 'Link in Bio' },
        { label: 'Digital Business Cards' },
        { label: 'Domain Names' }
      ]
    },
    { 
      label: 'More', 
      children: [
        { label: 'Popular Keywords' }, 
        { label: 'Top Industries' },
        { label: 'Email Signatures' },
        { label: 'Letterheads' },
        { label: 'Posters' },
        { label: 'Flyers' },
        { label: 'Invoices' },
        { label: 'Menus' },
        { label: 'Postcards' },
        { label: 'Gift Certificates' },
        { label: 'Invitations' },
        { label: 'Thank You Cards' },
        { label: 'Videos' },
        { label: 'Animations' },
        { label: 'T-Shirts' },
        { label: 'QR Codes' },
        { label: 'Presentations' }
      ] 
    },
    { 
      label: 'AI',
      children: [
        { label: 'AI Logo Generator' },
        { label: 'AI Background Remover' },
        { label: 'AI Business Name Generator' },
        { label: 'AI Domain Name Generator' },
        { label: 'AI Website Generator' },
        { label: 'AI Business Card Generator' },
        { label: 'AI Poster Generator' },
        { label: 'AI Flyer Generator' },
        { label: 'AI Link In Bio Generator' }
      ]
    }
  ];

  currentMenu: MenuItem[] = this.mainMenu;
  menuStack: MenuItem[][] = [];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Show or hide menu
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateTo(item: MenuItem) {
    if (item.children) {
      this.menuStack.push(this.currentMenu); // Save previous menu
      this.currentMenu = item.children; // Show sub-menu
    }
  }

  goBack() {
    if (this.menuStack.length) {
      this.currentMenu = this.menuStack.pop()!; // Go back to previous menu
    }
  }
 
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    
 
  }
  hover: boolean = false;
  scrolled: boolean = false;

  isSidebarOpen = false;
  dropdownOpen: string | null = null;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // toggleDropdown(menu: string) {
  //   this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  // }
 







}
