

function fillDirectZeros() {

    const inputs = Array.from(document.querySelectorAll('input.alert'));

    console.log("Found alert inputs:", inputs.length);

    inputs.forEach(el => {
        // skip hidden via display:none (better check)
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return;

        if (!el.disabled && !el.readOnly) {

            el.focus();
            el.value = "0";

            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
            el.dispatchEvent(new Event('blur', { bubbles: true }));

            console.log("Filled:", el.id);
        }
    });

    console.log("Direct fill done");
}