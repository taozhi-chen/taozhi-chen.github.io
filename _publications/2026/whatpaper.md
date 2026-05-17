---
title:          "What Papers Don't Tell You: Recovering Tacit Knowledge for Automated Paper Reproduction"
date:           2026-03-02
selected:       False
pub:            "arXiv"
# pub_pre:        "Submitted to ACL 2026"
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "Mar 2026"
semantic_scholar_id: 740ff90a0ddb8fc66643e132e277ac09dc0b02cb  # use this to retrieve citation count
abstract: >-
  Automated paper reproduction seeks to generate executable code implementations from academic papers, substantially reducing the cost of research validation and reuse while accelerating the accumulation of scientific knowledge. Existing approaches retrieve and concatenate text and code snippets from citation neighborhoods, yet fail to capture the knowledge implicitly encoded in the relational structure among papers. We argue that the knowledge essential for reproduction naturally resides at two distinct levels of the paper graph: (i) globally shared common knowledge within a domain, and (ii) undocumented local aggregation details between the target paper and its predecessor works. To address this, we propose PaperRep, a multi-scale graph reasoning framework that first applies semantic graph pruning to select implementation-relevant nodes from the paper graph, then employs a global graph reasoning module to distill stable reproduction patterns within the domain and a local graph reasoning module to characterize implementation aggregation relationships between the target paper and its neighbors. Extensive experiments on an extended ReproduceBench covering 10 tasks and 40 recent papers show that PaperRep achieves an average performance gap of 10.04% against official implementations, improving over the strongest baseline by 24.68%, thereby validating the necessity and effectiveness of explicit graph-structured reasoning for automated paper reproduction.
cover:          /assets/images/covers/whatpaper.png
authors:
  - Lehui Li
  - Ruining Wang
  - Haochen Song
  - Yaoxin Mao
  - Tong Zhang
  - Yuyao Wang
  - Jiayi Fan
  - Yitong Zhang
  - Taozhi Chen
  - Jieping Ye
  - Chengqi Zhang
  - Yongshun Gong
links:
  Paper: https://arxiv.org/abs/2603.01801
  Code: https://github.com/MSGR2026/MSGR
---
