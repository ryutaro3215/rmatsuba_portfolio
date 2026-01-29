#!/usr/bin/env bash
set -euo pipefail

DIR="./"
PREFIX="book"
DIGITS=4

cd "$DIR"

max=0
for f in ${PREFIX}-*.{jpg,jpeg,png}; do
  [[ -e "$f" ]] || continue
  if [[ "$f" =~ ^${PREFIX}-([0-9]{${DIGITS}})\.(jpg|jpeg|png)$ ]]; then
    num=${BASH_REMATCH[1]}
    num=$((10#$num))             # ★ 10進数として解釈
    (( num > max )) && max=$num
  fi
done

next=$((max + 1))

for f in *.{jpg,jpeg,png}; do
  [[ -e "$f" ]] || continue

  if [[ "$f" =~ ^${PREFIX}-[0-9]{${DIGITS}}\.(jpg|jpeg|png)$ ]]; then
    continue
  fi

  ext="${f##*.}"
  printf -v new "%s-%0*d.%s" "$PREFIX" "$DIGITS" "$next" "$ext"

  echo "rename: $f -> $new"
  mv -- "$f" "$new"

  ((next++))
done
