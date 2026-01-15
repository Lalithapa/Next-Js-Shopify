"use client";

import Link from "next/link";

export default function NavMenu({ items }) {
  return (
    <nav className="py-6">
      <ul className="flex items-center justify-center gap-6">
        {items.map((item) => (
          <li key={item.id} className="relative group">
            <Link
              href={item.url}
              className="text-md font-medium text-gray-800 hover:text-black"
            >
              {item.title}
            </Link>

            {/* Level 2 dropdown */}
            {item.items?.length > 0 && (
              <ul className="absolute left-1/2 top-full hidden w-full min-w-100
           -translate-x-1/2 rounded-md border bg-white
           shadow-lg group-hover:block">
                {item.items.map((child) => (
                  <li key={child.id} className="group/item relative">
                    <Link
                      href={child.url}
                      className="block px-4 py-2 text-md hover:bg-gray-50"
                    >
                      {child.title}
                    </Link>

                    {/* Level 3 */}
                    {child.items?.length > 0 && (
                      <ul className="absolute left-full top-0 hidden min-w-55 border bg-white shadow-lg group-hover/item:block">
                        {child.items.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              href={sub.url}
                              className="block px-4 py-2 text-md hover:bg-gray-50"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}