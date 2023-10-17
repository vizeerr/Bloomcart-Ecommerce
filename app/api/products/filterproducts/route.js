import connectDb from "../../../../database/middleware/connectdb";
import { NextResponse } from "next/server";
import Product from "../../../../database/models/products";

export async function GET(req) {
    try {
        await connectDb();
        const { slug } = req.params;
        if (!slug) {
            return NextResponse.error("Slug is missing in URL parameter", 400);
        }
        const product = await Product.findOne({ slug: slug });
        if (!product) {
            return NextResponse.error("Product not found", 404);
        }
        return NextResponse.json({ product });
    } catch (error) {
        console.error(error);
        return NextResponse.error("An error occurred while fetching the data", 500);
    }
}
