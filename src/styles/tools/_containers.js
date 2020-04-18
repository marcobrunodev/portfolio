const internal = `
  padding-left: var(--gap-small);
  padding-right: var(--gap-small);
`;

const external = `
  width: calc(100% - var(--gap-small));
  margin-left: auto;
  margin-right: auto;
`

const _containers = (type = 'internal') => {
  return type === 'internal' ? internal : external;
}


export default _containers;