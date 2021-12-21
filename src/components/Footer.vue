<template>
    <div class="fluid footer">
        <ul class="justify-content-center">
            <li>&copy; 1999-2021 ICEPAY</li>
            <li><a href="https://icepay.com/app/uploads/Terms-and-conditions.pdf"  target="_blank"> {{ $t('terms', { terms: 'Terms and Conditions' }) }}</a></li>
            <li><a href="https://icepay.com/app/uploads/Privacy-Policy.pdf"  target="_blank">{{ $t('privacy', { privacy: '}Privacy Policy' }) }}</a></li>
            <li><a href="https://icepay.com/cookies/"  target="_blank">Cookies</a></li>
            <li><a href="https://icepay.com/disclaimer/" target="_blank">Disclaimer</a></li>
        </ul>
    </div>
</template>



<script>
export default {
    name:'FooterComponent',
}
</script>

<style lang="scss">
@import "@/styles/Footer.scss";
</style>