// Много модели имат по няколко отделни фото-папки за реализирани монтажи
// на един и същ автомобил (напр. "Honda-CRV-1" ... "Honda-CRV-12"). Това
// групира такива варианти под общ "канонична" страница, за да не се индексират
// десетки почти еднакви model-страници.

// Изтрива краен "-N" (1-2 цифри) суфикс, ако има такъв, за да получи базовото
// име на модела. Реални модели с 3-цифрени номера (BMW-320, Alfa-147) не се
// засягат, защото суфиксите за отделни монтажи винаги са 1-2 цифри.
export function getCanonicalBase(modelId) {
  return modelId.replace(/-\d{1,2}$/, '');
}

function suffixRank(modelId, base) {
  if (modelId === base) return 0;
  const match = modelId.slice(base.length).match(/^-(\d{1,2})$/);
  return match ? Number(match[1]) : Infinity;
}

// Map<canonicalBase, canonicalModelId> — по един "победител" на група.
export function pickCanonicalIds(models) {
  const groups = new Map();
  for (const model of models) {
    const base = getCanonicalBase(model.id);
    if (!groups.has(base)) groups.set(base, []);
    groups.get(base).push(model.id);
  }

  const canonicalOf = new Map();
  for (const [base, ids] of groups) {
    const sorted = [...ids].sort((a, b) => suffixRank(a, base) - suffixRank(b, base));
    canonicalOf.set(base, sorted[0]);
  }
  return canonicalOf;
}

export function isCanonicalModel(modelId, canonicalOf) {
  return canonicalOf.get(getCanonicalBase(modelId)) === modelId;
}

// Пътища (без домейн) на всички НЕ-канонични model-страници — за изключване от sitemap.
export function getNonCanonicalModelPaths(carBrands) {
  const paths = [];
  for (const brand of carBrands) {
    const modelsWithImages = brand.models.filter((m) => m.images.length > 0);
    const canonicalOf = pickCanonicalIds(modelsWithImages);
    for (const model of modelsWithImages) {
      if (!isCanonicalModel(model.id, canonicalOf)) {
        paths.push(`/brand/${brand.id}/model/${model.id}/`);
      }
    }
  }
  return paths;
}
