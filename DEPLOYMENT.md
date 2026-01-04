# How to Deploy to Vercel

Since your project is built with **Next.js**, deploying to **Vercel** is the easiest and most recommended method. Vercel is the company behind Next.js, so the integration is seamless.

## Prerequisites

1.  **GitHub Account**: Ensure you have an account on [GitHub](https://github.com/).
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com/signup) using your GitHub account.

## Step 1: Push Your Code to GitHub

If you haven't already pushed your code to a GitHub repository, follow these steps in your terminal:

1.  **Create a new repository** on GitHub (name it `my-portfolio` or similar).
2.  **Link your local project** to the remote repository (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

*(If you already have a remote connected, just run `git push` to ensure all your latest changes are up to date.)*

## Step 2: Deploy on Vercel

1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in.
2.  **Add New Project**:
    *   Click on the **"Add New..."** button.
    *   Select **"Project"**.
3.  **Import Git Repository**:
    *   You should see a list of your GitHub repositories.
    *   Find your `my-portfolio` repository and click **"Import"**.
4.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect **Next.js**.
    *   **Root Directory**: Leave as `./`.
    *   **Build Command**: Leave as `next build` (or `npm run build`).
    *   **Output Directory**: Leave as default (`.next`).
    *   **Install Command**: Leave as `npm install`.
5.  **Environment Variables**:
    *   This project does not currently use any secret environment variables (like API keys) that impede the build, so you can skip this section.
6.  **Deploy**:
    *   Click **"Deploy"**.

## Step 3: Success!

Vercel will now take a minute or two to build your project. Once done, you will see a "Congratulations!" screen with a link to your live site (e.g., `https://your-portfolio.vercel.app`).

## Step 4: Maintenance

Whenever you want to update your live site, simply **commit and push** your changes to your GitHub `main` branch. Vercel will automatically detect the new code and trigger a re-deploy!

```bash
git add .
git commit -m "Updated my portfolio"
git push
```
