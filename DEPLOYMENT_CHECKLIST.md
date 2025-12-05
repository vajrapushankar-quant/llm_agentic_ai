# Deployment Checklist - Fix "output: export" Error

## The Error
```
Error: "next start" does not work with "output: export" configuration.
```

This means Digital Ocean is still seeing the old configuration.

## Quick Fix Steps

### Step 1: Verify Local Changes
✅ Your local `next.config.ts` is correct (no `output: 'export'`)
✅ The file has been saved

### Step 2: Commit and Push Changes

**If using Git:**

1. **Check git status:**
   ```bash
   git status
   ```

2. **If `next.config.ts` shows as modified, commit it:**
   ```bash
   git add next.config.ts
   git commit -m "Remove output: export to enable web app deployment"
   git push
   ```

3. **If already committed, just push:**
   ```bash
   git push
   ```

### Step 3: Trigger Rebuild in Digital Ocean

1. Go to Digital Ocean App Platform
2. Open your app
3. Go to the **Web Service** component
4. Click **"Actions"** → **"Force Rebuild and Deploy"**
   OR
   Click **"Settings"** → **"Redeploy"**

### Step 4: Verify Build

After rebuild, check the build logs:
- Should NOT see "output: export" error
- Should see successful build
- Should see "✓ Starting..." without errors

## Alternative: Manual Verification

If the error persists, verify the deployed code:

1. Check if Digital Ocean is pulling from the correct branch
2. Verify the repository connection
3. Check if there's a build cache that needs clearing

## Expected Result

After pushing and rebuilding:
- ✅ No "output: export" error
- ✅ Server starts successfully
- ✅ API routes work
- ✅ Payment processing works

## If Still Failing

If you still see the error after pushing:
1. Check which branch Digital Ocean is using
2. Verify the commit was pushed successfully
3. Try clearing build cache in Digital Ocean
4. Check if there are multiple `next.config.ts` files

