# AGENTS.md - Development Guide for dharach.com

**Status**: Early stage project - core tooling not yet configured
**Package Manager**: Bun
**Platform**: macOS (darwin)

## Project Setup

This is a new project for dharach.com. When the application is initialized, update this file with actual commands.

### Placeholder Commands
```bash
# Install dependencies (when package.json exists)
bun install

# Development server (update when configured)
bun run dev

# Build (update when configured)
bun run build

# Type checking (when TypeScript is configured)
bun run type-check

# Linting (when configured)
bun run lint

# Run all tests
bun test

# Run single test file
bun test path/to/test.spec.ts

# Run tests in watch mode
bun test --watch

# Run tests with coverage
bun test --coverage
```

## Test-Driven Development (TDD)

**CRITICAL**: Follow Kent Beck's Red-Green-Refactor cycle religiously.

### The TDD Cycle
1. **Red**: Write a failing test for the next small increment
2. **Green**: Write minimal code to make the test pass - nothing more
3. **Refactor**: Improve structure while keeping tests green

This cycle should take minutes, not hours. Small steps prevent debugging nightmares.

### Testing Standards
- **Test behavior, not implementation** - tests should survive refactoring
- **Minimal mocks** - prefer real objects; mock only external dependencies (APIs, databases, file systems)
- **Clear test names** - should describe what behavior is being tested (e.g., `test_should_return_sum_when_given_two_positive_numbers`)
- **One assertion per test** when practical - makes failures obvious
- **Fast tests** - milliseconds not seconds; mock slow operations
- **No conditional logic in tests** - no if statements, loops, or try/catch
- **Test independence** - each test runs in isolation without depending on test order
- Use Arrange-Act-Assert (AAA) pattern

### Test Integrity Rules
- Tests are the single source of truth - they define expected behavior
- Never allow tests to pass with unclear assumptions or silent failures
- Test exact behavior as specified, not approximations
- Assert on actual values, not just "truthy" or "exists"
- If unsure about expected behavior, clarify before writing the test

## Code Style Guidelines

### General Principles
- **Simplest solution that could possibly work** - YAGNI (You Aren't Gonna Need It)
- **Names reveal intent** - no clever abbreviations
- **Functions do one thing** - single responsibility
- **Explicit over implicit** - make dependencies clear
- **Fail fast and loud** - clear error messages
- **Delete dead code immediately** - no commented-out code

### TypeScript (when configured)
- Use strict mode with all strict flags enabled
- Type all function signatures - no implicit `any`
- Prefer interfaces for objects, types for unions/intersections
- Use `unknown` instead of `any` when type is truly unknown
- Leverage discriminated unions for state management
- Use `const` assertions for literal types

### Imports
```typescript
// Group imports in this order:
// 1. External dependencies
import { useState, useEffect } from 'react'
import { z } from 'zod'

// 2. Internal absolute imports (if using path aliases)
import { Button } from '@/components/ui/button'

// 3. Relative imports
import { helper } from './utils'
import type { Config } from './types'
```

### Naming Conventions
- **Files**: kebab-case for components (`user-profile.tsx`), camelCase for utils (`formatDate.ts`)
- **Components**: PascalCase (`UserProfile`)
- **Functions/variables**: camelCase (`getUserData`, `isLoading`)
- **Constants**: SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)
- **Types/Interfaces**: PascalCase (`User`, `ApiResponse`)
- **Boolean variables**: Prefix with `is`, `has`, `should` (`isLoading`, `hasError`)

### Error Handling
- Throw errors early - fail fast
- Use descriptive error messages explaining what went wrong and why
- Prefer custom error classes for different error types
- Never silently catch and ignore errors
- Log errors with context before re-throwing
- Use Result types or error boundaries for expected failures

### Comments
- Comments explain WHY, not WHAT
- Delete outdated comments immediately
- Prefer self-documenting code over comments
- Use TSDoc for public API documentation

### Formatting
- Max line length: 100 characters (when formatter is configured)
- Use trailing commas in multi-line objects/arrays
- Single quotes for strings (unless configured otherwise)
- No semicolons (if using Biome/Prettier standard config)
- 2 spaces for indentation

## Commit Discipline

**CRITICAL**: Never mix structural and behavioral changes in the same commit.

### Change Types
1. **Structural Changes** (Refactoring - no behavior change):
   - `refactor: extract user validation into separate module`
   - Renaming, extracting methods, moving code, removing duplication

2. **Behavioral Changes** (New functionality or bug fixes):
   - `feat: add email validation to user registration`
   - `fix: prevent null pointer in payment processing`

### Commit Requirements
Only commit when ALL of these are true:
1. All tests are passing (except known long-running tests)
2. All linter warnings resolved
3. All type checker errors fixed (if applicable)
4. The change represents one logical unit of work
5. You've self-reviewed the diff

**Tidy First**: Make structural changes (refactoring) BEFORE behavioral changes. Commit them separately.

Small, frequent commits are better than large, infrequent ones.

## Frontend Design Principles

When building UI components, follow these principles from `.opencode/skill/frontend-design/SKILL.md`:

### Design Thinking
- **Purpose**: What problem does this interface solve? Who uses it?
- **Bold aesthetic direction**: Pick an extreme and commit (brutally minimal, maximalist, retro-futuristic, organic, luxury, playful, editorial, brutalist, etc.)
- **Differentiation**: What makes this UNFORGETTABLE?

### Aesthetic Guidelines
- **Typography**: Choose distinctive fonts that elevate aesthetics. Avoid generic choices like Inter, Roboto, Arial. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to cohesive aesthetics using CSS variables. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for high-impact moments. Stagger reveals with animation-delay. Focus on page load orchestration over scattered micro-interactions.
- **Spatial Composition**: Unexpected layouts, asymmetry, overlap, diagonal flow, grid-breaking elements, generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth. Use gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows.

**AVOID**: Generic AI aesthetics (purple gradients on white, predictable layouts, cookie-cutter components, overused fonts).

**Match complexity to vision**: Maximalist designs need elaborate code. Minimalist designs need restraint and precision.

## Root Cause Analysis Protocol

When facing any error, bug, or unexpected behavior:
1. **Reproduce** the error consistently - understand exact conditions
2. **Trace** the full execution path and stack trace
3. **Identify** the TRUE root cause - not symptoms or side effects
4. **Verify** understanding by explaining why the error occurs
5. **Only then** implement a fix that addresses the root cause

Never attempt fixes before completing this analysis. Guessing wastes time and introduces new bugs.

## Refactoring Triggers

Refactor immediately when you see:
- **Duplication** - Rule of Three: refactor on third copy
- **Long functions** - >20 lines is suspicious
- **Too many parameters** - >3 is a code smell
- **Comments explaining what code does** - code should be self-documenting
- **Nested conditionals** - extract to methods

## Writing Style

When writing documentation, blog posts, or any prose, follow the guidelines in `~/.claude/WRITING_STYLE.md`:
- Conversational and approachable
- British English spelling (realise, colour, organisation)
- Specific numbers and metrics over vague descriptions
- Mix of sentence lengths for rhythm
- Use "So," "Well," "But having said that" as natural connectors
- Be authentic about challenges and learning
- Forward-looking or invitational closings

## Resources

- **Global Claude Rules**: `~/.claude/CLAUDE.md` (TDD methodology, testing standards, code quality)
- **Writing Style Guide**: `~/.claude/WRITING_STYLE.md` (Matt Hamilton's writing style)
- **Frontend Design Skill**: `.opencode/skill/frontend-design/SKILL.md` (UI/UX principles)

---

**Last Updated**: 2026-01-16
**Update this file** as the project evolves with actual commands, frameworks, and conventions.
