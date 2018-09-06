

function EagleEvent(expression, handler) {
  return (target, name, description) => {
    console.log(`target = ${target}, name = ${expression}, handler = ${handler}, name = ${name}, description=${description}`);
  }
}


@EagleEvent('click #div', 'abc')
class A {
  a;
  b;
  constructor() {
    import('./index.css');
    for (const [key, value] of Object.entries({ key: 'value', key1: 'value1' })) {
      console.log(key, value);
    }
  }

  @EagleEvent("", "")
  abc(e, $el) {

  }
}

export { A as A };
