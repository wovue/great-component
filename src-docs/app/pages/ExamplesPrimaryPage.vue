<template>
  <div>
    <h3 class="c-main__sub-heading">Primary</h3>
    <div class="c-item u-gutter">
      <h5 class="c-item__sub-heading">Code:</h5>
      <div class="c-item__code-wrapper">
        <app-code class="c-item__code" :code="snippets.primaryExample"></app-code>
      </div>
      <h5 class="c-item__sub-heading">Result:</h5>
      <great-component modifier="primary"></great-component>
    </div>
  </div>
</template>

<script>
  import primaryExample from '!!raw!src-docs/app/snippets/primary-example.html'

  export default {
    name: 'ExamplesPrimaryPage',
    data () {
      return {
        snippets: {
          primaryExample
        }
      }
    }
  }
</script>
