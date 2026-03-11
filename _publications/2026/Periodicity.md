---
title:          "Do Transformers Have the Ability for Periodicity Generalization?"
date:           2026-01-30
selected:       true
pub:            "arXiv"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "Jan 2026"
# semantic_scholar_id: ec5f63195af9cda9b5f1c601fc9ab9d157a8019b  # use this to retrieve citation count
abstract: >-
  Large language models (LLMs) based on the Transformer have demonstrated strong performance across diverse tasks. However, current models still exhibit substantial limitations in out-of-distribution (OOD) generalization compared with humans. We investigate this gap through periodicity, one of the basic OOD scenarios. Periodicity captures invariance amid variation. Periodicity generalization represents a model's ability to extract periodic patterns from training data and generalize to OOD scenarios. We introduce a unified interpretation of periodicity from the perspective of abstract algebra and reasoning, including both single and composite periodicity, to explain why Transformers struggle to generalize periodicity. Then we construct Coper about composite periodicity, a controllable generative benchmark with two OOD settings, Hollow and Extrapolation. Experiments reveal that periodicity generalization in Transformers is limited, where models can memorize periodic data during training, but cannot generalize to unseen composite periodicity. We release the source code to support future research.
cover:          /assets/images/covers/periodicity.png
authors:
  - Huanyu Liu
  - Ge Li
  - Yihong Dong
  - Sihan Wu
  - Peixu Wang
  - Sihao Cheng
  - Taozhi Chen
  - Kechi Zhang
  - Hao Zhu
  - Tongxuan Liu
links:
  Paper: https://arxiv.org/pdf/2601.22690
  Code: https://github.com/gtxygyzb/periodicity_generalization
---
