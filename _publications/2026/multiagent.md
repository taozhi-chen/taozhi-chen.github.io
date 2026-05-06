---
title:          "Multi-agent Collaboration with State Management"
date:           2026-05-08
selected:       False
# pub:            "arXiv"
# pub_pre:        "Submitted to NeurIPS 2026"
pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "May 2026"
# semantic_scholar_id: 740ff90a0ddb8fc66643e132e277ac09dc0b02cb  # use this to retrieve citation count
abstract: >-
  Recent advances in multi-agent systems have shown great potential for solving complex tasks. However, when multiple agents edit a shared codebase concurrently, their changes can silently conflict and inconsistent views lead to integration failures. Existing multi-agent systems address this through workspace isolation (e.g., one git worktree per agent), but this defers conflict resolution to a post-hoc merge step where recovery is expensive. In this paper, we propose STORM (STate-ORiented Management) for multi-agent collaboration. Specifically, STORM manages agent states by mediating their interactions with the shared workspace, ensuring that each agent operates on a consistent view of the codebase and that conflicting edits are detected and resolved at write time. We evaluate STORM on Commit0 and PaperBench across multiple LLMs. STORM consistently outperforms git worktree based multi-agent baseline on both performance and cost efficiency. STORM can be plugged into any multi-agent system, suggesting that explicit state management is a more effective foundation for multi-agent collaboration than workspace isolation.
cover:          /assets/images/covers/multiagent.png
authors:
  - Mengyang Liu
  - Taozhi Chen
  - Zhenhua Xu
  - Xue Jiang
  - Yihong Dong
links:
  # Paper: https://arxiv.org/abs/
  # Code: https://github.com/
---
