import React from 'react'
import './GitHub.css'
import Searchbar from '../../components/Searchbar'
import ReactMarkdown from 'react-markdown';
import { IoDownloadOutline } from "react-icons/io5";
import { IoIosShareAlt } from "react-icons/io";

const markdown = `
## SETUP
Configuring user information, initializing and cloning repositories

  \`\`\`
  git config --global user.name “[firstname lastname]”
  \`\`\`
  set a name that is identifiable for credit when review version history
  \`\`\`
  git config --global user.email “[valid-email]”
  \`\`\`
  set an email address that will be associated with each history marker
  \`\`\`
  git config --global color.ui auto
  \`\`\`
 set automatic command line coloring for Git for easy reviewing

***
## SETUP & INIT
Configuring user information, initializing and cloning repositories
  \`\`\`
  git init
  \`\`\`
  initialize an existing directory as a Git repository
  \`\`\`
  git clone [url]
  \`\`\`
  retrieve an entire repository from a hosted location via URL

***
## STAGE & SNAPSHOT  
Working with snapshots and the Git staging area
  \`\`\`
  git status
  \`\`\`
  show modified files in working directory, staged for your next commit
  \`\`\`
  git add [file]
  \`\`\`
  add a file as it looks now to your next commit (staging area)
  \`\`\`
  git add .
  \`\`\`
  add all modified files to the staging area
  \`\`\`
  git reset [file]
  \`\`\`
  unstage a file while retaining the changes in working directory
  \`\`\`
  git diff
  \`\`\`
  diff of what is changed but not staged
  \`\`\`
  git diff --staged
  \`\`\`
  diff of what is staged but not yet committed
  \`\`\`
  git commit -m “[descriptive message]”
  \`\`\`
  commit your staged content as a new commit snapshot

***
## BRANCH & MERGE
Isolating work in branches, changing context, and integrating changes

  \`\`\`
  git branch
  \`\`\`
  list your branches. a * will appear next to the currently active branch
  \`\`\`
  git branch [branch-name]
  \`\`\`
  create a new branch at the current commit
  \`\`\`
  git checkout -b [branch-name]
  \`\`\`
  create a new branch and check it out
  \`\`\`
  git merge [branch]
  \`\`\`
  merge the specified branch’s history into the current one
  \`\`\`
  git log
  \`\`\`
  show all commits in the current branch’s history

*** 
## INSPECT & COMPARE
Examining logs, diffs and object information

  \`\`\`
  git log
  \`\`\`
  show the commit history for the currently active branch
  \`\`\`
  git log branchB..branchA
  \`\`\`
  show the commits on branchA that are not on branchB
  \`\`\`
  git diff branchB...branchA
  \`\`\`
  show the diff of what is in branchA that is not in branchB
  \`\`\`
  git log --follow [file]
  \`\`\`
  show the commits that changed file, even across renames


***
## SHARE & UPDATE
Retrieving updates from another repository and updating local repos

  \`\`\`
  git remote add [alias] [url]
  \`\`\`
  add a git URL as an alias
  \`\`\`
  git fetch [alias]
  \`\`\`
  fetch down all the branches from that Git remote
  \`\`\`
  git merge [alias]/[branch]
  \`\`\`
  merge a remote branch into your current branch to bring it up to date
  \`\`\`
  git push [alias] [branch], e.g. git origin main
  \`\`\`
  Transmit local branch commits to the remote repository branch
  \`\`\`
  git pull
  \`\`\`
  fetch and merge any commits from the tracking remote branch
`;

const GitHub = () => {

  function downloadPDF(pdfUrl) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'cheat-sheet-git.pdf'; // Gib den Dateinamen für den Download an
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleDownload = () => {
    const pdfUrl = "./cheat-sheet-git.pdf";
    downloadPDF(pdfUrl);
  }
  

  return (
    <div className="github-container">
      <div className="github-header">
        <h1>GitHub</h1>
        <div className="downloadShare-buttons">
          <IoDownloadOutline id="downloadButton" className="download-icon" size={30} onClick={handleDownload}/>
          <IoIosShareAlt id="shareButton" className="share-icon" size={30}/>
        </div>
        <div className="searchbar-container">
            <Searchbar />
        </div>
      </div>
        <div className="github-content">
            <ReactMarkdown>
                {markdown}
            </ReactMarkdown>
        </div>        
    </div>
  )
}

export default GitHub
