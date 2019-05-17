import libSmilesDrawer from "smiles-drawer";
import libJQuery from "jquery";

export default function smilesDrawer() {
    return {
        template: "",
        link: function(scope, element, attr) {
            let smilesDrawer = new SmilesDrawer.Drawer({ width: 250, height: 250 });
            let canvas = document.createElement("canvas");
            libJQuery(element).append(canvas);
            SmilesDrawer.parse(attr.smiles, function (tree) {
                smilesDrawer.draw(tree, canvas, 'light', false);
            }, function (err) {
                libJQuery(element).text("Error parsing SMILES")
                console.log(err);
            });
        }
    }
};