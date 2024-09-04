This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Ensure engine compatibility and stability at scale

Add a .nvmrc file at the root level of your project and add the Node.js version number that you want this project to use.

In this case, Node has been set to v18: `18.17.0`.

You should also configure your package manager — in this case, npm — to strictly manage dependency usage for team members.

Create a new file called npmrc and add the following code: `engine-strict=true`

Now, go to the package.json file and add a new key-value pair:

```json
"engines": {
    "node": ">=18.17.0",
    "npm": "please-use-npm"
},
```

This will ensure your project requires Node.js version 16 and above to run, and in this case, also enforces the use of `npm` as a package manager. Installing packages using `yarn/pnpm` will throw an error in this project. If you are using Yarn, you can add `please-use-yarn` instead.

These measures will help ensure compatibility and stability at scale as your Next.js project grows and changes.

#### Engine Locking

It’s always a good idea to implement engine locking to ensure your project uses the same version across different environments. This will make your project less error-prone and ensure that it works as expected in both the development and production environments.

Engine locking is more of an npm feature than a Next.js feature, and it works across all npm projects. To enable this feature, all you have to do is specify a key called engines in your package.json file:

```json
"engines" : {
  "node" : "18.x"
}
```

"18.x" represents any Node version starting with 18.

You also have to create a config file for npm called .npmrc at the root level — the same level as package.json — and add this line:

`engine-strict=true`

This will make the Node project strict on the version that you specified earlier in the package.json file and will throw an error if there is a version mismatch on either the local or the production environment while installing.

Engine locking is a good practice to follow especially when working with a large team and having different environments for testing and production.
