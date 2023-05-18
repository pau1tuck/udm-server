import path from "path";
import moment from "moment";
import exphbs from "express-handlebars";

const handlebars = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
    extname: ".hbs",
    helpers: {
        formatDate: (date: Date) => {
            // Custom handlebars helper function
            return moment(date).format("YYYY-MM-DD");
        },
    },
    compilerOptions: {
        strict: true,
        compat: false,
        preventIndent: false,
        noEscape: false,
    },
});

export default handlebars;
