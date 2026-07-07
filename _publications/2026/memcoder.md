---
title:          "Learning from Execution: Self-Evolving Memory for Private-Library Code Generation"
date:           2026-04-27
selected:       False
pub:            "arXiv"
# pub_pre:        "Submitted to ACL 2026"
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "Apr 2026"
# semantic_scholar_id: d30eb0caade66ae06ec612fdf77ff5ebd1630739  # use this to retrieve citation count
abstract: >-
  Large Language Models (LLMs) have achieved strong performance on general code generation, but their effectiveness drops sharply in enterprise settings where software development relies on internal private libraries absent from public pre-training corpora. Existing Retrieval-Augmented Generation (RAG) methods provide a training-free solution by retrieving static API documentation, but our analysis shows that documentation mainly helps models identify what APIs to use and remains insufficient for teaching them how to use them correctly. Even with oracle API-document retrieval, LLMs still make recurring errors at the API, cross-API, and task levels, including API misuse or hallucination, flawed API composition, and incorrect solution strategies. To address this limitation, we propose MEMCoder, a training-free self-evolving memory framework for private-library code generation. MEMCoder augments existing RAG pipelines with a Multi-level Evolving Memory that continuously accumulates and reuses execution-derived Usage Guidelines at the API, cross-API, and task levels. During generation, MEMCoder retrieves both static API documentation and relevant historical memories to guide code generation; after execution, it analyzes feedback to refine memory through a closed loop of generation, execution, reflection, and update. Extensive experiments on NdonnxEval and NumbaEval show that MEMCoder consistently enhances different RAG backbones across LLMs of different scales, yielding an average absolute pass@1 improvement of 18.41 percentage points. Moreover, MEMCoder outperforms existing self-evolving memory methods and validates the effectiveness of organizing execution feedback into multi-level usage memories.
cover:          /assets/images/covers/memcoder.png
authors:
  - Mofei Li*
  - Taozhi Chen*
  - Guowei Yang
  - Jia Li
links:
  Paper: https://arxiv.org/pdf/2604.24222
  # Code: https://github.com/
---
