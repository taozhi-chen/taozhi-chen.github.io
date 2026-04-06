---
title:          "Think Anywhere in Code Generation"
date:           2026-03-31
selected:       True
pub:            "arXiv"
# pub_pre:        "Submitted to ACL 2026"
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "Mar 2026"
# semantic_scholar_id:   # use this to retrieve citation count
abstract: >-
  Recent advances in reasoning Large Language Models (LLMs) have primarily relied on upfront thinking, where reasoning occurs before final answer. However, this approach suffers from critical limitations in code generation, where upfront thinking is often insufficient as problems' full complexity only reveals itself during code implementation. Moreover, it cannot adaptively allocate reasoning effort throughout the code generation process where difficulty varies significantly. In this paper, we propose Think-Anywhere, a novel reasoning mechanism that enables LLMs to invoke thinking on-demand at any token position during code generation. We achieve Think-Anywhere by first teaching LLMs to imitate reasoning patterns through cold-start training, then leveraging outcome-based RL rewards to drive autonomous exploration. Extensive experiments on four mainstream code generation benchmarks (i.e., LeetCode, LiveCodeBench, HumanEval, and MBPP) show that Think-Anywhere achieves state-of-the-art performance over both existing reasoning methods and recent post-training approaches, while demonstrating consistent generalization across diverse LLMs. Our analysis further reveals that Think-Anywhere enables the model to adaptively invoke reasoning at high-entropy positions and scale its thinking frequency with problem difficulty, providing both enhanced scalability and interpretability.
cover:          /assets/images/covers/thinkanywhere.png
authors:
  - Xue Jiang
  - Tianyu Zhang
  - Mengyang Liu
  - Taozhi Chen
  - Zhenhua Xu
  - Wenpin Jiao
  - Zhi Jin
  - Ge Li
  - Yihong Dong
links:
  Paper: https://arxiv.org/pdf/2603.29957
  Code: https://github.com/jiangxxxue/Think-Anywhere
---
