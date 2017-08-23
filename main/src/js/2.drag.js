$(document).ready(function() {
    console.clear();
    var panelCount = 14; // change to meet your needs

    var panelStop = (panelCount - 1) * 2;
    // how much the panel wrap moves in relation to the dragger's x position
    // *2 works because the stage is twice the width of the dragger travel area (adjust accordingly)


    var markerSpacing = 300 / (panelCount - 1);
    // 300 is the travel distance of the dragger (400 wide bounds - 100px width of the actual dragger)
    // subtract 1 from the panel count so the panel wrap slides to the correct ending position as we start at 0

    var dragStop = document.getElementById("dragBounds");
    var snapStops = []; // empty snap array

    var count = 0;

    for (i = 0; i < panelCount; i++) {
        var panels = $(".action");
        snapStops.push(i * markerSpacing); // fill the snap array
        TweenMax.set(panels[i], {
            right: i * 100 + "%",
            //                backgroundColor: newColor
        }); // position the panels
    }

    Draggable.create("#dragControl", {
        type: "x",
        throwProps: true,
        bounds: dragStop,
        edgeResistance: 1,
        snap: snapStops,
        onDrag: makeEmMove,
        onThrowUpdate: makeEmMove
    });

    function getValue() {
        sortedX = this._targets[0]._gsTransform.x.toFixed(2)
        console.log(sortedX / 600);
    }

    function makeEmMove() {
        TweenMax.set(".panelWrap", {
            x: this.x * panelStop,
            onComplete: function() {
                console.log(this.x * panelStop);
            },
            onCompleteScope: this
        });
    }
});