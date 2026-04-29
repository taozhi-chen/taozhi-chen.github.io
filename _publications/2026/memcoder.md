---
title:          "MEMCoder: Multi-dimensional Evolving Memory for Private-Library-Oriented Code Generation"
date:           2026-04-27
selected:       False
pub:            "arXiv"
# pub_pre:        "Submitted to ACL 2026"
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "Apr 2026"
# semantic_scholar_id: d30eb0caade66ae06ec612fdf77ff5ebd1630739  # use this to retrieve citation count
abstract: >-
  Large Language Models (LLMs) excel at general code generation, but their performance drops sharply in enterprise settings that rely on internal private libraries absent from public pre-training corpora. While Retrieval-Augmented Generation (RAG) offers a training-free alternative by providing static API documentation, we find that such documentation typically provides only isolated definitions, leaving a fundamental knowledge gap. Specifically, LLMs struggle with a task-level lack of coordination patterns between APIs and an API-level misunderstanding of parameter constraints and boundary conditions. To address this, we propose MEMCoder, a novel framework that enables LLMs to autonomously accumulate and evolve Usage Guidelines across these two dimensions. MEMCoder introduces a Multi-dimensional Evolving Memory that captures distilled lessons from the model's own problem-solving trajectories. During inference, MEMCoder employs a dual-source retrieval mechanism to inject both static documentation and relevant historical guidelines into the context. The framework operates in an automated closed loop by using objective execution feedback to reflect on successes and failures, resolve knowledge conflicts, and dynamically update memory. Extensive evaluations on the NdonnxEval and NumbaEval benchmarks demonstrate that MEMCoder substantially enhances existing RAG systems, yielding an average absolute pass@1 gain of 16.31%. Furthermore, MEMCoder exhibits vastly superior domain-specific adaptation compared to existing memory-based continual learning methods.
cover:          /assets/images/covers/memcoder.png
authors:
  - Mofei Li*
  - Taozhi Chen*
  - Guowei Yang
  - Jia Li
links:
  Paper: https://arxiv.org/pdf/2604.24222
  # Code: https://github.com/jiangxxxue/Think-Anywhere
---
