# How to Push to GitHub

I have already initialized the local Git repository and committed all your files.

## Step 1: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Enter a repository name (e.g., `mazen-portfolio`).
3. Choose **Public** or **Private**.
4. **Do not** check "Initialize this repository with a README" (since we already have one).
5. Click **Create repository**.

## Step 2: Push Your Code
Copy the commands shown in the section **"…or push an existing repository from the command line"** and run them in your terminal.

They will look like this (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/mazen-portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel (Optional but Recommended)
1. Go to [vercel.com](https://vercel.com).
2. Sign up or log in with GitHub.
3. Click **Add New Project**.
4. Import the `mazen-portfolio` repository you just created.
5. Click **Deploy**.
