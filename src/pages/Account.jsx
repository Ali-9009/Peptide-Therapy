import {
    User,
    Mail,
    Phone,
    Building2,
    Package,
    MapPin,
    Heart,
    Settings,
    LogOut,
    Box,
    ChevronRight,
} from "lucide-react";

export default function Account() {
    const orders = [
        {
            id: "ORD-2026-0045",
            date: "2026-05-22",
            items: "2 Items",
            amount: "$185.00",
            status: "processing",
        },
        {
            id: "ORD-2026-0044",
            date: "2026-03-18",
            items: "3 Items",
            amount: "$245.00",
            status: "delivered",
        },
        {
            id: "ORD-2026-0043",
            date: "2026-03-10",
            items: "1 Item",
            amount: "$90.00",
            status: "delivered",
        },
    ];

    const quickLinks = [
        {
            icon: Package,
            text: "Order History",
        },
        {
            icon: MapPin,
            text: "Saved Addresses",
        },
        {
            icon: Heart,
            text: "Wishlist",
        },
        {
            icon: Settings,
            text: "Account Settings",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="md:text-3xl text-2xl font-bold text-slate-900">
                    My Account
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Welcome back, Jack
                </p>
            </div>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-5">
                {/* LEFT SIDE */}
                <div className="space-y-5">
                    {/* Profile Information */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="flex items-center justify-between p-5 border-b border-gray-200">
                            <div>
                                <div className="flex items-center gap-2">
                                    <User
                                        size={16}
                                        className="text-orange-500"
                                    />

                                    <h2 className="text-base font-semibold text-gray-900">
                                        Profile Information
                                    </h2>
                                </div>

                                <p className="text-xs text-gray-500 mt-1">
                                    Your personal details
                                </p>
                            </div>

                            <button className="flex items-center gap-1 text-sm text-orange-500">
                                Edit
                                <ChevronRight size={14} />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 p-5">
                            <div className="space-y-6">
                                <div className="flex gap-3">
                                    <User
                                        size={16}
                                        className="text-gray-400 mt-1"
                                    />

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Name
                                        </p>

                                        <p className="text-sm font-medium text-gray-900">
                                            Jack
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Phone
                                        size={16}
                                        className="text-gray-400 mt-1"
                                    />

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Phone
                                        </p>

                                        <p className="text-sm font-medium text-gray-900">
                                            992342341123
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-3">
                                    <Mail
                                        size={16}
                                        className="text-gray-400 mt-1"
                                    />

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Email
                                        </p>

                                        <p className="text-sm font-medium text-gray-900">
                                            br6332160@gmail.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Building2
                                        size={16}
                                        className="text-gray-400 mt-1"
                                    />

                                    <div>
                                        <p className="text-xs text-gray-500">
                                            Company
                                        </p>

                                        <p className="text-sm font-medium text-gray-900">
                                            unknown
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="flex items-center justify-between p-5 border-b border-gray-200">
                            <div>
                                <div className="flex items-center gap-2">
                                    <Box
                                        size={16}
                                        className="text-orange-500"
                                    />

                                    <h2 className="text-base font-semibold text-gray-900">
                                        Recent Orders
                                    </h2>
                                </div>

                                <p className="text-xs text-gray-500 mt-1">
                                    Your latest orders
                                </p>
                            </div>

                            <button className="flex items-center gap-1 text-sm text-orange-500">
                                View All
                                <ChevronRight size={14} />
                            </button>
                        </div>

                        <div className="p-4 space-y-4">
                            {orders.map((order) => (
                                <div
                                    key={order.id}
                                    className="border border-gray-200 rounded-xl p-4 flex items-center justify-between"
                                >
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-900">
                                            {order.id}
                                        </h3>

                                        <p className="text-xs text-gray-500 mt-1">
                                            {order.date} · {order.items}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-lg font-semibold text-gray-900">
                                            {order.amount}
                                        </p>

                                        <span
                                            className={`inline-flex mt-2 px-2.5 py-1 text-xs rounded-md ${order.status === "processing"
                                                    ? "bg-orange-50 text-orange-600"
                                                    : "bg-green-50 text-green-600"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-5">
                    {/* Quick Links */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="p-5 border-b border-gray-200">
                            <h2 className="text-base font-semibold text-gray-900">
                                Quick Links
                            </h2>
                        </div>

                        <div className="p-4">
                            <div className="space-y-3">
                                {quickLinks.map((item, index) => (
                                    <button
                                        key={index}
                                        className="w-full border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                                    >
                                        <item.icon
                                            size={16}
                                            className="text-gray-400"
                                        />

                                        {item.text}
                                    </button>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 mt-5 pt-5">
                                <button className="flex items-center gap-2 text-red-500 text-sm font-medium">
                                    <LogOut size={16} />
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Saved Products */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                        <div className="p-5 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <Heart
                                    size={16}
                                    className="text-orange-500"
                                />

                                <h2 className="text-base font-semibold text-gray-900">
                                    Saved Products
                                </h2>
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="flex justify-between text-sm mb-4">
                                <span>BPC-157</span>

                                <span className="font-semibold">
                                    $49.50
                                </span>
                            </div>

                            <div className="flex justify-between text-sm mb-5">
                                <span>Semaglutide</span>

                                <span className="font-semibold">
                                    $88.00
                                </span>
                            </div>

                            <button className="text-sm text-orange-500">
                                View All Saved
                            </button>
                        </div>
                    </div>

                    {/* Help Card */}
                    <div className="bg-[#f7f7f7] rounded-xl border border-gray-200 p-5">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                            Need Help?
                        </h2>

                        <p className="text-sm text-gray-500 mb-5 leading-6">
                            Have questions about your order or account?
                            We're here to help.
                        </p>

                        <button className="border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium bg-white hover:bg-gray-50">
                            CONTACT SUPPORT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}