# GitHub Workflow Guide for Complete Beginners

A step-by-step guide to pushing your code from development to production (master branch) on GitHub.

---

## 🎯 What You'll Learn

- What GitHub branches are and why they matter
- How to push code to GitHub (development → master)
- How to make your changes go live on Cloudflare
- Simple commands you can copy and paste

**Time needed:** 10 minutes

---

## 📚 Understanding Branches (Simple Explanation)

Think of GitHub branches like different versions of your website:

**Development Branch** = Your testing/work-in-progress version
- This is where you make changes and test them
- Safe to experiment
- Not visible to public

**Master Branch** = Your live/production version  
- This is what visitors see on your website
- Should always be stable and working
- Only push here when you're sure everything works

**Analogy:** Development is your draft, Master is your published book.

---

## 🖥️ Where to Run Commands

You have **two options** for running Git commands:

### Option 1: GitHub Website (Easiest, No Commands)

1. Go to [https://github.com/frametellstudios/frametell](https://github.com/frametellstudios/frametell)
2. Click on **Pull requests** tab
3. Click **New pull request**
4. Select: `base: master` ← `compare: development`
5. Click **Create pull request**
6. Add title: "Deploy latest changes to production"
7. Click **Create pull request** again
8. Click **Merge pull request**
9. Click **Confirm merge**
10. Done! Changes are now in master branch

**This is the safest method for beginners!**

### Option 2: Command Line (For Advanced Users)

If you have Git installed on your computer, you can use terminal commands.

**On Mac:** Open Terminal app  
**On Windows:** Open Git Bash or Command Prompt  
**On Linux:** Open Terminal

---

## 🚀 Method 1: Push Development to Master (GitHub Website)

### Step 1: Check Your Current Code

1. Go to [https://github.com/frametellstudios/frametell](https://github.com/frametellstudios/frametell)
2. Look at the top left - you'll see a dropdown that says `master` or `development`
3. Click it and select **development**
4. This shows you what's in your development branch

### Step 2: Compare Branches

1. Click the **Pull requests** tab (near the top)
2. Click **New pull request** (green button, top right)
3. You'll see two dropdowns:
   - **base:** `master` (this is where changes will go)
   - **compare:** `development` (this is where changes come from)
4. GitHub will show you all the changes between branches

### Step 3: Create Pull Request

1. Review the changes shown (optional, but good practice)
2. Click **Create pull request** (green button)
3. Add a title, for example:
   ```
   Deploy mobile menu fixes and CMS updates
   ```
4. Add description (optional):
   ```
   - Fixed mobile menu full-height issue
   - Configured CMS for Cloudflare Pages
   - Updated authentication to test-repo mode
   ```
5. Click **Create pull request** again

### Step 4: Merge to Master

1. On the pull request page, scroll down
2. Click **Merge pull request** (green button)
3. Click **Confirm merge**
4. Success! Your changes are now in the master branch

### Step 5: Verify Deployment

1. Go to your Cloudflare Pages dashboard
2. Click on your **frametell** project
3. Go to **Deployments** tab
4. You should see a new deployment starting
5. Wait 2-3 minutes for it to complete
6. Visit your live site to see the changes

---

## 🚀 Method 2: Push Using Command Line

### Prerequisites

- Git installed on your computer
- Repository cloned to your computer
- Terminal/Command Prompt access

### Step 1: Check Current Branch

Open terminal and navigate to your project folder:

```bash
cd /path/to/frametell
```

Check which branch you're on:

```bash
git branch
```

You should see a `*` next to your current branch.

### Step 2: Make Sure Development is Up to Date

```bash
git checkout development
git pull origin development
```

This ensures you have the latest development code.

### Step 3: Switch to Master Branch

```bash
git checkout master
```

### Step 4: Pull Latest Master

```bash
git pull origin master
```

This gets any changes that might be in master already.

### Step 5: Merge Development into Master

```bash
git merge development
```

This brings all development changes into master.

**If you see conflicts:**
- Don't panic!
- Git will tell you which files have conflicts
- Open those files and look for `<<<<<<<` markers
- Choose which version to keep
- Save the files
- Run: `git add .` then `git commit -m "Resolved conflicts"`

### Step 6: Push to GitHub

```bash
git push origin master
```

This uploads your master branch to GitHub.

### Step 7: Switch Back to Development

```bash
git checkout development
```

Always work in development, not master!

---

## 🔄 Complete Workflow Example

Here's the full process from start to finish:

### Scenario: You Made Changes and Want to Go Live

**What happened:**
- I (the AI) made changes to your code
- Changes were pushed to `development` branch
- You tested them and they work
- Now you want them live on your website

**Steps:**

1. **Verify development works**
   - Check your Manus preview URL
   - Make sure everything looks good
   - Test on mobile and desktop

2. **Push development to master** (choose one method):
   - **Easy way:** Use GitHub website (Method 1 above)
   - **Command line:** Use git commands (Method 2 above)

3. **Wait for Cloudflare to deploy**
   - Cloudflare automatically detects master branch changes
   - Builds and deploys your site (2-3 minutes)
   - No action needed from you!

4. **Verify live site**
   - Visit your production URL
   - Check that changes appear
   - Test functionality

5. **Done!** Your changes are live 🎉

---

## 📋 Quick Reference Commands

### Check Status
```bash
git status                    # See what branch you're on and what's changed
git branch                    # List all branches
```

### Switch Branches
```bash
git checkout development      # Switch to development
git checkout master           # Switch to master
```

### Get Latest Code
```bash
git pull origin development   # Get latest development code
git pull origin master        # Get latest master code
```

### Merge Development to Master
```bash
git checkout master           # Switch to master first
git merge development         # Bring in development changes
git push origin master        # Upload to GitHub
```

### View History
```bash
git log                       # See recent commits
git log --oneline             # Compact view
```

---

## 🚨 Common Issues & Solutions

### "Permission Denied" Error

**Problem:** Can't push to GitHub

**Solution:**
1. Make sure you're logged into GitHub
2. Check you have write access to the repository
3. Try using GitHub website method instead

### "Merge Conflict" Error

**Problem:** Git can't automatically merge changes

**Solution:**
1. Don't panic - this is normal!
2. Open the conflicted files
3. Look for `<<<<<<<`, `=======`, `>>>>>>>` markers
4. Choose which version to keep
5. Remove the markers
6. Save files
7. Run: `git add .` then `git commit -m "Fixed conflicts"`

### "Already Up to Date" Message

**Problem:** Nothing happens when you merge

**Solution:**
- This means master already has all development changes
- No action needed!
- This is actually good news

### Changes Don't Appear on Live Site

**Problem:** Pushed to master but site unchanged

**Solution:**
1. Wait 3-5 minutes (Cloudflare needs time to build)
2. Check Cloudflare deployments tab for status
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache
5. Check if deployment failed (view logs)

---

## 🎓 Best Practices

### Do's ✅

- **Always work in development branch**
- **Test thoroughly before merging to master**
- **Write descriptive commit messages**
- **Pull before you push** (get latest changes first)
- **Merge development to master regularly** (don't let them drift apart)

### Don'ts ❌

- **Don't work directly in master branch**
- **Don't force push** (`git push --force`) unless you know what you're doing
- **Don't commit sensitive data** (passwords, API keys, etc.)
- **Don't merge untested code to master**
- **Don't panic if something goes wrong** (you can always revert)

---

## 🔄 Typical Workflow

### Daily Work

1. Make sure you're in development:
   ```bash
   git checkout development
   ```

2. Get latest changes:
   ```bash
   git pull origin development
   ```

3. Make your changes (or I make them for you)

4. Test everything works

5. When ready to go live, merge to master (use GitHub website method)

### Going Live

1. Create pull request on GitHub (development → master)
2. Review changes
3. Merge pull request
4. Wait for Cloudflare to deploy
5. Verify live site
6. Celebrate! 🎉

---

## 📞 Quick Help

### "I Just Want My Changes Live"

**Easiest method:**
1. Go to GitHub.com
2. Navigate to your repository
3. Click "Pull requests"
4. Click "New pull request"
5. Select `base: master` ← `compare: development`
6. Click "Create pull request"
7. Click "Merge pull request"
8. Done!

### "I Messed Something Up"

**Don't worry!** GitHub keeps history of everything.

1. Go to GitHub.com
2. Find the commit before your mistake
3. Click "Revert" button
4. Or ask me to help you fix it

### "I Want to Undo a Merge"

**If you just merged:**
```bash
git reset --hard HEAD~1
```

**If you already pushed:**
1. Better to create a new commit that undoes changes
2. Or ask me to help you revert properly

---

## ✅ Checklist: Pushing to Production

Use this every time you want to make changes live:

- [ ] All changes are in development branch
- [ ] Tested on Manus preview URL
- [ ] Tested on mobile device
- [ ] Tested on desktop browser
- [ ] No console errors
- [ ] All features work as expected
- [ ] Created pull request (development → master)
- [ ] Reviewed changes in pull request
- [ ] Merged pull request
- [ ] Checked Cloudflare deployment status
- [ ] Verified changes on live site
- [ ] Tested live site works correctly

---

## 🎯 Summary

**The Simple Version:**

1. **Work happens in development** (testing ground)
2. **When ready, merge to master** (production)
3. **Cloudflare automatically deploys** (no extra steps)
4. **Your site updates** (2-3 minutes)

**The Easiest Method:**

Use GitHub website to create and merge pull requests. No command line needed!

**Remember:**

- Development = Draft
- Master = Published
- Pull Request = "I want to publish my draft"
- Merge = "Yes, publish it!"

---

## 🚀 You're Ready!

You now know how to:
- ✅ Understand Git branches
- ✅ Push code from development to master
- ✅ Use GitHub website (no commands needed)
- ✅ Use command line (if you want to)
- ✅ Deploy to production
- ✅ Troubleshoot common issues

**Next time you want changes live:**
1. Make sure they're in development
2. Create pull request on GitHub
3. Merge to master
4. Wait for Cloudflare
5. Done!

---

Need help? Just ask! I can walk you through any step or do it for you.
