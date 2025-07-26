import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* ───────────────────────── Call‑to‑Action band ───────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center border-b border-gray-800">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Let’s get started on something great
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Join over&nbsp;4,000+ startups already growing with&nbsp;Untitled.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium
                       border border-white text-white hover:bg-white hover:text-gray-900 transition"
          >
            Chat to us
          </Link>

          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium
                       bg-white text-gray-900 hover:bg-gray-200 transition"
          >
            Get started
          </Link>
        </div>
      </div>

      {/* ───────────────────────── Link columns ───────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-4 py-16 grid gap-10
                      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        {/* 1 ─ Product */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wider uppercase text-gray-400">
            Product
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-white">
                Overview
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-white">
                <span>Solutions</span>
                <span className="inline-block rounded-full bg-indigo-500 px-2 py-0.5 text-xs font-semibold text-white">
                  New
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Releases
              </Link>
            </li>
          </ul>
        </div>

        {/* 2 ─ Company */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wider uppercase text-gray-400">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Press
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                News
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Media kit
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3 ─ Resources */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wider uppercase text-gray-400">
            Resources
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Newsletter
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Help centre
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* 4 ─ Use cases */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wider uppercase text-gray-400">
            Use cases
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-white">
                Startups
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Enterprise
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Government
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                SaaS centre
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Marketplaces
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                E‑commerce
              </Link>
            </li>
          </ul>
        </div>

        {/* 5 ─ Social */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wider uppercase text-gray-400">
            Social
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-white">
                Twitter
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Facebook
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                GitHub
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                AngelList
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Dribbble
              </Link>
            </li>
          </ul>
        </div>

        {/* 6 ─ Legal */}
        <div>
          <h4 className="mb-6 text-sm font-semibold tracking-wider uppercase text-gray-400">
            Legal
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Cookies
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Licenses
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ───────────────────────── Bottom bar ───────────────────────── */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo width="120px" />
            <span className="sr-only">Untitled UI</span>
          </div>

          <p className="text-sm text-gray-400">
            © 2077 Untitled UI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
