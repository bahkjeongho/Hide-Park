---
title: "OpenAI 프로덕트 리더가 말하는 AI 시대의 새로운 개발 표준 (그리고 Eval 설계법)"
source: "https://eopla.net/magazines/37812#"
created: 2026-04-25
description: "데모를 만드는 데는 5분이면 충분하지만, 실전에 배포 가능한 수준의 AI 제품을 만..."
tags:
  - "articles"
  - "clippings"
---
```
https://eopla.net/magazines/37812#
```
> [!info] notes

---

#아이템 선정 #운영 #프로덕트

OpenAI 프로덕트 리더가 말하는 AI 시대의 새로운 개발 표준 (그리고 Eval 설계법)

데모를 만드는 데는 5분이면 충분하지만, 실전에 배포 가능한 수준의 AI 제품을 만드는 데는 5개월이 걸려도 모자랄 때가 많습니다. 그 이유는 우리가 그동안 익숙했던 소프트웨어 개발 방식이 AI 시대에는 더 이상 통하지 않기 때문입니다.

[OpenAI의 제품 리더인 미셸 포크래스(Michelle Pokrass)](https://www.lennysnewsletter.com/p/why-your-ai-product-needs-a-different) 는 이를 해결하기 위해 **CC/CD(Continuous Creation & Continuous Control)** 라는 새로운 개발 프레임워크를 제시합니다. **전통적인 CI/CD가 코드의 안정성을 보장했다면, CC/CD는 모델의 불확실성을 통제하고 품질을 상향 평준화하는 핵심 엔진** 입니다.

왜 기존 방식이 무너지고 있는지, 그리고 2026년의 AI 팀은 어떤 루프 속에서 제품을 깎아내야 하는지 그 디테일한 가이드를 정리했습니다.

---

## 1\. 기존 CI/CD의 몰락: 왜 '기획-개발-테스트' 순서가 먹히지 않는가?

전통적인 소프트웨어 개발은 **'결정론적(Deterministic)'** 입니다. A를 입력하면 반드시 B가 나와야 하고, 이를 코드로 구현한 뒤 테스트 케이스를 통과하면 배포합니다. 하지만 LLM 제품은 **‘확률적(Probabilistic)’** 입니다. 똑같은 프롬프트를 넣어도 매번 결과가 미묘하게 달라집니다. 이런 특성 때문에 기존 방식대로 접근하면 다음과 같은 치명적인 병목 현상이 발생합니다.

- **PRD의 무용지물화:** "사용자의 감정을 파악해 적절히 대응할 것"이라는 요구 사항은 코드로 구현할 수 있는 명확한 스펙이 아닙니다. 글자로 된 기획서는 모델 앞에서 힘을 잃습니다.
- **테스트의 불확실성:** 유닛 테스트 100개를 통과했다고 해서, 101번째 사용자에게 환각(Hallucination)을 일으키지 않는다는 보장이 없습니다. '완벽한 통과'라는 개념 자체가 존재하지 않습니다.
- **예측 불가능한 병목:** 모델이 업데이트되거나 라이브러리가 바뀌는 순간, 기존에 잘 작동하던 기능들이 우후죽순 무너집니다. 어디서부터 손을 대야 할지 가늠하기 어렵습니다.
![](https://eopla.net/file_path_host?token=Q8UsQ26nv7nBZGaOzzqya2erbphu39zaJD3H0uNm%2FQ27suQKE%2BpQuAEztcn8X38oKT7rkRSZUCBPbEdIMyh6dsmbeye6m%2BHwOb1VLsqyDgVt--xZbzjVEqG9GOKJkQ--mRX%2BbR4Z6lztH0ClkE5uwQ%3D%3D)

---

## 2\. Continuous Development (CD): 성능의 정의와 구축

AI 제품 개발의 첫 단계는 코딩이 아니라 **‘정답의 기준’** 을 세우는 것입니다. 이를 위한 3단계 프로세스는 다음과 같습니다.

### Step 1. 성능 범위 확정 및 데이터 큐레이션 (Scope capability and curate data)

먼저 우리 AI가 '어디까지 할 수 있는지' 경계를 정해야 합니다. 이 단계의 결과물은 기획서가 아니라 **골든 데이터셋(Golden Dataset)** 입니다.

- **로우 데이터(Raw Data) 활용:** 과거의 상담 로그나 실제 사용자 예상 질문을 수집하여, 모델이 해결해야 할 진짜 문제를 정의합니다.
- **데이터 큐레이션:** 어떤 답변이 우리 제품의 정석인지 50~100개 정도의 고품질 입출력 쌍을 만듭니다. 이것이 바로 팀의 새로운 '제품 명세서'가 됩니다.

### Step 2. 애플리케이션 설정 (Set up application)

준비된 데이터를 바탕으로 실제 구동 환경을 세팅합니다.

- **모델 및 프롬프트 최적화:** 적절한 LLM을 선택하고 프롬프트를 작성합니다.
- **인프라 연결:** RAG(검색 증강 생성)를 위한 데이터베이스나 외부 API 호출 기능을 연결합니다. 이 단계는 어디까지나 '가설'을 세우는 단계이므로, 빠르게 실행 가능한 구조를 만드는 데 집중합니다.

### Step 3. Eval 설계 (Design evals)

애플리케이션이 얼마나 잘 작동하는지 측정할 '자'를 만듭니다.

- **평가 기준표(Rubric) 정의:** "답변이 좋은가?" 같은 모호한 질문 대신, "답변에 우리 회사의 공식 정책이 포함되었는가?", "금지된 표현을 쓰지 않았는가?"처럼 구체적인 기준을 세웁니다.
- **자동화:** 사람이 일일이 검토할 수 없으므로, 우리만의 평가표를 기준으로 답변을 판별할 심판 모델(LLM-as-a-Judge)을 설계합니다.
![](https://eopla.net/file_path_host?token=FW5bR64eKWIcs%2FPmcntyzm%2F2r04TPf31yx5%2BBAktOmCIRVTsQeXS8DQeXx0R8lShWweZWKTnDt8BeztRWkMKYDwhztA%2BhyN7cI%2B1Ya5NZ8JF--MyNTREzUjIhjxSX1--IiAYMpny2Y0U7uwvq35ZXg%3D%3D)

---

## 3\. Transition: 배포는 '끝'이 아닌 '시작'

모든 준비가 끝났다면 이제 실전 배포(Deploy)입니다. 하지만 명심하세요. AI 제품에서 배포는 완료가 아니라, **실제 환경에서의 데이터 루프가 시작됨** 을 의미합니다.

---

## 4\. Continuous Control (CC): 실전과 개선의 무한 루프

배포된 모델이 현장에서 어떻게 작동하는지 끊임없이 통제하고 개선하는 과정입니다.

### Step 4. Eval 실행 (Run evals)

배포된 모델이 실제 환경에서 내놓는 결과물을 지속적으로 모니터링합니다.

- **실시간 체크:** 운영 중인 프롬프트를 조금이라도 수정했다면, 기존 골든 데이터셋을 대상으로 전체 Eval을 돌려 성능 저하(Regression)가 없는지 즉시 확인합니다.

### Step 5. 동작 분석 및 실패 패턴 식별 (Analyze behavior and spot error patterns)

데이터가 쌓이면 모델의 '취약점'이 보이기 시작합니다.

- **에러 마이닝(Error Mining):** Eval 점수가 낮은 로우 데이터들을 따로 추출해 분석합니다. "사용자가 두 가지 질문을 동시에 할 때 하나를 빼먹는다"거나 "특정 상황에서 말투가 지나치게 공격적으로 변한다"는 식의 **구체적인 실패 패턴** 을 찾아냅니다.

### Step 6. 수정사항 적용 (Apply fixes)

식별된 패턴을 해결하기 위한 조치를 취합니다.

- **전술적 대응:** 프롬프트를 정교화하거나, RAG의 검색 정확도를 높이거나, 혹은 해당 에러 패턴을 학습시킨 데이터로 파인튜닝을 진행합니다.
- **루프 완성:** 수정 후에는 다시 Step 4로 돌아가 Eval 점수가 올라갔는지 검증합니다. 이 순환이 바로 **CC/CD의 본질** 입니다.
![](https://eopla.net/file_path_host?token=k0hrJvLEjJIgfsBuvU%2BHf8wG4RoB1IDK%2BtwnPUz8VTxlXC4uSGowcpieDW2uXXXtqmku%2BWL4rdxqWOgImOTXVaK%2FZCkAuqC%2B3892O4%2FKMMZq--hS1UcbbwTtORDdVw--dUxnfnk8swljcsCJZojPjQ%3D%3D)

---

## Part 4. 실전 사례: AI 고객 지원(Customer Support) 루프

이 복잡한 과정이 실제로는 어떻게 작동할까요? '고객 지원 챗봇' 사례에 대입해 보겠습니다.

- **Scope & Curate:** 과거 상담원 답변 중 '베스트 케이스' 100개를 뽑아 골든 데이터셋 구축.
- **Set up:** 최신 매뉴얼을 RAG로 연결하고 기본 상담 프롬프트 작성.
- **Design Evals:** "답변이 정확한가?", "환불 규정을 준수했는가?"라는 루브릭 설계.
- **Run Evals:** 실제 운영 중인 챗봇의 답변들에 대해 실시간 Eval 실행.
- **Analyze Patterns:** 분석 결과, "주말 배송" 관련 질문에서 모델이 자꾸 평일 기준을 안내하는 실패 패턴 발견.
- **Apply Fixes:** 주말 배송 전용 안내 지침을 프롬프트에 추가하고 관련 데이터를 업데이트.
- **Loop:** 다시 Eval을 돌려 "주말 배송" 점수가 올라가는 것을 확인한 뒤 최종 반영.

---

### 마치며: 2026년의 빌더들이 가져야 할 태도

이제 AI 제품의 퀄리티는 엔지니어의 코딩 실력보다 **‘얼마나 정교한 CC/CD 루프를 가지고 있는가’** 에 의해 결정됩니다. 단순히 좋은 모델을 쓴다고 해서 제품이 완성되지 않습니다.

불확실성을 인정하고, 이를 통제 가능한 데이터로 바꾸는 시스템을 만드세요. **로우 데이터에서 실패 패턴을 찾아내고, 이를 다시 Eval 시스템에 녹여내는 그 ‘순환의 속도’** 가 2026년 테크 씬에서 살아남는 유일한 방법입니다.

> 히든플레이북 포스트를 놓치고 싶지 않다면?  
>   
> **👉👉** [**히든플레이북 뉴스레터 구독하기**](https://maily.so/hiddenplaybook?mid=9o044g574r8)  
> 당신이 몰랐던 AI, 프로덕트, 그로스 전략

히든플레이북 님이 작성한 다른 아티클

[세상에는 3 종류의 AI 프로덕트만이 있다 (아직까진)](https://eopla.net/magazines/37976) [AI시대 기획서(PRD)는 죽었다. 실리콘밸리가 지금 "Evals"에 목숨 건 이유](https://eopla.net/magazines/36939) [절대 망하지 않는 AI 프로덕트를 만드는 5가지 법칙 (ft. Granola AI PM)](https://eopla.net/magazines/36937)