
import React from 'react';
import type { Topic } from './types';
import { FrameworkIcon, StylingIcon, ComponentIcon, ThemeIcon, ScaleIcon, CICDIcon } from './components/Icons';

export const TOPICS: Topic[] = [
  {
    id: 'tech-stack',
    title: 'Frontend Technology Stack',
    icon: React.createElement(FrameworkIcon),
    content: [
      {
        heading: '1. Framework Selection: The Core Decision',
        text: 'Your choice of frontend framework largely dictates the overall architecture and developer experience. Consider the following:',
        list: [
          'Project Scale & Complexity: For small, static sites, a simple library or even vanilla JavaScript might suffice. For large, data-intensive applications, a robust framework like React, Angular, or Vue is essential.',
          'Team Expertise & Learning Curve: Leverage existing team skills where possible. If upskilling is required, consider the learning curve. Vue.js often has a gentler curve than Angular or React for newcomers.',
          'Performance Requirements: Different frameworks handle rendering and updates differently. Svelte, being a compiler, often yields smaller bundles and faster initial load times by shifting work to compile-time. React and Vue with Virtual DOM offer excellent runtime performance.',
          'Ecosystem & Community Support: A vibrant community translates to more libraries, tools, active development, and easier access to solutions for common problems. React and Angular boast massive ecosystems, while Vue and Svelte are rapidly growing.',
          'Long-Term Maintainability & Scalability: Opt for frameworks with clear architectural patterns and good documentation. TypeScript integration (native in Angular, easily integrated with React/Vue) significantly improves maintainability for larger codebases.',
        ],
      },
      {
        heading: '2. State Management: Handling Application Data',
        text: "Effective state management is crucial for complex applications. Your choice should align with your framework and the complexity of your application's data flow:",
        list: [
          "In-built Solutions: React's Context API + useReducer, Vue's Pinia/Vuex, and Svelte's stores are excellent for localized or moderately complex state.",
          'Dedicated Libraries: For large-scale applications with shared, global state, consider libraries like Redux, Zustand, Recoil, or MobX. These provide predictable state containers and dev tools.',
          'Granularity vs. Global: Balance between component-local state and global shared state. Over-relying on global state can lead to prop-drilling or complex data flows.',
        ],
      },
      {
        heading: '3. Styling Solutions: Crafting the UI',
        text: 'Consistency, reusability, and maintainability are key for styling. Various approaches exist:',
        list: [
          'CSS-in-JS: Libraries like Styled Components or Emotion allow you to write CSS directly within JavaScript components.',
          'Utility-first CSS: Tailwind CSS is a popular choice, providing low-level utility classes that can be composed to build any design.',
          'CSS Modules: This approach scopes CSS class names locally to components, preventing naming conflicts.',
          'CSS Pre-processors (Sass, Less): Provide features like variables, nesting, and mixins that extend native CSS.',
        ],
      },
      {
        heading: '4. Build Tools & Tooling Ecosystem',
        text: 'Beyond the core framework, a robust tooling setup streamlines development:',
        list: [
          'Bundlers/Build Tools: Vite is gaining popularity for its speed and simplicity. Webpack remains a powerful option for complex needs.',
          'Linters & Formatters: ESLint and Prettier enforce code quality and style consistency.',
          'Testing Libraries: Jest, React Testing Library, and Vue Test Utils are essential for ensuring application reliability.',
        ],
      },
      {
        heading: '5. Recommendation Methodology',
        text: "To make an informed decision, I recommend a structured evaluation process. Create a scoring matrix based on your project's specific criteria (e.g., performance needs, team skill set, long-term support). For critical components, consider building small Proof-of-Concept (POC) applications with your top 2-3 choices. This hands-on experience will provide invaluable insights.",
      },
    ],
  },
  {
    id: 'styling-system',
    title: 'Designing a Styling System',
    icon: React.createElement(StylingIcon),
    content: [
      {
        heading: '1. Understanding Core Styling Approaches',
        text: "It's crucial to evaluate the foundational philosophies behind different styling methods:",
        subItems: [
          {
            subHeading: 'CSS-in-JS (e.g., Styled Components, Emotion)',
            text: 'Concept: Styles are written directly in JavaScript, often co-located with components.\nPros: Excellent for component-based architectures, dynamic theming, colocation of logic and styles.\nCons: Potential runtime performance overhead, increased bundle size if not optimized.\nUse Cases: Highly dynamic UIs, design systems where themeability is critical.',
          },
          {
            subHeading: 'Utility-first CSS (e.g., Tailwind CSS)',
            text: 'Concept: Provides a vast set of low-level, single-purpose utility classes directly in your HTML/JSX.\nPros: Rapid prototyping, highly optimized output, eliminates traditional CSS naming concerns.\nCons: Can lead to verbose HTML/JSX, requires embracing a different mental model of styling.\nUse Cases: Rapid application development, teams that value speed and consistent design.',
          },
          {
            subHeading: 'CSS Modules',
            text: 'Concept: Standard CSS files where class names are automatically scoped locally by default.\nPros: Retains the familiarity of writing plain CSS, excellent encapsulation, no runtime overhead.\nCons: Less dynamic than CSS-in-JS, requires a global approach for shared variables/themes.\nUse Cases: Projects needing strong encapsulation without JavaScript styling, integrating with existing CSS.',
          },
        ],
      },
      {
        heading: '2. Establishing a Maintainable & Scalable System',
        text: 'Regardless of the chosen approach, a truly scalable system integrates several key elements:',
        list: [
          'Design Tokens: Abstract concrete values (colors, spacing) into named tokens. These act as the single source of truth.',
          'Component-Based Styling: Encourage styles to be intrinsically tied to components, promoting encapsulation and reusability.',
          'Theming Strategy: Define how your application will handle different themes (e.g., light/dark mode).',
          'Documentation & Guidelines: Crucial for team alignment. Document your chosen styling approach and conventions.',
          'Performance Optimization: Implement techniques like CSS purging and critical CSS extraction.',
          'Linting & Formatting: Integrate tools like Stylelint and Prettier into your CI/CD pipeline.',
        ],
      },
    ],
  },
  {
    id: 'component-library',
    title: 'Integrate with Component Library',
    icon: React.createElement(ComponentIcon),
    content: [
      {
        heading: 'Core Integration Strategy: Unification via Design Tokens',
        text: 'The most effective approach is to centralize your styling system\'s foundational elements into Design Tokens. These abstract variables (e.g., color-primary-500, spacing-md) become the definitive source for both design tools (e.g., Figma) and code.',
      },
      {
        heading: 'Key Steps',
        list: [
          'Single Source of Truth for Tokens: Define all design tokens within your styling system. These tokens should be platform-agnostic.',
          'Theming Layer Implementation: Implement a theming layer within your component library that consumes these tokens (e.g., using CSS-in-JS ThemeProvider or CSS Variables).',
          'Utility-first Framework Integration: Configure frameworks like Tailwind CSS to use your design tokens for its utility classes.',
        ],
      },
      {
        heading: 'Component-Level Integration',
        text: 'Once design tokens are accessible, components must consistently consume them.',
        list: [
          'Atomic Design Principles: Structure your component library using Atomic Design principles (Atoms, Molecules, Organisms).',
          'Consistent Styling Approach: All components within the library should adhere to the same styling methodology.',
          'Token-driven Styling: Components should directly reference design tokens for their styling, not hardcoded values.',
          'Sensible Prop-based Customization: Expose only a limited, well-defined set of props for minor visual variations.',
        ],
      },
    ],
  },
  {
    id: 'theming-strategies',
    title: 'Theming & White-labeling',
    icon: React.createElement(ThemeIcon),
    content: [
      {
        heading: 'Core Principles for a Robust Theming API',
        list: [
          'Token-based System: Abstract raw values into semantic tokens.',
          'Layered Customization: Establish a clear hierarchy: Base Theme > Variant Themes > White-label Overrides.',
          'Performance-First Design: Ensure theme application and switching are lightweight.',
          'Maintainability & Predictability: The system should be easy to understand, extend, and debug.',
        ],
      },
      {
        heading: 'Theming Architecture & Technical Implementation',
        text: 'A hybrid approach is often most robust. Use Design Tokens as the single source of truth, which then generates CSS Variables for runtime theming. Supplement this with a CSS-in-JS solution for components to consume these variables and handle any complex, programmatic styling logic.',
        subItems: [
          {
            subHeading: 'CSS Variables (Custom Properties)',
            text: 'Pros: Native browser support, highly performant, dynamic at runtime.\nCons: Requires a fallback strategy for very old browsers.',
          },
          {
            subHeading: 'JavaScript-Based Theming (CSS-in-JS)',
            text: 'Pros: Full power of JavaScript for theme composition, conditional styling, and logic.\nCons: Potential for larger bundle sizes and runtime overhead if not optimized.',
          },
          {
            subHeading: 'Design Token Tools (e.g., Style Dictionary)',
            text: 'Pros: Single source of truth for design tokens across platforms. Enforces consistency.\nCons: Adds a build-time step.',
          },
        ],
      },
      {
        heading: 'White-labeling Specifics',
        list: [
          'Theme Provider Pattern: Expose a ThemeProvider component that takes a theme object as a prop.',
          'Deep Merging: Ensure your theme provider performs a deep merge of the white-label theme object with the base theme.',
          'Dynamic Loading: Consider dynamically loading theme configurations based on a URL parameter, hostname, or user\'s organization ID.',
          'Version Control: Manage white-label themes in a version-controlled repository.',
        ],
      },
    ],
  },
  {
    id: 'scaling-themes',
    title: 'Scaling Theme Management',
    icon: React.createElement(ScaleIcon),
    content: [
      {
        heading: '1. Modular Theme Architecture',
        text: 'To effectively manage many brands, a layered, modular approach is paramount.',
        list: [
          'Base Theme/Design System: Establish a foundational theme that contains the core design system.',
          'Brand-Specific Overrides: Each brand should extend or override the base theme using CSS Custom Properties or Sass/Less variables.',
          'Component Overrides: For components requiring structural changes, swap out the base component with a brand-specific variant.',
          'Design Tokens: Implement a centralized system for design tokens (e.g., using tools like Style Dictionary).',
        ],
      },
      {
        heading: '2. Versioning and Release Management',
        list: [
          'Semantic Versioning for Themes: Treat themes as software artifacts (MAJOR.MINOR.PATCH).',
          'Dedicated Repositories or Monorepo: Manage themes in dedicated packages within a monorepo or in their own repositories.',
          'CI/CD Pipelines for Themes: Automate the build, test, and deployment of themes.',
          'Rollback Strategy: Ensure you have mechanisms to quickly revert to previous theme versions.',
        ],
      },
      {
        heading: '3. Deployment and Delivery Strategies',
        list: [
          'Dynamic Theme Loading: Load themes at runtime based on the context (e.g., domain, tenant ID).',
          'Server-Side Rendering (SSR) Integration: Ensure the correct theme is applied on the server to prevent FOUC.',
          'CDN Delivery: Host theme assets on a Content Delivery Network for global performance.',
          'Bundling Optimization: Only ship the necessary CSS for each brand using tools like PurgeCSS.',
        ],
      },
    ],
  },
  {
    id: 'versioning-cicd',
    title: 'Advanced Versioning & CI/CD',
    icon: React.createElement(CICDIcon),
    content: [
      {
        heading: '1. Theme Versioning Strategies',
        list: [
          'Semantic Versioning (SemVer): Apply MAJOR.MINOR.PATCH principles to your themes.',
          'Monorepo vs. Polyrepo: Choose a repository strategy that fits your team structure and workflow.',
          'Git Tagging: Utilize Git tags (vX.Y.Z) on your theme repositories to mark specific release versions.',
          'Branching Strategy: Employ a clear branching strategy like Gitflow or GitHub Flow.',
        ],
      },
      {
        heading: '2. CI/CD Pipelines for Theming',
        text: 'Automated pipelines streamline the process from theme development to deployment.',
        list: [
          'Build Steps: Lint, compile, generate tokens, and create versioned packages.',
          'Artifact Storage: Publish theme packages to an artifact registry (e.g., npm, S3).',
          'Deployment Strategies: Use atomic deployments, and consider canary releases or feature flags for major updates.',
          'Rollback Procedures: Implement clear, automated rollback mechanisms.',
        ],
      },
      {
        heading: '3. Automated Testing for Multi-Brand Theme Deployments',
        text: 'Automated testing is paramount for catching regressions across diverse brands.',
        list: [
          'Visual Regression Testing (VRT): Essential for comparing screenshots against a baseline. Use tools like Chromatic or Percy.',
          'Accessibility Testing (A11y): Ensure themes adhere to WCAG standards with tools like axe-core.',
          'Performance Testing: Monitor bundle size and rendering performance with tools like Lighthouse CI.',
          'Unit/Integration Testing: Test design tokens and theme utility functions.',
        ],
      },
    ],
  },
];
