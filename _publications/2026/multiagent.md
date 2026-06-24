---
title:          "Multi-agent Collaboration with State Management"
date:           2026-05-08
selected:       True
# pub:            "arXiv"
# pub_pre:        "Submitted to NeurIPS 2026"
pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "May 2026"
semantic_scholar_id: b9413f25efb07e4e3575c649bbc33bb4c2a08fcf  # use this to retrieve citation count
abstract: >-
  Recent advances in multi-agent systems have shown great potential for solving complex tasks. However, when multiple agents edit a shared codebase concurrently, their changes can silently conflict and inconsistent views lead to integration failures. Existing multi-agent systems address this through workspace isolation (e.g., one git worktree per agent), but this defers conflict resolution to a post-hoc merge step where recovery is expensive. In this paper, we propose STORM, i.e., STate-ORiented Management for multi-agent collaboration. Specifically, STORM manages agent states by mediating their interactions with the shared workspace, ensuring that each agent operates on a consistent view of the codebase and that conflicting edits are detected and resolved at write time.We evaluate STORM on Commit0 and PaperBench across multiple LLMs. STORM outperforms the git-worktree-based multi-agent baseline by +18.7 on Commit0-Lite and +1.4 on PaperBench, while achieving comparable or better cost efficiency. Combined with single-agent runs, STORM reaches highest scores of 87.6 and 78.2 on the two benchmarks respectively, suggesting that explicit state management is a more effective foundation for multi-agent collaboration than workspace isolation. STORM can also be plugged into any multi-agent system.
cover:          /assets/images/covers/multiagent.png
authors:
  - Mengyang Liu
  - Taozhi Chen
  - Zhenhua Xu
  - Xue Jiang
  - Yihong Dong
links:
  Paper: https://arxiv.org/pdf/2605.20563
  Code: https://github.com/dreamyang-liu/STORM
  alphaXiv: https://www.alphaxiv.org/abs/2605.20563
---
