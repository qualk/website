<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">qualk's website</h1>

[![Site preview](/public/site-preview.png)](https://qualk.xyz)

Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). View the [live site](https://www.qualk.xyz) or the [components storybook](https://storybook.qualk.xyz).

## Install & run

Make sure you have `nodejs` `20.11.1` or higher and `pnpm` `8.15.4` or higher installed. Install dependencies with:

```bash
pnpm i
```

Once it's done start up a local server with:

```bash
pnpm run dev
```

To view the components storybook:

```bash
pnpm run dev:storybook
```

## Deployment

The project is set up to be quickly deployed into Cloudflare Pages:

```bash
pnpm run deploy
```

## Permissions

I'm cool with anyone using the code or parts of the code for their own site, it is open source so people can learn from it and adapt it. However, I would encourage you to modify the theme and components it to make it your own. If you are using the site's design largely unmodified, I'd appreciate being credited as the designer of the website.

I do not give permission to present any of my projects as your own (this is being actively used as my own website and these are my real projects I've worked on).

## FAQs

<details>
  <summary>How do I get the contact form to work?</summary>
  
  To get the contact form working create an AWS account and set up SES (Simple Email service). Then plug in your details into `.dev.vars.example` and rename it to `.dev.vars`. You'll also need to add these as enviroment variables in the Cloudflare dashboard for it to work in production. Or if you don't mind sending through gmail use [nodemailer](https://nodemailer.com/) instead.
</details>
