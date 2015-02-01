MuscleGroups = ["Legs", "Back", "Biceps", "Triceps", "Chest", "Abs", "Shoulders"];

var Schemas = {};

Schemas.ActivitySchema = new SimpleSchema({
    muscleGroup: {
        type: String,
        label: "Muscle Group",
        optional: false,
        allowedValues: MuscleGroups
    }
});


kActivities = "activities";

Activities = new Mongo.Collection(kActivities);
Activities.attachSchema(Schemas.ActivitySchema);