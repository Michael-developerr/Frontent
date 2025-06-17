type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

// classNames("remove-btn", { hovered: true, selectble: true, red: true }, [
//   "pdp",
// ]);

// ("remove-btn hovered selectable pdp");

// Пример
// <button
//   className={classNames("btn", {
//     "btn--active": isActive,
//     "btn--disabled": isDisabled,
//   }, ["btn--primary"])}
// >
//   Нажми меня
// </button>
// Если isActive = true, isDisabled = false:

// html
// <button class="btn btn--primary btn--active">
// Если isActive = false, isDisabled = true:

// html
// <button class="btn btn--primary btn--disabled">
