<template>
<div class="mutliLanguage">
      <select v-model="$i18n.locale" class="selectbox">
        <option
          v-for="(lang, i) in langs"
          :key="`lang-${i}`"
          :value="lang">
            {{ lang }} 
        </option>
      </select>
    </div>
</template>

<script>
export default {
  name: 'SwitchLocale',
  data() {
    return { 
      langs: ['English', 'Nederland', 'Deutschland'],
      }
  }
}
</script>

<style>
select {
    width: 150px;
    line-height: 49px;
    height: 38px;
    font-size: 22px;
    outline: 0;
    margin-bottom: 15px;
}
</style>