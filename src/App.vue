<script setup>

const events = [
    {Name: 'Maks-klubben', Location: "Stjørdal Bedehus", Date: '21/02/2024', Time: '17:00-19:30', AgeGroup: '2-7. Trinn', Description: 'En plass der man kan være seg selv, og lære om jesus og gud.'},
    {Name: 'SHARE', Location: "Stjørdal Misjonskirke", Date: '23/02/2024', Time: '17:00-19:00', AgeGroup: '5-7. Trinn', Description: 'En plass der man kan være seg selv, og lære om jesus og gud.'},
    {Name: 'FUEL', Location: "Stjørdal Misjonskirke", Date: '23/02/2024', Time: '20:00-23:00', AgeGroup: '8-10. Trinn', Description: 'en deskripsjon'}
]

</script>

<template>
    <div class="event-list">
        <li v-for="event in events" :key="event.id" style="list-style-type: none;" class="event-item">
            <div class="event-header">
                <h1>{{ event.Name }}</h1>
                <h4>{{ event.Location }}</h4>
            </div>
            <div class="event-info">
                <h4>{{ event.Time }}</h4>
                <h4>{{ event.AgeGroup }}</h4>
            </div>
            <p>{{ event.Description }}</p>
        </li>
    </div>
</template>