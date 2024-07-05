export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function slugify(text: string): string {
  return text.toLowerCase()
    .replace(/[`~!@#$%^&*()_|+=?;:'",.<>{}[\]\\/]/gi, '')
    .replace(/\s+/g, '-');
}

export function addHeadingId(content: string): string {
  return content.replace(/(#{1,6})\s(.+)/g, (match, p1, p2) => {
    const id = slugify(p2);
    return `${p1} ${p2} <a id="${id}"></a>`;
  });
}

export function extractTocItems(content: string): TocItem[] {
  return content.match(/(#{1,6})\s(.+)/g)?.map((heading) => {
    const level = heading.split(' ')[0].length;
    const text = heading.replace(/(#{1,6})\s/, '');
    const id = slugify(text);
    return { id, text, level };
  }) || [];
}
