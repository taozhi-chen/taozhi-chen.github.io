---
title:          "EvoCoT: Overcoming the Exploration Bottleneck in Reinforcement Learning"
date:           2025-08-11
selected:       False
pub:            "arXiv"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "Aug 2025"
semantic_scholar_id: 1ae10be82a6c09b6d53b6932d764f6f34bbeb9e4  # use this to retrieve citation count
abstract: >-
  Reinforcement learning with verifiable reward (RLVR) has become a promising paradigm for post-training large language models (LLMs) to improve their reasoning capability. However, when the rollout accuracy is low on hard problems, the reward becomes sparse, limiting learning efficiency and causing exploration bottlenecks. Existing approaches either rely on teacher models for distillation or filter out difficult problems, which limits scalability or restricts reasoning improvement through exploration. <br/>
  We propose EvoCoT, a self-evolving curriculum learning framework based on two-stage chain-of-thought (CoT) reasoning optimization. EvoCoT constrains the exploration space by self-generating and verifying CoT trajectories, then gradually shortens CoT steps to expand the space in a controlled way. The framework enables LLMs to stably learn from initially unsolved hard problems under sparse rewards. We apply EvoCoT to multiple LLM families, including Qwen, DeepSeek, and Llama. Experiments show that EvoCoT enables LLMs to solve previously unsolved problems, improves reasoning capability without external CoT supervision, and is compatible with various RL fine-tuning methods. We release the source code to support future research.
cover:          /assets/images/covers/evocot.png
authors:
  - Huanyu Liu
  - Jia Li
  - Chang Yu
  - Taozhi Chen
  - Yihong Dong
  - Lecheng Wang
  - XiaoLong Hu
  - Ge Li
links:
  Code: https://github.com/gtxygyzb/EvoCoT
  Paper: https://arxiv.org/pdf/2508.07809
---
