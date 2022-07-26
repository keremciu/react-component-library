module.exports = () => ({
  content: `@import "../variables.scss";
@import "../typography.scss";

.foo {
  @include font-defaults;
  color: var(--text-color);
}
`,
  extension: `.scss`
});
