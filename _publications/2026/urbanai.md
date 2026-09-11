---
title:          "Scalable Origin-Destination Travel Time Estimation via Landmark Approximation and Neural Residual Correction"
date:           2026-08-21
selected:       False
# pub:            "arXiv"
# pub_pre:        "Submitted to ACL 2026"
pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "Aug 2026"
semantic_scholar_id:   # use this to retrieve citation count
abstract: >-
  Estimating travel times between all origin-destination (OD) pairs is a fundamental problem in transportation analysis, but remains challenging due to quadratic scaling, network constraints, and computational cost. Most existing approaches focus on route-level estimation or rely on repeated shortest-path queries, limiting their applicability to large-scale OD matrix construction. This paper formulates OD travel-time estimation as a landmark-based approximation problem and proposes a scalable framework that combines graph-based preprocessing with neural residual correction. Landmark-based methods enable efficient inference with time complexity linear in the number of landmarks, but exhibit diminishing returns as the landmark budget increases. To fill the gap, we introduce a lightweight neural model that learns systematic approximation error from spatial and structural features. Experiments on large multimodal transportation networks demonstrate that neural residual correction consistently reduces travel-time error and enables comparable or better accuracy with substantially fewer landmarks. As a result, the proposed approach improves the accuracy-memory-latency trade-off relative to purely landmark-based methods, particularly in large and high-diameter networks.
cover:          /assets/images/covers/urbanai26.png
authors:
  - Joon-Seok Kim
  - Lina Li
  - Jooyoung Yoo
  - Kiara Ha
  - Parker Wischhover
  - Hossein Amiri
  - Taozhi Chen
  - Andreas Züfle
links:
  # Paper: 
  # Code: 
---
