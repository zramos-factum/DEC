function selectNoInDropdowns() {

    const selects = document.querySelectorAll('select');

    console.log("Found dropdowns:", selects.length);

    selects.forEach(sel => {

        // skip hidden ones
        const style = window.getComputedStyle(sel);
        if (style.display === 'none' || style.visibility === 'hidden') return;

        // find option with text "No"
        const option = Array.from(sel.options)
            .find(opt => opt.text.trim().toLowerCase() === 'no');

        if (option) {

            // use native setter (important for frameworks)
            const setter = Object.getOwnPropertyDescriptor(
                HTMLSelectElement.prototype, "value"
            ).set;

            setter.call(sel, option.value);

            sel.dispatchEvent(new Event('change', { bubbles: true }));
            sel.dispatchEvent(new Event('blur', { bubbles: true }));

            console.log("Set to No:", sel.id);
        }
    });

    console.log("All dropdowns set to No");
}